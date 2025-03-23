import { useState, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { PageContext } from "../../../contexts/page.context";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import SideBarNav from "../../../components/side-bar-nav/sideBarNav";
import DashboardPage from "../../../components/user-dashboard/userDashboard";
import Notification from "../notification/notification";
import SavedProperties from "../saved-properties/savedProperties";
import UserPayments from "../user-payments/userPayments";
import ProfileSettings from "../profile-settings/profileSettings";
import HelpAndSupport from "../help-support/help";
import Referral from "../referral/referral";
import fetchServer from "../../../utils/serverutils/fetchServer";
import BookServices from "../book-services/bookServices";
import userImage from '../../../assets/user-profile-img.svg';
import isTokenExpired from "../../../utils/token/handleUserToken";
import ServiceRequestDetails from "../book-services/services/service-request details/service-request-details";
import ServiceRequest from "../book-services/services/service-request/service-request";
import Invoice from "../user-payments/invoice/invoice";
const UserDashboard = () => {
  const { showDashboardSidebar, setShowDashboardSidebar } =
    useContext(PageContext);
  const {userToken, userProfile, savedPropertiesArray, setSavedPropertiesArray, savedPropertiesPagination, setSavedPropertiesPagination, setUserProfile, server, setLoggedInUser} = useContext(UserContext);
  const navigate = useNavigate();
  // const [userProfile, setUserProfile] = useState(null);
  // const [savedPropertiesArray, setSavedPropertiesArray] = useState(null);
  // const [savedPropertiesPagination, setSavedPropertiesPagination] = useState(null);
  const [invoiceList, setInvoiceList] = useState(null);
  const [bookedServices, setBookedServices] = useState(null);
  const [notifications, setNotifications] = useState(null);
  const [referralDownLine, setReferralDownLine] = useState(null);
  const [profileImage, setProfileImage] = useState('');


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          setLoggedInUser(resp.user);
          setProfileImage(resp.user.display_picture ? resp.user.display_picture : userImage);
        } catch (error) {
          console.log("Error getting user", error);
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
  console.log(savedPropertiesArray);
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
  useEffect(() => {
    const getInvoiceList = async () => {
      try {
        const resp = await fetchServer(
          "GET",
          {},
          userToken,
          "invoice/fetch-invoices",
          "https://app.xpacy.com"
        );
        setInvoiceList(resp.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if(userToken){
      getInvoiceList();
    }
  }, [userToken]);

  // Reroute to log in when token expires
  useEffect(()=> {
    if (isTokenExpired(userToken)) {
      navigate('/auth/log-in');
    } else {
      console.log('Welcome back! Token is valid.');
    }
  }, [userToken]);

  return (
    <>
      {!savedPropertiesArray && !userProfile && !bookedServices && !notifications ? (
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
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <SideBarNav
                isMobile={isMobile}
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar}
              />
            }
          >
            <Route
              index
              element={
                <DashboardPage
                  userProfile={userProfile}
                  savedPropertiesArray={savedPropertiesArray}
                  isMobile={isMobile}
                  showDashboardSidebar={showDashboardSidebar}
                  setShowDashboardSidebar={setShowDashboardSidebar}
                  bookedServices={bookedServices}
                  notifications={notifications}
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                />
              }
            />
            <Route
              path="notification"
              element={
                <Notification
                  isMobile={isMobile}
                  showDashboardSidebar={showDashboardSidebar}
                  setShowDashboardSidebar={setShowDashboardSidebar}
                  notifications={notifications}
                  profileImage={profileImage}

                />
              }
            />
            <Route
              path="saved-properties"
              element={
                <SavedProperties
                  showDashboardSidebar={showDashboardSidebar}
                  setShowDashboardSidebar={setShowDashboardSidebar}
                  savedPropertiesArray={savedPropertiesArray}
                  setSavedPropertiesArray={setSavedPropertiesArray}
                  isMobile={isMobile}
                  savedPropertiesPagination = {savedPropertiesPagination}
                  profileImage={profileImage}
                  notifications={notifications}
                />
              }
            />
            <Route
              path="payments"
              element={
              <UserPayments 
                isMobile={isMobile} 
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar}
                invoiceList = {invoiceList}
                profileImage={profileImage}
                notifications={notifications}
              />
              }
            />
            <Route
              path="profile-settings"
              element={
              <ProfileSettings 
                isMobile={isMobile}
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar} 
                userProfile = {userProfile}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
                notifications={notifications}
              />
            }
            />
            <Route path="support" 
              element={
              <HelpAndSupport 
                isMobile={isMobile}
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar} 
                profileImage={profileImage}
                notifications={notifications}
              />
              } />
            <Route path="referral" 
              element={
              <Referral
                isMobile={isMobile}
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar}
                userProfile={userProfile}
                referralDownLine = {referralDownLine}
                profileImage={profileImage}
                notifications={notifications}
              />
              } />
            <Route 
              path="book-services" 
              element={
              <BookServices
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar}
                isMobile={isMobile}
                bookedServices={bookedServices}
                notifications = {notifications}
                profileImage={profileImage}
                notifications={notifications}
              />
              } 
              />
          </Route>
          <Route path="service-details/:id" element={<ServiceRequestDetails/>} />
          <Route path="reschdeule-request/:id" element={<ServiceRequest/>} />
          <Route path="invoice/:id" element={<Invoice/>} />
        </Routes>
      )}
    </>
  );
};
export default UserDashboard;
