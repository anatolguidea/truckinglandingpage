'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ROUTES } from '../../utils/constants';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-black to-gray-900">
      {/* Optimized Background - CSS animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 cta-zoom"
        style={{ 
          backgroundImage: 'url(/truck0.jpg)',
          willChange: 'transform',
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 via-black/80 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(195, 0, 46, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(195, 0, 46, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Get Started Today</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Move
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
              Your Freight?
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a free quote today and experience the reliability and professionalism that sets 
            Nomad Express Group apart.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href={ROUTES.quote}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(195, 0, 46, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-[#c3002e] to-[#a40025] text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a Free Quote
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff1744] to-[#c3002e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </Link>
            
            <Link href={ROUTES.careers}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Drive With Us
              </motion.button>
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Hidden Fees</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

