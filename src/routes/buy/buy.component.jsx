import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import { PageContext } from "../../contexts/page.context";
const Buy = ({propertiesArray, pagination}) => {
  const buyPropHeadings = {
    heading: "Properties For Sale",
    subHeading: "Search for properties on sale",
  };
  return (
    <>
      <Routes>
        <Route
          index
          element={
                <Shop 
                propHeadings={buyPropHeadings} 
                page={"Buy"}
                propertiesArray={propertiesArray}
                pagination={pagination} 
                />
            }
        />
        <Route
          path="property/:id/*"
          element={<Properties Properties={propertiesArray} />}
        />
      </Routes>
    </>
  );
};

export default Buy;
