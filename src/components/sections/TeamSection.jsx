'use client';

import * as motion from 'motion/react-client';
import { team } from '../../data/teamData';

const TeamSection = () => {
  return (
    <>
      <style jsx>{`
        .team-card {
          border: 4px solid rgba(220, 38, 38, 0.4);
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .team-card:hover {
          border-color: rgba(220, 38, 38, 0.7);
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 25px 50px -12px rgba(220, 38, 38, 0.4);
        }
      `}</style>
      <section id="team" className="py-20 relative overflow-hidden">
        {/* Main gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 1))'
          }}
        ></div>
        
        {/* Top Left Red Accent */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 opacity-60 filter blur-3xl"
          style={{
            background: 'rgba(225, 0, 55, 0.3)',
            transform: 'translate(-25%, -25%)'
          }}
        ></div>
        
        {/* Bottom Right Red Accent */}
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 opacity-60 filter blur-3xl"
          style={{
            background: 'rgba(220, 38, 38, 0.3)',
            transform: 'translate(25%, 25%)'
          }}
        ></div>
        
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet the experienced professionals who drive our success and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group team-card"
            >
              {/* Gradient Background Layers */}
              <div 
                className="absolute inset-0 -z-10 transition-all duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(145deg, rgba(220, 38, 38, 0.2), rgba(0, 0, 0, 0.8), rgba(220, 38, 38, 0.3))'
                }}
              ></div>
              
              {/* Additional gradient layer for depth */}
              <div 
                className="absolute inset-0 -z-10 transition-all duration-300 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(315deg, rgba(225, 0, 55, 0.15), transparent, rgba(220, 38, 38, 0.1))'
                }}
              ></div>
              
              {/* Hover gradient overlay */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(225, 0, 55, 0.3), transparent, rgba(220, 38, 38, 0.4))'
                }}
              ></div>
              
              {/* Top Right Glowing Orb */}
              <div 
                className="absolute top-0 right-0 -z-10 transition-all duration-300 group-hover:scale-110"
                style={{
                  width: '320px',
                  height: '320px',
                  background: 'rgba(220, 38, 38, 0.2)',
                  borderRadius: '50%',
                  filter: 'blur(100px)',
                  transform: 'translate(50%, -50%)'
                }}
              ></div>
              
              {/* Bottom Left Glowing Orb */}
              <div 
                className="absolute top-0 left-0 -z-10 transition-all duration-300 group-hover:scale-110"
                style={{
                  width: '320px',
                  height: '320px',
                  background: 'rgba(220, 38, 38, 0.2)',
                  borderRadius: '50%',
                  filter: 'blur(100px)',
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-semibold text-white mb-1 transition-all duration-300 group-hover:text-red-200"
                      whileHover={{ y: -2 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="font-medium mb-3 text-lg text-white transition-all duration-300 group-hover:text-red-300"
                      whileHover={{ y: -2 }}
                    >
                      {member.position}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200"
                      whileHover={{ y: -1 }}
                    >
                      {member.bio}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default TeamSection;