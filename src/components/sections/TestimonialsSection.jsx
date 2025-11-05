'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ROUTES } from '../../utils/constants';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Nomad Express Group has been our go-to carrier for over 5 years. Their reliability and professionalism are unmatched.',
      author: 'Sarah Johnson',
      company: 'ABC Manufacturing',
      role: 'Logistics Manager',
      rating: 5
    },
    {
      quote: 'The best transportation partner we\'ve worked with. On-time delivery, excellent communication, and fair pricing.',
      author: 'Michael Chen',
      company: 'Steel Works Inc.',
      role: 'Operations Director',
      rating: 5
    },
    {
      quote: 'Professional drivers, modern equipment, and outstanding customer service. Highly recommended!',
      author: 'Robert Martinez',
      company: 'Construction Supply Co.',
      role: 'Procurement Manager',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6"
          >
            <span>Testimonials</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-300 text-xl">
            Trusted by hundreds of satisfied customers across the nation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-200 will-change-transform"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-red-500/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-bold text-lg mb-1">{testimonial.author}</p>
                <p className="text-red-400 text-sm font-medium mb-1">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-2xl"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href={ROUTES.contact}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Read More Testimonials
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

