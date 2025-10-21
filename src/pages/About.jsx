import { motion } from "framer-motion";
import { FaMountain, FaCertificate } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
      delay: 0.3,
    },
  },
};

// --- About Component ---

function About() {
  const headingBackgroundStyle = {
    backgroundImage: "url('/for-top2.jpg')",
    backgroundBlendMode: "multiply",
  };

  return (
    <motion.section
      className="bg-green-100 text-black pt-0 pb-20 min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      id="about"
    >
      {/* 1. FULL WIDTH HEADING BLOCK (FIXED FOR 100% WIDTH) */}
      <motion.div
        className="relative bg-cover bg-center mb-16 py-12 shadow-xl overflow-hidden w-full"
        style={headingBackgroundStyle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Inner container for max-width and padding for the text */}
        <div className="container mx-auto max-w-7xl relative z-10 px-8">
          <motion.h2 className="text-5xl font-extrabold text-center tracking-wider text-white">
            About <span className="text-green-600">D</span>ivine{" "}
            <span className="text-green-600">K</span>alpataru
          </motion.h2>
        </div>
      </motion.div>
      {/* 👆 END FULL WIDTH HEADING BLOCK 👆 */}

      <div className="container mx-auto max-w-7xl px-8">
        <div className="flex flex-col md:flex-row items-start md:space-x-20">
          {/* Left Column: Mission and Philosophy Text */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:order-first">
            <motion.h3
              className="text-3xl font-semibold mb-6 text-green-600 flex items-center"
              variants={sectionVariants}
            >
              <FaMountain className="mr-3 text-2xl" /> Our Core Philosophy
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-700"
              variants={sectionVariants}
            >
              Our goal at Divine Kalptaru is to impart the ancient art and
              science of "Yoga" in a way that would enable our pupils to
              actively contribute to the advancement of humanity. Our methods
              draw strength from the immovable Himalayan Mountains and the
              River Ganga herself, both of which are unstoppable in their
              power and timeless wisdom.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6 text-gray-700 border-l-4 border-green-500 pl-4 italic"
              variants={sectionVariants}
            >
              The Divine Kalpataru is a modest habitat for yoga, tucked away
              among a variety of good and divine sites of worship, where
              discipline and steadfastness are sharpened with a touch of culture
              and a wave of tradition.
            </motion.p>

            <motion.h3
              className="text-3xl font-semibold mb-6 text-green-600 mt-10"
              variants={sectionVariants}
            >
              The True Essence of Yoga
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={sectionVariants}
            >
              Realising one's true nature, achieving inner peace, and finding
              relief from suffering are the three main aims of yoga. Even a
              basic understanding of yoga's principles can help one's yoga
              practise and promote more calm, fulfilment, and well-being in
              their lives. Although it can take years of study and reflection to
              fully understand yoga, this is not to say that it is impossible.
            </motion.p>

            <motion.h3
              className="text-3xl font-semibold mb-6 text-green-600 mt-10 flex items-center"
              variants={sectionVariants}
            >
              <FaCertificate className="mr-3 text-2xl" /> Our Programmes are
              Based on Quality
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              variants={sectionVariants}
            >
              Our comprehensive yoga teacher training programme includes a
              wide range of topics to help students develop the skills needed to
              plan safe, effective, and meaningful yoga programmes. Through the
              integration of physical practise with philosophical study,
              meditation, and teaching techniques, our yoga teacher training
              programmes provide students with a well-rounded education that
              prepares them to share the advantages of yoga with others.
            </motion.p>
          </div>

          {/* Right Column: Image (Top Margin Increased on large screens) */}
          <motion.div
            // 🟢 FIX: md:mt-10 added for large screens.
            className="md:w-1/2 flex justify-center items-center md:order-last mt-6 md:mt-30 md:ml-35"
            variants={cardVariants}
          >
            <img
              src="/for_about.png"
              alt="Divinekalpataru Yoga Studio or serene yoga scene"
              className="w-full max-w-lg max-h-[600px] object-contain rounded-xl shadow-2xl border-2 border-green-500 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
