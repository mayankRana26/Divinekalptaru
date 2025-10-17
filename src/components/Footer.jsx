import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Programs', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-green-100 text-white pt-12">
      <div className="container mx-auto max-w-7xl px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-green-400 pb-10">
          
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
              <a href="https://facebook.com" aria-label="Facebook" className="text-black hover:text-green-500 transition"><FaFacebookF /></a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-black hover:text-green-500 transition"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-black hover:text-green-500 transition"><FaInstagram /></a>
              <a href="https://youtube.com" aria-label="Youtube" className="text-black hover:text-green-500 transition"><FaYoutube /></a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4 text-green-500">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-black hover:text-green-500 transition text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4 text-green-100">Get In Touch</h4>
            <div className="space-y-3 text-black">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-500" />
                <a href="mailto:divinekalptaru@gmail.com" className="hover:text-green-500">Divinekalptaru@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-green-500" />
                <a href="tel:+917535833208" className="hover:text-green-500">+91 7535 833 208</a>
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
      <div className="bg-green-100 py-4">
        <div className="container mx-auto max-w-7xl px-8 text-center text-sm text-black">
          &copy; {year} Divinekalptaru. All rights reserved.
          <span className="ml-4 hidden sm:inline-block">| Designed for tranquility and balance.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;