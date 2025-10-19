// src/components/PricingPlanSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { services } from '../data/ServiceData'; // 1 Month, 3 Month, 6 Month, 12 Month data

// --- Framer Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const featuresList = [
    "Foundational Asanas",
    "Pranayama & Meditation",
    "Yoga Philosophy Lectures",
    "Anatomy Basics",
    "Practice Teaching Sessions",
    "Certification Eligibility"
];

const programFeatures = {
    "1-month-program": [true, true, false, false, false, false],
    "3-month-program": [true, true, true, true, false, true],
    "6-month-program": [true, true, true, true, true, true],
    "12-month-program": [true, true, true, true, true, true],
};


function PricingPlanSection() {
  return (
    <motion.section
      className="bg-white py-20 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-black"
          variants={sectionVariants}
        >
          Explore Our <span className='text-green-700'>Training Plans</span>
        </motion.h2>
        <motion.p 
          className='text-center text-lg mb-12 text-gray-600'
          variants={sectionVariants}
        >
            Choose the immersion level that best supports your path to mastery.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={sectionVariants}
        >
          {services.map((program, index) => {
            const isPopular = program.id === '6-month-program';
            const features = programFeatures[program.id] || [];

            return (
              <motion.div
                key={program.id}
                className={`flex flex-col p-6 rounded-2xl shadow-xl transition-all duration-300 transform 
                            ${isPopular 
                                ? 'bg-green-700 text-white scale-[1.03] border-4 border-yellow-500' 
                                : 'bg-gray-100 text-gray-800 border-2 border-green-300'
                            }`}
                variants={cardVariants}
                whileHover={{ y: isPopular ? -8 : -5, boxShadow: isPopular ? "0 15px 25px rgba(0, 0, 0, 0.3)" : "0 8px 15px rgba(0, 0, 0, 0.1)" }}
              >
                
                {isPopular && (
                    <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                    </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-yellow-400' : 'text-green-700'}`}>
                    {program.title}
                </h3>
                
                {/* Price (Placeholder) */}
                <div className={`text-4xl font-extrabold mb-4 ${isPopular ? 'text-white' : 'text-black'}`}>
                    $XXX
                    <span className="text-base font-normal"> / Program</span>
                </div>

                {/* Features List */}
                <ul className="text-left space-y-3 flex-grow mb-6">
                    {featuresList.map((feature, i) => (
                        <li key={i} className={`flex items-start ${features[i] ? (isPopular ? 'text-green-200' : 'text-gray-700') : 'text-gray-400 line-through'}`}>
                            <FaCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${features[i] ? (isPopular ? 'text-yellow-400' : 'text-green-500') : 'text-gray-400'}`} />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
                
                {/* CTA Button */}
                <a 
                    href={`/services/${program.id}`}
                    className={`block w-full py-3 mt-4 text-center font-bold rounded-full transition duration-300 
                                ${isPopular 
                                    ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
                                    : 'bg-green-500 text-white hover:bg-green-600'
                                }`}
                    aria-label={`Enroll in the ${program.title}`}
                >
                    Enroll Now
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PricingPlanSection;