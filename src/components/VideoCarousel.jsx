// src/components/VideoCarousel.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const videos = [
  { id: 1, src: "/video1.mp4", title: "Morning Vinyasa Flow" },
  { id: 2, src: "/video2.mp4", title: "Deep Meditation Guide" },
  { id: 3, src: "/video3.mp4", title: "Yoga Anatomy Basics" },
  { id: 4, src: "/video4.mp4", title: "Restorative Evening Stretch" },
];

function VideoCarousel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 }); 
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  // 1. Video Playback & Autoplay Logic (Muted for Autoplay)
  useEffect(() => {
    // 🔄 When section is visible, play the current video (if muted)
    // IMPORTANT: Since we want sound (controls=true), we will only ensure pauseAll works.
    if (isInView && videoRefs.current[activeIndex]) {
        // We ensure only one video is active when the section is in view
        videoRefs.current.forEach((vid, index) => {
            if (vid) {
                if (index === activeIndex) {
                    // Start from the beginning if it was paused and in view
                    vid.play().catch(e => console.warn("Autoplay failed:", e));
                } else {
                    vid.pause();
                }
            }
        });
    } else {
      pauseAll();
    }
  }, [isInView, activeIndex]);

  const pauseAll = () => {
    videoRefs.current.forEach((v) => {
      if (v) v.pause();
    });
  };

  const nextVideo = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Drag logic हटा दिया गया, अब सिर्फ़ visual transition रखेंगे

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-20 bg-white overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-black"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Watch Our <span className="text-green-600">Practice</span>
      </motion.h2>

      {/* Video slider container */}
      <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-2xl shadow-2xl">
        {videos.map((vid, index) => (
          <motion.video
            key={vid.id}
            ref={(el) => (videoRefs.current[index] = el)}
            src={vid.src}
            onEnded={nextVideo} // ✅ Video खत्म होने पर nextVideo कॉल होगा
            controls={true} // ✅ आवाज़ और प्लेबैक कंट्रोल्स दिखने के लिए
            autoPlay={false} // Autoplay logic is handled by useEffect
            loop
            playsInline
            muted={false} // 🛑 आवाज़ आने देने के लिए Muted हटा दिया गया
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
              index === activeIndex
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-95 z-10"
            }`}
          />
        ))}

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 text-lg font-semibold text-center z-30">
          {videos[activeIndex].title}
        </div>

        {/* Navigation arrows (z-30 to ensure they are above the video) */}
        <button
          onClick={prevVideo}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full text-lg z-30 transition-colors"
          aria-label="Previous video"
        >
          ‹
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full text-lg z-30 transition-colors"
          aria-label="Next video"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex mt-6 space-x-3">
        {videos.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              index === activeIndex ? "bg-green-600" : "bg-gray-300"
            }`}
            aria-label={`Go to video ${index + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default VideoCarousel;