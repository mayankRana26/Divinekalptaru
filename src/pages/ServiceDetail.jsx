import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { services } from "../data/ServiceData";

function ServiceDetail() {
  const { id } = useParams();

  const program = services.find((service) => service.id === id);

  if (!program) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-red-50 text-red-700">
        <h1 className="text-3xl font-bold">404: Program Not Found</h1>
      </div>
    );
  }

  return (
    <motion.section
      className="bg-white text-gray-800 py-20 px-8 min-h-screen pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-4 text-green-700">
          {program.title}
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Details for the program ID: {id}
        </p>

        {/* Program Description */}
        <div className="bg-green-50 p-6 rounded-lg shadow-inner border-l-4 border-green-500 mb-10">
          <h3 className="text-2xl font-semibold mb-3">Course Overview:</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            {program.description}
          </p>

          {program.details && (
            <p className="mt-4 italic text-sm">{program.details}</p>
          )}
        </div>

        <Link
          to="/services"
          className="inline-block px-6 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-700 transition duration-300"
        >
          &larr; Back to All Programs
        </Link>
      </div>
    </motion.section>
  );
}

export default ServiceDetail;
