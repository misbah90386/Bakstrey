export interface Product {
  id: string;
  name: string;
  category: 'Birthday Cakes' | 'Wedding Cakes' | 'Anniversary Cakes' | 'Cupcakes' | 'Brownies' | 'Cookies' | 'Pastries' | 'Desserts' | 'Bento Cakes' | 'Customized Cakes';
  description: string;
  price: number;
  image: string;
  isSignature?: boolean;
  rating?: number;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CustomCakeOrder {
  flavor: string;
  size: string;
  theme: string;
  color: string;
  message: string;
  decorations: string[];
  name: string;
  phone: string;
  email: string;
  date: string;
  deliveryMethod: 'delivery' | 'pickup';
  address?: string;
  specialInstructions?: string;
}
