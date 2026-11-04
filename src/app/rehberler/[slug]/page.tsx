import { notFound } from 'next/navigation';
import { GUIDES_DATA } from '@/data/guides';

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = GUIDES_DATA.find(g => g.slug === params.slug);
  if (!guide) notFound();

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-3xl font-bold text-white">{guide.title}</h1>
      <p className="text-zinc-400">{guide.description}</p>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Adım Adım Çözüm</h3>
        {guide.steps.map((step) => (
          <div key={step.stepNumber} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <h4 className="font-semibold text-blue-400 text-sm">Adım {step.stepNumber}: {step.title}</h4>
            <p className="text-xs text-zinc-300 mt-1">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
