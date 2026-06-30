import { Sparkles, Cake, PenTool, CheckSquare, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: Cake,
      title: 'Choose Your Cake Base',
      desc: 'Browse our signature catalog or select a general custom sponge recipe to kickstart your creative journey.'
    },
    {
      num: '02',
      icon: PenTool,
      title: 'Customize Your Design',
      desc: 'Inject personality by defining flavor cream layers, dimension tiers, custom piping messages, and luxury toppings.'
    },
    {
      num: '03',
      icon: CheckSquare,
      title: 'Confirm & Schedule Order',
      desc: 'Input delivery details, logistical timings, and confirm payment options. Our bakers immediately prepare your fresh batter.'
    },
    {
      num: '04',
      icon: Heart,
      title: 'Enjoy Fresh Delivery',
      desc: 'Receive your cake via our temperature-controlled fleet, carefully curated to land on your plate perfectly intact.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" id="how-it-works-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-100 text-gold-700 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Ordering Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Four Simple Steps to Sweet Perfection
          </h2>
          <p className="text-sm text-choco-600">
            Designing premium custom cakes shouldn't be stressful. We've streamlined our studio experience to make booking effortless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" id="how-it-works-grid">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {/* Connector line for desktop */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-cream-200" />
                )}

                <div className="w-16 h-16 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center text-gold-700 shadow-sm relative z-10 mb-6 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-choco-900 text-white text-[10px] font-bold flex items-center justify-center shadow">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-choco-900 text-base mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-choco-700 leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
