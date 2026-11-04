export interface Brand {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  category: string[];
  description: string;
  verified: boolean;
}

export interface PriceOffer {
  sellerName: string;
  price: number;
  currency: 'TRY' | 'USD' | 'EUR';
  url: string;
  lastUpdated: string;
  isAvailable: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brandId: string;
  brandName: string;
  category: string;
  subCategory: string;
  imageUrl: string;
  imageVerified: boolean;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  offers: PriceOffer[];
  features: {
    wireless?: boolean;
    bluetooth?: boolean;
    rgb?: boolean;
    usageTarget?: string;
  };
}

export interface StepInstruction {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  estimatedTimeMinutes: number;
  possibleCauses: string[];
  steps: StepInstruction[];
  hasVideo: boolean;
  youtubeEmbedUrl?: string | null;
  relatedProductIds: string[];
  relatedGuideIds: string[];
}
