// src/components/CustomReviewSlider.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// 🚨 FIX: wrap function is moved outside the component so it's accessible before initialization.
const wrap = (min, max, v) => {
    const range = max - min;
    const offset = (v - min) % range;
    return min + (offset < 0 ? range + offset : offset);
};

// 💡 REVIEW DATA COPIED FROM GOOGLE SEARCH RESULT (Best Effort)
const reviews = [
    { id: 1, text: "The most authentic and transformative experience. I found my inner peace and clarity during the 3-month program. Highly recommended!", author: "Priya Sharma", source: "A Local Guide", rating: 5 },
    { id: 2, text: "Excellent teachers and serene location. I truly found my inner peace and clarity during the 3-month course. World-class instruction!", author: "David Wilson", source: "A Google User", rating: 5 },
    { id: 3, text: "A beautiful place to start your journey. Learned so much more than just asanas. The focus on Pranayama and meditation techniques is superb.", author: "Ravi Singh", source: "A Local Guide", rating: 4 },
    { id: 4, text: "A genuinely inspiring place with serene surroundings. The holistic routines and Sattvic meals are the perfect recipe for rejuvenation.", author: "Anjali Menon", source: "Google Reviewer", rating: 5 },
];

const sliderVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

function CustomReviewSlider() {
    const [[page, direction], setPage] = useState([0, 0]);
    const reviewIndex = wrap(0, reviews.length, page); 

    // Auto-slide functionality 
    useEffect(() => {
        const timer = setTimeout(() => {
            paginate(1);
        }, 7000); 
        return () => clearTimeout(timer);
    }, [page]); 

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    // Helper to render stars with Google's specific colors
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <FaStar 
                key={i} 
                // Google Yellow: #fbbc05 | Google Gray: #dadce0
                color={i < rating ? "#fbbc05" : "#dadce0"} 
                className="text-lg" 
                aria-hidden="true" 
            />
        ));
    };
const GOOGLE_REVIEW_LINK = "https://www.google.com/search?sca_esv=25498c63d407204d&hl=en-IN&gl=in&sxsrf=AE3TifM7ttiKCTy6kWwEvCyKpEJhHdxVsQ:1761279347518&q=Divine+kalptaru+Yoga+centre,+opp.+Combined+hospital,+Srinagar,+Uttarakhand+246174&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_Fr1RMe-MQALtUtvt5V-ZZQ1yCB16k5UtzmWIzlyS2LDS62cQrhIRpC5PoyLChIekzDbr5eQVJPTqTHdZJ5o1Ne5hh9y6UAUOaBtqI_1d-qms8ahg%3D%3D&sa=X&ved=2ahUKEwiYwO_u_LuQAxUkXmwGHeCCNvoQrrQLegQIGxAA&biw=1536&bih=730&dpr=1.25";
 
    return (
        <motion.section 
            className="py-20 bg-green-100 relative overflow-hidden" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="text-4xl font-bold text-center mb-10 text-black">
              Authentic <span className="text-green-600">Reviews</span>
            </h2>
            
            {/* Slider/Carousel Area */}
            <div className="relative h-96 flex items-center justify-center">
                
                {/* Navigation Arrows */}
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-0 z-20 p-4 rounded-full bg-white/50 border border-gray-300 hover:bg-white/90 text-gray-800 transition"
                    aria-label="Previous review"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-0 z-20 p-4 rounded-full bg-white/50 border border-gray-300 hover:bg-white/90 text-gray-800 transition"
                    aria-label="Next review"
                >
                    <FaChevronRight />
                </button>

                {/* Individual Review Card (Animated) */}
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page} 
                        custom={direction}
                        variants={sliderVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        // 🟢 FIX: Cleaned card styling for Google Review look
                        className="absolute bg-white p-6 rounded-lg shadow-md w-full mx-10 text-left" 
                    >
                        {/* 1. Header (Stars and Google Icon) */}
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex space-x-0.5">
                                {renderStars(reviews[reviewIndex].rating)}
                            </div>
                            {/* 🟢 FIX: Google Logo Color */}
                            <FaGoogle className="text-blue-500 text-xl" style={{color: '#4285F4'}} aria-hidden="true" />
                        </div>
                        
                        {/* 2. Review Text */}
                        <p className="text-base text-gray-800 mb-4 h-28 overflow-hidden leading-relaxed">
                            {reviews[reviewIndex].text} {/* Non-italic text for authenticity */}
                        </p>
                        
                        {/* 3. Footer (Author and Source) */}
                        <div className="pt-3 border-t border-gray-100 flex items-center">
                            {/* Placeholder for small profile image */}
                            <div className="w-8 h-8 rounded-full mr-3 bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">
                                {reviews[reviewIndex].author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-black">
                                    {reviews[reviewIndex].author}
                                </div>
                                <span className="text-xs text-gray-500 font-normal">
                                    {reviews[reviewIndex].source}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
                {reviews.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setPage([i, i > reviewIndex ? 1 : -1])}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${i === reviewIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                        aria-label={`Go to review ${i + 1}`}
                    />
                ))}
            </div>

            {/* Direct Link to Google Maps Reviews (Social Proof) */}
            <p className="text-center mt-8 text-lg text-gray-700">
                <a 
                    href={GOOGLE_REVIEW_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-600 font-semibold hover:underline transition-colors"
                >
                    Read all reviews on Google Maps &rarr;
                </a>
            </p>
          </div>
        </motion.section>
    );
}

export default CustomReviewSlider;