// src/components/HelpPopup.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
 

const HelpPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const DELAY_TIME = 5000; // 5 seconds delay

    useEffect(() => {
        // Optional UX: Prevent popup from showing immediately after a user has closed it
        const wasClosed = sessionStorage.getItem('yogaPopupClosed');
        if (wasClosed) {
            return;
        }

        const timer = setTimeout(() => setIsVisible(true), DELAY_TIME);
        return () => clearTimeout(timer);
    }, []);


    const closePopup = () => {
        setIsVisible(false);
        // Record in session storage so it doesn't reappear on quick refresh
        sessionStorage.setItem('yogaPopupClosed', 'true');
    }

    // Note: Positioning changed to right-24 to avoid conflicting with the floating chat widget
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    // Styling: Green theme, moved slightly left to avoid OpenWidget/Chat icon
                    className="fixed bottom-6 right-6 md:right-24 z-50 p-5 md:w-72 w-50 bg-white border border-green-400 text-gray-800 rounded-xl shadow-2xl"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    role="alert"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="md:text-xl sm:text-lg font-bold text-green-700 flex items-center">
                             How can we help you?
                        </h3>
                        <button 
                            onClick={closePopup} 
                            className="text-gray-400 hover:text-red-500 text-2xl font-bold leading-none transition"
                            aria-label="Close popup"
                        >
                            &times;
                        </button>
                    </div>
                    
                    <p className="md:text-sm text-xs mb-4 text-gray-600">
                        Do you have questions about our Yoga Programs, retreat dates, or facility highlights?
                    </p>
                    
                    <a 
                        href="/contact" 
                        onClick={closePopup}
                        className="w-full block text-center py-2 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                        Inquire Now
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HelpPopup;