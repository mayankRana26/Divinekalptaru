import React from "react";
import { motion } from "framer-motion";
import profileImage from "/lastlogo.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Hero() {
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/9K8Sxzvs8AU?autoplay=1&mute=1&loop=1&controls=0&playlist=9K8Sxzvs8AU&iv_load_policy=3&disablekb=1&modestbranding=1&rel=0";

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white object-cover overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden z-0">
        <iframe
          src={youtubeEmbedUrl}
          title="Divinekalptaru Yoga Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; loop"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-20 py-10 relative z-20 flex flex-col md:flex-row items-center justify-between">
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
              className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Join Now
            </motion.a>

            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-700 font-bold py-3 px-6 rounded-lg border border-green-700 hover:bg-gray-100 transition duration-300"
            >
              View Gallery
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center md:justify-end md:pl-16 mt-8 md:mt-0">
          <motion.div
            className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-green-500 hover:border-green-400 transition duration-300 bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 30px rgba(13, 255, 0, 0.57)",
            }}
          >
            <img
              src={profileImage}
              alt="professional_image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
