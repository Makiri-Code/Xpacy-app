import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Admin from "./routes/admin/admin.component";
import Blog from "./routes/blog/blog.component";
import Contacts from "./routes/contacts/contacts.component";
import Home from "./routes/home/home.component";
import Rent from "./routes/rent/rent.component";
import Buy from "./routes/buy/buy.component";
import Footer from "./routes/footer/footer.component"
import Authentication from "./routes/authentication/auth.component";
import LogIn from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import VerifyEmail from "./components/verifyEmail/verifyEmail";
import UserDashboard from "./routes/user-dashboards/userDashboard";
import Dashboards from "./routes/dashboards/dashboards";
import ForgotPassword from "./routes/forgot-password/ForgotPassword";
import ResetPassword from "./routes/reset-password/ResetPassword";
import { UserContext } from "./contexts/userContext";
const App = () => {
  const {userdata, userToken} = useContext(UserContext);
  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(userdata.token));
  }, [])
  
  return(
    <>
      <Routes>
        <Route path = "/" element = {<Navigation/>}>
          <Route index element = {<Home/>} />
          <Route path="/admin" element = {<Admin/>} />
          <Route path="contact" element = {<Contacts/>} />
          <Route path="auth/*" element = {<Authentication/>} />
          <Route path="rent/*" element = {<Rent/>} />/
          <Route path="buy/*" element = {<Buy/>} />
          <Route path="blog" element = {<Blog/>} />
        </Route>
        <Route path='auth/' element={<Authentication/>}>
          <Route path="log-in" element={<LogIn/>} />
          <Route path="sign-up" element={<SignUp/>} />
          <Route path="verify-email" element={<VerifyEmail/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>} />
          <Route path="reset-password" element={<ResetPassword/>} />
        </Route>
        <Route path= 'dashboard/' element={<Dashboards/>}>
          <Route path="user" element={<UserDashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
