import { BRANDS_DATA } from '@/data/brands';

export default function BrandsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Marka Dizini ({BRANDS_DATA.length})</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {BRANDS_DATA.map((brand) => (
          <div key={brand.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-center">
            <h3 className="font-semibold text-white text-sm">{brand.name}</h3>
            <p className="text-[10px] text-zinc-500 mt-1">{brand.category.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
