import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import VideoCarousel from '../components/VideoCarousel';
import GoogleReviews from '../components/GoogleReviews';


function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <VideoCarousel />
      <GoogleReviews />
      
    </>
  );
}

export default Home;