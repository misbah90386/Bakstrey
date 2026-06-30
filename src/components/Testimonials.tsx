import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream-100/50 relative overflow-hidden">
      {/* Decorative floral or light blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-gold-200/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100 text-gold-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Client Kind Words</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Beloved By Families & Planners
          </h2>
          <p className="text-sm text-choco-600">
            Read stories of love, weddings, and birthday smiles shared by our wonderful clients in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-cream-200/60 shadow-sm flex flex-col justify-between relative group hover:shadow-lg hover:border-gold-300 transition-all duration-300"
            >
              {/* Quote icon watermarked */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cream-100 group-hover:text-gold-100 transition-colors duration-300 pointer-events-none" />

              <div>
                {/* Star rating rendering */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-choco-800 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-cream-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-choco-900 text-sm">{t.name}</h4>
                  <p className="text-[10px] text-gold-700 font-semibold uppercase tracking-wider">{t.role}</p>
                  <p className="text-[9px] text-choco-500 mt-0.5">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
