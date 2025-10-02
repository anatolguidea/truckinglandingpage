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
    <>
      <style jsx>{`
        .bg-primary\/5 {
          background-color: rgba(220, 38, 38, 0.05);
        }
        .bg-primary\/10 {
          background-color: rgba(220, 38, 38, 0.1);
        }
        .bg-primary\/15 {
          background-color: rgba(220, 38, 38, 0.15);
        }
        .bg-primary\/20 {
          background-color: rgba(220, 38, 38, 0.2);
        }
        .border-primary\/40 {
          border-color: rgba(220, 38, 38, 0.4);
        }
        .bg-card {
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
        }
        .text-card-foreground {
          color: white;
        }
      `}</style>
      <section id="careers" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/driver-bg.jpg)' }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="shadow-lg border-4 border-primary/40 overflow-hidden relative rounded-xl bg-card text-card-foreground">
             {/* Gradient Background Layers */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/20 -z-10"></div>
             
             {/* Top Right Glowing Orb */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full -translate-y-1/2 translate-x-1/2 filter blur-3xl -z-10"></div>
             
             {/* Bottom Left Glowing Orb */}
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full translate-y-1/2 -translate-x-1/2 filter blur-3xl -z-10"></div>
             
             {/* Content */}
             <div className="relative z-10 p-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Is It Like to Drive for Nomad Express Group?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We think you&apos;ll appreciate the way we do business at Nomad Express Group. In the world of truck driving jobs, 
              it&apos;s not hard to find a mega carrier who will promise you everything while delivering very little. But that&apos;s not us.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
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
                <div className="text-white text-sm">Trucks in Fleet</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: '#c3002e' }}
                >
                  <Counter end={200} />+
                </div>
                <div className="text-white text-sm">Professional Drivers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
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
                Drive with Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
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
              <div className="bg-black/50 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Why Drive With Us?</h3>
                <ul className="space-y-4 text-left">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#c3002e' }}></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
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
    </>
  );
};

export default DriverSection;
