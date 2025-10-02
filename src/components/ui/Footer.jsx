'use client';

import * as motion from 'motion/react-client';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Nomad Express Group Logo"
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-lg">Nomad Express Group</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your trusted partner in freight transportation for over 10 years. Professional service, reliable delivery.
            </p>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Transportation Services:</span><br />
                Call (555) 123-4567
              </div>
              <div className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Driver Employment:</span><br />
                Call (555) 987-6543
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Flatbed Transport</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refrigerated Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heavy Haul</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Driver Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <motion.a
                href="tel:5551234567"
                whileHover={{ scale: 1.05 }}
                className="block text-white px-4 py-2 rounded text-sm font-medium text-center transition-all duration-200"
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
                CALL NOW
              </motion.a>
              <motion.a
                href="#quote-form"
                whileHover={{ scale: 1.05 }}
                className="block border border-white text-white hover:bg-white hover:text-black px-4 py-2 rounded text-sm font-medium text-center"
              >
                Get Quote
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Nomad Express Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
