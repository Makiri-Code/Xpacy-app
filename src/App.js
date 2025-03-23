import { useContext, useEffect, useRef, useState, Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Mangement from "./routes/admin/management";
import Blog from "./routes/blog/blog.component";
import Contacts from "./routes/contacts/contacts.component";
import Home from "./routes/home/home.component";
import Rent from "./routes/rent/rent.component";
import Buy from "./routes/buy/buy.component";
import Footer from "./routes/footer/footer.component";
import Authentication from "./routes/authentication/auth.component";
import LogIn from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import VerifyEmail from "./components/verifyEmail/verifyEmail";
import UserDashboard from "./routes/users/user-dashboards/userDashboard";
import Dashboards from "./routes/dashboards/dashboards";
import ForgotPassword from "./routes/forgot-password/ForgotPassword";
import ResetPassword from "./routes/reset-password/ResetPassword";
import Search from "./routes/search/search";
import { UserContext } from "./contexts/userContext";
import { PageContext } from "./contexts/page.context";
import { PulseLoader } from "react-spinners";
import fetchServer from "./utils/serverutils/fetchServer";
import AdminAuthentication from "./routes/Adminstration/admin-authentication/admin-authentication";
import AdminSignUp from "./routes/Adminstration/admin-authentication/admin-sign-up/admin-signup";
import AdminLogIn from "./routes/Adminstration/admin-authentication/admin-log-in/admin-login";
import AdminForgotPassword from "./routes/Adminstration/admin-authentication/admin-forgot-password/admin-forgot-password";
import AdminResetPassword from "./routes/Adminstration/admin-authentication/admin-reset-password/admin-reset-password";
import NotFound from "./routes/not-found/not-found";
import Management from "./routes/Adminstration/management/management";
import { createGlobalStyle } from 'styled-components';
import AOS from "aos";
import ScrollTop from "./components/scroll-top/scroll-top";
import PropertyOwnerAuth from "./routes/users/property-owner/auth/property-owner-auth";
import OwnerSignUp from "./routes/users/property-owner/auth/admin-sign-up/owner-signup";
import OwnerResetPassword from "./routes/users/property-owner/auth/owner-reset-password/owner-reset-password";
import OwnerLogIn from "./routes/users/property-owner/auth/owner-log-in/owner-login";
import OwnerForgotPassword from "./routes/users/property-owner/auth/owner-forgot-password/owner-forgot-password";
import OwnerDashboard from "./routes/users/property-owner/owner.dashboard";
import { Toaster } from "sonner";
import styled from "styled-components";


const App = () => {
const StyledToaster = styled(Toaster)`
  font-family: "Unitext Regular";
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    max-width: 100%;
    // overflow-x: hidden;
  }
`;

  const { userProfile, } =
    useContext(UserContext);
  const {
    propertiesArray,
    pagination,
  } = useContext(PageContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Handle Mobile view
  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
      }
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize)
      };
      
  }, []);

  // Set invoiceList to emptyarray
  return (
    <>
      <GlobalStyle/>
        <ScrollTop/>
        <StyledToaster/>
          <Routes>
            <Route path="*" element={<NotFound/>} >
            </Route>
            {
              propertiesArray ?
              (
                <Route path="/" element={<Navigation isMobile={isMobile}/>}>
                  <Route index element={<Home propertiesArray={propertiesArray} isMobile={isMobile}/>} />
                  <Route path="admin/*" element={<Mangement userProfile = {userProfile} />} />
                  <Route path="contact" element={<Contacts />} />
                  <Route
                    path="rent/*"
                    element={<Rent propertiesArray={propertiesArray} pagination={pagination}/>}
                  />
                  <Route
                    path="buy/*"
                    element={<Buy propertiesArray={propertiesArray} pagination={pagination} />}
                  />
                  <Route path="search/*" element={<Search />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="*" element={<NotFound/>}/>
                </Route>
              ):
                <Route path="/" element={
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
                  } />
              }
            <Route path="auth/" element={<Authentication />}>
              <Route path="log-in" element={<LogIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="verify-email" element={<VerifyEmail />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="dashboard/" element={<Dashboards />}>
              <Route path="*" element={<NotFound/>}/>
                <Route
                  path="user/*"
                  element={
                    <UserDashboard
                      
                    />
                  }
                />
              <Route path="admin/*" element={<Management isMobile={isMobile} />} />
              <Route path="owner/*" element={<OwnerDashboard isMobile={isMobile} />} />
            </Route>
            <Route path="admin/auth/" element={<AdminAuthentication />}>
              <Route path="sign-up" element={<AdminSignUp />} />
              <Route path="log-in" element={<AdminLogIn />} />
              <Route path="forgot-password" element={<AdminForgotPassword />} />
              <Route path="reset-password" element={<AdminResetPassword />} />
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="owner/auth/" element={<PropertyOwnerAuth />}>
              <Route path="sign-up" element={<OwnerSignUp />} />
              <Route path="log-in" element={<OwnerLogIn />} />
              <Route path="forgot-password" element={<OwnerForgotPassword />} />
              <Route path="reset-password" element={<OwnerResetPassword />} />
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
    </>
  );
};

export default App;
