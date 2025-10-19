// src/components/InstructorSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// --- Framer Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.3
    }
  }
};

function InstructorSection() {
  return (
    <motion.section
      // Background: Green-100 to match overall theme
      className="bg-green-100 py-20 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          className="text-4xl font-bold mb-14 text-green-700"
          variants={sectionVariants}
        >
          Meet Your <span className="text-black">Lead Instructor</span>
        </motion.h2>

        {/* Instructor Card Container */}
        <motion.div
          className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden group cursor-pointer"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
        >
          {/* Instructor Image */}
          <img 
            src="/instructor1.jpg" 
            alt="Rishav Rana, Vinyasa Flow and body alignment instructor"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Text Overlay (Image ke bottom se thoda oopar) */}
          <div 
            className="absolute inset-x-0 bottom-0 py-6 px-4 
                       bg-gradient-to-t from-black/80 to-transparent 
                       text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-1">
              Rishav Rana
            </h3>
            <p className="text-lg text-green-400">
              Vinyasa Flow and body alignment instructor
            </p>
          </div>
          
        </motion.div>
        
        <p className="mt-8 text-lg text-gray-700 max-w-2xl mx-auto">
          Rishav brings years of practice rooted in traditional principles, specializing in dynamic Vinyasa sequencing and precise anatomical alignment to ensure a safe and transformative journey for every student.
        </p>

      </div>
    </motion.section>
  );
}

export default InstructorSection;