import React from 'react';
import { motion } from 'motion/react';

export default function AnimatedContent({
  children,
  direction = 'up',
  distance = 30,
  delay = 0,
  duration = 0.6,
  className = '',
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        filter: 'blur(4px)'
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
