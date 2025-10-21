import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../data/ServiceData";

// ✨ Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// 🧘‍♂️ Heading Background Style
const headingBackgroundStyle = {
  backgroundImage: "url('/for-top2.jpg')",
  backgroundBlendMode: "multiply",
};

// 🌿 Heading Animation Variants
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="bg-green-100 text-black pt-0 pb-20 min-h-screen"
    >
      {/* 🌸 Section Heading Banner */}
      <motion.div
        className="relative bg-cover bg-center mb-16 py-12 shadow-xl overflow-hidden w-full"
        style={headingBackgroundStyle}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={headingVariants}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="container mx-auto max-w-7xl relative z-10 px-8">
          <motion.h2 className="text-5xl font-extrabold text-center tracking-wider text-white">
            Our <span className="text-green-300">Training</span> Programs
          </motion.h2>
        </div>
      </motion.div>

      {/* 🪷 Service Cards Grid */}
      <div className="container mx-auto max-w-7xl px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="block">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-xl flex flex-col justify-between text-center min-h-[350px] border-t-4 border-green-500 transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(52, 211, 163, 0.3)",
                }}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-green-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                <span className="mt-6 inline-block text-green-800 font-semibold hover:text-green-900 transition-colors">
                  View Details &rarr;
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
