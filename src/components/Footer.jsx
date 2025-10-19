import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  const WHATSAPP_NUMBER = '917535833208'; // Indian number format (No +, 0, or spaces)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Programs', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // Outer Footer color set
    <footer className="bg-green-100 text-black pt-12 border-t-2 border-green-500">
      <div className="container mx-auto max-w-7xl px-8">
        
        {/* Main Columns Container - Border removed from here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10">
          
          {/* Column 1: Logo and Mission */}
          <div className="space-y-4">
            <h3 className="text-3xl font-extrabold text-green-600 tracking-wider">
              Divinekalptaru
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Discover the ancient art and science of Yoga, drawing strength from the Himalayas to foster inner peace and human advancement.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/divinekalptaru?igsh=MXdvNGlob3lnanR4aQ==" aria-label="Instagram" target='_blank' rel="noopener noreferrer" className="text-black hover:text-green-700 transition"><FaInstagram size={24} /></a>
              <a href="https://youtube.com/@divinekalptaru?si=wC0ZbTFCB4OkUQp6" target='_blank' rel="noopener noreferrer" aria-label="Youtube" className="text-black hover:text-green-700 transition"><FaYoutube size={24} /></a>
              {/* ✅ WHATSAPP LINK ADDED */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} aria-label="WhatsApp" target='_blank' rel="noopener noreferrer" className="text-black hover:text-green-700 transition"><FaWhatsapp size={24} /></a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4 ">
            <h4 className="text-xl font-semibold mb-4  text-green-700">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-black hover:text-green-700 transition text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            {/* FIX: Heading color changed from text-green-100 to text-green-700 */}
            <h4 className="text-xl font-semibold mb-4 text-green-700">Get In Touch</h4>
            <div className="space-y-3 text-black">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-500" />
                <a href="mailto:divinekalptaru@gmail.com" className="hover:text-green-700">Divinekalptaru@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-green-500" />
                <a href="tel:+917535833208" className="hover:text-green-700">+91 7535 833 208</a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-green-500 flex-shrink-0 mt-1" />
                <span>26 2nd cross Akshaya garden Akshay Nagar, post, Begur, Bengaluru, Karnataka 560114, India</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-lime-500 border-t-2 border-green-600 py-4">
        <div className="container mx-auto max-w-7xl px-8 text-center text-sm text-black">
          &copy; {year} to {year + 1} Divinekalptaru. All rights reserved.
          <span className="ml-4  sm:inline-block">| Designed & Developed by Mayank Rana.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;