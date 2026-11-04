import { notFound } from 'next/navigation';
import { PRODUCTS_DATA } from '@/data/products';
import PriceTable from '@/components/ui/PriceTable';
import { ShieldCheck, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = PRODUCTS_DATA.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <Link href="/urunler" className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition">
        <ArrowLeft className="w-3.5 h-3.5" /> Ürün Kataloğuna Dön
      </Link>

      {/* Üst Kart */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden aspect-video flex items-center justify-center p-4">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="max-h-full object-contain rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md font-medium">
              {product.brandName}
            </span>
            <h1 className="text-2xl font-bold text-white mt-2">{product.name}</h1>
          </div>

          <div className="text-2xl font-extrabold text-blue-400">
            {product.offers[0]?.price.toLocaleString('tr-TR')} {product.offers[0]?.currency || 'TRY'}
          </div>

          <p className="text-xs text-zinc-400">
            Bu ürünün fiyatı güvenilir mağazalardan anlık olarak taranmıştır.
          </p>
        </div>
      </div>

      {/* Fiyat Karşılaştırma Tablosu */}
      <PriceTable offers={product.offers} />

      {/* Teknik Özellikler ve Artılar/Eksiler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Teknik Özellikler */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <h3 className="font-semibold text-zinc-200 text-sm mb-4 border-b border-zinc-800 pb-2">
            Teknik Özellik Tablosu
          </h3>
          <div className="space-y-2 text-xs">
            {Object.entries(product.specs).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between py-1.5 border-b border-zinc-800/50">
                <span className="text-zinc-400">{key}</span>
                <span className="font-medium text-zinc-200">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Artılar ve Eksiler */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-semibold text-emerald-400 text-xs mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Artıları
            </h4>
            <ul className="space-y-1 text-xs text-zinc-300">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-center gap-2">• {pro}</li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-zinc-800">
            <h4 className="font-semibold text-rose-400 text-xs mb-2 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" /> Eksileri
            </h4>
            <ul className="space-y-1 text-xs text-zinc-300">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-center gap-2">• {con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
