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
const UserDashboard = ({ userProfile, savedPropertiesArray, bookedServices, notifications, savedPropertiesPagination, invoiceList, referralDownLine }) => {
  const { showDashboardSidebar, setShowDashboardSidebar } =
    useContext(PageContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const getUserProfile = async () => {
  //     try {
  //       const resp = await fetchServer(
  //         "GET",
  //         {},
  //         userToken,
  //         "user/fetch-profile",
  //         server
  //       );
  //       setUserProfile(resp.user);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUserProfile();
  // }, []);

  return (
    <>
      {!userProfile && !notifications ? (
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
                  isMobile={isMobile}
                  savedPropertiesPagination = {savedPropertiesPagination}
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
              />
            }
            />
            <Route path="support" 
              element={
              <HelpAndSupport 
                isMobile={isMobile}
                showDashboardSidebar={showDashboardSidebar}
                setShowDashboardSidebar={setShowDashboardSidebar} 
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
              />
              } 
              />
          </Route>
        </Routes>
      )}
    </>
  );
};
export default UserDashboard;
