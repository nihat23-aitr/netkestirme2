import { GUIDES_DATA } from '@/data/guides';
import Link from 'next/link';

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Teknik Rehberler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GUIDES_DATA.map((guide) => (
          <Link 
            key={guide.id} 
            href={`/rehberler/${guide.slug}`}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-zinc-700 transition"
          >
            <h3 className="font-semibold text-white">{guide.title}</h3>
            <p className="text-xs text-zinc-400 mt-2">{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
