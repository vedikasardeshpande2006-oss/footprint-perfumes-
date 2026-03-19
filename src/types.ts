export type FragranceType = 'Floral' | 'Woody' | 'Citrus' | 'Oriental' | 'Fresh';

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  type: FragranceType;
  description: string;
  shortDescription: string;
  image: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  featured?: boolean;
}
