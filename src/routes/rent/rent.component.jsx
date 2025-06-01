import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import NotFound from "../not-found/not-found";
import { PulseLoader } from "react-spinners";
const Rent = ({ propertiesArray, pagination }) => {
  const buyPropHeadings = {
    heading: "Properties For Rent",
    subHeading: "Search for properties on rent",
  };
  const [rentalProperties, setRentalProperties] = useState(propertiesArray?.filter((property) => property.property_status === 'Rent'));
      // get properties
      useEffect(() => {
        setRentalProperties(propertiesArray?.filter((property) => property.property_status === 'Rent'))
      }, [propertiesArray]);
      if(!propertiesArray || !rentalProperties) {
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
              page={"Rent"}
              propType={"Rent"}
              propertiesArray={rentalProperties}
              pagination={pagination}
            />
          }
        />
        <Route path="property/:id/*" element={<Properties />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default Rent;
