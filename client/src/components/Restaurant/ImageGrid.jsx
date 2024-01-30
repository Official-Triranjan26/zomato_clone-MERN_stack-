import React,{useState} from 'react';
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = () => {
  const [restaurant , setRestaurant] = useState({
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
      <>
        <div className="w-full h-60 md:hidden">
          <img
            src={restaurant.images.length && restaurant.images[0].location}
            alt="restaurant"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="hidden w-full h-96 md:flex gap-1">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <img
              src={restaurant.images.length && restaurant.images[0].location}
              alt="restaurant"
              className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-105"
            />
          </div>
          <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
            <div className="w-full h-2/4 overflow-hidden rounded-lg">
              <img
                src={restaurant.images.length && restaurant.images[1].location}
                alt="restaurant"
                className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110"
              />
            </div>
            <div className="w-full h-2/4 overflow-hidden rounded-lg">
              <img
                src={restaurant.images.length && restaurant.images[2].location}
                alt="restaurant"
                className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110"
              />
            </div>
          </div>
          <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
            <div className="w-full h-2/4 relative">
              <img
                src={restaurant.images.length && restaurant.images[3].location}
                alt="restaurant"
                className="w-full h-full object-cover object-center rounded-lg"
              />
              <div className="absolute inset-0 bg-opacity-40 bg-black h-full rounded-lg" />
              <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full text-center text-white font-semibold">
                View Gallery
              </h4>
            </div>
            <div className="w-full h-2/4 relative">
              <img
                src={restaurant.images.length && restaurant.images[4].location}
                alt="restaurant"
                className="w-full h-full object-cover object-center rounded-lg"
              />
              <div className="absolute inset-0 bg-opacity-40 bg-black h-full rounded-lg" />
              <div className="absolute flex flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center text-white font-semibold">
                <div className="bg-black p-3 rounded-full bg-opacity-50">
                  <AiOutlineCamera className="text-white" />
                </div>
                <h4>View Gallery</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ImageGrid