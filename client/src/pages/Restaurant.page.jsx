import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestaurantLayout from '../layouts/Restaurant.layout'

const Restaurant = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  if (`/restaurant/${id}` === pathname) {
    return <Navigate to={`/restaurant/${id}/overview`} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default RestaurantLayout(Restaurant);