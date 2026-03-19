import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Perfume"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-50/20 via-beige-50/40 to-beige-50" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.4em] text-beige-600 mb-6"
        >
          The Art of Olfaction
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif text-beige-900 leading-tight mb-10"
        >
          Discover Your <br />
          <span className="italic">Signature Scent</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/catalog"
            className="inline-block px-12 py-5 bg-beige-900 text-white text-xs uppercase tracking-[0.3em] hover:bg-gold transition-colors luxury-shadow"
          >
            Explore Collection
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-beige-400 rotate-90 origin-left translate-x-1">Scroll</span>
        <div className="w-[1px] h-12 bg-beige-300" />
      </motion.div>
    </section>
  );
};
