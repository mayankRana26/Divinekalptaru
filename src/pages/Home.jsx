import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import VideoCarousel from '../components/VideoCarousel';
import FacilitiesSection from '../components/FacilitiesSection';
import PricingPlanSection from '../components/PricingPlanSection';
import HelpPopup from '../components/HelpPopup';
import InstructorSection from '../components/InstructorSection';
import CustomReviewSlider from '../components/CustomReviewSlider';
import JoinOnlineButton from '../components/JoinOnlineButton';
// import GoogleReviews from '../components/GoogleReviews';


function Home() {
  return (
    <>
      <Hero />
      <JoinOnlineButton />
      <WhyChooseUs />
      <VideoCarousel />
      <PricingPlanSection />
      <InstructorSection />
      <FacilitiesSection />
       <HelpPopup />
       <CustomReviewSlider />

      
    </>
  );
}

export default Home;