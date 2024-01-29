import React from "react";

// components
import DiningCarousel from "./DiningCarousel";
import GoldMembership from "./GoldMembership";


const Dining = () => {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Collections
      </h1>
      <DiningCarousel />
      <GoldMembership/>

    </div>
    
  );
};

export default Dining;