import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/properties.component";
import NotFound from "../not-found/not-found";
import { PulseLoader } from "react-spinners";
import { useFetchResult } from "../../components/useFetchResult/useFetchResult";
import { useScrollTop } from "../../components/scroll-top/useScrollTop";
import { useTitle } from "../../components/useTitle/useTitle";
import { Outlet } from "react-router-dom";
const Rent = ({ dispatch }) => {
  useTitle("Rent Properties");
  // Get next page

  return (
    <>
      <Outlet />
    </>
  );
};

export default Rent;
