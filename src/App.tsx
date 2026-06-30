import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Customizer from './components/Customizer';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import SpecialOffers from './components/SpecialOffers';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Product } from './types';

export default function App() {
  const [selectedProductForCustomization, setSelectedProductForCustomization] = useState<Product | null>(null);

  const handleOrderProduct = (product: Product) => {
    setSelectedProductForCustomization(product);
  };

  const handleScrollToSection = (selector: string) => {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      const offset = 80; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased bg-cream-50" id="app-wrapper">
      {/* 1. Header / Navigation */}
      <Header
        onOpenCustomizer={() => handleScrollToSection('#cake-customizer')}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenCustomizer={() => handleScrollToSection('#cake-customizer')}
          onViewCakes={() => handleScrollToSection('#menu')}
        />

        {/* 3. About Us Section */}
        <About />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Products Catalog with Category Filters */}
        <Products onOrderProduct={handleOrderProduct} />

        {/* 6. Interactive Custom Cake Section */}
        <Customizer
          prepopulatedProduct={selectedProductForCustomization}
          onClearPrepopulate={() => setSelectedProductForCustomization(null)}
        />

        {/* 7. Portfolio Gallery (Lightbox & Masonry) */}
        <Gallery />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. How It Works (Order steps) */}
        <HowItWorks />

        {/* 10. Promotional Special Offers Banner */}
        <SpecialOffers />

        {/* 11. Frequently Asked Questions (Interactive accordions) */}
        <FAQ />

        {/* 12. Contact details & Inquiry Form */}
        <Contact />
      </main>

      {/* 13. Deep Footer */}
      <Footer />
    </div>
  );
}
