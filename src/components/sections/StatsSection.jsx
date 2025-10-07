'use client';

import * as motion from 'motion/react-client';
import Counter from '../ui/Counter';
import { stats } from '../../data/statsData';

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F6EE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-700 text-lg">
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
              <div className="text-gray-900 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default StatsSection;
