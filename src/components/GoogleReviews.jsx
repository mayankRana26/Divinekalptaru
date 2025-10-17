// src/components/GoogleReviews.jsx (CLEANED)

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; 

function GoogleReviews() {
  
  const WIDGET_ID = '682571e5626435625c26fedc09b';
  const PLACE_ID = 'ChIJM1gT8a4VrjsR2LpMih4WtPc';

  // Note: All script loading logic (useEffect) has been removed. 
  // Trustindex script must be in public/index.html

  return (
    <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          What Our Students Say <span className="text-green-600">on Google</span>
        </h2>
        
        <div className="flex justify-center flex-wrap">
           
           {/* TRUSTINDEX WIDGET PLACEHOLDER */}
           <div 
             className="w-full max-w-4xl flex justify-center" 
           >
               {/* 🛑 TRUSTINDEX TARGET DIV 🛑 */}
               {/* यह DIV ही वह जगह है जहाँ स्क्रिप्ट रिव्यूज़ डालेगी। */}
               <div 
                   data-trustindex-widget-id={WIDGET_ID} 
                   className="w-full text-center" 
               >
                   {/* Fallback/Loading message (यह तभी दिखेगा जब स्क्रिप्ट लोड न हो पाए) */}
                   <div className="p-8 text-gray-500">
                     <FaStar className="inline text-4xl text-yellow-500 mb-2" aria-hidden="true" />
                     <p>Loading authentic Google reviews...</p>
                     <p className="text-sm mt-2 font-semibold">If you see this live, the script failed. Please refresh.</p>
                   </div>
               </div>
           </div>

        </div>
        
        {/* Direct Link to Google Maps Reviews */}
        <p className="text-center mt-8 text-lg text-gray-700">
            <a 
                href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 font-semibold hover:underline transition-colors"
                aria-label="Read all reviews on Google Maps"
            >
                Read all ⭐️ reviews for Divine Kalptaru Yoga on Google Maps
            </a>
        </p>
      </div>
    </motion.section>
  );
}

export default GoogleReviews;