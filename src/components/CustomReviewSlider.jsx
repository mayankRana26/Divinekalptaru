import { useEffect } from "react";

const CustomReviewSlider = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="reviews mt-2 ">
      <h2 className="text-center text-2xl font-bold mb-8">What Our Customers Say</h2>
      <div className="sk-ww-google-reviews" data-embed-id="25645598"></div>
    </div>
  );
};

export default CustomReviewSlider;
