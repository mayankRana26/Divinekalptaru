import React from 'react';
import { motion } from 'framer-motion';

function GoogleReviews() {
    
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
           
           {/* 🛑 TRUSTINDEX WIDGET PLACEHOLDER (FINAL CODE) */}
           {/* Trustindex script (जो index.html में है) इस ID को पहचानेगा और विजेट को लोड करेगा। */}
           <div 
             className="w-full max-w-4xl" // Set a max width for the widget container
           >
               <div 
                   data-trustindex-widget-id="682571e5626435625c26fedc09b"
                   className="flex justify-center" // Center the widget visually if needed
               >
                   <p className="text-center text-gray-500">
                     Authentic Google reviews loading...
                   </p>
               </div>
           </div>

        </div>
        
        <p className="text-center mt-8 text-lg text-gray-700">
            <a 
                href={`https://search.google.com/local/reviews?placeid=ChIJM1gT8a4VrjsR2LpMih4WtPc`} 
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