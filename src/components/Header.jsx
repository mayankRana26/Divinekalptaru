import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
    { id: '1-month-program', title: '1 Month Yoga Training Program' },
    { id: '3-month-program', title: '3 Month Yoga Training Program' },
    { id: '6-month-program', title: '6 Month Yoga Training Program' },
    { id: '12-month-program', title: '12 Month Yoga Training Program' },
];

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    clearTimeout(timeoutId);
  };
  
  // Determines active link class based on current path
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? 'text-black font-bold' // Active link style
      : 'text-white hover:text-black transition-colors'; // Inactive link style
  };

  const isServicesActive = location.pathname.startsWith('/services');

  // Framer Motion variant for Navbar slide down
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 70, 
        duration: 0.8 
      } 
    },
  };

  return (
    <motion.header 
      className="bg-green-500 text-white py-2 px-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-xl"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* Logo (Left-aligned) */}
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
        <div className="flex items-center space-x-3 ml-20">
          <img src="/logo.png" alt="Divinekalptaru Logo" className="h-12" />
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl text-white" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex text-lg font-semibold gap-8 mr-8 items-center">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/about" className={getLinkClass('/about')}>About</Link>
        
        {/* Services Dropdown (Desktop) */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/services"
            className={`flex items-center transition-colors ${isServicesActive ? 'text-black font-bold' : 'text-white hover:text-black'}`}
            onClick={handleLinkClick}
          >
            Services
            <FaChevronDown className={`ml-2 text-sm transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </Link>
          
          {isDropdownOpen && (
            <motion.div 
              // FIX: left-aligned to link, not the whole nav
              className="absolute left-0 mt-3 w-60 bg-white rounded-lg shadow-2xl py-2 z-20 border-2 border-green-500" 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {services.map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.id}`} 
                  className={`block px-4 py-2 text-sm text-gray-800 hover:bg-green-500 hover:text-white transition-colors 
                    ${location.pathname === `/services/${service.id}` ? 'bg-green-700 text-white font-semibold' : ''}`}
                  onClick={handleLinkClick}
                >
                  {service.title}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        <Link to="/gallery" className={getLinkClass('/gallery')}>Gallery</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
      </nav>

      {/* Mobile Menu (Animated Dropdown) */}
      <motion.nav 
        className="md:hidden absolute top-full left-0 w-full bg-gray-700 py-4 shadow-2xl overflow-hidden"
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
            open: { opacity: 1, height: "auto" },
            // Removed redundant staggerChildren for simpler vertical close
            closed: { opacity: 0, height: 0, transition: { duration: 0.3 } } 
        }}
      >
        <div className="flex flex-col items-center text-lg gap-4">
          {/* Mobile Links */}
          <Link to="/" className={getLinkClass('/')} onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')} onClick={handleLinkClick}>About</Link>
          
          {/* Services Dropdown (Mobile - CLEANED UP) */}
          <div className="relative w-full flex flex-col items-center">
            <button
              className="flex items-center justify-center text-white hover:text-black transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
              <FaChevronDown className={`ml-2 text-sm transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-3 flex flex-col items-center bg-gray-900 rounded-lg shadow-lg py-2 w-full"
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block w-4/5 text-center px-4 py-2 text-sm text-white hover:bg-green-500 hover:text-black transition-colors"
                    onClick={handleLinkClick}
                  >
                    {service.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
          <Link to="/gallery" className={getLinkClass('/gallery')} onClick={handleLinkClick}>Gallery</Link>
          <Link to="/contact" className={getLinkClass('/contact')} onClick={handleLinkClick}>Contact</Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}

export default Header;