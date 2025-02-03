import { createContext, useState, useEffect } from "react";
import fetchServer from "../utils/serverutils/fetchServer";
import Cookies from "js-cookie";

export const PageContext = createContext({
  propertiesArray: null,
  setPropertiesArray: () => {},
  propertyObj: null,
  setPropertyObj: () => {},
  pagination: null,
  savedPropertiesArray: null,
  setSavedPropertiesArray: () => {},
  searchedProperties: null,
  setSearchedProperties: () => {},
  searchedPagination: null,
  setSearchedPagination: () => {},
  showDashboardSidebar: false,
  setShowDashboardSidebar: () => {},
});

export const PageProvider = ({ children }) => {
  const [showDashboardSidebar, setShowDashboardSidebar] = useState(false);
  const [propertiesArray, setPropertiesArray] = useState(null);
  const [propertyObj, setPropertyObj] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [searchedProperties, setSearchedProperties] = useState(null);
  const [searchedPagination, setSearchedPagination] = useState(null);
  const [savedPropertiesArray, setSavedPropertiesArray] = useState(null)
  
  useEffect(() => {
    const getProperties = async () => {
      try {
        const properties = await fetch(
          "https://app.xpacy.com/property/fetch-properties",
          { method: "GET" }
        );
        const response = await properties.json();
        setPropertiesArray(response.properties);
        setPagination(response.pagination);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getProperties();
  }, []);
  const value = {
    propertiesArray,
    pagination,
    propertyObj,
    setPropertyObj,
    setPropertiesArray,
    savedPropertiesArray,
    setSavedPropertiesArray,
    searchedPagination,
    setSearchedPagination,
    searchedProperties,
    setSearchedProperties,
    showDashboardSidebar,
    setShowDashboardSidebar,
  };

  

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
