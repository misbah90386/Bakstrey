import { motion } from 'motion/react';
import { Check, Sparkles, Heart } from 'lucide-react';
import { IMAGE_BENTO_SIGNATURE } from '../data';

export default function About() {
  const pillars = [
    { title: 'Always Freshly Baked', desc: 'We never freeze our cakes. Every order is baked from scratch hours before delivery.' },
    { title: 'Ultra-Premium Ingredients', desc: 'Madagascar vanilla pods, Belgian Callebaut chocolate, and fresh organic fruits.' },
    { title: 'Hospital-Grade Hygiene', desc: 'Our kitchens adhere to strict international food safety and sanitization standards.' },
    { title: 'Bespoke Artistic Creativity', desc: 'Each custom cake is treated as a unique, edible canvas painted by master pastry chefs.' },
  ];

  return (
    <section id="about" className="py-24 bg-cream-100/50 relative overflow-hidden">
      {/* Background soft light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-pastelp-200/20 filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Images Column */}
          <div className="lg:col-span-6 relative" id="about-visuals">
            {/* Main Picture Frame */}
            <div className="relative z-10 w-full max-w-md mx-auto lg:mx-0">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-square relative"
              >
                <img
                  src={IMAGE_BENTO_SIGNATURE}
                  alt="Pastry chef decorating cake"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-gold-300 font-bold">In Our Element</p>
                  <p className="text-lg font-display font-semibold">Artisanal Craftsmanship</p>
                </div>
              </motion.div>
            </div>

            {/* Back Accent Picture */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 40 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block absolute -right-4 -bottom-10 z-20 w-52 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80"
                alt="Finishing cupcakes"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Medal/Badge */}
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="absolute -top-6 -left-6 z-20 w-28 h-28 rounded-full bg-choco-900 text-white flex flex-col items-center justify-center text-center shadow-lg p-3 border-2 border-gold-300"
            >
              <Heart className="w-5 h-5 text-gold-400 mb-1 fill-gold-400/20" />
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none text-gold-300">ESTD</p>
              <p className="text-sm font-display font-bold">2018</p>
            </motion.div>
          </div>

          {/* Right: Text Column */}
          <div className="lg:col-span-6" id="about-content">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-gold-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Our Story & Heritage</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight leading-tight mb-6">
              Baking Beautiful Memories, One Masterpiece at a Time.
            </h2>

            <p className="text-choco-700 leading-relaxed mb-6 font-sans">
              Founded with a dream to redefine sweet celebrations, **Bakstrey** is a luxury cake atelier built on the belief that a cake is the centerpiece of life's most precious occasions. Our professional pastry artisans treat every batter, swirl, and embellishment with obsessive care.
            </p>

            <p className="text-choco-600 leading-relaxed mb-10 font-sans text-sm">
              Whether you are planning an intimate birthday celebration, an elaborate wedding, or simply treating yourself to some afternoon brownies, we bring a standard of design, fresh luxury, and food hygiene that has earned the trust of over fifteen thousand clients.
            </p>

            {/* Pillars list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-pillars">
              {pillars.map((p, idx) => (
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 15 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={p.title}
                  className="flex gap-3"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-choco-900 text-sm">{p.title}</h4>
                    <p className="text-xs text-choco-600 leading-normal mt-1">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
