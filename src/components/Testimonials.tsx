import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const FEEDBACKS = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Connoisseur',
    content: 'Footprint Perfumes has completely changed my perspective on luxury scents. Velvet Rose is a masterpiece that lingers beautifully throughout the day.',
    rating: 5
  },
  {
    id: 2,
    name: 'Julian Thorne',
    role: 'Fashion Editor',
    content: 'The minimal aesthetic and the depth of the fragrances are unparalleled. Santal Drift is my daily signature now.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sophia Loren',
    role: 'Loyal Customer',
    content: 'I love the transparency of their sourcing. You can truly smell the quality of the natural ingredients in every spray.',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Customer Voices</p>
          <h2 className="text-4xl font-serif">Client Feedback</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEEDBACKS.map((feedback, idx) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 luxury-shadow rounded-sm relative"
            >
              <Quote className="absolute top-6 right-6 text-beige-100" size={40} />
              <div className="flex text-gold mb-6">
                {[...Array(feedback.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-beige-600 italic leading-relaxed mb-8">
                "{feedback.content}"
              </p>
              <div>
                <h4 className="font-serif text-lg text-beige-900">{feedback.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-beige-400">{feedback.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
