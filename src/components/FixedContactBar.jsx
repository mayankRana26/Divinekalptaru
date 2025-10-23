// src/components/FixedContactBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

function FixedContactBar() {
    
    const WHATSAPP_NUMBER = '917535833208'; 
    const PHONE_NUMBER = '+917535833208';
    const EMAIL_ADDRESS = 'divinekalptaru@gmail.com';
    const INSTAGRAM_URL = 'https://www.instagram.com/divinekalptaru?igsh=MXdvNGlob3lnanR4aQ==';

    // Framer Motion variant to slide up from the bottom
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring", 
                stiffness: 70, 
                delay: 0.5 
            } 
        }
    };

    return (
        <motion.div
            // Positioning: Fixed at the bottom, full width
            className="fixed bottom-0 left-0 right-0 z-50 bg-green-700 shadow-2xl h-16 py-3 px-4 md:py-4"
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <div className="container mx-auto max-w-7xl">
                <nav 
                    className="flex justify-around md:justify-center md:gap-25 items-center h-full text-white" 
                    aria-label="Quick Contact Bar"
                >
                    {/* 1. WhatsApp Button (Visible on all screens) */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center space-y-1 transition-colors hover:text-yellow-400 group"
                    >
                        <FaWhatsapp size={28} className="md:size-6" /> {/* Icon size reduced for better spacing */}
                        <span className="text-xs font-semibold md:text-sm">WhatsApp</span>
                    </a>

                    {/* 2. Call Button (Hidden on mobile, appears on sm and up) */}
                    {/* 🛑 FIX: This button is now HIDDEN on mobile (default) */}
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="hidden sm:flex flex-col items-center justify-center space-y-1 transition-colors hover:text-yellow-400 group"
                    >
                        <FaPhoneAlt size={24} className="md:size-6" />
                        <span className="text-xs font-semibold md:text-sm">Call Now</span>
                    </a>
                    
                    {/* 3. Email Button (Visible on all screens) */}
                    {/* 🛑 FIX: This button is now VISIBLE on mobile (default: flex) */}
                    <a
                        href={`mailto:${EMAIL_ADDRESS}`}
                        className="flex flex-col items-center justify-center space-y-1 transition-colors hover:text-yellow-400 group"
                    >
                        <FaEnvelope size={24} className="md:size-6" />
                        <span className="text-xs font-semibold md:text-sm">Email</span>
                    </a>

                    {/* 4. Instagram Button (Hidden on mobile, appears on sm and up) */}
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex flex-col items-center justify-center space-y-1 transition-colors hover:text-yellow-400 group"
                    >
                        <FaInstagram size={24} className="md:size-6" />
                        <span className="text-xs font-semibold md:text-sm">Instagram</span>
                    </a>
                </nav>
            </div>
        </motion.div>
    );
}

export default FixedContactBar;