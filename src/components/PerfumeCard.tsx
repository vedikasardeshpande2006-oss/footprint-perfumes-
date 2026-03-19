import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Perfume } from '../types';

interface PerfumeCardProps {
  perfume: Perfume;
}

export const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${perfume.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-beige-200 rounded-sm mb-6">
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-beige-900/0 group-hover:bg-beige-900/10 transition-colors duration-500" />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <button className="w-full bg-white/90 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-beige-900 hover:text-white transition-colors">
              Quick View
            </button>
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-beige-500">{perfume.type}</p>
          <h3 className="text-xl font-serif text-beige-900">{perfume.name}</h3>
          <p className="text-gold font-medium">${perfume.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};
