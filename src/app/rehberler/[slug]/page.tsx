import { notFound } from 'next/navigation';
import { GUIDES_DATA } from '@/data/guides';
import { Clock, AlertTriangle, CheckCircle, Video, ArrowLeft, Wrench } from 'lucide-react';
import Link from 'next/link';

interface GuideDetailPageProps {
  params: {
    slug: string;
  };
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  const guide = GUIDES_DATA.find(g => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <Link href="/rehberler" className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition">
        <ArrowLeft className="w-3.5 h-3.5" /> Tüm Rehberlere Dön
      </Link>

      {/* Başlık ve Özet Bilgiler */}
      <div className="space-y-4 border-b border-zinc-800 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-md font-medium">
            {guide.category}
          </span>
          <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md flex items-center gap-1">
            <Clock className="w-3 h-3 text-zinc-400" /> Tahmini Süre: {guide.estimatedTimeMinutes} Dakika
          </span>
          <span className="text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md">
            Zorluk: {guide.difficulty}
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{guide.title}</h1>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{guide.description}</p>
      </div>

      {/* Olası Nedenler */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-zinc-200 text-sm flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          Sorunun Olası Nedenleri
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-300">
          {guide.possibleCauses.map((cause, i) => (
            <li key={i} className="flex items-start gap-2 bg-zinc-950 p-3 rounded-lg border border-zinc-800/80">
              <span className="text-amber-500 font-bold">•</span>
              {cause}
            </li>
          ))}
        </ul>
      </div>

      {/* Adım Adım Çözüm */}
      <div className="space-y-6">
        <h3 className="font-bold text-lg text-white flex items-center gap-2">
          <Wrench className="w-5 h-5 text-blue-500" />
          Adım Adım Çözüm Rehberi
        </h3>
        
        <div className="space-y-4">
          {guide.steps.map((step) => (
            <div key={step.stepNumber} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  {step.stepNumber}
                </span>
                <h4 className="font-semibold text-zinc-100 text-sm">{step.title}</h4>
              </div>
              <p className="text-xs text-zinc-300 pl-10 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doğrultulmuş Video Alanı (Sahte video gösterilmez) */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-zinc-200 text-sm flex items-center gap-2">
          <Video className="w-4 h-4 text-blue-500" />
          Görsel & Video Anlatımı
        </h3>
        {guide.hasVideo && guide.youtubeEmbedUrl ? (
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-zinc-800">
            <iframe 
              src={guide.youtubeEmbedUrl} 
              title={guide.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="text-xs text-zinc-500 italic bg-zinc-950 p-4 rounded-lg border border-zinc-800">
            Bu rehber için doğrulanmış harici video kaynağı bulunmamaktadır. Yukarıdaki yazılı adımları takip ederek sorunu çözebilirsiniz.
          </p>
        )}
      </div>
    </div>
  );
}
