import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-beige-100 border-t border-beige-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif tracking-widest">FOOTPRINT</h3>
          <p className="text-beige-600 text-sm leading-relaxed">
            Crafting olfactory experiences that transcend time. Our scents are inspired by the subtle beauty of nature and the elegance of the human spirit.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-beige-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-beige-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-beige-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 font-medium">Quick Links</h4>
          <ul className="space-y-4 text-sm text-beige-600">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/catalog" className="hover:text-gold transition-colors">Catalog</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 font-medium">Customer Care</h4>
          <ul className="space-y-4 text-sm text-beige-600">
            <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Fragrance Finder</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 font-medium">Newsletter</h4>
          <p className="text-sm text-beige-600 mb-6">Join our inner circle for exclusive updates and scent launches.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-b border-beige-300 py-2 text-sm focus:outline-none focus:border-gold flex-grow"
            />
            <button type="submit" className="ml-4 text-sm uppercase tracking-widest text-gold hover:text-beige-900 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-beige-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-beige-400">
        <p>© 2026 Footprint Perfumes. All rights reserved.</p>
        <p>Designed for Elegance</p>
      </div>
    </footer>
  );
};
