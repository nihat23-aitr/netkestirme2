import { PriceOffer } from '@/types';
import { ExternalLink, Clock, ShieldCheck } from 'lucide-react';

interface PriceTableProps {
  offers: PriceOffer[];
}

export default function PriceTable({ offers }: PriceTableProps) {
  if (!offers || offers.length === 0) {
    return (
      <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-zinc-400 text-sm">
        Fiyat bilgisi bulunamadı.
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <h3 className="font-semibold text-zinc-200 text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          Satıcı Fiyat Karşılaştırması
        </h3>
        <span className="text-xs text-zinc-500 flex items-center gap-1">
          <Clock className="w-3 h-3" /> Doğrulanmış Veri
        </span>
      </div>

      <div className="divide-y divide-zinc-800">
        {offers.map((offer, index) => (
          <div key={index} className="p-4 flex items-center justify-between hover:bg-zinc-800/50 transition">
            <div>
              <p className="font-medium text-sm text-zinc-200">{offer.sellerName}</p>
              <p className="text-xs text-zinc-500">Son Güncelleme: {new Date(offer.lastUpdated).toLocaleDateString('tr-TR')}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-bold text-zinc-100 text-base">
                {offer.price.toLocaleString('tr-TR')} {offer.currency}
              </span>
              <a 
                href={offer.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 transition"
              >
                Mağazaya Git
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
