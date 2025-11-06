'use client';

import { useState } from 'react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Image from 'next/image';
import * as motion from 'motion/react-client';

const galleryImages = [
  { src: '/truck0.jpg', category: 'fleet', title: 'Fleet' },
  { src: '/flatbed.jpg', category: 'fleet', title: 'Flatbed Truck' },
  { src: '/refrigerated.jpg', category: 'fleet', title: 'Refrigerated Truck' },
  { src: '/heavyhaul.jpg', category: 'fleet', title: 'Heavy Haul' },
  { src: '/logistics.jpg', category: 'facilities', title: 'Logistics' },
  { src: '/driver-bg.jpg', category: 'team', title: 'Professional Driver' },
  { src: '/team1.jpg', category: 'team', title: 'Our Team' },
  { src: '/team2.jpg', category: 'team', title: 'Team Member' },
  { src: '/team3.jpg', category: 'team', title: 'Team Member' },
  { src: '/team4.jpg', category: 'team', title: 'Team Member' },
  { src: '/truck0.jpg', category: 'on-the-road', title: 'On the Road' },
  { src: '/flatbed.jpg', category: 'on-the-road', title: 'Delivery' },
];

const categories = ['all', 'fleet', 'team', 'on-the-road', 'facilities'];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
            title="Photo Gallery"
            subtitle="A visual journey through our operations, fleet, and team"
          />
        </Container>
      </Section>

      {/* Main Content with Animated Background */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Gradient - Whole Background - Optimized */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>

        {/* Filter Buttons */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 capitalize ${
                    activeCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-black/40 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category === 'all' ? 'All Photos' : category.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300 will-change-transform"
                    loading={index < 6 ? "eager" : "lazy"}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </div>

      <Footer />
    </div>
  );
}

