import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Copy, Check, Ticket } from 'lucide-react';

export default function SpecialOffers() {
  const [copied, setCopied] = useState(false);
  const promoCode = 'BAKSTREYGOLD';

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="special-offers" className="py-16 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative bg-gradient-to-r from-choco-900 via-choco-800 to-choco-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl border-2 border-gold-400"
        >
          {/* Background vector accents */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-400/10 filter blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full bg-pastelp-500/10 filter blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Promo texts */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-[10px] font-bold uppercase tracking-wider border border-gold-500/30">
                <Ticket className="w-3.5 h-3.5" />
                <span>Seasonal Delight</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Celebrate This Summer with <span className="text-gold-400">15% Off Your First Order</span>
              </h2>

              <p className="text-xs sm:text-sm text-choco-100 max-w-xl leading-relaxed">
                Add magic to your anniversaries, birthdays, and parties. Use our seasonal coupon code during booking. Free secure delivery is also included on all orders over $100.
              </p>

              {/* Minor bullet points */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-choco-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>Valid for all customized cakes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>Cannot combine with other offers</span>
                </div>
              </div>
            </div>

            {/* Promo ticket/code copy action */}
            <div className="lg:col-span-5 flex flex-col items-stretch sm:items-center lg:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full max-w-md">
                <span className="text-[9px] uppercase tracking-wider text-gold-300 font-bold block mb-2 text-center">
                  Click below to copy your code
                </span>

                <div className="flex items-center justify-between gap-3 bg-white/10 rounded-xl p-2.5 border border-white/10">
                  <span className="font-mono text-lg font-black tracking-widest text-white px-3">
                    {promoCode}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-3 rounded-lg bg-gold-500 text-choco-950 font-bold hover:bg-gold-400 transition-colors cursor-pointer flex items-center gap-1"
                    title="Copy code"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-xs">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center mt-3.5">
                  <p className="text-[10px] text-choco-200 uppercase tracking-widest font-medium">
                    Limited time offer • Valid until Aug 31, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
