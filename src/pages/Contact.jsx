import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronDown,
} from "react-icons/fa";
import { BsCalendarCheckFill } from "react-icons/bs"; // For Course icon

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 🟢 FIX: The missing inputVariants definition is added back
const inputVariants = { 
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    courseName: "",
    accommodation: "",
    gender: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
  };

  return (
    <motion.section
      className="bg-green-100 text-gray-800 py-20 px-8 min-h-screen pt-24"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-10 text-green-700 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-black">Divine Kalpataru</span>
        </motion.h2>

        <motion.p
          className="text-center text-lg mb-12 text-gray-600"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Have a question about our programs? Fill out the form below.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-xl shadow-2xl space-y-6"
          // Removed redundant stagger container variant here
        >
          {/* --- Section 1: Name and Contact --- */}
          <h3 className="text-2xl font-semibold text-green-700 border-b pb-2 mb-4">
            Your Details
          </h3>

          {/* Name (First & Last) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={inputVariants}
          >
            <label className="block">
              <span className="text-gray-700">Name (First)</span>
              <div className="relative mt-1">
                <FaUser className="absolute left-3 top-3 text-green-500" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"
                  required
                />
              </div>
            </label>
            <label className="block">
              <span className="text-gray-700">Name (Last)</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full pl-4 pr-4 py-2 mt-1 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </label>
          </motion.div>

          {/* Email and Phone */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={inputVariants}
          >
            <label className="block">
              <span className="text-gray-700">Email *</span>
              <div className="relative mt-1">
                <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"
                  required
                />
              </div>
            </label>
            <label className="block">
              <span className="text-gray-700">Phone Number *</span>
              <div className="relative mt-1">
                <FaPhone className="absolute left-3 top-3 text-green-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"
                  required
                />
              </div>
            </label>
          </motion.div>

          {/* Country */}
          <motion.div variants={inputVariants}>
            <label className="block">
              <span className="text-gray-700">Country *</span>
              <div className="relative mt-1">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-green-500" />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Your country of residence"
                  className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"
                  required
                />
              </div>
            </label>
          </motion.div>

          {/* --- Section 2: Program Specifics --- */}
          <h3 className="text-2xl font-semibold text-green-700 border-b pt-6 pb-2 mb-4">
            Program Details
          </h3>

          {/* Course Name & Accommodation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={inputVariants}
          >
            <label className="block">
              <span className="text-gray-700">Course Name</span>
              <div className="relative mt-1">
                <BsCalendarCheckFill className="absolute left-3 top-3 text-green-500" />
                <select
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select a Course</option>
                  {/* 👇 FIX: Updated Course Names to Month-based Programs */}
                  <option value="1-month-program">1 Month Training Program</option>
                  <option value="3-month-program">3 Month Training Program</option>
                  <option value="6-month-program">6 Month Training Program</option>
                  <option value="12-month-program">12 Month Training Program</option>
                  <option value="online-course">Online Course</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-green-500 pointer-events-none" />
              </div>
            </label>


          </motion.div>

          {/* Gender */}
          <motion.div variants={inputVariants}>
            <label className="block md:w-1/2 md:pr-3"> {/* Use half width for cleaner layout */}
              <span className="text-gray-700">Gender</span>
              <div className="relative mt-1">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-4 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="prefer-not-say">Prefer not to say</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-green-500 pointer-events-none" />
              </div>
            </label>
          </motion.div>

          {/* Message/Question */}
          <motion.div variants={inputVariants}>
            <label className="block">
              <span className="text-gray-700">Message/Question</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Ask any questions about the course, dates, or travel..."
                className="w-full p-4 mt-1 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"
              ></textarea>
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={inputVariants}
            className="pt-4 flex justify-center"
          >
            <motion.button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full text-lg hover:bg-green-700 transition duration-300 shadow-xl flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="mr-3" />
              Submit Inquiry
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;