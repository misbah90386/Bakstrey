import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTags = ['All', 'Wedding', 'Bento', 'Birthday', 'Cupcakes', 'Desserts'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" id="gallery-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pastelp-100 text-pastelp-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Our Sweet Masterpiece Gallery
          </h2>
          <p className="text-sm text-choco-600">
            A glance into our daily atelier. Every sprinkle, frosting line, and floral leaf is placed with microscopic precision.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-filters">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase cursor-pointer ${
                selectedCategory === tag
                  ? 'bg-choco-900 text-white shadow-sm'
                  : 'bg-cream-100 text-choco-800 hover:bg-cream-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative rounded-3xl overflow-hidden aspect-square cursor-pointer shadow-sm border border-cream-200/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-choco-950/80 via-choco-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" id={`gallery-item-hover-${item.id}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-gold-300 tracking-widest font-bold block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-display font-bold text-white text-base leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-choco-950/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveLightboxIndex(null)}
            id="gallery-lightbox"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left controller */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image panel */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl max-h-[80vh] bg-transparent rounded-2xl overflow-hidden relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border-2 border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-4">
                <span className="text-[10px] uppercase text-gold-400 tracking-widest font-black block mb-1">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h3 className="font-display font-extrabold text-white text-lg">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Right controller */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
