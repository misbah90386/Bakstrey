import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ChevronRight, ChevronLeft, Calendar, User, Phone, Mail, MapPin, Smile, CheckCircle, Clock } from 'lucide-react';
import { CustomCakeOrder, Product } from '../types';

interface CustomizerProps {
  prepopulatedProduct: Product | null;
  onClearPrepopulate: () => void;
  isOpenState?: boolean;
}

const FLAVORS = [
  { id: 'chocolate', name: 'Belgian Chocolate Fudge', desc: 'Deep cocoa, dark ganache fudge layers', color: '#4a2e20' },
  { id: 'red-velvet', name: 'Red Velvet Blush', desc: 'Moist cocoa-infused crimson, tang cream cheese', color: '#8d1d2c' },
  { id: 'vanilla', name: 'Madagascar Vanilla Bean', desc: 'Fragrant golden cake, rich vanilla bean pastry cream', color: '#fbf5e6' },
  { id: 'salted-caramel', name: 'Salted Caramel Crunch', desc: 'Butterscotch layers, sea salt caramel, praline crunch', color: '#c48943' },
  { id: 'strawberry', name: 'Strawberry Cream Chiffon', desc: 'Light airy cake, organic strawberries, whipped white chocolate', color: '#fad0c4' },
  { id: 'lemon-blueberry', name: 'Lemon Blueberry Zest', desc: 'Zesty lemon sponge, wild blueberry coulis fill', color: '#e7e59c' }
];

const SIZES = [
  { id: 'bento', name: '4" Bento Mini', desc: 'Perfect for 1-2 people', price: 22, layers: 1 },
  { id: 'classic-6', name: '6" Classic Single-Tier', desc: 'Feeds 6-8 guests', price: 45, layers: 1 },
  { id: 'classic-8', name: '8" Celebrant Single-Tier', desc: 'Feeds 12-15 guests', price: 65, layers: 1 },
  { id: 'double-tier', name: '6" + 8" Dual-Tier', desc: 'Feeds 25-30 guests', price: 135, layers: 2 },
  { id: 'triple-tier', name: '4" + 6" + 8" Grand Triple-Tier', desc: 'Feeds 50-60 guests', price: 245, layers: 3 }
];

const THEMES = [
  { id: 'minimalist', name: 'Aesthetic Minimalist', desc: 'Sleek, textured brush-strokes, elegant shell piping' },
  { id: 'floral', name: 'Whimsical Floral Dream', desc: 'Decorated with fresh, edible floral petals & vines' },
  { id: 'chocolate-bomb', name: 'Chocolate Extravaganza', desc: 'Rich chocolate drips, artisanal curls, and luxury truffles' },
  { id: 'colorful', name: 'Vibrant Celebration Spark', desc: 'Festive colorful piping and gourmet rainbow confetti sprinkles' },
  { id: 'rustic', name: 'Sophisticated Semi-Naked', desc: 'Charming scrape coat showing lovely golden cake crumbs' }
];

const COLORS = [
  { name: 'Powder Blush Pink', value: '#ffd9df' },
  { name: 'Classic Ivory Cream', value: '#fcf8f2' },
  { name: 'Warm Toasted Caramel', value: '#ebd3be' },
  { name: 'Royal Emerald Sage', value: '#cfdfd1' },
  { name: 'Vintage Powder Blue', value: '#d6e5fa' },
  { name: 'Velvet Midnight Cocoa', value: '#362319' }
];

const DECORATIONS = [
  { id: 'gold-leaf', name: '24K Gold Leaf Accents', price: 8 },
  { id: 'fresh-flowers', name: 'Fresh Seasonal Florals', price: 12 },
  { id: 'macarons', name: 'Delicate Pastel Macarons (4)', price: 10 },
  { id: 'chocolate-shards', name: 'Gourmet Chocolate Shards', price: 6 },
  { id: 'edible-glitter', name: 'Magical Shimmering Dust', price: 4 },
  { id: 'piped-shells', name: 'Classical Victorian Shell Piping', price: 5 }
];

export default function Customizer({ prepopulatedProduct, onClearPrepopulate }: CustomizerProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVORS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[1]);
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[1]);
  const [pipingMessage, setPipingMessage] = useState('');
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);

  // User details State
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle pre-populating from parent product card click
  useEffect(() => {
    if (prepopulatedProduct) {
      // Set values matching category/product if possible
      const matchedFlavor = FLAVORS.find(f =>
        prepopulatedProduct.name.toLowerCase().includes(f.id) ||
        prepopulatedProduct.description.toLowerCase().includes(f.name.split(' ')[0].toLowerCase())
      );
      if (matchedFlavor) setSelectedFlavor(matchedFlavor);

      if (prepopulatedProduct.category === 'Bento Cakes') {
        const bentoSize = SIZES.find(s => s.id === 'bento');
        if (bentoSize) setSelectedSize(bentoSize);
      } else if (prepopulatedProduct.category === 'Wedding Cakes') {
        const grandSize = SIZES.find(s => s.id === 'triple-tier') || SIZES[4];
        setSelectedSize(grandSize);
        const floralTheme = THEMES.find(t => t.id === 'floral');
        if (floralTheme) setSelectedTheme(floralTheme);
      }

      // Scroll to customizer
      const element = document.getElementById('cake-customizer');
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      // Clear prepopulate after mapping
      onClearPrepopulate();
    }
  }, [prepopulatedProduct]);

  const toggleDecoration = (id: string) => {
    if (selectedDecorations.includes(id)) {
      setSelectedDecorations(selectedDecorations.filter(d => d !== id));
    } else {
      setSelectedDecorations([...selectedDecorations, id]);
    }
  };

  const getDecorationPrice = () => {
    return selectedDecorations.reduce((sum, decId) => {
      const dec = DECORATIONS.find(d => d.id === decId);
      return sum + (dec ? dec.price : 0);
    }, 0);
  };

  const getTotalPrice = () => {
    return selectedSize.price + getDecorationPrice();
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!userName.trim()) newErrors.name = 'Full Name is required';
    if (!userPhone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(userPhone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!userEmail.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!eventDate) {
      newErrors.date = 'Event date is required';
    } else {
      const selected = new Date(eventDate);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }
    if (deliveryMethod === 'delivery' && !deliveryAddress.trim()) {
      newErrors.address = 'Delivery address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    // Simulate sending order
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setSelectedFlavor(FLAVORS[0]);
    setSelectedSize(SIZES[1]);
    setSelectedTheme(THEMES[0]);
    setSelectedColor(COLORS[1]);
    setPipingMessage('');
    setSelectedDecorations([]);
    setUserName('');
    setUserPhone('');
    setUserEmail('');
    setEventDate('');
    setDeliveryMethod('pickup');
    setDeliveryAddress('');
    setSpecialInstructions('');
    setErrors({});
  };

  return (
    <section id="cake-customizer" className="py-24 bg-cream-100 relative">
      {/* Visual top dividers */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-pastelp-400 to-gold-400" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" id="customizer-header">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-200 text-gold-800 text-[10px] font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Workshop</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight mb-4">
            Customize Your Dream Cake
          </h2>
          <p className="text-sm text-choco-600">
            Experiment with layers, flavors, luxury toppings, and piping details. Watch your edible masterpiece come together in real-time below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT PANEL: REALTIME VISUALIZER */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-8 shadow-sm border border-cream-200" id="visualizer-frame">
            <div>
              <div className="flex items-center justify-between border-b border-cream-100 pb-4 mb-8">
                <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">Interactive Preview</span>
                <span className="text-xs font-mono text-choco-500 font-semibold uppercase tracking-wider">Live Canvas</span>
              </div>

              {/* Stacked Cake visual representation */}
              <div className="relative h-72 w-full flex items-center justify-center bg-cream-50/50 rounded-2xl border border-dashed border-cream-200/80 mb-6 overflow-hidden">
                {/* Floating decor layers based on choice */}
                <div className="absolute inset-0 bg-radial-gradient from-white to-transparent pointer-events-none opacity-40" />

                {/* Cake Container */}
                <div className="relative flex flex-col items-center justify-end w-full h-full pb-10">
                  {/* Tiers rendering */}
                  {/* Tier 3 (Top tier - rendered if size supports 3-tiers) */}
                  {selectedSize.layers >= 3 && (
                    <motion.div
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-24 h-10 rounded-t-xl shadow-md z-30 -mb-2 relative"
                      style={{ backgroundColor: selectedColor.value }}
                    >
                      {/* Top crust cream accent */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 rounded-t-xl" />
                      {/* Flavor core line representing double tier */}
                      <div className="absolute top-4 left-0 right-0 h-1.5" style={{ backgroundColor: selectedFlavor.color, opacity: 0.85 }} />
                    </motion.div>
                  )}

                  {/* Tier 2 (Middle tier - rendered if size supports 2 or 3-tiers) */}
                  {selectedSize.layers >= 2 && (
                    <motion.div
                      layout
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-36 h-12 rounded-t-xl shadow-md z-20 -mb-2 relative"
                      style={{ backgroundColor: selectedColor.value }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 rounded-t-xl" />
                      <div className="absolute top-5 left-0 right-0 h-1.5" style={{ backgroundColor: selectedFlavor.color, opacity: 0.85 }} />
                    </motion.div>
                  )}

                  {/* Tier 1 (Base tier - always rendered) */}
                  <motion.div
                    layout
                    className="w-48 h-16 rounded-t-2xl shadow-lg z-10 relative flex items-center justify-center"
                    style={{ backgroundColor: selectedColor.value }}
                  >
                    {/* Shell details if picked */}
                    {selectedDecorations.includes('piped-shells') && (
                      <div className="absolute bottom-0 left-0 right-0 h-2 flex justify-between px-1 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full -mb-1" style={{ backgroundColor: '#ffffff', opacity: 0.8 }} />
                        ))}
                      </div>
                    )}

                    <div className="absolute top-0 left-0 right-0 h-2 bg-white/30 rounded-t-2xl" />
                    <div className="absolute top-7 left-0 right-0 h-2" style={{ backgroundColor: selectedFlavor.color, opacity: 0.85 }} />

                    {/* Cake icing drips for Chocolate Bomb theme */}
                    {selectedTheme.id === 'chocolate-bomb' && (
                      <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none">
                        {[16, 24, 12, 28, 16, 20].map((h, i) => (
                          <div key={i} className="w-2 rounded-b-full bg-[#362319]/90" style={{ height: `${h}px` }} />
                        ))}
                      </div>
                    )}

                    {/* Drips for Minimalist / custom gold theme */}
                    {selectedTheme.id === 'floral' && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                        <span className="text-[10px] text-[#2f5c35] font-serif italic">❀ floral petals ❀</span>
                      </div>
                    )}

                    {/* Piping Custom Message centered */}
                    {pipingMessage && (
                      <div className="absolute inset-0 flex items-center justify-center p-2 z-20 pointer-events-none text-center">
                        <p
                          className="font-serif italic font-bold tracking-wider select-none text-xs leading-none drop-shadow-md break-all overflow-hidden"
                          style={{
                            color: selectedColor.value === '#362319' ? '#fcf8f2' : '#553c2a'
                          }}
                        >
                          "{pipingMessage.substring(0, 24)}"
                        </p>
                      </div>
                    )}
                  </motion.div>

                  {/* Elegant Golden Cake stand */}
                  <div className="w-56 h-3 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-700 rounded-full shadow-md z-0" />
                  <div className="w-16 h-12 bg-gradient-to-b from-gold-400 to-gold-600 shadow-md z-0 -mt-1 rounded-b-xl" />
                  <div className="w-32 h-2 bg-gradient-to-r from-gold-700 to-gold-600 shadow-md z-0 rounded-full" />
                </div>

                {/* Decoration Badges Overlays */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
                  {selectedDecorations.map(decId => {
                    const dec = DECORATIONS.find(d => d.id === decId);
                    return (
                      <span key={decId} className="px-2 py-0.5 rounded bg-gold-100 text-gold-800 text-[9px] font-bold uppercase tracking-wider shadow-sm">
                        + {dec?.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Spec sheet checklist */}
              <div className="space-y-3 bg-cream-50/50 p-5 rounded-2xl border border-cream-200/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-choco-600 font-medium">Selected Flavor:</span>
                  <span className="text-choco-900 font-bold text-right">{selectedFlavor.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-choco-600 font-medium">Cake Theme:</span>
                  <span className="text-choco-900 font-bold text-right">{selectedTheme.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-choco-600 font-medium">Icing Color:</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-choco-300" style={{ backgroundColor: selectedColor.value }} />
                    <span className="text-choco-900 font-bold text-right">{selectedColor.name}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-choco-600 font-medium">Cake Size & Tiers:</span>
                  <span className="text-choco-900 font-bold text-right">{selectedSize.name}</span>
                </div>
              </div>
            </div>

            {/* Total pricing box */}
            <div className="mt-8 border-t border-cream-200 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-choco-500 tracking-wider font-bold">Estimated Cost</span>
                  <p className="text-2xl font-black text-choco-900">${getTotalPrice()}</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-choco-500 uppercase block">Base Price: ${selectedSize.price}</span>
                  <span className="text-[9px] text-choco-500 uppercase block">Decorations: ${getDecorationPrice()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: INTERACTIVE MULTI-STEP BOOKING FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-cream-200 flex flex-col justify-between" id="customizer-form-container">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmitOrder} className="flex-grow flex flex-col justify-between">
                  {/* Step Indicators */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-gold-600 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                        {step === 1 ? '1' : <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${step === 1 ? 'text-choco-900' : 'text-emerald-700'}`}>Design Details</span>
                    </div>
                    <div className="flex-grow h-px bg-cream-200" />
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-gold-600 text-white' : 'bg-cream-100 text-choco-500'}`}>
                        2
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${step === 2 ? 'text-choco-900' : 'text-choco-500'}`}>Logistics & Contact</span>
                    </div>
                  </div>

                  {/* STEP 1 CONTENT: CAKE CONFIGURATION */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-6"
                    >
                      {/* Flavor Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-choco-800 mb-3">1. Select Cake Sponge Flavor</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {FLAVORS.map(flavor => (
                            <button
                              type="button"
                              key={flavor.id}
                              onClick={() => setSelectedFlavor(flavor)}
                              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex items-center gap-3 ${
                                selectedFlavor.id === flavor.id
                                  ? 'bg-gold-50/80 border-gold-400 shadow-sm'
                                  : 'bg-white border-cream-200 hover:border-gold-300'
                              }`}
                            >
                              <div className="w-5 h-5 rounded-full border border-choco-300 flex-shrink-0" style={{ backgroundColor: flavor.color }} />
                              <div>
                                <h4 className="font-sans font-bold text-choco-900 text-xs">{flavor.name}</h4>
                                <p className="text-[10px] text-choco-600 mt-0.5">{flavor.desc}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Size / Tier Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-choco-800 mb-3">2. Select Cake Dimensions & Tiers</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SIZES.map(size => (
                            <button
                              type="button"
                              key={size.id}
                              onClick={() => setSelectedSize(size)}
                              className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex justify-between items-center ${
                                selectedSize.id === size.id
                                  ? 'bg-gold-50/80 border-gold-400 shadow-sm'
                                  : 'bg-white border-cream-200 hover:border-gold-300'
                              }`}
                            >
                              <div>
                                <h4 className="font-sans font-bold text-choco-900 text-xs">{size.name}</h4>
                                <p className="text-[10px] text-choco-600 mt-0.5">{size.desc}</p>
                              </div>
                              <span className="text-xs font-black text-gold-700 bg-gold-100 px-2 py-1 rounded">
                                ${size.price}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Theme Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-choco-800 mb-3">3. Choose Outer Design Theme</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {THEMES.map(theme => (
                            <button
                              type="button"
                              key={theme.id}
                              onClick={() => setSelectedTheme(theme)}
                              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                                selectedTheme.id === theme.id
                                  ? 'bg-gold-50/80 border-gold-400 shadow-sm'
                                  : 'bg-white border-cream-200 hover:border-gold-300'
                              }`}
                            >
                              <h4 className="font-sans font-bold text-choco-900 text-xs">{theme.name}</h4>
                              <p className="text-[9px] text-choco-600 leading-normal mt-0.5">{theme.desc}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Color Palette Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-choco-800 mb-3">4. Choose Base Color Palette</label>
                        <div className="flex flex-wrap gap-3">
                          {COLORS.map(color => (
                            <button
                              type="button"
                              key={color.name}
                              onClick={() => setSelectedColor(color)}
                              className={`px-3 py-2 rounded-full border text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                                selectedColor.name === color.name
                                  ? 'border-gold-500 bg-gold-50 text-gold-900 shadow-sm'
                                  : 'border-cream-200 bg-white hover:border-gold-300 text-choco-700'
                              }`}
                            >
                              <div className="w-3.5 h-3.5 rounded-full border border-choco-300" style={{ backgroundColor: color.value }} />
                              <span>{color.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Piping Message Input */}
                      <div>
                        <label htmlFor="piping-message" className="block text-xs font-bold uppercase tracking-widest text-choco-800 mb-2">
                          5. Custom Piping Message on Cake (Max 24 chars)
                        </label>
                        <input
                          id="piping-message"
                          type="text"
                          maxLength={24}
                          value={pipingMessage}
                          onChange={(e) => setPipingMessage(e.target.value)}
                          placeholder="e.g. Happy 25th Birthday, John!"
                          className="w-full px-4 py-3 rounded-xl border border-cream-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 text-sm text-choco-900"
                        />
                      </div>

                      {/* Decorations Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-choco-800 mb-3">6. Add Luxury Embellishments</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {DECORATIONS.map(dec => (
                            <button
                              type="button"
                              key={dec.id}
                              onClick={() => toggleDecoration(dec.id)}
                              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex justify-between flex-col h-20 ${
                                selectedDecorations.includes(dec.id)
                                  ? 'bg-gold-50/80 border-gold-400 shadow-sm text-gold-900'
                                  : 'bg-white border-cream-200 hover:border-gold-300 text-choco-800'
                              }`}
                            >
                              <span className="font-sans font-bold text-[10px] leading-tight">{dec.name}</span>
                              <span className="text-[10px] font-black text-gold-700 bg-gold-100 px-1.5 py-0.5 rounded self-start mt-1">
                                +${dec.price}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-choco-900 text-white hover:bg-gold-600 transition-all flex items-center gap-1 cursor-pointer"
                        >
                          Next Step: Logistics
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 CONTENT: USER DETAILS & LOGISTICS */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6 flex-grow"
                    >
                      <h3 className="font-display font-bold text-choco-900 text-lg mb-4">Provide Contact & Event Logistics</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="user-name" className="block text-xs font-semibold text-choco-800 mb-1.5 flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-choco-500" />
                            Full Name
                          </label>
                          <input
                            id="user-name"
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Samantha Westwood"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.name ? 'border-rose-400' : 'border-cream-200'}`}
                          />
                          {errors.name && <p className="text-[10px] text-rose-500 mt-1">{errors.name}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="user-phone" className="block text-xs font-semibold text-choco-800 mb-1.5 flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5 text-choco-500" />
                            Phone Number
                          </label>
                          <input
                            id="user-phone"
                            type="tel"
                            required
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                            placeholder="+1 (555) 019-2834"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.phone ? 'border-rose-400' : 'border-cream-200'}`}
                          />
                          {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div>
                          <label htmlFor="user-email" className="block text-xs font-semibold text-choco-800 mb-1.5 flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5 text-choco-500" />
                            Email Address
                          </label>
                          <input
                            id="user-email"
                            type="email"
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="samantha@example.com"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.email ? 'border-rose-400' : 'border-cream-200'}`}
                          />
                          {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
                        </div>

                        {/* Event Date */}
                        <div>
                          <label htmlFor="event-date" className="block text-xs font-semibold text-choco-800 mb-1.5 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-choco-500" />
                            Date of Event / Celebration
                          </label>
                          <input
                            id="event-date"
                            type="date"
                            required
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.date ? 'border-rose-400' : 'border-cream-200'}`}
                          />
                          {errors.date && <p className="text-[10px] text-rose-500 mt-1">{errors.date}</p>}
                        </div>
                      </div>

                      {/* Delivery vs Pickup */}
                      <div>
                        <label className="block text-xs font-semibold text-choco-800 mb-2">Delivery Method</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setDeliveryMethod('pickup')}
                            className={`py-3 rounded-xl border text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                              deliveryMethod === 'pickup'
                                ? 'bg-gold-50 border-gold-400 text-gold-900 shadow-sm'
                                : 'bg-white border-cream-200 text-choco-700 hover:border-gold-300'
                            }`}
                          >
                            <Smile className="w-4 h-4" />
                            Self-Pickup (Free)
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeliveryMethod('delivery')}
                            className={`py-3 rounded-xl border text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                              deliveryMethod === 'delivery'
                                ? 'bg-gold-50 border-gold-400 text-gold-900 shadow-sm'
                                : 'bg-white border-cream-200 text-choco-700 hover:border-gold-300'
                            }`}
                          >
                            <MapPin className="w-4 h-4" />
                            Secure Home Delivery
                          </button>
                        </div>
                      </div>

                      {/* Address for Delivery */}
                      {deliveryMethod === 'delivery' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label htmlFor="delivery-address" className="block text-xs font-semibold text-choco-800 mb-1.5">
                            Delivery Street Address & Unit No.
                          </label>
                          <textarea
                            id="delivery-address"
                            required
                            rows={2}
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            placeholder="123 Luxury Avenue, Suite 456, Beverly Hills"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-choco-900 ${errors.address ? 'border-rose-400' : 'border-cream-200'}`}
                          />
                          {errors.address && <p className="text-[10px] text-rose-500 mt-1">{errors.address}</p>}
                        </motion.div>
                      )}

                      {/* Special Instructions */}
                      <div>
                        <label htmlFor="special-instructions" className="block text-xs font-semibold text-choco-800 mb-1.5">
                          Special Decoration Instructions or Allergy Alerts (Optional)
                        </label>
                        <textarea
                          id="special-instructions"
                          rows={2}
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                          placeholder="Please make it eggless, or adjust cream sweetness to 50%..."
                          className="w-full px-4 py-3 rounded-xl border border-cream-200 text-sm text-choco-900"
                        />
                      </div>

                      <div className="pt-6 border-t border-cream-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-cream-300 text-choco-700 hover:bg-cream-100 transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back to Design
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-md hover:from-gold-500 hover:to-gold-600 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          Submit Customized Order
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              ) : (
                /* SUCCESS RECEIPT PAGE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                  id="order-receipt-success"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-extrabold text-choco-900 text-2xl mb-3">Custom Order Received!</h3>
                  <p className="text-sm text-choco-700 max-w-md leading-relaxed mb-8">
                    Thank you, <span className="font-bold">{userName}</span>! Your customized cake order has been securely registered in our system. A chef will review the specifications immediately.
                  </p>

                  <div className="w-full bg-cream-50 rounded-2xl p-6 border border-cream-200 text-left max-w-md space-y-4 mb-8">
                    <div className="flex justify-between text-xs border-b border-cream-200 pb-2.5">
                      <span className="text-choco-500">Order ID:</span>
                      <span className="font-mono font-bold text-choco-900">#BKS-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-choco-500">Flavor Base:</span>
                      <span className="font-bold text-choco-900">{selectedFlavor.name}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-choco-500">Size & Layers:</span>
                      <span className="font-bold text-choco-900">{selectedSize.name}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-choco-500">Event Date:</span>
                      <span className="font-bold text-choco-900">{eventDate}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-choco-500">Logistics Plan:</span>
                      <span className="font-bold text-choco-900 uppercase">{deliveryMethod}</span>
                    </div>
                    <div className="flex justify-between text-xs border-t border-cream-200 pt-3 font-bold text-base">
                      <span className="text-choco-900">Paid / Due:</span>
                      <span className="text-gold-700">${getTotalPrice()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-choco-600 bg-gold-50 border border-gold-200/50 py-3 px-5 rounded-xl max-w-md mb-8">
                    <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
                    <p className="text-left">
                      Our concierge will contact you via phone or WhatsApp at <span className="font-bold text-choco-900">{userPhone}</span> within the next 30 minutes to confirm delivery details.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-choco-900 text-white hover:bg-gold-600 transition-all cursor-pointer"
                  >
                    Bake Another Masterpiece
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
