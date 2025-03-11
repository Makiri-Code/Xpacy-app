import { createContext, useState, useEffect } from "react";
import fetchServer from "../utils/serverutils/fetchServer";
import Cookies from "js-cookie";

export const PageContext = createContext({
  propertiesArray: null,
  setPropertiesArray: () => {},
  propertyObj: null,
  setPropertyObj: () => {},
  pagination: null,
  searchedProperties: null,
  setSearchedProperties: () => {},
  searchedPagination: null,
  setSearchedPagination: () => {},
  showDashboardSidebar: false,
  setShowDashboardSidebar: () => {},
  nigerianStates: [],
  setNigerianStates: () => {},
});

export const PageProvider = ({ children }) => {
  const [showDashboardSidebar, setShowDashboardSidebar] = useState(false);
  const [propertiesArray, setPropertiesArray] = useState(null);
  const [propertyObj, setPropertyObj] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [searchedProperties, setSearchedProperties] = useState(null);
  const [searchedPagination, setSearchedPagination] = useState(null);
  const [nigerianStates, setNigerianStates] = useState([]);
  
  // get properties
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
  // get Nigerian states
  useEffect(() => {
    const states = async () => {
      try {
        const statesArray = await fetch(
          "https://app.xpacy.com/location/fetch-states",
          { method: "GET" }
        );
        const response = await statesArray.json();
        setNigerianStates(response.state);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    states();
  }, []);


  const value = {
    propertiesArray,
    pagination,
    propertyObj,
    setPropertyObj,
    setPropertiesArray,
    searchedPagination,
    setSearchedPagination,
    searchedProperties,
    setSearchedProperties,
    showDashboardSidebar,
    setShowDashboardSidebar,
    nigerianStates, 
    setNigerianStates,
  };

  

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
