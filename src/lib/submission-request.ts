import 'server-only';
import { NextRequest, NextResponse } from 'next/server';

/** Shared request checks for paid notification endpoints. Host firewall limits are also required on multi-instance deployments. */
const buckets = new Map<string, { count: number; expires: number }>();
export async function submissionBody(req: NextRequest): Promise<Record<string, unknown> | NextResponse> {
  if (req.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') return NextResponse.json({ success: false, message: 'Please send JSON details.' }, { status: 415 });
  const expected = new URL(req.url);
  if (req.headers.get('host')) expected.host = req.headers.get('host')!;
  const origin = req.headers.get('origin');
  const publicOrigin = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : expected.origin;
  if (origin && origin !== publicOrigin) return NextResponse.json({ success: false, message: 'Please submit from this website.' }, { status: 403 });
  const now = Date.now();
  for (const [key, bucket] of buckets) if (bucket.expires < now) buckets.delete(key);
  // This is defence in depth only: ingress must overwrite the forwarded IP header.
  const ip = (req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown').slice(0, 100);
  const bucket = buckets.get(ip);
  if (bucket && bucket.count >= 20) return NextResponse.json({ success: false, message: 'Too many submissions. Please try again in a few minutes.' }, { status: 429, headers: { 'Retry-After': '600' } });
  if (buckets.size >= 2000 && !bucket) return NextResponse.json({ success: false, message: 'Please try again later.' }, { status: 429 });
  buckets.set(ip, { count: (bucket?.count || 0) + 1, expires: bucket?.expires || now + 600000 });
  try {
    const reader = req.body?.getReader();
    const decoder = new TextDecoder();
    let bytes = 0;
    let text = '';
    if (reader) while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      if (bytes > 65536) { await reader.cancel(); return NextResponse.json({ success: false, message: 'Please keep your submission under 64 KB.' }, { status: 413 }); }
      text += decoder.decode(chunk.value, { stream: true });
    }
    const body = JSON.parse(text + decoder.decode());
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid shape');
    return body;
  } catch {
    return NextResponse.json({ success: false, message: 'Please send valid details.' }, { status: 400 });
  }
}
