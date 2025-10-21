// src/components/VideoCarousel.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: 1, src: "/video3.mp4", title: "Yoga Anatomy Basics" },
  { id: 2, src: "/video1.mp4", title: "Morning Vinyasa Flow" },
  { id: 3, src: "/video2.mp4", title: "Deep Meditation Guide" },
  { id: 4, src: "/video4.mp4", title: "Restorative Evening Stretch" },
  { id: 5, src: "/video5.mp4", title: "Full Body Stretch" },
];

function VideoCarousel() {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);


  // Calculate width once loaded and on resize
  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        // Total scrollable width minus the viewport width
        const totalWidth =
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
        setCarouselWidth(totalWidth);
      }
    };

    // Recalculate on mount and on window resize
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  // Toggle play/pause on click
  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
    } else {
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) v.pause();
      });
      video.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="bg-green-100 py-15 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Watch Our <span className="text-green-600">Practice</span>
        </motion.h2>

        {/* Outer Carousel wrapper (Hides overflow) */}
        <div className="overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex space-x-8 cursor-grab h-100 w-full active:cursor-grabbing px-4" // Removed padding from outer div
            drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            // Ensure constraints update when carouselWidth updates
            style={{ x: 0 }} // Reset X position visual state to 0 for stability
          >
            {videos.map((vid, index) => (
              <motion.div
                key={vid.id}
                style={{ width: "50%" }}
                className="flex-shrink-0 aspect-video bg-gray-100 border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 relative group 
             w-full sm:w-[calc(50%-16px)] md:w-[calc(33.33%-20px)] lg:w-[calc(25%-24px)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Video Element */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={vid.src}
                  onClick={() => handleVideoClick(index)}
                  playsInline
                  className="w-full h-full object-cover cursor-pointer"
                ></video>

                {/* Overlay Play Button (Only visible when paused and on hover) */}
                <div
                  onClick={() => handleVideoClick(index)}
                  className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 cursor-pointer 
                        ${
                          playingIndex === index
                            ? "opacity-0"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                >
                  <motion.span
                    className="text-white text-5xl font-bold"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    {playingIndex === index ? "⏸️" : "▶️"}
                  </motion.span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2 text-center font-semibold">
                  {vid.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VideoCarousel;
