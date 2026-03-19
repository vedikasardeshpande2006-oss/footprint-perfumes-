import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryPreview } from '../components/CategoryPreview';
import { PerfumeCard } from '../components/PerfumeCard';
import { Testimonials } from '../components/Testimonials';
import { PERFUMES } from '../constants';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const featuredPerfumes = PERFUMES.filter(p => p.featured);

  return (
    <main>
      <Hero />
      
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Curated Selection</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Our Most <span className="italic">Exquisite</span> Creations
            </h2>
          </div>
          <button className="mt-8 md:mt-0 text-xs uppercase tracking-[0.2em] border-b border-beige-300 pb-2 hover:border-gold transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredPerfumes.map(perfume => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </section>

      <CategoryPreview />

      <Testimonials />

      <section className="py-32 bg-beige-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm luxury-shadow">
              <img
                src="https://images.unsplash.com/photo-1615396172169-c96c5af33005?auto=format&fit=crop&q=80&w=800"
                alt="Process"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-beige-200 -z-10 rounded-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">The Craft</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Sustainably Sourced, <br />
              <span className="italic">Artistically Blended</span>
            </h2>
            <p className="text-beige-600 leading-relaxed">
              Every bottle of Footprint is a testament to our commitment to excellence. We work with small-scale farmers across the globe to source the rarest botanicals, ensuring each note is as pure as nature intended. Our master perfumers then spend months, sometimes years, perfecting the balance of each scent.
            </p>
            <button className="px-10 py-4 border border-beige-900 text-xs uppercase tracking-[0.2em] hover:bg-beige-900 hover:text-white transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
