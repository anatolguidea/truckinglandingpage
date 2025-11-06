'use client';

import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Image from 'next/image';
import { COMPANY_INFO } from '../../utils/constants';

export default function AboutContent() {
  const values = [
    {
      title: 'Safety First',
      description: 'Our commitment to safety is unwavering. We maintain strict compliance with DOT regulations and invest heavily in driver training and equipment maintenance.'
    },
    {
      title: 'Reliability',
      description: 'We understand that your business depends on timely delivery. Our track record speaks for itself - 99% on-time delivery rate.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest pricing, and transparent processes. No hidden fees, no surprises.'
    },
    {
      title: 'Customer Service',
      description: 'Your success is our success. We go above and beyond to ensure your freight arrives safely and on time.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded' },
    { year: '2020', event: '50+ Trucks in Fleet' },
    { year: '2022', event: 'Expanded to 48 States' },
    { year: '2023', event: '1000+ Satisfied Clients' },
    { year: '2024', event: 'Industry Recognition' }
  ];

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
            title="About Nomad Express Group"
            subtitle="Your trusted partner in freight transportation for almost a decade"
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

        {/* Company Story */}
        <section className="py-24 relative">
          <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in {COMPANY_INFO.established}, Nomad Express Group began with a simple mission: 
                  to provide reliable, professional freight transportation services while building lasting 
                  relationships with both drivers and customers.
                </p>
                <p>
                  What started as a small operation has grown into a trusted name in the trucking industry, 
                  with a fleet of over 50 trucks serving clients across all 48 contiguous states. Our 
                  success is built on the foundation of safety, reliability, and exceptional customer service.
                </p>
                <p>
                  Today, we're recognized as one of the top for-hire carriers in the industry, with a 
                  team of professionals who bring decades of transportation experience to every shipment.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="/truck0.jpg" 
                alt="Nomad Express Group Fleet" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-24 relative">
          <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-black/40 border border-white/10 p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  {value.title === 'Safety First' && (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {value.title === 'Reliability' && (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {value.title === 'Transparency' && (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                  {value.title === 'Customer Service' && (
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-24 relative">
          <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-300 text-lg">Milestones in our growth and success</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-900 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="w-full md:w-1/2 p-6">
                    <div>
                      <div className="text-red-500 font-bold text-2xl mb-2">{milestone.year}</div>
                      <div className="text-white text-lg">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 relative">
          <Container className="relative z-10">
          <div className="text-center bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg p-12 border border-red-600/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Experience the difference that professional service makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/quote"
                className="btn-primary text-white px-8 py-3 rounded-lg font-semibold inline-block"
              >
                Get a Quote
              </a>
              <a 
                href="/#team"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold inline-block transition-all"
              >
                Meet Our Team
              </a>
            </div>
          </div>
          </Container>
        </section>
      </div>

      <Footer />
    </div>
  );
}

