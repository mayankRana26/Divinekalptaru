// src/components/FacilitiesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Icons for features (Only keeping general ones, others removed)
import { FaUtensils } from 'react-icons/fa'; 

// --- Framer Motion Variants (Unchanged) ---
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
  hidden: { opacity: 0, scale: 0.9 },
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

function FacilitiesSection() {
  return (
    <motion.section
      className="bg-green-100 py-20 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-green-700"
          variants={sectionVariants}
        >
          Our <span className="text-black">Center Facilities</span>
        </motion.h2>

        <div className="flex flex-col gap-12 md:flex-row items-center md:space-x-12">
          
          {/* LEFT COLUMN: Image */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:order-first"
            variants={imageVariants}
          >
            <img 
              src="/11.jpg" 
              alt="Serene yoga center facilities in Bengaluru"
              className='w-full h-full  object-cover rounded-xl shadow-2xl border-2 border-green-500'
            />
          </motion.div>
          
          {/* RIGHT COLUMN: Content (Cleaned) */}
          <motion.div className="md:w-1/2 space-y-6" variants={sectionVariants}>
            
            <p className="text-lg leading-relaxed text-gray-700">
🕉️ Welcome to Your Sanctuary of Inner Harmony

You will have access to all the facilities you could possibly need in our peaceful campus in Bengaluru. Here, you will achieve the ideal balance between your body and mind within serene and immaculate surroundings. The ambiance is meticulously designed for immersive practice of various yoga styles and postures, making it a genuinely inspiring place that fosters deep spiritual well-being. 🌿

Under the gentle guidance of our experienced yoga masters, you’ll explore the true essence of yoga — blending ancient traditions with modern insights. From sunrise meditations that awaken your spirit to evening satsangs that calm your soul, every session is designed to elevate your awareness and bring lasting inner peace.

Whether you are a beginner discovering the beauty of yoga or an advanced practitioner refining your mastery, our personalized programs nurture growth at every step. The serene surroundings, fresh mountain breeze, and holistic routines cultivate an environment of complete rejuvenation — mind, body, and soul.

Indulge in wholesome sattvic meals, connect with nature in its purest form, and embrace a slower rhythm of life that invites mindfulness and gratitude.

This is more than a retreat — it’s a journey of self-discovery, a sacred space where you breathe, heal, and transform. 🧘‍♀️💫
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FacilitiesSection;