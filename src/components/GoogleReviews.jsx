// src/components/GoogleReviews.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // Icon for visual consistency

function GoogleReviews() {
  
  // 💡 Your Trustindex Widget ID and Place ID
  const WIDGET_ID = '682571e5626435625c26fedc09b';
  const PLACE_ID = 'ChIJM1gT8a4VrjsR2LpMih4WtPc';
  
  // Script URL for dynamic loading
  const SCRIPT_SRC = `https://cdn.trustindex.io/loader.js?${WIDGET_ID}`; 
  const SCRIPT_ID = 'trustindex-loader-script';

  useEffect(() => {
    
    // यह फ़ंक्शन Trustindex को मैन्युअल रूप से लोड करने की कोशिश करता है
    const loadTrustindexScript = () => {
        // अगर स्क्रिप्ट पहले से मौजूद है, तो उसे re-initialize करने की कोशिश करें
        if (window.Trustindex) {
            if (typeof window.Trustindex.init === 'function') {
                window.Trustindex.init();
                return;
            }
        }

        // अगर स्क्रिप्ट मौजूद नहीं है, तो उसे डायनामिक रूप से लोड करें
        if (!document.getElementById(SCRIPT_ID)) {
            const script = document.createElement('script');
            script.src = SCRIPT_SRC;
            script.id = SCRIPT_ID;
            script.async = true;
            document.body.appendChild(script);

            // एक बार स्क्रिप्ट लोड हो जाने के बाद, उसे init करें
            script.onload = () => {
                if (window.Trustindex && typeof window.Trustindex.init === 'function') {
                    window.Trustindex.init();
                }
            };
        }
    };

    // Component mount होने पर स्क्रिप्ट लोड करें
    loadTrustindexScript();

    // Cleanup: Remove script when component unmounts (optional, but good practice)
    return () => {
        const scriptElement = document.getElementById(SCRIPT_ID);
        if (scriptElement && scriptElement.parentNode) {
            scriptElement.parentNode.removeChild(scriptElement);
        }
    };
  }, [WIDGET_ID]); // Reruns if the widget ID changes

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
           
           {/* 🛑 TRUSTINDEX WIDGET PLACEHOLDER */}
           {/* Trustindex का टारगेट DIV */}
           <div 
             className="w-full max-w-4xl flex justify-center" 
           >
               <div 
                   data-trustindex-widget-id={WIDGET_ID} 
                   className="w-full text-center" 
               >
                   {/* यह टेक्स्ट तब तक दिखेगा जब तक विजेट लोड न हो जाए */}
                   <div className="p-8 text-gray-500">
                     <FaStar className="inline text-4xl text-yellow-500 mb-2" aria-hidden="true" />
                     <p>Loading authentic Google reviews...</p>
                     <p className="text-sm mt-2">Please ensure your Netlify environment is properly linked to Trustindex.</p>
                   </div>
               </div>
           </div>

        </div>
        
        {/* Direct Link to Google Maps Reviews (Always works) */}
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