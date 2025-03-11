import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import userImage from '../assets/user-profile-img.svg'
import { useNavigate } from "react-router-dom";
import fetchServer from "../utils/serverutils/fetchServer";
export const UserContext = createContext({
    userToken: '',
    server: '',
    userData: null,
    signupUser: null,
    userProfile: null,
    savedPropertiesArray: null,
    setSavedPropertiesArray: () => {},
    savedPropertiesPagination: null,
    setSavedPropertiesPagination: () => {},
    setUserProfile: () => {},
    setSignupUser: () => {},
    loggedInUser: null,
    setLoggedInUser: () => {},
    setUserData: () => {},
    setUserToken: () => {},
    isProviderAssigned: false,
    setIsProviderAssigned: () => {},
});

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(false);
    const [userProfile, setUserProfile] = useState(null)  
    const [userData, setUserData] = useState(null)
    const [userToken, setUserToken] = useState(Cookies.get('gt-jwt-br'));
    const [signupUser, setSignupUser] = useState(null);
    const [server] = useState("https://app.xpacy.com");
    const [isProviderAssigned, setIsProviderAssigned] = useState(false);
    const [savedPropertiesArray, setSavedPropertiesArray] = useState(null);
    const [savedPropertiesPagination, setSavedPropertiesPagination] = useState(null);

    // get invoiceList
  // useEffect(() => {
  //   const getInvoiceList = async () => {
  //     try {
  //       const resp = await fetchServer(
  //         "GET",
  //         {},
  //         userToken,
  //         "invoice/fetch-invoices",
  //         "https://app.xpacy.com"
  //       );
  //       setInvoiceList(resp.data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  //   if(userToken){
  //     getInvoiceList();
  //   }
  // }, [userToken]);
// get referral downline
    const value = { 
        setUserToken,
        userData,
        setUserData,
        server,
        signupUser,
        userProfile,
        setUserProfile,
        setSignupUser, 
        userToken,
        loggedInUser, 
        setLoggedInUser,
        isProviderAssigned,
        setIsProviderAssigned,
        savedPropertiesArray,
        setSavedPropertiesArray,
        savedPropertiesPagination,
        setSavedPropertiesPagination,
    }
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    )
}