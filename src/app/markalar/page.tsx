'use client';

import { useState, useMemo } from 'react';
import { BRANDS_DATA } from '@/data/brands';
import { ShieldCheck, Search, ArrowUpDown } from 'lucide-react';

export default function BrandsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredBrands = useMemo(() => {
    let result = BRANDS_DATA.filter(brand => 
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return result;
  }, [searchTerm, sortOrder]);

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Marka Dizin Kataloğu ({BRANDS_DATA.length}+ Marka)</h1>
          <p className="text-xs text-zinc-400 mt-1">Donanım, yazılım, beyaz eşya ve çevre birimleri üreticileri.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Marka ara..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs text-zinc-200 outline-none focus:border-blue-500"
            />
          </div>

          <button 
            onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 px-3 py-2 rounded-lg text-xs flex items-center gap-1.5 transition"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            {sortOrder === 'asc' ? 'A-Z Sırala' : 'Z-A Sırala'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBrands.map((brand) => (
          <div key={brand.id} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-zinc-100 text-sm">{brand.name}</h3>
                {brand.verified && (
                  <span className="flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-medium">
                    <ShieldCheck className="w-3 h-3" /> Doğrulanmış
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2">{brand.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
              {brand.category.map((cat, i) => (
                <span key={i} className="text-[10px] bg-zinc-950 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
