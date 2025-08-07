import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import NotFound from "../not-found/not-found";
import { PulseLoader } from "react-spinners";
import { useFetchResult } from "../../components/useFetchResult/useFetchResult";
import { useScrollTop } from "../../components/scroll-top/useScrollTop";
import { useTitle } from "../../components/useTitle/useTitle";

const Rent = ({ isMobile }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rentProperties, setRentProperties] = useState(null);
  useTitle("Rent");
  const buyPropHeadings = {
    heading: "Properties For Available Rent",
    subHeading: "Search for properties on rent",
  };
  // Get next page
  useFetchResult(currentPage, setRentProperties, "rent");
  useScrollTop(currentPage);
  // get properties
  if (!rentProperties) {
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
              page={"Rent"}
              propType={"Rent"}
              propertiesArray={rentProperties.properties}
              pagination={rentProperties.pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              isMobile={isMobile}
            />
          }
        />
        <Route path="property/:id/*" element={<Properties />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Rent;
