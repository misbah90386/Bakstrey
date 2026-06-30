import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" id="faq-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pastelp-100 text-pastelp-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Frequently Asked Queries
          </h2>
          <p className="text-sm text-choco-600">
            Have queries regarding timelines, customized decorators, allergen protocols, or delivery safety? We have compiled them all here.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-cream-200 rounded-2xl overflow-hidden bg-cream-50/30 transition-all duration-300 hover:border-gold-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex gap-4 items-start pr-4">
                    <HelpCircle className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                    <span className="font-display font-bold text-choco-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full bg-cream-100 text-choco-600 flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pl-15 text-xs sm:text-sm text-choco-750 leading-relaxed border-t border-cream-100 pt-4 bg-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
