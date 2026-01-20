import React from "react";
import { motion } from "framer-motion";

// ✅ Import Gallery Images

import glry4 from "../assets/gallery/glry4.jpg";
import glry5 from "../assets/gallery/glry5.jpg";
import glry6 from "../assets/gallery/glry6.jpg";
import glry7 from "../assets/gallery/glry7.jpg";
import glry8 from "../assets/gallery/glry8.jpg";
import glry9 from "../assets/gallery/glry9.jpg";
import glry10 from "../assets/gallery/glry10.jpg";
import glry11 from "../assets/gallery/glry11.jpg";
import glry12 from "../assets/gallery/glry12.jpg";
import glry13 from "../assets/gallery/glry13.jpg";
import glry14 from "../assets/gallery/glry14.jpg";
import glry15 from "../assets/gallery/glry15.jpg";
import glry16 from "../assets/gallery/glry16.jpg";
import glry17 from "../assets/gallery/glry17.jpg";
import glry18 from "../assets/gallery/glry18.jpg";

import glry20 from "../assets/gallery/glry20.jpg";
import glry21 from "../assets/gallery/glry21.jpg";
import glry22 from "../assets/gallery/glry22.jpg";
import glry23 from "../assets/gallery/glry23.jpg";
import glry24 from "../assets/gallery/glry24.jpg";
import glry25 from "../assets/gallery/glry25.jpg";
import glry26 from "../assets/gallery/glry26.jpg";
import glry27 from "../assets/gallery/glry27.jpg";
import glry28 from "../assets/gallery/glry28.jpg";
import glry29 from "../assets/gallery/glry29.jpg";
import glry30 from "../assets/gallery/glry30.jpg";
import glry32 from "../assets/gallery/glry32.jpg";
import glry33 from "../assets/gallery/glry33.jpg";
import glry34 from "../assets/gallery/glry34.jpg";
import glry35 from "../assets/gallery/glry35.jpg";
import glry36 from "../assets/gallery/glry36.jpg";
import glry37 from "../assets/gallery/glry37.jpg";
import glry38 from "../assets/gallery/glry38.jpg";
import glry39 from "../assets/gallery/glry39.jpg";
import glry40 from "../assets/gallery/glry40.jpg";
import glry41 from "../assets/gallery/glry41.jpg";
import glry42 from "../assets/gallery/glry42.jpg";

// 🖼 All Gallery Images
const galleryImages = [
  
  { id: 4, src: glry4, alt: "Chakra Balancing Meditation" },
  { id: 5, src: glry5, alt: "Pranayama Breathing Technique" },
  { id: 6, src: glry6, alt: "Ganga River Aarti Ceremony" },
  { id: 7, src: glry7, alt: "Ayurvedic Cooking Workshop" },
  { id: 8, src: glry8, alt: "Advanced Backbend Pose" },
  { id: 9, src: glry9, alt: "Teacher Training Graduation" },
  { id: 10, src: glry10, alt: "Hatha Yoga Flow Sequence" },
  { id: 11, src: glry11, alt: "Divine kalptaru Studio Entrance" },
  { id: 12, src: glry12, alt: "Mantra Chanting Circle" },
  { id: 13, src: glry13, alt: "Restorative Yoga with Props" },
  { id: 14, src: glry14, alt: "Anatomy and Physiology Class" },
  { id: 15, src: glry15, alt: "Sunset View from the Ashram" },
  { id: 16, src: glry16, alt: "One-on-One Alignment Check" },
  { id: 17, src: glry17, alt: "Neti Pot Cleansing Demonstration" },
  { id: 18, src: glry18, alt: "Trekking near Rishikesh" },
  
  { id: 20, src: glry20, alt: "Yin Yoga Deep Stretching" },
  { id: 21, src: glry21, alt: "Morning Tea and Reflection" },
  { id: 22, src: glry22, alt: "Yoga Teacher Guiding Students" },
  { id: 23, src: glry23, alt: "Tapasya Fire Ceremony" },
  { id: 24, src: glry24, alt: "Handstand (Adho Mukha Vrksasana) Practice" },
  { id: 25, src: glry25, alt: "Kirtan Music Night" },
  { id: 26, src: glry26, alt: "Vinyasa Flow in Open Air" },
  { id: 27, src: glry27, alt: "Traditional Indian Meal" },
  { id: 28, src: glry28, alt: "Quiet Reading Spot" },
  { id: 29, src: glry29, alt: "Group Picture at Ganga Ghat" },
  { id: 30, src: glry30, alt: "Headstand (Sirsasana) Instruction" },
  { id: 32, src: glry32, alt: "Students enjoying a Sattvic meal" },
  { id: 33, src: glry33, alt: "Outdoor meditation session by the trees" },
  { id: 34, src: glry34, alt: "Detailed hand mudra practice" },
  { id: 35, src: glry35, alt: "A yoga instructor giving adjustments" },
  { id: 36, src: glry36, alt: "Group enjoying spiritual discourse" },
  { id: 37, src: glry37, alt: "A beautiful arrangement of yoga props" },
  { id: 38, src: glry38, alt: "Sun salutation (Surya Namaskar) sequence" },
  { id: 39, src: glry39, alt: "Yoga Nidra session in progress" },
  { id: 40, src: glry40, alt: "Students practicing partner yoga" },
  { id: 41, src: glry41, alt: "Aerial yoga hammock setup" },
  { id: 42, src: glry42, alt: "Yoga anatomy workshop with skeleton model" },
];

// 🎬 Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// 🌸 Heading
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const headingBackgroundStyle = {
  backgroundImage: "url('/for-top2.jpg')",
  backgroundBlendMode: "multiply",
};

// ✨ Main Component
function Gallery() {
  return (
    <section className="bg-green-100 text-black pt-0 pb-20 min-h-screen">
      {/* 🌼 Section Header */}
      <motion.div
        className="relative bg-cover bg-center mb-16 py-12 shadow-xl overflow-hidden w-full"
        style={headingBackgroundStyle}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={headingVariants}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto max-w-7xl relative z-10 px-8">
          <h2 className="text-5xl font-extrabold text-center tracking-wider text-white">
            Our <span className="text-green-300">Gallery</span>
          </h2>
        </div>
      </motion.div>

      {/* 🪷 Gallery Grid */}
      <div className="container mx-auto max-w-7xl px-8">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-2xl group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
