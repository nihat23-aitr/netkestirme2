import { notFound } from 'next/navigation';
import { PRODUCTS_DATA } from '@/data/products';
import PriceTable from '@/components/ui/PriceTable';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS_DATA.find(p => p.slug === params.slug);
  if (!product) notFound();

  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-white">{product.name}</h1>
      <p className="text-xs text-zinc-400">{product.brandName} - {product.category}</p>
      <PriceTable offers={product.offers} />
    </div>
  );
}
