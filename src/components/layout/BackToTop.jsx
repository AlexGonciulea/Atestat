import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-4 bg-cosmic-cyan/20 border border-cosmic-cyan/40 rounded-full backdrop-blur-sm hover:bg-cosmic-cyan/30 transition-colors duration-300 group"
          aria-label="Înapoi sus"
        >
          <ArrowUp className="w-5 h-5 text-cosmic-cyan group-hover:text-stellar-white transition-colors duration-300" />
          <div className="absolute inset-0 rounded-full bg-cosmic-cyan/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
