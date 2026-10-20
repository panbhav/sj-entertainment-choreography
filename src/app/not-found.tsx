import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return <section className="site-container py-24 text-center"><p className="eyebrow justify-center">404 / A SMALL DETOUR</p><h1 className="font-serif text-4xl sm:text-6xl text-[#4A1525] mt-6 mb-5">Let’s find your rhythm again.</h1><p className="text-sm text-[#766b64] max-w-md mx-auto leading-relaxed">This page may have moved, or this celebration hasn’t been published yet. There’s plenty more to explore.</p><div className="flex flex-wrap justify-center items-center gap-6 mt-8"><Link className="button-wine" href="/">Back to home <ArrowUpRight size={16} /></Link><Link className="text-link" href="/our-work">Explore our work <ArrowUpRight size={16} /></Link></div></section>;
}
