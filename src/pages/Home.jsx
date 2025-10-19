import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import VideoCarousel from '../components/VideoCarousel';
import FacilitiesSection from '../components/FacilitiesSection';
import PricingPlanSection from '../components/PricingPlanSection';
// import GoogleReviews from '../components/GoogleReviews';


function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <VideoCarousel />
      <PricingPlanSection />
      <FacilitiesSection />
      {/* <GoogleReviews /> */}
      
    </>
  );
}

export default Home;