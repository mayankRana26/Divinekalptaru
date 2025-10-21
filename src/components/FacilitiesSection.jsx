// src/components/FacilitiesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaLeaf, FaSpa, FaMedal } from 'react-icons/fa'; // Icons for features

// 💡 Background Style Object for the seamless pattern (universalbg.png)
const backgroundStyle = {
    backgroundImage: "url('/universalbg.png')", 
    backgroundRepeat: 'repeat',
    backgroundSize: '7000px', // Adjusted size for blur effect
    backgroundColor: '#F0FDF4', // Fallback color
    opacity: 1
};

// --- Framer Motion Variants (Unchanged) ---
const sectionVariants = {
hidden: { opacity: 0, y: 50 },
visible: { opacity: 1, y: 0,
 transition: { duration: 0.8, ease: "easeOut", }
}
}

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
      // 🟢 CHANGE 1: Applied background pattern style
      className="py-20 px-8 relative overflow-hidden" 
      style={backgroundStyle} // Applying the pattern
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* 🟢 CHANGE 2: Optional Overlay to control pattern visibility */}
      <div className="absolute inset-0 opacity-90 z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-green-700"
          variants={sectionVariants}
        >
          Our <span className="text-black">Center Facilities</span>
        </motion.h2>

        <div className="flex flex-col gap-12 md:flex-row items-start md:space-x-12">
          
          {/* LEFT COLUMN: Image */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:order-first"
            variants={imageVariants}
          >
            <img 
              src="/11.jpg" 
              alt="Serene yoga center facilities in Bengaluru"
              className='w-full object-cover rounded-xl shadow-2xl border-4 border-green-500'
            />
          </motion.div>
          
          {/* RIGHT COLUMN: Content (Cleaned) */}
          <motion.div className="md:w-1/2 space-y-6" variants={sectionVariants}>
            
            {/* Paragraph 1: Introduction and Ambience */}
            <p className="text-lg leading-relaxed text-gray-700">
              🕉️ **Welcome to Your Sanctuary of Inner Harmony.** You will have access to all the facilities you could possibly need in our peaceful campus in **Bengaluru**. The ambiance is meticulously designed for immersive practice, making it a genuinely inspiring place that fosters deep spiritual well-being. 🌿
            </p>
            
            {/* Paragraph 2: Core Essence and Guidance */}
            <p className="text-lg leading-relaxed text-gray-700">
              Under the gentle guidance of our experienced **yoga masters**, you’ll explore the true essence of yoga — blending **ancient traditions with modern insights**. Every session is designed to elevate your awareness and bring lasting inner peace.
            </p>

            {/* Paragraph 3: Beginner to Advanced Focus */}
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you are a beginner discovering the beauty of yoga or an advanced practitioner refining your mastery, our **personalized approach** nurtures growth at every step. The serene surroundings and holistic routines cultivate an environment of complete **rejuvenation**—mind, body, and soul.
            </p>

            {/* Paragraph 4: Dining and Wellness */}
            <p className="text-lg leading-relaxed text-gray-700">
              Indulge in wholesome **Sattvic meals** (catering to vegan, gluten-free, etc.), and embrace a slower rhythm of life. We provide restorative services like **Kirtan (sound healing)** and **Ayurvedic massage** to support positive energy and holistic well-being during your time here. 🧘‍♀️💫
            </p>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FacilitiesSection;