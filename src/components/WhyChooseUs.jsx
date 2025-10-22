import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSeedling, FaHeart, FaMountain } from "react-icons/fa";

// 🎬 Motion Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// 🌿 Features Data
const features = [
  {
    title: "Himalayan Wisdom",
    icon: FaMountain,
    description:
      "Our programs draw strength from the ancient, immovable Himalayas and the timeless wisdom of River Ganga, ensuring authentic yogic practice.",
  },
  {
    title: "Comprehensive Curriculum",
    icon: FaGraduationCap,
    description:
      "We offer well-rounded training integrating deep philosophical study, precise anatomy, meditation, and effective teaching methodology.",
  },
  {
    title: "Cultivate Inner Growth",
    icon: FaSeedling,
    description:
      "Like the kalptaru (wish-fulfilling tree), we provide the environment for students to root themselves in discipline and achieve true spiritual growth.",
  },
  {
    title: "Rooted in Tradition",
    icon: FaHeart,
    description:
      "We strictly follow the classical texts and ancient lineages, offering yoga that is pure, profound, and focused on true spiritual advancement, not just fitness.",
  },
];

// ✨ Main Component
function WhyChooseUs() {
  return (
    <motion.section
      className="bg-green-100 py-20 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        {/* 🌼 Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-black"
          variants={sectionVariants}
        >
          Why Choose{" "}
          <span className="text-green-700">Divine kalptaru</span>?
        </motion.h2>

        {/* 🌸 Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={sectionVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 text-center transition duration-300 group cursor-default"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
            >
              {/* 🧘 Icon */}
              <feature.icon
                className="text-5xl mx-auto mb-4 text-green-600 transition duration-300"
                aria-hidden="true"
              />

              {/* 🌿 Title */}
              <h3 className="text-xl font-semibold mb-3 text-black">
                {feature.title}
              </h3>

              {/* ✨ Description */}
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default WhyChooseUs;
