'use client';

import * as motion from 'motion/react-client';
import { team } from '../../data/teamData';
import { useRef } from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const sliderRef = useRef(null);

  const scrollBySlide = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth; // one viewport width slide
    container.scrollTo({
      left: container.scrollLeft + (direction === 'next' ? slideWidth : -slideWidth),
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .float-card { animation: float 6s ease-in-out infinite; }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <section id="team" className="py-20 relative overflow-hidden">
        {/* Background image and dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/gradient2.png)' }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Header */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Leadership Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Meet the experienced professionals who drive our success and commitment to excellence.</p>
          </motion.div>
        </div>

        {/* Controls */}
        <button
          aria-label="Previous team member"
          onClick={() => scrollBySlide('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M15.78 4.22a.75.75 0 0 1 0 1.06L9.06 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd"/></svg>
        </button>
        <button
          aria-label="Next team member"
          onClick={() => scrollBySlide('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M8.22 19.78a.75.75 0 0 1 0-1.06L14.94 12 8.22 5.28a.75.75 0 1 1 1.06-1.06l7.25 7.25a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"/></svg>
        </button>

        {/* Slider - horizontal scroll with snap, narrow photo, wide text */}
        <div className="relative z-10">
          <div
            ref={sliderRef}
            className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 px-4 sm:px-6 lg:px-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="snap-center shrink-0 w-full md:w-[900px] max-w-[95vw]"
              >
                <div className="transition-transform duration-500 will-change-transform hover:-translate-y-1">
                  <div className="float-card rounded-xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="h-72 md:h-96 md:col-span-2 relative">
                        <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 900px" />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center md:col-span-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-red-200 font-medium mb-4">{member.position}</p>
                        <p className="text-gray-200 leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;