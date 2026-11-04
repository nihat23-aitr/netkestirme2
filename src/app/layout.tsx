import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { BookOpen, Package, ShieldCheck, Home } from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NetKestirme | Ürün Kataloğu ve Sorun Giderme Platformu',
  description: 'Teknik sorunlar için çözümler ve güncel fiyat karşılaştırmaları.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased min-h-screen flex`}>
        <aside className="w-64 border-r border-zinc-800 bg-zinc-900/50 h-screen sticky top-0 flex flex-col justify-between p-4 z-40 hidden md:flex">
          <div>
            <div className="flex items-center gap-2 px-2 py-3 mb-6 border-b border-zinc-800">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                NK
              </div>
              <span className="font-bold text-lg tracking-wider text-zinc-100">NETKESTİRME</span>
            </div>

            <nav className="space-y-1">
              <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition">
                <Home className="w-4 h-4 text-zinc-400" /> Ana Sayfa
              </Link>
              <Link href="/rehberler" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition">
                <BookOpen className="w-4 h-4 text-zinc-400" /> Rehberler
              </Link>
              <Link href="/urunler" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition">
                <Package className="w-4 h-4 text-zinc-400" /> Ürün Kataloğu
              </Link>
              <Link href="/markalar" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 transition">
                <ShieldCheck className="w-4 h-4 text-zinc-400" /> Markalar
              </Link>
            </nav>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
