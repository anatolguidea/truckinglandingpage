'use client';

import { motion } from 'motion/react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Image from 'next/image';
import { FLEET_TYPES } from '../../utils/constants';

export default function FleetContent() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <Section background="dark" className="pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(/truck0.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <Container className="relative z-10">
          <PageHeader 
            title="Our Fleet"
            subtitle="Modern equipment, expert maintenance, and reliable service"
          />
          <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg">
            <p className="mb-4">
              Our fleet consists of over 50 well-maintained trucks and trailers, equipped with the latest 
              technology for safety, tracking, and efficiency.
            </p>
            <p>
              We maintain strict maintenance schedules and safety standards to ensure your freight arrives 
              safely and on time, every time.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content with Animated Background */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Gradient - Whole Background - Optimized */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>

        {/* Fleet Types */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {FLEET_TYPES.map((equipment, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                  }}
                  className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer will-change-transform"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 will-change-transform"
                    style={{ backgroundImage: `url(${equipment.image})` }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50 group-hover:from-black/85 group-hover:via-black/60 group-hover:to-black/40 transition-all duration-300"></div>
                  
                  {/* Red Accent Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {equipment.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {equipment.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Specifications:</h4>
                      <ul className="space-y-1">
                        {equipment.specs.slice(0, 3).map((spec, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 flex-shrink-0"></span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Simplified shine effect for performance */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent will-change-transform pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Fleet Features */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Fleet Technology & Safety</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">GPS Tracking</h3>
                      <p className="text-gray-300">Real-time location tracking for all shipments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Regular Maintenance</h3>
                      <p className="text-gray-300">Preventive maintenance programs ensure reliability</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Safety Standards</h3>
                      <p className="text-gray-300">DOT compliant with excellent safety ratings</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Performance Monitoring</h3>
                      <p className="text-gray-300">Continuous monitoring and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/truck0.jpg" 
                  alt="Fleet Technology"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <div className="text-center bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg p-12 border border-red-600/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Ship?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Request a quote and experience our reliable fleet in action
              </p>
              <Button href="/quote" variant="primary" size="lg">
                Request a Quote
              </Button>
            </div>
          </Container>
        </section>
      </div>

      <Footer />
    </div>
  );
}

