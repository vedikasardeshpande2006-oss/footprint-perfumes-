import { Perfume } from './types';

export const PERFUMES: Perfume[] = [
  {
    id: '1',
    name: 'Velvet Rose',
    brand: 'Footprint Perfumes',
    price: 185,
    type: 'Floral',
    shortDescription: 'A sophisticated blend of Damask rose and dark oud.',
    description: 'Velvet Rose is an opulent fragrance that captures the essence of a midnight garden. The deep, honeyed notes of Damask rose are wrapped in the smoky warmth of agarwood (oud), creating a scent that is both romantic and mysterious.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Clove', 'Bergamot'],
      middle: ['Damask Rose', 'Saffron'],
      base: ['Oud', 'Praline', 'Sandalwood']
    },
    featured: true
  },
  {
    id: '2',
    name: 'Santal Drift',
    brand: 'Footprint Perfumes',
    price: 160,
    type: 'Woody',
    shortDescription: 'Creamy sandalwood with a hint of cardamom.',
    description: 'Santal Drift evokes the feeling of a sun-drenched forest. It opens with spicy cardamom before settling into a creamy, milky heart of Australian sandalwood. A touch of leather and iris adds a sophisticated, powdery finish.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Cardamom', 'Violet'],
      middle: ['Iris', 'Papyrus'],
      base: ['Sandalwood', 'Cedarwood', 'Leather']
    },
    featured: true
  },
  {
    id: '3',
    name: 'Citrus Bloom',
    brand: 'Footprint Perfumes',
    price: 145,
    type: 'Citrus',
    shortDescription: 'Zesty bergamot and neroli for a refreshing aura.',
    description: 'Citrus Bloom is sunshine in a bottle. A vibrant explosion of Italian bergamot and bitter orange leads to a delicate heart of orange blossom and neroli. It is clean, uplifting, and timelessly elegant.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Bergamot', 'Bitter Orange'],
      middle: ['Neroli', 'Orange Blossom'],
      base: ['White Musk', 'Amber']
    },
    featured: true
  },
  {
    id: '4',
    name: 'Amber Night',
    brand: 'Footprint Perfumes',
    price: 210,
    type: 'Oriental',
    shortDescription: 'Warm amber and vanilla with a spicy kick.',
    description: 'Amber Night is a seductive, nocturnal fragrance. The warmth of golden amber is balanced by the sweetness of Madagascar vanilla and the unexpected spice of pink pepper. It is a bold statement of luxury.',
    image: 'https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Pink Pepper', 'Bergamot'],
      middle: ['Turkish Rose', 'Cinnamon'],
      base: ['Amber', 'Vanilla', 'Patchouli']
    }
  },
  {
    id: '5',
    name: 'Morning Dew',
    brand: 'Footprint Perfumes',
    price: 130,
    type: 'Fresh',
    shortDescription: 'Crisp green notes and white tea.',
    description: 'Morning Dew captures the fleeting moment of dawn. Freshly cut grass and sparkling white tea create a crisp, airy opening, while a base of soft musk ensures a gentle, lingering presence.',
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Green Leaves', 'White Tea'],
      middle: ['Jasmine', 'Lily of the Valley'],
      base: ['White Musk', 'Cedar']
    }
  },
  {
    id: '6',
    name: 'Golden Oud',
    brand: 'Footprint Perfumes',
    price: 240,
    type: 'Woody',
    shortDescription: 'Rare oud wood infused with liquid gold.',
    description: 'Golden Oud is the pinnacle of our collection. Using the finest ethically sourced oud from Laos, this fragrance is deep, complex, and intensely woody, brightened by a touch of saffron and honey.',
    image: 'https://images.unsplash.com/photo-1585120040315-2241b774ad0f?auto=format&fit=crop&q=80&w=800',
    notes: {
      top: ['Saffron', 'Honey'],
      middle: ['Oud Wood', 'Patchouli'],
      base: ['Leather', 'Vanilla', 'Guaiac Wood']
    }
  }
];

export const CATEGORIES = [
  { name: 'Floral', description: 'Romantic & Timeless', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800' },
  { name: 'Woody', description: 'Earthy & Grounded', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800' },
  { name: 'Citrus', description: 'Fresh & Energizing', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800' },
  { name: 'Oriental', description: 'Warm & Exotic', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800' },
];
