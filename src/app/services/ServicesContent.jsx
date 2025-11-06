'use client';

import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_TYPES } from '../../utils/constants';

export default function ServicesContent() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <Section background="dark" className="pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(/logistics.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <Container className="relative z-10">
          <PageHeader 
            title="Transportation & Freight Services"
            subtitle="Comprehensive logistics solutions tailored to your needs"
          />
          <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center">
            We specialize in flatbed, step deck, refrigerated, and specialized freight services. 
            Primarily transporting machinery, steel, building materials, and industrial equipment across all 48 states.
          </p>
        </Container>
      </Section>

      {/* Main Content with Animated Background */}
      <div className="bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Gradient - Whole Background - Optimized */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse will-change-opacity" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>

        {/* Services Grid */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_TYPES.map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`}>
                  <Card className="group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={service.icon} 
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300 will-change-transform"
                        loading={index < 3 ? "eager" : "lazy"}
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6 bg-black/40 border-t border-white/10">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                        Learn More →
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <div className="text-center bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg p-12 border border-red-600/30">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our team can create a logistics solution tailored to your specific requirements
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

