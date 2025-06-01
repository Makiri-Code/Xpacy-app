import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import { PageContext } from "../../contexts/page.context";
import fetchServer from "../../utils/serverutils/fetchServer";
import { PulseLoader } from "react-spinners";
const Buy = ({propertiesArray, pagination}) => {
  const [onSalePropertiesArray, setOnSalePropertiesArray] = useState(propertiesArray?.filter((property) => property.property_status === 'Sale'))
  const buyPropHeadings = {
    heading: "Properties For Sale",
    subHeading: "Search for properties on sale",
  };
    // get properties
    useEffect(() => {
      setOnSalePropertiesArray(propertiesArray?.filter((property) => property.property_status === 'Sale'))
    }, [propertiesArray]);
    if(!propertiesArray || !onSalePropertiesArray) {
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
        )
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
            propertiesArray={onSalePropertiesArray}
            pagination={pagination} 
            />
          }
        />
        <Route
          path="property/:id/*"
          element={
            <Properties 
              Properties={propertiesArray} 
            />
          }
        />
      </Routes>
    </>
  );
};

export default Buy;
