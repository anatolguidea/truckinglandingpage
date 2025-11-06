'use client';

import { useState } from 'react';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import PageHeader from '../../components/ui/PageHeader';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { COMPANY_INFO } from '../../utils/constants';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            title="Contact Us"
            subtitle="Get in touch with our team - We're here to help"
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

        {/* Contact Info */}
        <section className="py-24 relative">
          <Container className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-black/40 border border-white/10 p-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transportation Services</h3>
                <a 
                  href={`tel:${COMPANY_INFO.phone.transportation.replace(/[()-\s]/g, '')}`}
                  className="text-red-400 hover:text-red-300 text-lg font-semibold"
                >
                  {COMPANY_INFO.phone.transportation}
                </a>
              </Card>
              <Card className="bg-black/40 border border-white/10 p-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Driver Employment</h3>
                <a 
                  href={`tel:${COMPANY_INFO.phone.employment.replace(/[()-\s]/g, '')}`}
                  className="text-red-400 hover:text-red-300 text-lg font-semibold"
                >
                  {COMPANY_INFO.phone.employment}
                </a>
              </Card>
              <Card className="bg-black/40 border border-white/10 p-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-red-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-red-400 hover:text-red-300 text-lg font-semibold"
                >
                  {COMPANY_INFO.email}
                </a>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-black/40 border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>

              {/* Office Info */}
              <div className="space-y-6">
                <Card className="bg-black/40 border border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Office Address</h3>
                  <div className="text-gray-300 space-y-2">
                    <p>{COMPANY_INFO.address.street}</p>
                    <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</p>
                  </div>
                </Card>

                <Card className="bg-black/40 border border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Hours of Operation</h3>
                  <div className="text-gray-300 space-y-2">
                    <p>{COMPANY_INFO.hours.weekdays}</p>
                    <p>{COMPANY_INFO.hours.saturday}</p>
                    <p>{COMPANY_INFO.hours.sunday}</p>
                  </div>
                </Card>

                <Card className="bg-black/40 border border-white/10 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button href="/quote" variant="primary" className="w-full">
                      Request a Quote
                    </Button>
                    <Button href="/careers" variant="secondary" className="w-full">
                      Driver Application
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <Footer />
    </div>
  );
}

