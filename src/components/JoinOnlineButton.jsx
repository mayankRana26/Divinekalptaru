import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const JoinOnlineButton = () => {
    const variants = {
        hidden: { opacity: 0, x: -60 }, 
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                type: "spring", 
                stiffness: 100, 
                delay: 0.8,
                 staggerChildren: 0.1  
            } 
        }
    };

    return (
        <motion.div 
            // Fixed positioning: centered vertically on the left edge
            className="fixed top-1/2 left-0  top-150 items-center transform -translate-y-1/2 z-50 flex flex-col space-y-4 p-3 md:p-0"
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <Link
                to="/online"
                className="
                    /* Mobile Styles (Default) */
                    bg-green-600 hover:bg-green-700 text-white font-bold 
                    shadow-xl transition-all duration-300 ease-in-out hover:scale-105
                    px-4 py-2 text-sm rounded-r-lg
                    
                    /* Desktop Styles (Medium screens and up) */
                    md:px-8 md:py-3 md:text-base md:rounded-full md:ml-2
                "
            >
                {/* Short text for mobile, full text for desktop */}
                <span className="md:hidden">Join Online classes</span>
                <span className="hidden md:inline">Join Our Online Classes</span>
            </Link>
        </motion.div>
    );
};

export default JoinOnlineButton;