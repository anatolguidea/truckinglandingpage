'use client';

import * as motion from 'motion/react-client';
import Counter from '../ui/Counter';

const DriverSection = () => {
  const benefits = [
    'Competitive pay and benefits',
    'Modern, well-maintained equipment',
    'Excellent home time',
    'Supportive dispatch team',
    'Career advancement opportunities',
    'Safety bonuses and recognition'
  ];

  return (
    <section 
      id="careers" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#000000',
        colorScheme: 'dark',
        background: '#000000'
      }}
    >
      {/* Multiple dark overlays to ensure complete darkness */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      ></div>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      ></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/driver-bg.jpg)' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="shadow-lg overflow-hidden relative rounded-xl"
          style={{
            border: '4px solid rgba(220, 38, 38, 0.4)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            color: '#ffffff'
          }}
        >
          {/* Gradient Background Layers */}
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'linear-gradient(145deg, rgba(220, 38, 38, 0.1), rgba(0, 0, 0, 0.9), rgba(220, 38, 38, 0.2))'
            }}
          ></div>
          
          {/* Top Right Glowing Orb */}
          <div 
            className="absolute top-0 right-0 -z-10"
            style={{
              width: '320px',
              height: '320px',
              background: 'rgba(220, 38, 38, 0.15)',
              borderRadius: '50%',
              filter: 'blur(100px)',
              transform: 'translate(50%, -50%)'
            }}
          ></div>
          
          {/* Bottom Left Glowing Orb */}
          <div 
            className="absolute bottom-0 left-0 -z-10"
            style={{
              width: '320px',
              height: '320px',
              background: 'rgba(220, 38, 38, 0.15)',
              borderRadius: '50%',
              filter: 'blur(100px)',
              transform: 'translate(-50%, 50%)'
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: '#ffffff' }}
                >
                  What Is It Like to Drive for Nomad Express Group?
                </h2>
                <p 
                  className="text-lg mb-8 leading-relaxed"
                  style={{ color: 'rgba(209, 213, 219, 1)' }}
                >
                  We think you'll appreciate the the way we do business at Nomad Express Group. In the world of truck driving jobs, 
                  it's not hard to find a mega carrier who will promise you everything while delivering very little. But that's not us.
                </p>
                <p 
                  className="text-lg mb-8 leading-relaxed"
                  style={{ color: 'rgba(209, 213, 219, 1)' }}
                >
                  Today, we have grown to a fleet of over 150 trucks, and have been recognized by multiple sources as one of the 
                  top for hire companies in the industry. We have worked to build a company of professionals with decades of 
                  experience in transportation, and the most satisfied fleet of professional drivers in the business.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: '#c3002e' }}
                    >
                      <Counter end={150} />+
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: '#ffffff' }}
                    >
                      Trucks in Fleet
                    </div>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: '#c3002e' }}
                    >
                      <Counter end={200} />+
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: '#ffffff' }}
                    >
                      Professional Drivers
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                    style={{ 
                      color: '#ffffff',
                      borderColor: '#ffffff',
                      border: '2px solid #ffffff',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#ffffff';
                      e.target.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#ffffff';
                    }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:text-right"
              >
                <div className="inline-block relative">
                  <div 
                    className="rounded-lg p-8 backdrop-blur-sm"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#ffffff'
                    }}
                  >
                    <h3 
                      className="text-2xl font-bold mb-6"
                      style={{ color: '#ffffff' }}
                    >
                      Why Drive With Us?
                    </h3>
                    <ul className="space-y-4 text-left">
                      {benefits.map((benefit, index) => (
                        <li 
                          key={index} 
                          className="flex items-center"
                          style={{ color: 'rgba(209, 213, 219, 1)' }}
                        >
                          <span 
                            className="w-2 h-2 rounded-full mr-3" 
                            style={{ backgroundColor: '#c3002e' }}
                          ></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: '#c3002e',
                        color: '#ffffff',
                        background: 'linear-gradient(145deg, #c3002e, #a40025)',
                        border: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(145deg, #e10037, #c3002e)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(145deg, #c3002e, #a40025)';
                      }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;