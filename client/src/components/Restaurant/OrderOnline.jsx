import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn";
import FoodList from "../OrderOnline/FoodList";
import MenuListContainer from "../OrderOnline/MenuListContainer";

const OrderOnline = () => {
  const [menu, setMenu] = useState([
    {
      name: "Today's Special",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
          name: "Butter Pancakes with Bacon",
          rating: 4.5,
          price: 695,
          description: "Rashers and bourbon caramel sauce.",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
          name: "Amritsari Fish Tikka",
          rating: 5,
          price: 545,
          description:
            "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/599/111dd44381fecc63bb4bf37ab8179599.jpg",
          name: "Amritsari Fish Tikka",
          rating: 3.5,
          price: 375,
          description:
            "Spiced chicken minced and toasted served with butter buns.",
        },
      ],
    },
    {
      name: "Soup",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/c7b/da86667e2a69ff4467c4155a7219fc7b.jpg",
          name: "Chicken & Corn Soup",
          rating: "4.5",
          price: "1970",
          description: "",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/c3c/7ed2652d58a67ce963704db111b44c3c.jpg",
          name: "Chicken Manchow Soup",
          rating: "4",
          price: "190",
          description: "",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/03e/1834a3a8fb1d08bba554e6c35ee6d03e.jpg",
          name: "Hot & Sour Soup",
          rating: "3",
          price: "165",
          description: "",
        },
      ],
    },
  ]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full flex items-start">
        <aside className="sticky top-16 overflow-y-scroll hidden md:flex flex-col gap-1  border-r  border-gray-200 w-1/4 h-screen">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
              target={index}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4 sticky overflow-auto h-screen top-16">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  overflow-y-screen flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList key={index} {...item} target={index} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
};
export default OrderOnline;