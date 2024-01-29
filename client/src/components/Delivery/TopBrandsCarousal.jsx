import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import {topBrand_categories} from '../CarousalData';

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const TopBrandsCarousal = ()=>{

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
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <h1 className="text-xl mt-8 md:mt-8 md:text-3xl md:font-semibold mb-8 lg:mt-10">
        Top brands for you
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {topBrand_categories.map((food, index) => (
          <DeliveryCategoryCard key={index} {...food} />
        ))}
      </div>
      <div id="no" className="hidden lg:block" >
        <Swiper {...slideConfig}>
          {topBrand_categories.map((food, index) => (
            <SwiperSlide key={index}>
              <DeliveryCategoryCard {...food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default TopBrandsCarousal;