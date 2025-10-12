import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import images from assets
import glry1 from '../assets/gallery/glry1.jpg';
import glry2 from '../assets/gallery/glry2.jpg';
import glry3 from '../assets/gallery/glry3.jpg';
import glry4 from '../assets/gallery/glry4.jpg';
import glry5 from '../assets/gallery/glry5.jpg';
import glry6 from '../assets/gallery/glry6.jpg';
import glry7 from '../assets/gallery/glry7.jpg';
import glry8 from '../assets/gallery/glry8.jpg';
import glry9 from '../assets/gallery/glry9.jpg';
import glry10 from '../assets/gallery/glry10.jpg';
import glry11 from '../assets/gallery/glry11.jpg';
import glry12 from '../assets/gallery/glry12.jpg';
import glry13 from '../assets/gallery/glry13.jpg';
import glry14 from '../assets/gallery/glry14.jpg';
import glry15 from '../assets/gallery/glry15.jpg';
import glry16 from '../assets/gallery/glry16.jpg';
import glry17 from '../assets/gallery/glry17.jpg';
import glry18 from '../assets/gallery/glry18.jpg';
import glry19 from '../assets/gallery/glry19.jpeg';
import glry20 from '../assets/gallery/glry20.jpg';
import glry21 from '../assets/gallery/glry21.jpg';
import glry22 from '../assets/gallery/glry22.jpg';
import glry23 from '../assets/gallery/glry23.jpg';
import glry24 from '../assets/gallery/glry24.jpg';
import glry25 from '../assets/gallery/glry25.jpg';
import glry26 from '../assets/gallery/glry26.jpg';
import glry27 from '../assets/gallery/glry27.jpg';
import glry28 from '../assets/gallery/glry28.jpg';
import glry29 from '../assets/gallery/glry29.jpg';
import glry30 from '../assets/gallery/glry30.jpg';
import glry31 from '../assets/gallery/glry31.jpg';

// 🖼 Gallery Data
const galleryImages = [
  { id: 1, src: glry1, alt: 'Sunrise Meditation in Himalayas' },
  { id: 2, src: glry2, alt: 'Group Asana Practice Outdoors' },
  { id: 3, src: glry3, alt: 'Yoga Philosophy Class Session' },
  { id: 4, src: glry4, alt: 'Chakra Balancing Meditation' },
  { id: 5, src: glry5, alt: 'Pranayama Breathing Technique' },
  { id: 6, src: glry6, alt: 'Ganga River Aarti Ceremony' },
  { id: 7, src: glry7, alt: 'Ayurvedic Cooking Workshop' },
  { id: 8, src: glry8, alt: 'Advanced Backbend Pose' },
  { id: 9, src: glry9, alt: 'Teacher Training Graduation' },
  { id: 10, src: glry10, alt: 'Hatha Yoga Flow Sequence' },
  { id: 11, src: glry11, alt: 'Divine Kalpataru Studio Entrance' },
  { id: 12, src: glry12, alt: 'Mantra Chanting Circle' },
  { id: 13, src: glry13, alt: 'Restorative Yoga with Props' },
  { id: 14, src: glry14, alt: 'Anatomy and Physiology Class' },
  { id: 15, src: glry15, alt: 'Sunset View from the Ashram' },
  { id: 16, src: glry16, alt: 'One-on-One Alignment Check' },
  { id: 17, src: glry17, alt: 'Neti Pot Cleansing Demonstration' },
  { id: 18, src: glry18, alt: 'Trekking near Rishikesh' },
  { id: 19, src: glry19, alt: 'Shatkarma Techniques Practice' },
  { id: 20, src: glry20, alt: 'Yin Yoga Deep Stretching' },
  { id: 21, src: glry21, alt: 'Morning Tea and Reflection' },
  { id: 22, src: glry22, alt: 'Yoga Teacher Guiding Students' },
  { id: 23, src: glry23, alt: 'Tapasya Fire Ceremony' },
  { id: 24, src: glry24, alt: 'Handstand (Adho Mukha Vrksasana) Practice' },
  { id: 25, src: glry25, alt: 'Kirtan Music Night' },
  { id: 26, src: glry26, alt: 'Vinyasa Flow in Open Air' },
  { id: 27, src: glry27, alt: 'Traditional Indian Meal' },
  { id: 28, src: glry28, alt: 'Quiet Reading Spot' },
  { id: 29, src: glry29, alt: 'Group Picture at Ganga Ghat' },
  { id: 30, src: glry30, alt: 'Headstand (Sirsasana) Instruction' },
  { id: 31, src: glry31, alt: 'Peaceful Evening Meditation' },
];

// 🎬 Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
};

// 🖼 Main Component
function Gallery() {
  return (
    <section className="bg-green-100 py-20 px-8 min-h-screen pt-24">
      <div className="container mx-auto max-w-7xl">
        
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-black tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-green-600">G</span>allery
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-2xl group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-10 transition-opacity flex items-end p-3">
                <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;
