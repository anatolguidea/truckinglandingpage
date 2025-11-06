'use client';

import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

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
    },
    {
      quote: 'Outstanding service from start to finish. They handled our time-sensitive shipment with precision and kept us informed every step of the way.',
      author: 'Emily Rodriguez',
      company: 'Tech Logistics Solutions',
      role: 'Supply Chain Director',
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let isPaused = false;
    const scrollSpeed = 0.6; // pixels per frame - adjust for speed

    const getCardWidth = () => {
      const firstCard = container.querySelector('.testimonial-card');
      if (!firstCard) return 0;
      const cardRect = firstCard.getBoundingClientRect();
      return cardRect.width;
    };

    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const cardWidth = getCardWidth();
      const gap = 32; // gap-8 = 32px
      const scrollDistance = cardWidth + gap;
      const totalWidth = scrollDistance * testimonials.length;

      scrollPosition += scrollSpeed;
      
      // Reset position seamlessly when we've scrolled through one set
      if (scrollPosition >= totalWidth) {
        scrollPosition = scrollPosition - totalWidth;
      }
      
      container.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Wait for layout to settle before starting animation
    const timeoutId = setTimeout(() => {
      animate();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials.length]);

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

        {/* Horizontal Scrollable Carousel */}
        <div className="relative mb-12 overflow-hidden px-4">
          {/* Left fade gradient - transparent to show background */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-transparent z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
          }}></div>
          {/* Right fade gradient - transparent to show background */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-transparent to-transparent z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to left, transparent 0%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 100%)',
          }}></div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-hidden scrollbar-hide relative z-0"
            style={{
              scrollBehavior: 'auto',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`testimonial-${index}`}
                className="testimonial-card flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19.2px)] min-w-[280px] max-w-[380px] group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-red-500/10 hover:scale-[1.02] transition-all duration-300 will-change-transform focus-within:border-red-500/50 focus-within:bg-white/10 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500/30 focus-within:ring-offset-2 focus-within:ring-offset-black"
                tabIndex={0}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

