'use client';

import * as motion from 'motion/react-client';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/truck0.jpg)' }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-6"
        >
          YOUR TRUSTED<br />
          <span 
            className="font-bold"
            style={{
              background: `linear-gradient(to right, #e10037, #6a0011)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >FLATBED</span><br />
          TRUCKING COMPANY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light"
        >
          Reliable freight transportation with professional drivers and modern fleet.
          Your cargo, our commitment.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const element = document.getElementById('quote-form');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
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
          GET A QUOTE
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
