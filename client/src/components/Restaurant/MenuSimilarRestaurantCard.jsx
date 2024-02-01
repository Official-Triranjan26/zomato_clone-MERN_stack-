import React from "react";
import { TiStar } from "react-icons/ti";

const MenuSimilarRestaurantCard = (props) => {
  return (
    <div className="mx-2 my-2">
      <div className="bg-white shadow rounded-md">
        <div className="w-full h-48">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className="font-semibold text-lg">{props.title}</h3>
          <div className="flex items-center justify-start text-sm gap-4">
            <span className="flex items-center justify-between text-sm gap-2">
              <span className="flex text-sm items-center gap-1 bg-green-700 text-white px-1 py-0.5 rounded">
                3.9 <TiStar />
              </span>
              Dining
            </span>
            <span className="flex items-center justify-between text-sm gap-2">
              <span className="flex text-sm items-center gap-1 bg-green-700 text-white px-1 py-0.5 rounded">
                4.5 <TiStar />
              </span>
              Delivery
            </span>
          </div>
          <h4>Street Food, Benerages, Tea</h4>
        </div>
      </div>
    </div>
  );
};

export default MenuSimilarRestaurantCard;