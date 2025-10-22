import profileImage from '/lastlogo.jpg';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Hero() {
  // YouTube Shorts Video ID: lB41prr-IeA
  const youtubeEmbedUrl = "https://www.youtube.com/embed/lB41prr-IeA?autoplay=1&mute=1&loop=1&controls=0&playlist=lB41prr-IeA&iv_load_policy=3&disablekb=1&modestbranding=1&rel=0";

  return (
    <section className=" relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* 1. background video (YouTube Embed) */}
      {/* एक div में iframe को रैप किया गया है और इसे cover इफ़ेक्ट देने के लिए बड़ा किया गया है */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <iframe
          src={youtubeEmbedUrl}
          title="YouTube Video Background"
          frameBorder="0"
          allow="autoplay; encrypted-media; loop"
          allowFullScreen
          // 'object-cover' प्रभाव देने के लिए, iframe को बहुत बड़ा (300%) और केंद्र में रखा जाता है।
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* 2. overlay for text clarity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* 3. Hero Section main content */}
      <main className="container mx-auto px-8 py-20 relative z-20 flex flex-col md:flex-row items-center justify-between">
        
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-4"
            variants={itemVariants}
          >
            Breathe. Stretch. Live
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8"
            variants={itemVariants}
          >
            Unlock the flow of Prana to awaken the divinity within.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="/contact" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition-colors duration-300"
            >
              Join Now
            </motion.a>
            <motion.a 
              href="/gallery" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-lime-500 text-white font-bold py-3 px-6 rounded-lg border-3 border-white  hover:bg-gray-700 transition-colors duration-300"
            >
              View Gallery
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center md:justify-end md:pl-16 mt-8 md:mt-0">
          <motion.div
            className="relative w-45 h-45 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-green-500 hover:border-green-400 transition-colors bg-white duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.8,
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 30px rgba(13, 255, 0, 0.57)",
              transition: { duration: 0.3 }
            }}
          >
            <img src={profileImage} alt="professional_image" className=" w-full h-full bg-white object-cover" />
          </motion.div>
        </div>
      </main>
    </section>
  );
}

export default Hero;