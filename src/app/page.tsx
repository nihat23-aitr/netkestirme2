import Link from 'next/link';
import { BookOpen, Package, ShieldCheck, ArrowRight, Search, Wrench } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { GUIDES_DATA } from '@/data/guides';
import { PRODUCTS_DATA } from '@/data/products';

export default function HomePage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Hero Alanı */}
      <div className="relative bg-gradient-to-r from-blue-900/40 via-zinc-900 to-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <Wrench className="w-3.5 h-3.5" />
            Profesyonel Teknik Çözüm ve Ürün Kataloğu
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Teknik Sorunlara Kesin Çözüm, Doğru Ürün Karşılaştırması
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            150+ gerçek marka, 200+ adım adım onaylanmış rehber ve güncel mağaza fiyatlarıyla donanım dünyasındaki rehberiniz.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link 
              href="/rehberler" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition"
            >
              Rehberlere Göz At
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/urunler" 
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium px-5 py-2.5 rounded-xl text-sm transition border border-zinc-700"
            >
              Ürün Kataloğu
            </Link>
          </div>
        </div>
      </div>

      {/* İstatistikler / Özet Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{GUIDES_DATA.length}+</p>
            <p className="text-xs text-zinc-400">Onaylı Teknik Rehber</p>
          </div>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{PRODUCTS_DATA.length}+</p>
            <p className="text-xs text-zinc-400">Doğrulanmış Ürün & Model</p>
          </div>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{BRANDS_DATA.length}+</p>
            <p className="text-xs text-zinc-400">Global Marka</p>
          </div>
        </div>
      </div>

      {/* Popüler Rehberler Bölümü */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Popüler Sorun Giderme Rehberleri</h2>
          <Link href="/rehberler" className="text-xs text-blue-400 hover:underline">Tümünü Gör</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {GUIDES_DATA.slice(0, 3).map((guide) => (
            <Link 
              key={guide.id} 
              href={`/rehberler/${guide.slug}`}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-medium">
                  {guide.category}
                </span>
                <h3 className="font-semibold text-zinc-100 text-sm mt-3 mb-2">{guide.title}</h3>
                <p className="text-xs text-zinc-400 line-clamp-2">{guide.description}</p>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 mt-4 border-t border-zinc-800">
                <span>Zorluk: {guide.difficulty}</span>
                <span>{guide.estimatedTimeMinutes} dk</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
