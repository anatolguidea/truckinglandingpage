'use client';

import * as motion from 'motion/react-client';
import Counter from '../ui/Counter';
import { stats } from '../../data/statsData';

const StatsSection = () => {
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
      <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="shadow-lg border-4 border-primary/40 overflow-hidden relative rounded-xl bg-card text-card-foreground">
          {/* Gradient Background Layers)}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/20 -z-10"></div>
          
          {/* Top Right Glowing Orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full -translate-y-1/2 translate-x-1/2 filter blur-3xl -z-10"></div>
          
          {/* Bottom Left Glowing Orb */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full translate-y-1/2 -translate-x-1/2 filter blur-3xl -z-10"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300 text-lg">
                Our numbers speak for our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div 
                    className="text-4xl sm:text-5xl font-bold mb-2"
                    style={{ color: '#c3002e' }}
                  >
                    <Counter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <div className="text-white text-sm sm:text-base font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default StatsSection;
