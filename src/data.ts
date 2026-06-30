import { Product, Testimonial, GalleryItem, FAQItem } from './types';

// Let's use our generated images for signature and flagship offerings
export const IMAGE_HERO = '/src/assets/images/bakery_hero_1782804338762.jpg';
export const IMAGE_WEDDING_SIGNATURE = '/src/assets/images/custom_wedding_cake_1782804353042.jpg';
export const IMAGE_GOURMET_TREATS = '/src/assets/images/gourmet_treats_1782804366709.jpg';
export const IMAGE_BENTO_SIGNATURE = '/src/assets/images/bento_birthday_cake_1782804380825.jpg';

export const PRODUCTS: Product[] = [
  // 1. Birthday Cakes
  {
    id: 'bday-1',
    name: 'Royale Chocolate Fudge Dream',
    category: 'Birthday Cakes',
    description: 'Rich layers of Belgian chocolate ganache, moist fudge sponge, and dark chocolate flakes with gold dust.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    rating: 4.9,
    tags: ['Chocolate', 'Fudge', 'Best Seller']
  },
  {
    id: 'bday-2',
    name: 'Vanilla Bean Berry Cascade',
    category: 'Birthday Cakes',
    description: 'Fluffy Madagascar vanilla sponge layered with organic strawberry compote and whipped white chocolate cream.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bdf7aff51?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    tags: ['Vanilla', 'Berries', 'Light']
  },
  {
    id: 'bday-3',
    name: 'Salted Caramel Crunch',
    category: 'Birthday Cakes',
    description: 'Decadent butterscotch sponge with layers of home-cooked salted caramel sauce and toasted pecans.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    tags: ['Caramel', 'Crunchy']
  },

  // 2. Wedding Cakes
  {
    id: 'wed-1',
    name: 'Elysian Floral 3-Tier',
    category: 'Wedding Cakes',
    description: 'Our signature multi-tiered masterpiece styled with handmade sugar roses, luxury gold leaf, and velvet champagne flavor.',
    price: 250,
    image: IMAGE_WEDDING_SIGNATURE,
    isSignature: true,
    rating: 5.0,
    tags: ['Luxury', 'Bespoke', 'Champagne']
  },
  {
    id: 'wed-2',
    name: 'Rustic White Jasmine Naked Cake',
    category: 'Wedding Cakes',
    description: 'Semi-naked tiers infused with orange blossom, filled with lemon curd and frosted with light honey buttercream.',
    price: 195,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    tags: ['Rustic', 'Lemon', 'Floral']
  },

  // 3. Anniversary Cakes
  {
    id: 'ann-1',
    name: 'Velvet Rose Gold Bliss',
    category: 'Anniversary Cakes',
    description: 'Sophisticated red velvet tiers with velvety smooth cream cheese frosting, decorated with rose gold dust and fresh berries.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1562266563-fa30c3ec4137?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    tags: ['Red Velvet', 'Elegant']
  },

  // 4. Cupcakes
  {
    id: 'cup-1',
    name: 'Premium Velvet & Berry Medley',
    category: 'Cupcakes',
    description: 'Set of 6 luxury cupcakes featuring double dark chocolate, red velvet blush, and Madagascar vanilla bean.',
    price: 18,
    image: IMAGE_GOURMET_TREATS,
    isSignature: true,
    rating: 4.8,
    tags: ['Assorted', 'Perfect Gift']
  },
  {
    id: 'cup-2',
    name: 'Rosewater Pistachio Cupcakes',
    category: 'Cupcakes',
    description: 'Fragrant rosewater cupcakes topped with white chocolate cardamom buttercream and crushed green pistachios.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    tags: ['Exotic', 'Nutty']
  },

  // 5. Brownies
  {
    id: 'bro-1',
    name: 'Sea Salt Caramel Fudge Brownies',
    category: 'Brownies',
    description: 'Fudgy, dense triple chocolate brownies swirled with homemade sea salt caramel and baked to gooey perfection.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    tags: ['Gooey', 'Chocolate', 'Rich']
  },

  // 6. Cookies
  {
    id: 'coo-1',
    name: 'Belgian Chocolate Chunk Giants',
    category: 'Cookies',
    description: 'Crisp on the edges, chewy in the center cookies packed with premium dark, milk, and white Belgian chocolate pools.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    tags: ['Chewy', 'Classic']
  },

  // 7. Pastries
  {
    id: 'pas-1',
    name: 'Flaky Pistachio & Almond Croissants',
    category: 'Pastries',
    description: 'Twice-baked French butter croissants stuffed with luxury almond-pistachio frangipane and dusted with powdered sugar.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    tags: ['Flaky', 'French', 'Butter']
  },

  // 8. Desserts
  {
    id: 'des-1',
    name: 'Exquisite French Macaron Collection',
    category: 'Desserts',
    description: 'Artisanal collection of 12 French macarons in Lavender Honey, Salted Butter Caramel, Pistachio, and Raspberry Lychee.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
    isSignature: true,
    rating: 4.9,
    tags: ['Colorful', 'Gluten-Free']
  },

  // 9. Bento Cakes
  {
    id: 'ben-1',
    name: 'Custom Aesthetic Bento Cake',
    category: 'Bento Cakes',
    description: 'Trendy minimalist lunchbox cake. Perfect size for two, customized with your favorite pastel cream color and piped message.',
    price: 22,
    image: IMAGE_BENTO_SIGNATURE,
    isSignature: true,
    rating: 4.9,
    tags: ['Trendy', 'Minimalist', 'Custom']
  },

  // 10. Customized Cakes
  {
    id: 'cust-1',
    name: 'Bespoke Theme Masterpiece',
    category: 'Customized Cakes',
    description: 'Fully customized cake sculpted to match your party theme (e.g., Space, Fairytale, Corporate, Retro) with high art styling.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    tags: ['Artistic', 'Sculpted', 'Your Choice']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Samantha Westwood',
    role: 'Bride',
    rating: 5,
    comment: 'Bakstrey made our wedding cake an absolute fairytale. Not only was the Elysian 3-Tier cake visually breathtaking, but the champagne flavor was incredibly moist and light. All our guests were asking where we ordered it!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'June 12, 2026'
  },
  {
    id: 't-2',
    name: 'Marcus Thorne',
    role: 'Event Designer',
    rating: 5,
    comment: 'As an event planner, I have worked with dozens of bakeries, but Bakstrey stands in a league of its own. Their attention to detail, hygienic presentation, and reliable delivery are unparalleled. Highly, highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'May 28, 2026'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Birthday Host',
    rating: 5,
    comment: 'The chocolate fudge birthday cake was heavenly! Usually, customized cakes look good but taste dry. Bakstrey shattered that stereotype. It was insanely rich, moist, and decorated beautifully. The bento cake was also adorable!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: 'June 20, 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Golden Elegant Wedding Cake',
    category: 'Wedding',
    image: IMAGE_WEDDING_SIGNATURE
  },
  {
    id: 'g-2',
    title: 'Minimalist Pink Ribbon Bento',
    category: 'Bento',
    image: IMAGE_BENTO_SIGNATURE
  },
  {
    id: 'g-3',
    title: 'Belgian Chocolate Drip',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-4',
    title: 'Luxury Assorted Cupcakes',
    category: 'Cupcakes',
    image: IMAGE_GOURMET_TREATS
  },
  {
    id: 'g-5',
    title: 'Rustic Jasmine Naked Cake',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-6',
    title: 'Artisanal Macaron Tower',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How far in advance should I place my order?',
    answer: 'For standard cakes, bento cakes, and sweet treats, we recommend ordering 24 to 48 hours in advance. For custom theme cakes and wedding cakes, we require at least 5 to 7 days notice to ensure proper design preparation and planning.'
  },
  {
    question: 'Do you create fully custom cake designs?',
    answer: 'Absolutely! Custom designs are our specialty. You can use our "Customize Your Cake" section below to select your desired flavors, size, color palettes, message, and decorations. You can also upload reference photos or contact us via WhatsApp to sketch a design together.'
  },
  {
    question: 'Do you offer home delivery? What are the charges?',
    answer: 'Yes, we offer temperature-controlled delivery to ensure your cakes arrive in immaculate, chilled condition. Delivery is free within a 5-mile radius, and a small flat-rate distance fee is applied for deliveries beyond that.'
  },
  {
    question: 'Can I choose my own cake flavor and filling combinations?',
    answer: 'Yes! We offer a wide range of premium flavors, such as Royale Belgian Chocolate, Madagascar Vanilla, Salted Caramel Crunch, Red Velvet Blush, and fresh seasonal fruit fillings. You can select your perfect combination during checkout or on the custom form.'
  },
  {
    question: 'Which payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and secure online transfers. For bespoke wedding cakes, a 50% booking deposit is required, with the remaining balance due 3 days before the event.'
  }
];
