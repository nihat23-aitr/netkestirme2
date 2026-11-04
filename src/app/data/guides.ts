import { Guide } from '@/types';

export const GUIDES_DATA: Guide[] = [
  {
    id: 'g-001',
    title: 'Kulaklıktan Ses Gelmiyor, Nasıl Düzeltilir?',
    slug: 'kulakliktan-ses-gelmiyor-cozumu',
    description: 'Windows ve macOS cihazlarda kulaklığın algılanmasına rağmen ses iletmeme sorununu çözen adım adım rehber.',
    category: 'Ses & Ekipman',
    difficulty: 'Kolay',
    estimatedTimeMinutes: 5,
    possibleCauses: [
      'Yanlış ses çıkış aygıtının seçili olması',
      'Sürücü bozulması veya güncel olmaması',
      'Fiziksel jak veya USB konnektör temassızlığı'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Varsayılan Çıkış Cihazını Kontrol Edin',
        description: 'Windows görev çubuğundaki hoparlör simgesine tıklayın. Açılan listeden kulaklığınızın seçili olduğundan emin olun.'
      },
      {
        stepNumber: 2,
        title: 'Windows Ses Sorun Gidericisini Çalıştırın',
        description: 'Ayarlar > Sistem > Ses > Sorunları Gider adımlarını izleyerek otomatik taramayı başlatın.'
      }
    ],
    hasVideo: false,
    youtubeEmbedUrl: null,
    relatedProductIds: ['p-razer-blackshark-v2'],
    relatedGuideIds: ['g-002']
  },
  {
    id: 'g-002',
    title: 'Bluetooth Kulaklık Bilgisayara Bağlanmıyor',
    slug: 'bluetooth-kulaklik-bilgisayara-baglanmiyor',
    description: 'Bluetooth kulaklıkların Windows 10/11 üzerinde eşleşmeme ve kopma sorunlarının kesin çözümü.',
    category: 'Kablosuz Bağlantı',
    difficulty: 'Orta',
    estimatedTimeMinutes: 8,
    possibleCauses: [
      'Bluetooth servisinin durdurulmuş olması',
      'Cihazın halihazırda telefona bağlı kalması'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Eşleşme Modunu Aktifleştirin',
        description: 'Kulaklığınızın güç butonuna 5 saniye basılı tutarak LED göstergenin hızlıca yanıp sönmesini sağlayın.'
      }
    ],
    hasVideo: false,
    youtubeEmbedUrl: null,
    relatedProductIds: ['p-logitech-g-pro-x'],
    relatedGuideIds: ['g-001']
  }
];
