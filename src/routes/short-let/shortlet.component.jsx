import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import { PulseLoader } from "react-spinners";
import { useFetchResult } from "../../components/useFetchResult/useFetchResult";
import { useScrollTop } from "../../components/scroll-top/useScrollTop";
import { useTitle } from "../../components/useTitle/useTitle";

const Shortlet = ({ isMobile }) => {
  const [shortletProperties, setShortletProperties] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const buyPropHeadings = {
    heading: "Properties available for Shortlet",
    subHeading: "Search for properties on shortlet",
  };
  // Get next page
  useFetchResult(currentPage, setShortletProperties, "shortlet");
  useScrollTop(currentPage);
  useTitle("Shortlet");
  if (!shortletProperties) {
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
              page={"Shortlet"}
              propertiesArray={shortletProperties.properties}
              pagination={shortletProperties.pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isMobile={isMobile}
            />
          }
        />
        <Route
          path="property/:id/*"
          element={<Properties Properties={shortletProperties.properties} />}
        />
      </Routes>
    </>
  );
};

export default Shortlet;
