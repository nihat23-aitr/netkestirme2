'use client';

import { useState, useMemo } from 'react';
import { GUIDES_DATA } from '@/data/guides';
import Link from 'next/link';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => Array.from(new Set(GUIDES_DATA.map(g => g.category))), []);

  const filteredGuides = useMemo(() => {
    return GUIDES_DATA.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            guide.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory ? guide.category === selectedCategory : true;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-6 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Teknik Çözüm Rehberleri ({GUIDES_DATA.length}+)</h1>
          <p className="text-xs text-zinc-400 mt-1">Donanım, yazılım, ağ ve ev cihazları için adım adım çözümler.</p>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-300 outline-none"
          >
            <option value="">Tüm Kategoriler</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Rehber ara..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-4 py-2 text-xs text-zinc-200 outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGuides.map((guide) => (
          <Link 
            key={guide.id}
            href={`/rehberler/${guide.slug}`}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-medium">
                  {guide.category}
                </span>
                <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {guide.estimatedTimeMinutes} dk
                </span>
              </div>
              <h3 className="font-semibold text-zinc-100 text-sm">{guide.title}</h3>
              <p className="text-xs text-zinc-400 line-clamp-2">{guide.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-800 text-xs text-zinc-400">
              <span>Zorluk: {guide.difficulty}</span>
              <span className="text-blue-400 flex items-center gap-1 font-medium">İncele <ArrowRight className="w-3 h-3" /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
