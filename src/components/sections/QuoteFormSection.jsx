'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '24/09/2025',
    zip: '',
    weight: '',
    org: '',
    truck: '',
    commodity: '',
    message: '',
    trucktype: 'TL (Truck Load)',
    scales: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '24/09/2025',
        zip: '',
        weight: '',
        org: '',
        truck: '',
        commodity: '',
        message: '',
        trucktype: 'TL (Truck Load)',
        scales: false
      });
    }, 3000);
  };

  return (
    <section id="quote-form" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/truck0.jpg)' }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Request a Shipping Quote
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application sent successfully!</h3>
              <p className="text-gray-600">Our manager will contact you shortly to clarify the details of cooperation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="24/09/2025"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  placeholder="Origin ZIP code"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="Weight"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="text"
                  name="org"
                  value={formData.org}
                  onChange={handleInputChange}
                  placeholder="org"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <select
                  name="truck"
                  value={formData.truck}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="" disabled>Trailer Style Request</option>
                  <option value="Local / Regional">Local / Regional</option>
                  <option value="Full Load">Full Load</option>
                  <option value="Flatbed">Flatbed</option>
                  <option value="Refrigerated">Refrigerated</option>
                  <option value="Step Deck / Specialized">Step Deck / Specialized</option>
                  <option value="TL (Truck Load)">TL (Truck Load)</option>
                  <option value="LTL (Less Than Truck Load)">LTL (Less Than Truck Load)</option>
                </select>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  name="commodity"
                  value={formData.commodity}
                  onChange={handleInputChange}
                  placeholder="Commodity"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Special instructions"
                  required
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <select
                  name="trucktype"
                  value={formData.trucktype}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 bg-white border-0 rounded text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="TL (Truck Load)">TL (Truck Load)</option>
                  <option value="LTL (Less Than Truck Load)">LTL (Less Than Truck Load)</option>
                </select>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-white py-2.5 px-4 rounded font-semibold text-sm transition-all duration-200"
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
                  Request a Quote
                </motion.button>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked={formData.scales}
                    onChange={handleInputChange}
                    required
                    className="mt-0.5 w-3 h-3 text-red-600 bg-white border-gray-300 rounded focus:ring-red-500"
                  />
                  <label htmlFor="scales" className="text-xs text-white leading-relaxed">
                    I consent to receive SMS from NOMAD EXPRESS GROUP. Reply STOP to opt-out; Reply HELP; Message and data rates apply; Messaging frequency may vary. 
                    <a href="#" className="text-white hover:text-gray-300 underline ml-1">Privacy Policy</a>
                    <span className="mx-1"></span>
                    <a href="#" className="text-white hover:text-gray-300 underline">Terms & conditions</a>
                  </label>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteFormSection;