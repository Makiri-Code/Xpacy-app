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
import AdminAuthentication from "./routes/Adminstration/admin-authentication/admin-authentication";
import AdminSignUp from "./routes/Adminstration/admin-authentication/admin-sign-up/admin-signup";
import AdminLogIn from "./routes/Adminstration/admin-authentication/admin-log-in/admin-login";
import AdminForgotPassword from "./routes/Adminstration/admin-authentication/admin-forgot-password/admin-forgot-password";
import AdminResetPassword from "./routes/Adminstration/admin-authentication/admin-reset-password/admin-reset-password";
import NotFound from "./routes/not-found/not-found";
import Management from "./routes/Adminstration/management/management";
import AOS from "aos";
import ScrollTop from "./components/scroll-top/scroll-top";
import PropertyOwnerAuth from "./routes/users/property-owner/auth/property-owner-auth";
import OwnerSignUp from "./routes/users/property-owner/auth/admin-sign-up/owner-signup";
import OwnerResetPassword from "./routes/users/property-owner/auth/owner-reset-password/owner-reset-password";
import OwnerLogIn from "./routes/users/property-owner/auth/owner-log-in/owner-login";
import OwnerForgotPassword from "./routes/users/property-owner/auth/owner-forgot-password/owner-forgot-password";
import OwnerDashboard from "./routes/users/property-owner/owner.dashboard";
import { Toaster } from "sonner";
import NoNetwork from './assets/no-signal.png';
import styled from "styled-components";
import AccountSuccess from "./components/account-success/AccountSuccess";
import ApplicationForm from "./routes/application-form/applicationForm";

  const EmptyState = styled.div`
    display: flex;
    height: 100dvh;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    & > p{
      font-family: "Unitext Regular";
      font-size: 1rem;
      font-weight: 400;
    }
    & > h5 {
      font-size: 1.25rem;
      text-align: center;
      font-weight: 700;

    }
    @media only screen and (max-width: 600px){
      padding: 16px;
    }
  `
  const EmptyContainer = styled.div`
    width: 400px;
    height: 400px;
    & img{
      width: 100%;
      height: 100%;
      object-fit: contain;
      }
    @media only screen and (max-width: 600px){
        width: 80%;
        margin: 0px auto;
    }

  `
  const StyledToaster = styled(Toaster)`
  font-family: "Unitext Regular";
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`
const App = () => {
  const { userProfile, } =
    useContext(UserContext);

  const {
    propertiesArray,
    setPropertiesArray,
    pagination,
    isOnline,
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


  return (
    <>
      <ScrollTop/>
      <StyledToaster/>
      {
        isOnline ? 
        (
              <>
                
                <Routes>
                  <Route path="*" element={<NotFound/>} />
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
                      element={
                        <Buy 
                          propertiesArray={propertiesArray} 
                          pagination={pagination}
                          setPropertiesArray={setPropertiesArray}
                        />
                      }
                    />
                    <Route path="search/*" element={<Search />} />
                    <Route path="blog" element={<Blog />} />
                  </Route>
                  <Route path="auth/" element={<Authentication />}>
                    <Route path="log-in" element={<LogIn />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="verify-email" element={<VerifyEmail />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="verify-account" element={<AccountSuccess/>}/>
                  </Route>
                  <Route path="dashboard/" element={<Dashboards />}>
                    {/* <Route path="*" element={<NotFound/>}/> */}
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
                    {/* <Route path="*" element={<NotFound/>}/> */}
                  </Route>
                  <Route path="owner/auth/" element={<PropertyOwnerAuth />}>
                    <Route path="sign-up" element={<OwnerSignUp />} />
                    <Route path="log-in" element={<OwnerLogIn />} />
                    <Route path="forgot-password" element={<OwnerForgotPassword />} />
                    <Route path="reset-password" element={<OwnerResetPassword />} />
                    {/* <Route path="*" element={<NotFound/>}/> */}
                  </Route>
                  <Route path="application-form/:id" element={<ApplicationForm/>}></Route>
                </Routes>
            </>
        ): 
        (
          <EmptyState>
            <EmptyContainer>
              <img src={NoNetwork} alt="" />
            </EmptyContainer>
            <h5>No Internet Connection</h5>
            <p>There seems to be a problem with your internet connection. Please check your connection and try again</p>
          </EmptyState>
        )
      }
    </>
  );
};

export default App;
