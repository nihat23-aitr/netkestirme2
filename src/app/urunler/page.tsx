import { PRODUCTS_DATA } from '@/data/products';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Ürün Kataloğu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRODUCTS_DATA.map((product) => (
          <Link 
            key={product.id} 
            href={`/urunler/${product.slug}`}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-zinc-700 transition"
          >
            <h3 className="font-semibold text-white">{product.name}</h3>
            <p className="text-xs text-blue-400 mt-1">{product.brandName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
