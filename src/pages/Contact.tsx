import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Get in Touch</p>
        <h1 className="text-5xl font-serif">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-serif">Visit Our Atelier</h2>
            <p className="text-beige-600 leading-relaxed">
              Experience our fragrances in person at our flagship boutique. Our scent experts are available for private consultations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-beige-100 flex items-center justify-center text-gold flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider mb-1">Address</h4>
                <p className="text-beige-600 text-sm">123 Fragrance Lane, Grasse, France</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-beige-100 flex items-center justify-center text-gold flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider mb-1">Email</h4>
                <p className="text-beige-600 text-sm">concierge@auraprive.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-beige-100 flex items-center justify-center text-gold flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider mb-1">Phone</h4>
                <p className="text-beige-600 text-sm">+33 4 93 36 00 00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 luxury-shadow rounded-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-beige-400">First Name</label>
                <input type="text" className="w-full border-b border-beige-200 py-2 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-beige-400">Last Name</label>
                <input type="text" className="w-full border-b border-beige-200 py-2 focus:outline-none focus:border-gold transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-beige-400">Email Address</label>
              <input type="email" className="w-full border-b border-beige-200 py-2 focus:outline-none focus:border-gold transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-beige-400">Subject</label>
              <select className="w-full border-b border-beige-200 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Private Consultation</option>
                <option>Press & Media</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-beige-400">Message</label>
              <textarea rows={4} className="w-full border-b border-beige-200 py-2 focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-beige-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-gold transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};
