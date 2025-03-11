import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import NotFound from "../not-found/not-found";
const Rent = ({ propertiesArray, pagination }) => {
  const buyPropHeadings = {
    heading: "Properties For Rent",
    subHeading: "Search for properties on rent",
  };

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
              propertiesArray={propertiesArray}
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
