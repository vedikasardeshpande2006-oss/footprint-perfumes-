import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Our Philosophy</p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              A Legacy of <br />
              <span className="italic">Scented Poetry</span>
            </h1>
            <p className="text-beige-600 leading-relaxed text-lg">
              Founded in 2018, Footprint Perfumes began as a small atelier in the heart of the countryside. Our mission was simple: to create fragrances that don't just smell beautiful, but tell a story. We believe that a perfume is the most intimate form of memory, a silent language that speaks of who we are and where we've been.
            </p>
            <p className="text-beige-600 leading-relaxed">
              Every essence we use is ethically sourced and meticulously tested. We reject the fast-fashion approach to perfumery, choosing instead to honor the slow, deliberate process of traditional maceration and blending.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1605613304394-8412e39554ee?auto=format&fit=crop&q=80&w=800"
              alt="Atelier"
              className="w-full aspect-[4/5] object-cover rounded-sm luxury-shadow"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold -z-10" />
          </motion.div>
        </div>
      </section>

      <section className="bg-beige-900 text-beige-50 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif">"Perfume is the indispensable complement to the personality of women, the finishing touch on a dress."</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-60">Christian Dior</p>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif mb-4">Our Values</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-serif">Purity</h3>
            <p className="text-sm text-beige-600 leading-relaxed">We use only the highest grade of natural essences, avoiding synthetic fillers whenever possible.</p>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-serif">Artistry</h3>
            <p className="text-sm text-beige-600 leading-relaxed">Each fragrance is a unique composition, crafted by master perfumers with decades of experience.</p>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-serif">Ethics</h3>
            <p className="text-sm text-beige-600 leading-relaxed">From field to bottle, we ensure fair wages and sustainable harvesting practices for all our ingredients.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
