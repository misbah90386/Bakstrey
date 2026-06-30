import { motion } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { IMAGE_HERO } from '../data';

interface HeroProps {
  onOpenCustomizer: () => void;
  onViewCakes: () => void;
}

export default function Hero({ onOpenCustomizer, onViewCakes }: HeroProps) {
  const handleScrollToSection = (selector: string) => {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-cream-50">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-pastelp-100/40 filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gold-100/30 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Text */}
        <div className="lg:col-span-6 flex flex-col items-start z-10" id="hero-text-container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 border border-gold-200/50 text-gold-800 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Cake Atelier</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-choco-900 tracking-tight leading-[1.1] mb-6"
          >
            Every Celebration Deserves the{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-pastelp-500">
                Perfect Cake.
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-pastelp-300 rounded-full opacity-65" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-choco-700 font-sans leading-relaxed max-w-xl mb-10"
          >
            Freshly baked with love, crafted with premium ingredients, and customized for every special moment. Let us sweeten your beautiful memories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            id="hero-cta-buttons"
          >
            <button
              onClick={onOpenCustomizer}
              className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-xl hover:shadow-gold-500/20 hover:from-gold-500 hover:to-gold-600 transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              Order Now
            </button>
            <button
              onClick={onViewCakes}
              className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-white border border-cream-300 text-choco-800 hover:bg-cream-100 hover:border-gold-400 transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              View Our Cakes
            </button>
          </motion.div>

          {/* Quick specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-cream-200 pt-8 mt-12 w-full max-w-lg"
          >
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-choco-900">100%</span>
              <span className="text-xs text-choco-600 font-medium">Hygienic & Fresh</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-choco-900">50+</span>
              <span className="text-xs text-choco-600 font-medium">Artisanal Flavors</span>
            </div>
            <div>
              <span className="block font-display text-2xl sm:text-3xl font-bold text-choco-900">15k+</span>
              <span className="text-xs text-choco-600 font-medium">Happy Celebrations</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-6 relative flex justify-center items-center" id="hero-image-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80"
          >
            {/* Main Hero Image */}
            <img
              src={IMAGE_HERO}
              alt="Premium Custom Cakes by Bakstrey"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />

            {/* Glassmorphism accent label */}
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl flex items-center justify-between border border-white/30">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold-700 font-bold">Today's Special</p>
                <h3 className="font-display text-lg font-bold text-choco-900 leading-tight">Raspberry Gold Ganache</h3>
              </div>
              <span className="text-xs font-bold text-white px-3 py-1.5 rounded-full bg-choco-700">
                From $45
              </span>
            </div>
          </motion.div>

          {/* Floating decorative tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-4 -right-2 sm:right-6 glass-panel py-3 px-5 rounded-full border border-white/50 shadow-md flex items-center gap-2 z-20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-choco-800">Freshly Baked Today</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-6 -left-2 sm:left-6 bg-choco-900/90 py-3 px-5 rounded-2xl shadow-xl flex items-center gap-3 z-20"
          >
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-gold-300 font-bold">Signature Chef</p>
              <p className="text-xs font-medium text-white">Award-Winning Recipes</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow link */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer" onClick={() => handleScrollToSection('#about')}>
        <span className="text-[10px] uppercase tracking-[0.25em] text-choco-500 font-semibold">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-choco-500" />
        </motion.div>
      </div>
    </section>
  );
}
