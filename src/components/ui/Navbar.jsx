'use client';

import * as motion from 'motion/react-client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Services', action: () => scrollToSection('services') },
    { name: 'Our Team', action: () => scrollToSection('team') },
    { name: 'Careers', action: () => scrollToSection('careers') },
    { name: 'Contact Us', action: () => scrollToSection('contact') }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      ><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 flex items-center space-x-3"
            >
              <Image src="/NEG Logo gradient white.png" alt="Nomad Express Group Logo" width={112} height={32} priority />
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={item.action ? (e) => { e.preventDefault(); item.action(); } : undefined}
                    className="text-white px-3 py-2 text-sm font-medium transition-all duration-200 relative group cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#c3002e' }}></span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('quote-form')}
                className="btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Get a Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('careers')}
                className="border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded-lg font-medium transition-all duration-200"
              >
                Drive With Us
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none focus:text-white transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md border-l border-white/10 pt-16"
          >
            <div className="p-6">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={item.action ? (e) => { e.preventDefault(); item.action(); } : () => setIsMobileMenuOpen(false)}
                    className="block text-white py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <button
                  className="w-full text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
                  onClick={(e) => {
                    scrollToSection('quote-form');
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    backgroundColor: '#c3002e',
                    background: 'linear-gradient(145deg, #c3002e, #a40025)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(145deg, #e10037, #c3002e)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(145deg, #c3002e, #a40025)';
                  }}
                >
                  Get a Quote
                </button>
                <button
                  onClick={() => scrollToSection('careers')}
                  className="w-full border border-white text-white hover:bg-white hover:text-black px-4 py-3 rounded-lg font-medium"
                >
                  Drive With Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
