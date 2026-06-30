import { motion } from 'motion/react';
import { Clock, Award, Sparkles, ShieldCheck, DollarSign, Truck, Heart, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Clock,
      title: 'Freshly Baked Daily',
      desc: 'Our ovens preheat before sunrise. We bake fresh every single day, ensuring maximum moistness and peak flavor.',
      color: 'from-gold-50 to-gold-100/50',
      iconColor: 'text-gold-600',
    },
    {
      icon: Award,
      title: 'Premium Ingredients',
      desc: 'We strictly source single-origin chocolate, organic fruits, and pure double cream. No artificial palm oils or substitutes.',
      color: 'from-pastelp-50 to-pastelp-100/50',
      iconColor: 'text-pastelp-600',
    },
    {
      icon: Sparkles,
      title: 'Custom Cake Designs',
      desc: 'From sketches to sugary realities. Our custom design team crafts cakes that perfectly fit your exact theme, color, and size.',
      color: 'from-gold-50 to-gold-100/50',
      iconColor: 'text-gold-600',
    },
    {
      icon: ShieldCheck,
      title: '100% Hygienic Kitchen',
      desc: 'Cleanliness is our religion. Our bakers operate in a highly sanitized environment with double-filtration safety procedures.',
      color: 'from-pastelp-50 to-pastelp-100/50',
      iconColor: 'text-pastelp-600',
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      desc: 'Luxury dessert experiences should not break the bank. We offer premium artisan cakes at friendly, transparent prices.',
      color: 'from-gold-50 to-gold-100/50',
      iconColor: 'text-gold-600',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      desc: 'Chilled delivery vehicles bring your fragile cake straight to your doorstep, perfectly safe, intact, and on time.',
      color: 'from-pastelp-50 to-pastelp-100/50',
      iconColor: 'text-pastelp-600',
    },
    {
      icon: UserCheck,
      title: 'Professional Bakers',
      desc: 'Our kitchen is directed by European-trained pastry chefs with decades of experience in high culinary standards.',
      color: 'from-gold-50 to-gold-100/50',
      iconColor: 'text-gold-600',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      desc: 'We put a piece of our heart into every whisk. Our baking is fueled by a genuine love for spreading celebration joy.',
      color: 'from-pastelp-50 to-pastelp-100/50',
      iconColor: 'text-pastelp-600',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="why-us" className="py-24 bg-white relative">
      {/* Decorative vertical texts */}
      <div className="absolute left-6 top-1/3 text-[9px] uppercase tracking-[0.4em] font-mono text-choco-300 pointer-events-none origin-left -rotate-90 hidden xl:block select-none">
        * HANDCRAFTED DAILY *
      </div>
      <div className="absolute right-6 bottom-1/3 text-[9px] uppercase tracking-[0.4em] font-mono text-choco-300 pointer-events-none origin-right rotate-90 hidden xl:block select-none">
        * HIGH CULINARY QUALITY *
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" id="why-us-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pastelp-100 text-pastelp-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Why Choose Bakstrey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Uncompromising Standards for Every Bite
          </h2>
          <p className="text-sm text-choco-600">
            We believe that pastry baking is a sacred science of flavor, safety, and art. Here is what makes the Bakstrey experience truly exceptional.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          id="why-us-grid"
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(124, 79, 57, 0.08)' }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${card.color} border border-cream-200/60 shadow-sm transition-all flex flex-col items-start`}
              >
                <div className={`p-4 rounded-2xl bg-white shadow-sm mb-6 ${card.iconColor}`}>
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-display font-bold text-lg text-choco-900 mb-3">{card.title}</h3>
                <p className="text-xs text-choco-700 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
