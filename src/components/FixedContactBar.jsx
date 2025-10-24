// src/components/FixedContactBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

function FixedContactBar() {
    
    const WHATSAPP_NUMBER = '917535833208'; 
    const PHONE_NUMBER = '+917535833208';
    const EMAIL_ADDRESS = 'divinekalptaru@gmail.com';
    const INSTAGRAM_URL = 'https://www.instagram.com/divinekalptaru?igsh=MXdvNGlob3lnanR4aQ==';

    // Framer Motion variant to slide in from the left
    const variants = {
        hidden: { opacity: 0, x: -60 }, // Starts 60px outside the left edge
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                type: "spring", 
                stiffness: 100, 
                delay: 0.8, // Added delay so it appears after the page loads
                staggerChildren: 0.1 
            } 
        }
    };

    return (
        <motion.div
            // 🟢 NEW POSITIONING: Fixed at left edge, centered vertically
            // top-1/2 and -translate-y-1/2 centers it
            className="fixed top-1/2 left-0 top-130 transform -translate-y-1/2 z-50 flex flex-col space-y-4 p-3 md:p-0"
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <nav 
                className="flex flex-col space-y-4 md:space-y-6 text-white" 
                aria-label="Quick Contact Sidebar"
            >
                
                {/* 1. WhatsApp Button (Visible on all screens) */}
                <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-green-600 rounded-lg shadow-xl hover:bg-green-700 transition-colors -mt-20"
                    whileHover={{ scale: 1.05 }}
                    aria-label="Chat on WhatsApp"
                    variants={variants}
                >
                    <FaWhatsapp size={24} />
                </motion.a>

                {/* 2. Call Button (Hidden on mobile, appears on sm and up) */}
                <motion.a
                    href={`tel:${PHONE_NUMBER}`}
                    className="hidden sm:flex p-3 bg-red-500 rounded-lg shadow-xl hover:bg-red-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    aria-label="Call Now"
                    variants={variants}
                >
                    <FaPhoneAlt size={24} />
                </motion.a>
                
                {/* 3. Email Button (Visible on tablet/desktop) */}
                <motion.a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="hidden sm:flex p-3 bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    aria-label="Send Email"
                    variants={variants}
                >
                    <FaEnvelope size={24} />
                </motion.a>

                {/* 4. Instagram Button (Hidden on tablet/desktop) */}
                <motion.a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex p-3 bg-pink-500 rounded-lg shadow-xl hover:bg-pink-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    aria-label="View Instagram Profile"
                    variants={variants}
                >
                    <FaInstagram size={24} />
                </motion.a>
                
            </nav>
        </motion.div>
    );
}

export default FixedContactBar;