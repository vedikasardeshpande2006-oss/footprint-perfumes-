import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PERFUMES } from '../constants';
import { ShoppingBag, ChevronLeft, Star } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const perfume = PERFUMES.find(p => p.id === id);

  if (!perfume) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-serif">Fragrance not found</h2>
        <Link to="/catalog" className="text-gold uppercase tracking-widest text-sm border-b border-gold pb-1">
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <Link to="/catalog" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-beige-500 hover:text-gold transition-colors mb-12">
        <ChevronLeft size={14} className="mr-2" />
        Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-[4/5] overflow-hidden rounded-sm luxury-shadow"
        >
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{perfume.brand}</p>
            <h1 className="text-5xl md:text-6xl font-serif text-beige-900">{perfume.name}</h1>
            <div className="flex items-center space-x-4">
              <p className="text-2xl text-beige-900 font-light">${perfume.price}</p>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          </div>

          <p className="text-beige-600 leading-relaxed text-lg">
            {perfume.description}
          </p>

          <div className="grid grid-cols-3 gap-8 py-8 border-y border-beige-200">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-beige-400 mb-3">Top Notes</h4>
              <ul className="text-sm space-y-1">
                {perfume.notes.top.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-beige-400 mb-3">Heart Notes</h4>
              <ul className="text-sm space-y-1">
                {perfume.notes.middle.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-beige-400 mb-3">Base Notes</h4>
              <ul className="text-sm space-y-1">
                {perfume.notes.base.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-grow bg-beige-900 text-white py-5 px-8 text-xs uppercase tracking-[0.3em] hover:bg-gold transition-colors flex items-center justify-center luxury-shadow">
              <ShoppingBag size={18} className="mr-3" />
              Add to Bag
            </button>
            <button className="w-16 h-16 border border-beige-300 flex items-center justify-center hover:border-gold transition-colors">
              <Star size={20} className="text-beige-400 hover:text-gold" />
            </button>
          </div>
          
          <div className="pt-6 space-y-2 text-[10px] uppercase tracking-[0.1em] text-beige-400">
            <p>Free shipping on orders over $150</p>
            <p>Complimentary samples with every purchase</p>
          </div>
        </div>
      </div>
    </main>
  );
};
