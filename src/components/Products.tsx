import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles, ShoppingCart, Info, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ProductsProps {
  onOrderProduct: (product: Product) => void;
}

export default function Products({ onOrderProduct }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Birthday Cakes',
    'Wedding Cakes',
    'Anniversary Cakes',
    'Cupcakes',
    'Brownies',
    'Cookies',
    'Pastries',
    'Desserts',
    'Bento Cakes',
    'Customized Cakes'
  ];

  // Signature cakes for highlighted showcase
  const signatureCakes = PRODUCTS.filter(p => p.isSignature);

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-cream-50 relative">
      {/* 1. Signature Cakes Highlighted Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24" id="signature-showcase">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Pure Culinary Art</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight">
              Our Signature Masterpieces
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-choco-600 max-w-md mt-4 md:mt-0">
            Handcrafted with luxury designs and complex flavor profiles. These are our highly celebrated chef flagships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureCakes.map((cake) => (
            <motion.div
              key={cake.id}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-200/50 flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-cream-100">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-600 text-white text-[10px] font-bold uppercase tracking-widest shadow">
                  <Sparkles className="w-3 h-3" />
                  <span>Signature</span>
                </div>
                {cake.rating && (
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-choco-900 text-[11px] font-bold shadow-sm">
                    <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                    <span>{cake.rating}</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-choco-500 font-semibold mb-1.5">
                    {cake.category}
                  </p>
                  <h3 className="font-display font-bold text-lg text-choco-900 leading-snug group-hover:text-gold-700 transition-colors mb-2">
                    {cake.name}
                  </h3>
                  <p className="text-xs text-choco-700 line-clamp-2 leading-relaxed mb-4">
                    {cake.description}
                  </p>
                </div>

                <div>
                  <div className="flex gap-1 mb-4 flex-wrap">
                    {cake.tags?.map(t => (
                      <span key={t} className="text-[9px] font-medium px-2 py-0.5 rounded bg-cream-100 text-choco-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-cream-100">
                    <div>
                      <span className="text-[10px] uppercase text-choco-500 tracking-wider">Starts From</span>
                      <p className="text-lg font-bold text-choco-900">${cake.price}</p>
                    </div>
                    <button
                      onClick={() => onOrderProduct(cake)}
                      className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-choco-900 text-white hover:bg-gold-600 transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Categorized Main Menu Section */}
      <div className="max-w-7xl mx-auto px-6" id="all-products">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100 text-gold-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Discover Our Creations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Browse Our Full Bakery Catalog
          </h2>
          <p className="text-sm text-choco-600">
            Select a category below to explore our freshly baked custom cakes, cupcakes, brownies, and pastries.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto gap-2 pb-6 mb-12 no-scrollbar -mx-6 px-6" id="categories-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider whitespace-nowrap transition-all uppercase cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gold-600 text-white shadow-md'
                  : 'bg-white text-choco-800 border border-cream-200/80 hover:border-gold-400 hover:bg-cream-100/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="products-display-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-200/50 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {product.isSignature && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-600 text-white text-[9px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5" />
                      Chef Pick
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-2.5 rounded-lg text-[10px] font-bold text-choco-800 uppercase">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-choco-900 group-hover:text-gold-700 transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-choco-600 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-cream-100">
                    <div>
                      <span className="text-[9px] uppercase text-choco-500 tracking-wider font-semibold">Starts At</span>
                      <p className="text-base font-bold text-choco-900">${product.price}</p>
                    </div>
                    <button
                      onClick={() => onOrderProduct(product)}
                      className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-cream-100 text-choco-950 group-hover:bg-gold-600 group-hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Customize & Order</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12" id="no-products-message">
            <p className="text-choco-600">No delicious items found in this category currently.</p>
          </div>
        )}
      </div>
    </section>
  );
}
