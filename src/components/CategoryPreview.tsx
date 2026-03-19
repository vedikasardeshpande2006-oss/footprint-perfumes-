import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';

export const CategoryPreview: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-serif mb-4">Fragrance Families</h2>
        <div className="w-12 h-[1px] bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-beige-900/20 group-hover:bg-beige-900/40 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-2xl font-serif mb-2">{cat.name}</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
