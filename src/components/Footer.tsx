import React, { useState } from 'react';
import { Sparkles, Mail, Send, CheckCircle, ArrowUp, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-choco-900 text-cream-100 pt-20 pb-10 border-t border-choco-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-choco-800" id="footer-top-grid">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gold-500 flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-widest text-white block">
                  BAKSTREY
                </span>
                <span className="block text-[8px] uppercase tracking-[0.25em] text-gold-400 font-medium -mt-1">
                  Luxury Cake Atelier
                </span>
              </div>
            </div>

            <p className="text-xs text-choco-300 leading-relaxed max-w-sm">
              Freshly baked with pure love and premium ingredients. Creating custom masterpieces for birthday cake moments, grand weddings, and sweet daily indulgences.
            </p>

            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-choco-800 hover:bg-gold-500 text-cream-100 hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-choco-800 hover:bg-gold-500 text-cream-100 hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-choco-800 hover:bg-gold-500 text-cream-100 hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-choco-300">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-gold-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-gold-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleLinkClick(e, '#why-us')} className="hover:text-gold-300 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-gold-300 transition-colors">Our Menu</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-gold-300 transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">Categories</h4>
            <ul className="space-y-2.5 text-xs text-choco-300">
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-gold-300 transition-colors">Custom Birthday Cakes</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-gold-300 transition-colors">Luxury Wedding Tiers</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-gold-300 transition-colors">Mini Bento Cakes</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-gold-300 transition-colors">Cupcakes & Brownies</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')} className="hover:text-gold-300 transition-colors">Gourmet Cookies & Pastries</a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">Boutique Hours</h4>
            <div className="space-y-3 text-xs text-choco-300">
              <div>
                <span className="block font-semibold text-white">Mon - Sat:</span>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div>
                <span className="block font-semibold text-white">Sunday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="pt-2 border-t border-choco-800">
                <p className="font-semibold text-white">Contact:</p>
                <p className="mt-0.5">orders@bakstrey.com</p>
                <p className="mt-0.5">+1 (310) 555-0182</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">Newsletter</h4>
            <p className="text-xs text-choco-300 leading-normal">
              Subscribe to receive recipe insights, holiday discounts, and early menus.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-choco-850 border border-choco-700 rounded-full px-4 py-2.5 text-xs text-white placeholder-choco-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 w-7.5 h-7.5 rounded-full bg-gold-500 text-choco-950 flex items-center justify-center hover:bg-gold-400 transition-colors cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-bottom">
          <p className="text-xs text-choco-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bakstrey Luxury Cake Atelier. All rights reserved. Made with love & premium ingredients.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-full bg-choco-800 text-cream-100 hover:bg-gold-500 hover:text-white transition-colors cursor-pointer shadow flex items-center gap-1.5 text-xs font-bold"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
