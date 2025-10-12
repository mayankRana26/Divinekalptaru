import { motion } from 'framer-motion';
import { services } from '../data/ServiceData'; 
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  }
};

function Services() {
  return (
    // Section Background: Light green background with top padding to clear the Header
    <section className="bg-green-100 text-black py-20 px-8 min-h-screen pt-24" id="services">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-green-700" 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }} // Scroll animation for heading
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Our Training Programs
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible" // Scroll animation for card grid
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="block">
              <motion.div
                // Card Styling: White background, fixed minimum height, green border top
                className="bg-white rounded-xl p-8 shadow-xl flex flex-col justify-between text-center min-h-[350px] transition-shadow duration-300 border-t-4 border-green-500" 
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(52, 211, 163, 0.3)" }} // Lift and green shadow on hover
              >
                
                {/* 🛑 IMAGE REMOVED: Image block is no longer rendered */}

                <div>
                    <h3 className="text-3xl font-bold mb-4 text-green-700">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>

                {/* Call to Action Link */}
                <span className="mt-6 inline-block text-green-800 font-semibold hover:text-green-900 transition-colors">
                    View Details &rarr;
                </span>
                
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;