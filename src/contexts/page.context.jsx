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
  faqs: null,
  setFaqs: () => {},
  nigerianStates: [],
  setNigerianStates: () => {},
  showDashboardSidebar: null,
  setShowDashboardSidebar: () => {},
  isOnline: navigator.onLine,
});

export const PageProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [faqs, setFaqs] = useState(null);
  const [propertiesArray, setPropertiesArray] = useState(null);
  const [propertyObj, setPropertyObj] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [searchedProperties, setSearchedProperties] = useState(null);
  const [searchedPagination, setSearchedPagination] = useState(null);
  const [nigerianStates, setNigerianStates] = useState([]);
  const [showDashboardSidebar, setShowDashboardSidebar] = useState(null);

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

  // check for network conectivity
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, [isOnline]);


  //Get FAQs
  useEffect(() => {
    const getFAQs = async () => {
      try {
        const response = await fetch("https://app.xpacy.com/faq/get-all-faqs", {method: 'GET'});
        const faq = await response.json();
        setFaqs(faq.data);
      } catch(error) {
        console.error("Error fetching faqs", error);
      }
    }
    getFAQs();
  }, []);
  
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
    faqs,
    setFaqs,
    nigerianStates, 
    setNigerianStates,
    showDashboardSidebar,
    setShowDashboardSidebar,
    isOnline,
  };

  

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
