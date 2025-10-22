import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'; // Email.js Import for form submission
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronDown,FaCheckCircle
} from "react-icons/fa";
import { BsCalendarCheckFill } from "react-icons/bs"; 

// --- Email.js Configuration (Replace with your actual IDs) ---
const SERVICE_ID = "service_q2szh92"; 
const TEMPLATE_ID = "template_on0qtue"; 
const PUBLIC_KEY = "1dOHF5ODdGou-K5af"; 
// -----------------------------------------------------------

// --- Framer Motion Variants ---
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const inputVariants = { 
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function Contact() {
  // Banner background style (copied from About.jsx)
  const headingBackgroundStyle = {
    backgroundImage: "url('/for-top2.jpg')",
    backgroundBlendMode: "multiply",
  };
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", country: "",
    courseName: "", gender: "", message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 📧 Email.js Submission Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    // Prepare the template parameters
    const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_email: 'divinekalptaru@gmail.com',
        user_email: formData.email,
        phone_number: formData.phone,
        course_interest: formData.courseName || 'Not Selected',
        user_message: formData.message,
        country: formData.country,
        gender: formData.gender,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
         setFormStatus('success');
         setIsSubmitting(false);
         setFormData({ firstName: "", lastName: "", email: "", phone: "", country: "", courseName: "", gender: "", message: "" });
      }, (err) => {
         console.error('Email Submission Failed:', err);
         setFormStatus('error');
         setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      className="bg-green-100 text-gray-800 pt-0 pb-20 min-h-screen w-full"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={formVariants}
    >
      
      {/* 1. FULL WIDTH HEADER BANNER */}
      <motion.div
        className="relative bg-cover bg-center py-12 shadow-xl overflow-hidden w-full " 
        style={headingBackgroundStyle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10 px-8">
          <motion.h2 className="text-5xl font-extrabold text-center tracking-wider text-white">
            Contact <span className="text-green-300">Divine kalptaru</span>
          </motion.h2>
        </div>
      </motion.div>

      {/* 2. CONTACT FORM CONTAINER (Lifts over the banner) */}
      <div className="container mx-auto max-w-4xl px-8 mt-16 relative z-10"> 
        
        <motion.p
          className="text-center text-lg mb-12 text-gray-600"
          variants={formVariants}
        >
          Have a question about our programs? Fill out the form below.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-xl shadow-2xl space-y-6"
        >
          
          {/* Status Message */}
          {formStatus === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-green-500 text-white rounded text-center font-semibold flex items-center justify-center">
                 <FaCheckCircle className="mr-2" /> Inquiry Sent Successfully!
              </motion.p>
          )}
          {formStatus === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-red-500 text-white rounded text-center font-semibold">
                 Submission Failed. Please try again later.
              </motion.p>
          )}

          {/* --- Section 1: Name and Contact --- */}
          <h3 className="text-2xl font-semibold text-green-700 border-b pb-2 mb-4">
            Your Details
          </h3>

          {/* Name (First & Last) */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={inputVariants}>
            <label className="block">
              <span className="text-gray-700">Name (First)</span>
              <div className="relative mt-1">
                <FaUser className="absolute left-3 top-3 text-green-500" />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none" required />
              </div>
            </label>
            <label className="block">
              <span className="text-gray-700">Name (Last)</span>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full pl-4 pr-4 py-2 mt-1 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none" />
            </label>
          </motion.div>

          {/* Email and Phone */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={inputVariants}>
            <label className="block">
              <span className="text-gray-700">Email *</span>
              <div className="relative mt-1">
                <FaEnvelope className="absolute left-3 top-3 text-green-500" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none" required />
              </div>
            </label>
            <label className="block">
              <span className="text-gray-700">Phone Number *</span>
              <div className="relative mt-1">
                <FaPhone className="absolute left-3 top-3 text-green-500" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 7535 833 208" className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none" required />
              </div>
            </label>
          </motion.div>

          {/* Country */}
          <motion.div variants={inputVariants}>
            <label className="block">
              <span className="text-gray-700">Country *</span>
              <div className="relative mt-1">
                <FaMapMarkerAlt className="absolute left-3 top-3 text-green-500" />
                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Your country of residence" className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none" required />
              </div>
            </label>
          </motion.div>

          {/* --- Section 2: Program Specifics --- */}
          <h3 className="text-2xl font-semibold text-green-700 border-b pt-6 pb-2 mb-4">
            Program Details
          </h3>

          {/* Course Name and Gender in one responsive row */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={inputVariants}>
            {/* Course Name */}
            <label className="block">
              <span className="text-gray-700">Course Name</span>
              <div className="relative mt-1">
                <BsCalendarCheckFill className="absolute left-3 top-3 text-green-500" />
                <select name="courseName" value={formData.courseName} onChange={handleChange} className="w-full pl-10 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none appearance-none cursor-pointer">
                  <option value="">Select a Course</option>
                  <option value="1-month-program">1 Month Training</option>
                  <option value="3-month-program">3 Month Training</option>
                  <option value="6-month-program">6 Month Training</option>
                  <option value="12-month-program">12 Month Training</option>
                  <option value="online-course">Online Course</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-green-500 pointer-events-none" />
              </div>
            </label>
            
            {/* Gender */}
            <label className="block">
              <span className="text-gray-700">Gender</span>
              <div className="relative mt-1">
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full pl-4 pr-4 py-2 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none appearance-none cursor-pointer">
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
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Ask any questions about the course, dates, or travel..." className="w-full p-4 mt-1 border-2 border-green-500 rounded-lg focus:ring-green-500 focus:border-green-500 outline-none"></textarea>
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={inputVariants} className="pt-4 flex justify-center">
            <motion.button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white font-bold rounded-full text-lg hover:bg-green-700 transition duration-300 shadow-xl flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              <FaPaperPlane className="mr-3" />
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;