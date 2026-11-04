import { Product } from '@/types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'p-razer-blackshark-v2',
    name: 'Razer BlackShark V2 X Oyuncu Kulaklığı',
    slug: 'razer-blackshark-v2-x-oyuncu-kulakligi',
    brandId: '31',
    brandName: 'Razer',
    category: 'Ses & Ekipman',
    subCategory: 'Kulaklık',
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    imageVerified: true,
    specs: {
      'Sürücü': 'TriForce 50mm',
      'Bağlantı': '3.5mm Jak',
      'Ağırlık': '240g'
    },
    pros: ['Hafif ve konforlu tasarım', 'Yüksek ses yalıtımı'],
    cons: ['Kablolu kullanım zorunluluğu'],
    offers: [
      { sellerName: 'Hepsiburada', price: 1899, currency: 'TRY', url: 'https://hepsiburada.com', lastUpdated: '2026-11-04', isAvailable: true },
      { sellerName: 'Trendyol', price: 1849, currency: 'TRY', url: 'https://trendyol.com', lastUpdated: '2026-11-04', isAvailable: true }
    ],
    features: {
      wireless: false,
      bluetooth: false,
      rgb: false
    }
  },
  {
    id: 'p-logitech-g-pro-x',
    name: 'Logitech G PRO X Kablosuz Kulaklık',
    slug: 'logitech-g-pro-x-kablosuz-oyuncu-kulakligi',
    brandId: '26',
    brandName: 'Logitech G',
    category: 'Ses & Ekipman',
    subCategory: 'Kulaklık',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    imageVerified: true,
    specs: {
      'Bağlantı': 'LIGHTSPEED 2.4 GHz',
      'Pil Ömrü': '20+ Saat'
    },
    pros: ['Kullanışlı kablosuz özgürlük', 'Geniş ses sahnesi'],
    cons: ['Yüksek fiyat seviyesi'],
    offers: [
      { sellerName: 'Amazon TR', price: 5499, currency: 'TRY', url: 'https://amazon.com.tr', lastUpdated: '2026-11-04', isAvailable: true }
    ],
    features: {
      wireless: true,
      bluetooth: false,
      rgb: false
    }
  }
];
