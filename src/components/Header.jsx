import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { id: "1-month-program", title: "1 Month Yoga Training" },
  { id: "3-month-program", title: "3 Month Yoga Training" },
  { id: "6-month-program", title: "6 Month Yoga Training" },
  { id: "12-month-program", title: "12 Month Yoga Training" },
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
    timeoutId = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    clearTimeout(timeoutId);
  };

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-black font-bold"
      : "text-white hover:text-black transition-colors";

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <motion.header
      className="bg-lime-500 text-white fixed top-0 left-0 w-full z-50 shadow-xl py-4 px-4 flex justify-between items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      {/* LOGO */}
      <Link to="/" onClick={handleLinkClick}>
        <h1 className="text-2xl font-semibold ml-6">
          <span className="font-black text-green-700">Divine</span>
          <span className="text-white">Kalptaru</span>
        </h1>
      </Link>

      {/* MOBILE TOGGLE */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex gap-8 mr-8 font-semibold items-center">
        <Link to="/" className={getLinkClass("/")}>Home</Link>
        <Link to="/about" className={getLinkClass("/about")}>About</Link>

        {/* SERVICES */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/services"
            className={`flex items-center ${
              isServicesActive ? "text-black font-bold" : "text-white"
            }`}
          >
            Services
            <FaChevronDown className="ml-2 text-sm" />
          </Link>

          {isDropdownOpen && (
            <div className="absolute mt-3 w-60 bg-white rounded-lg shadow-xl py-2">
              {services.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white"
                  onClick={handleLinkClick}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ONLINE FIXED */}
        <Link to="/online" className={getLinkClass("/online")}>
          Online
        </Link>

        <Link to="/gallery" className={getLinkClass("/gallery")}>Gallery</Link>
        <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white py-6 shadow-xl md:hidden">
          <div className="flex flex-col items-center gap-4 text-lg">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
            <Link to="/online" onClick={handleLinkClick}>Online</Link>
            <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Header;
