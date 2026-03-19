import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PERFUMES } from '../constants';
import { PerfumeCard } from '../components/PerfumeCard';
import { FragranceType } from '../types';
import { Filter, X } from 'lucide-react';

export const Catalog: React.FC = () => {
  const [activeType, setActiveType] = useState<FragranceType | 'All'>('All');
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest'>('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const types: (FragranceType | 'All')[] = ['All', 'Floral', 'Woody', 'Citrus', 'Oriental', 'Fresh'];

  const filteredPerfumes = useMemo(() => {
    let result = [...PERFUMES];
    
    if (activeType !== 'All') {
      result = result.filter(p => p.type === activeType);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeType, sortBy]);

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="text-center mb-20">
        <h1 className="text-5xl font-serif mb-6">The Collection</h1>
        <p className="text-beige-600 max-w-2xl mx-auto">
          Explore our range of artisanal fragrances, each designed to evoke a unique memory and create a lasting impression.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-y border-beige-200 py-6">
        <div className="flex items-center space-x-8 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto no-scrollbar">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-colors hover:text-gold ${
                activeType === type ? 'text-gold font-semibold' : 'text-beige-500'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6 mt-6 md:mt-0">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent text-[10px] uppercase tracking-[0.2em] text-beige-600 focus:outline-none cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-beige-600 hover:text-gold transition-colors"
          >
            <Filter size={14} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filteredPerfumes.map(perfume => (
          <PerfumeCard key={perfume.id} perfume={perfume} />
        ))}
      </div>

      {filteredPerfumes.length === 0 && (
        <div className="text-center py-20">
          <p className="text-beige-500 italic">No fragrances found in this category.</p>
        </div>
      )}
    </main>
  );
};
