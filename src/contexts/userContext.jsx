import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import fetchServer from "../utils/serverutils/fetchServer";
export const UserContext = createContext({
    userToken: '',
    server: '',
    userData: null,
    signupUser: null,
    setSignupUser: () => {},
    setUserData: () => {},
    userProfile: null,
    setUserProfile: () => {},
    setUserToken: () => {},
    savedPropertiesArray: null,
    setSavedPropertiesArray: () => {},
    bookedServices: null,
    notifications: null,
    savedPropertiesPagination: null,
    invoiceList: null,
    setInvoiceList: () => {},
    referralDownLine: null
});

export const UserProvider = ({children}) => {
  const navigate = useNavigate()
    const [userData, setUserData] = useState(null)
    const [userProfile, setUserProfile] = useState(null);
    const [savedPropertiesArray, setSavedPropertiesArray] = useState(null);
    const [savedPropertiesPagination, setSavedPropertiesPagination] = useState(null);
    const [invoiceList, setInvoiceList] = useState(null);
    const [userToken, setUserToken] = useState(Cookies.get('gt-jwt-br'));
    const [signupUser, setSignupUser] = useState(null);
    const [server] = useState("https://app.xpacy.com");
    const [bookedServices, setBookedServices] = useState(null);
    const [notifications, setNotifications] = useState(null);
    const [referralDownLine, setReferralDownLine] = useState(null);

    const isTokenExpired = () => {
  
      if (!userToken) {
        return false; // If no token is found, consider it expired
      }
      try {
        // Decode the JWT payload (middle part of the token)
        const payloadBase64 = userToken.split('.')[1]; // JWT structure: header.payload.signature
        const payload = JSON.parse(atob(payloadBase64)); // Decode Base64 to JSON
    
        const now = Math.floor(Date.now() / 1000); // Current time in seconds
    
        if (payload.exp < now) {
          return true; // Token is expired
        }
        return false; // Token is still valid
      } catch (error) {
        console.error('Error decoding token:', error);
        return true; // Treat any decoding error as an expired token
      }
    }
    // getUserProfile
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const resp = await fetchServer(
          "GET",
          {},
          userToken,
          "user/fetch-profile",
          server
        );
        setUserProfile(resp.user);
      } catch (error) {
        console.log(error);
      }
    };
    if(userToken){
      getUserProfile();
    }
  }, [userToken]);

  // getSavedPropertiesData
  useEffect(() => {
    const getSavedPropertiesData = async () => {
      try {
        const resp = await fetchServer(
          "GET",
          {},
          userToken,
          "user-property/saved-properties",
          "https://app.xpacy.com"
        );
        setSavedPropertiesArray(resp.data);
        setSavedPropertiesPagination(resp.pagination);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if(userToken){
      getSavedPropertiesData();
    }
  }, [userToken]);

  // getBookedServicesData
  useEffect(() => {
    const getBookedServicesData = async () => {
      try {
        const resp = await fetchServer(
          "GET",
          {},
          userToken,
          "service/fetch-services",
          "https://app.xpacy.com"
        );
        setBookedServices(resp.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if(userToken){
      getBookedServicesData();
    }
  }, [userToken]);

// getNotifications
  useEffect(() => {
    const geNotificationsData = async () => {
      try {
        const resp = await fetchServer(
          "GET",
          {},
          userToken,
          "notification/fetch-notifications",
          "https://app.xpacy.com"
        );
        setNotifications(resp.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if(userToken){
      geNotificationsData();
    }
  }, [userToken]);

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
  useEffect(() => {
    const getReferralDownLine = async () => {
      try {
        const resp = await fetchServer(
          "GET",
          {},
          userToken,
          `user/fetch-downline/${userProfile.referralCode}`,
          "https://app.xpacy.com"
        );
        setReferralDownLine(resp.data);
        console.log(resp)
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if(userToken){
      getReferralDownLine();
    }
  }, [userToken]);
  // Reroute to log in when token expires
  useEffect(()=> {
    if (isTokenExpired()) {
      navigate('/auth/log-in');
    } else {
      console.log('Welcome back! Token is valid.');
    }
  }, [userProfile]);


    const value = { 
        setUserToken,
        userProfile,
        setUserProfile,
        userData,
        setUserData,
        server,
        signupUser,
        setSignupUser, 
        userToken,
        savedPropertiesArray,
        bookedServices,
        notifications,
        savedPropertiesPagination,
        invoiceList,
        setInvoiceList,
        referralDownLine,
    }
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    )
}