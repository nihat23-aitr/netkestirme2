import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 text-zinc-100">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-4">
        <h1 className="text-3xl font-bold">NetKestirme Platformuna Hoş Geldiniz</h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Sistem başarıyla kuruldu. 150+ marka ve 200+ rehber veri mimarisi aktif durumda.
        </p>
        <div className="flex gap-4 pt-4">
          <Link 
            href="/rehberler" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Rehberlere Git
          </Link>
          <Link 
            href="/urunler" 
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Ürün Kataloğu
          </Link>
          <Link 
            href="/markalar" 
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Markalar
          </Link>
        </div>
      </div>
    </div>
  );
}
