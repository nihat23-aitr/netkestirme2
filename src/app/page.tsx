import Link from 'next/link';
import { BookOpen, Package, ShieldCheck, ArrowRight, Wrench, CheckCircle2, Search } from 'lucide-react';
import { BRANDS_DATA } from '@/data/brands';
import { GUIDES_DATA } from '@/data/guides';
import { PRODUCTS_DATA } from '@/data/products';

export default function HomePage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-950/60 via-zinc-900 to-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Wrench className="w-3.5 h-3.5" />
            NetKestirme Profesyonel Ürün ve Rehber Platformu
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Donanım Sorunlarına Kesin Çözümler, Güncel Fiyat Karşılaştırmaları
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            150+ gerçek marka, 200+ adım adım onaylanmış teknik rehber ve güvenilir mağaza fiyatlarıyla donanım dünyasındaki rehberiniz.
          </p>
          <div className="flex flex-wrap gap-4 pt-3">
            <Link 
              href="/rehberler" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl text-sm flex items-center gap-2 transition shadow-lg shadow-blue-600/20"
            >
              Rehberleri İncele
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/urunler" 
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium px-6 py-3 rounded-xl text-sm transition border border-zinc-700"
            >
              Ürün Kataloğu
            </Link>
          </div>
        </div>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">{GUIDES_DATA.length}+</p>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">Onaylı Teknik Rehber</p>
          </div>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Package className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">{PRODUCTS_DATA.length}+</p>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">Doğrulanmış Ürün & Model</p>
          </div>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <p className="text-3xl font-extrabold text-white">{BRANDS_DATA.length}+</p>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">Global Marka Dizini</p>
          </div>
        </div>
      </div>

      {/* Popüler İçerikler ve Hızlı Erişim */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* Son Eklenen Rehberler */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Popüler Çözüm Rehberleri
            </h2>
            <Link href="/rehberler" className="text-xs text-blue-400 hover:underline">Tümünü Gör</Link>
          </div>
          <div className="space-y-3">
            {GUIDES_DATA.slice(0, 3).map((guide) => (
              <Link 
                key={guide.id}
                href={`/rehberler/${guide.slug}`}
                className="block bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-medium">
                    {guide.category}
                  </span>
                  <span className="text-xs text-zinc-500">Zorluk: {guide.difficulty}</span>
                </div>
                <h3 className="font-semibold text-zinc-200 text-sm">{guide.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Öne Çıkan Ürünler */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-emerald-500" />
              Fiyatı Güncellenen Ürünler
            </h2>
            <Link href="/urunler" className="text-xs text-emerald-400 hover:underline">Kataloğa Git</Link>
          </div>
          <div className="space-y-3">
            {PRODUCTS_DATA.slice(0, 3).map((product) => (
              <Link 
                key={product.id}
                href={`/urunler/${product.slug}`}
                className="flex items-center justify-between bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition"
              >
                <div>
                  <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-medium">
                    {product.brandName}
                  </span>
                  <h3 className="font-semibold text-zinc-200 text-sm mt-1">{product.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-400">
                    {product.offers[0]?.price.toLocaleString('tr-TR')} {product.offers[0]?.currency}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
