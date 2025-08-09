import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import { PulseLoader } from "react-spinners";
import { useFetchResult } from "../../components/useFetchResult/useFetchResult";
import { useScrollTop } from "../../components/scroll-top/useScrollTop";
const Search = ({ isMobile }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedProperties, setSearchedProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState(() =>
    JSON.parse(localStorage.getItem("form-fields"))
  );
  // const formFields = JSON.parse(localStorage.getItem("form-fields"));
  const { purpose, location, type, minBedrooms, minPrice, maxPrice } =
    formFields;
  const url = `https://app.xpacy.com/property/fetch-properties?purpose=${purpose}&type=${type}&location=${location}&minBedrooms=${minBedrooms}&minPrice=${
    minPrice ? minPrice : ""
  }&maxPrice=${maxPrice ? maxPrice : ""}&page=${currentPage}`;

  // Get next page
  useFetchResult(
    currentPage,
    setSearchedProperties,
    purpose,
    url,
    setIsLoading
  );
  useScrollTop(currentPage, isLoading);

  const buyPropHeadings = {
    heading: `We've got ${searchedProperties?.pagination?.total} results for you`,
    subHeading: "",
  };
  if (isLoading) {
    return (
      <PulseLoader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          height: "80vh",
        }}
        margin={5}
      />
    );
  }
  return (
    <>
      {searchedProperties ? (
        <Routes>
          <Route
            index
            element={
              <Shop
                propHeadings={buyPropHeadings}
                page={"Results"}
                propType={"Rent"}
                propertiesArray={searchedProperties?.properties}
                pagination={searchedProperties.pagination}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isMobile={isMobile}
                formFields={formFields}
                setFormFields={setFormFields}
                onSetSearchedProperties={setSearchedProperties}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route path="property/*" element={<Properties />} />
        </Routes>
      ) : (
        <PulseLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            height: "80vh",
          }}
          margin={5}
        />
      )}
    </>
  );
};

export default Search;
