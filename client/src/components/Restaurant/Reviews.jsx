import React, { useState } from "react";

//components
import ReviewCard from "../Reviews/ReviewCard";
import AddReviewCard from "../Reviews/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      rating: 3.5,
      isRestaurantReview: false,
      createdAt: "Fri Oct 14 2022 20:20:34 GMT+0530 (India Standard Time)",
      reviewText: "Very bad experience.",
    },
    {
      rating: 4.5,
      isRestaurantReview: false,
      createdAt: "Fri Oct 14 2022 20:19:34 GMT+0530 (India Standard Time)",
      reviewText: "Very good experience.",
    },
  ]);

  return (
    <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
      <div className="w-full md:w-8/12 flex flex-col gap-3">
        <div className="md:hidden mb-4">
          <AddReviewCard />
        </div>
        {reviews.map((review, index) => (
          <ReviewCard {...review} key={index} />
        ))}
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white py-4 px-4 shadow-md flex-col gap-4"
      >
        <AddReviewCard />
      </aside>
    </div>
  );
};

export default Reviews;