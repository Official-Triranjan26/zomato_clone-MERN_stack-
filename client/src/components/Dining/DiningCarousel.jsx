import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
  const [dining] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/019acf0c53e2ebf0e8658e471a20a2ab_1665210805.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/4872d7301e80d72fd18c4e1e43bf8789_1660738717.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/84317f74208f036be1936e32dc627d88_1660823494.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/51979569f85f4579e15336825f446188_1660738438.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/ef4da4077aae068ea1e4410eefb5aec5_1660735784.jpg",
      title: "Eid-e-Milad Specials",
      places: "9 Places",
    },
  ]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  return (
    <div className="w-full">
      <Swiper {...slideConfig}>
        {dining.map((item, index) => (
          <SwiperSlide key={index}>
            <PictureCarouselCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiningCarousel;