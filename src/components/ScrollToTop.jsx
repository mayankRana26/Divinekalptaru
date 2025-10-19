// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Scroll Event Listener
  const toggleVisibility = () => {
    // 300px se zyada scroll karne par button dikhao
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 2. Scroll Logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup function: Event listener ko remove karta hai
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          // Button Styling: Fixed position, bottom right, green theme
          className="fixed bottom-10 right-6 cursor-pointer z-50 p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
          
          // Framer Motion Animation: Fade in and scale up smoothly
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;