/**
 * Helper to ensure assets (images, videos, documents) properly prepend
 * the Next.js basePath (e.g. /sj-entertainment-choreography for GitHub Pages).
 */
export function withBasePath(path?: string | null): string {
  if (!path) return '';
  if (/^https?:\/\//i.test(path) || path.startsWith('//') || path.startsWith('data:')) {
    return path;
  }
  
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (basePath && (cleanPath === basePath || cleanPath.startsWith(`${basePath}/`))) {
    return cleanPath;
  }
  
  return `${basePath}${cleanPath}`;
}
