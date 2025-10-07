'use client';

import * as motion from 'motion/react-client';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to ship your freight? Contact our team for reliable transportation solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: '#c3002e' }}>(555) 123-4567</div>
              <div className="text-gray-300 text-sm">Transportation Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: '#c3002e' }}>(555) 987-6543</div>
              <div className="text-gray-300 text-sm">Driver Employment</div>
            </div>
            <div className="text-center">
              <div className="text-red-500 text-2xl font-bold mb-2">info@nomadexpress.com</div>
              <div className="text-gray-300 text-sm">General Inquiries</div>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('quote-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-white px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            GET FREE QUOTE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
