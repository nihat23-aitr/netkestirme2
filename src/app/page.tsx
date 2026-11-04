import Link from 'next/link';
import { BookOpen, Package, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { GUIDES_DATA } from '@/data/guides';
import { PRODUCTS_DATA } from '@/data/products';

export default function HomePage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-4">
        <h1 className="text-3xl font-bold text-white">NetKestirme Platformu</h1>
        <p className="text-zinc-400 text-sm">
          Teknik sorunlara kesin çözümler ve güncel ürün karşılaştırma kataloğu.
        </p>
        <div className="flex gap-3 pt-2">
          <Link href="/rehberler" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm transition flex items-center gap-2">
            Rehberlere Git <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/urunler" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-xl text-sm transition">
            Ürün Kataloğu
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <div>
            <p className="text-xl font-bold text-white">{GUIDES_DATA.length}+</p>
            <p className="text-xs text-zinc-400">Teknik Rehber</p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
          <Package className="w-6 h-6 text-emerald-500" />
          <div>
            <p className="text-xl font-bold text-white">{PRODUCTS_DATA.length}+</p>
            <p className="text-xs text-zinc-400">Ürün & Model</p>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
          <ShieldCheck className="w-6 h-6 text-purple-500" />
          <div>
            <p className="text-xl font-bold text-white">{BRANDS_DATA.length}+</p>
            <p className="text-xs text-zinc-400">Marka</p>
          </div>
        </div>
      </div>
    </div>
  );
}
