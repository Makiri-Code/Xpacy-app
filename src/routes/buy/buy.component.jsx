import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";

import { PulseLoader } from "react-spinners";
import { useFetchResult } from "./../../components/useFetchResult/useFetchResult";
import { useScrollTop } from "./../../components/scroll-top/useScrollTop";
import { useTitle } from "../../components/useTitle/useTitle";
const Buy = ({ isMobile }) => {
  const [saleProperties, setSaleProperties] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useTitle("Sale");
  const buyPropHeadings = {
    heading: "Properties For Sale",
    subHeading: "Search for properties on sale",
  };
  useFetchResult(currentPage, setSaleProperties, "sale");
  useScrollTop(currentPage);
  if (!saleProperties) {
    return (
      <PulseLoader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          height: "100vh",
        }}
        margin={5}
      />
    );
  }
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Shop
              propHeadings={buyPropHeadings}
              page={"Buy"}
              propertiesArray={saleProperties.properties}
              pagination={saleProperties.pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isMobile={isMobile}
            />
          }
        />
        <Route
          path="property/:id/*"
          element={<Properties Properties={saleProperties.properties} />}
        />
      </Routes>
    </>
  );
};

export default Buy;
