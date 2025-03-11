import { useState, useRef, useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from '../../../../assets/x-pacy-logo.svg';
import ModalComponent from "../../../../components/modal/modal";
import { ClipLoader } from "react-spinners";
import FormInput from "../../../../components/form-input/formInput.component";
import { IoClose } from "react-icons/io5";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import Cookies from "js-cookie";
import "./admin-login.styles.css";

const AdminLogIn = () => {
    const buttonRef = useRef(null);
    const navigate = useNavigate();
    const {server, setUserToken} = useContext(UserContext)
    const [showLoader, setShowLoader] = useState(false);
    const [isUserValid, setIsUserValid] = useState(false);
    const defaultFormFields = {
        email: '',
        password: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        buttonRef.current.disabled = true
        const response = await fetchServer('POST', formFields, '', 'admin/admin-login', server);
        if(response?.success){
          Cookies.set('gt-jwt-br', response.token);
          setUserToken(response.token)
          setShowLoader(false);
          buttonRef.current.disabled = false;
          navigate('/dashboard/admin')
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
          ...formFields,
          [name]: value,
        })

    }
  return (
    <>
      <div className="admin-login-container">
        <div className="login-form">
          <div className="login-logo-container">
            <Link className="logo-container" to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="login-content">
            <header className="login-header">
              <h1>Welcome back</h1>
              <p>Please log in to manage properties and services.</p>
            </header>
            <main>
              <form onSubmit={handleSubmit}>
                <div className="email-container w-100">
                  <FormInput
                    label={"Email address"}
                    id="e-mail"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                    required
                    placeholder="Enter your email address"
                  />
                  {isUserValid && (
                    <ModalComponent>
                      <div className="invalid-email-content">
                        <h3>Opps!</h3>
                        <p>Incorrect Email or Password. Please try again</p>
                        <IoClose
                          style={{ width: "24px", height: "24px" }}
                          className="close-email"
                          onClick={() => setIsUserValid(false)}
                        />
                      </div>
                    </ModalComponent>
                  )}
                </div>
                <FormInput
                  label={"password"}
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={password}
                  required
                  placeholder="Enter your password"
                />
                <div className="checkbox d-flex justify-content-between align-items-start w-100">
                  <div className="checkbox-container">
                    <input type="checkbox" name="rememberMe" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <Link to={"/admin/auth/forgot-password"}>Forgot password?</Link>
                </div>
                <button type="submit" ref={buttonRef}>
                  {showLoader ? (
                    <ClipLoader size={25} color="#fff" />
                  ) : (
                    "Log In"
                  )}
                </button>
              </form>
              <p>
                Having trouble? <Link to={""}>Contact Support</Link>
              </p>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogIn;
