import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantInfo = (props) => {
  const [restaurant, setRestaurant] = useState({
    images: [
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/9386449fd71cc10c9b1007469be4fe10.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/chains/8/301718/521b89e0710553cee262e5f0b13efb23.jpg",
      },
      {
        location:
          "https://b.zmtcdn.com/data/pictures/5/18216915/1cd1d09c0a137b5d8da7a7f7310cd919.jpg",
      },
    ],
    name: "Biryani Blues",
    cuisine: ["Biryani", "Kebab", "Desserts"],
    address: "Connaught Place, New Delhi",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });
  return (
    <div className="my-4">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <div className="flex items-center gap-6 text-xs md:text-base">
          <div className="flex items-center gap-2">
            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
              {restaurant.restaurantRating} <TiStarFullOutline />
            </span>
            <span>
              <strong>100</strong>
              <p className="border-dashed border-b border-gray-500">
                Dining Reviews
              </p>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
              {restaurant.deliveryRating} <TiStarFullOutline />
            </span>
            <span>
              <strong>100</strong>
              <p className="border-dashed border-b border-gray-500">
                Delivery Reviews
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="text-base md:text-lg text-gray-600 flex flex-col gap-2 md:block">
        <h3>{restaurant.cuisine && restaurant.cuisine.join(", ")}</h3>
        <h3 className="text-gray-400">{restaurant.address}</h3>
        <div className="text-sm">
          <span className="text-yellow-400 ">Open Now</span> - 11am - 8pm
          (Today)
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;