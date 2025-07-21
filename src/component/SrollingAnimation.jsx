import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimationComponent = () => {
  return (
    <div>
    
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Scroll Down!</h1>
      </div>

      {/* Animating element */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          height: '50vh',
          backgroundColor: '#3498db',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2em',
          margin: '50px 0'
        }}
      >
        <h2>This element animates on scroll!</h2>
      </motion.div>

      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>End of Page</h1>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;