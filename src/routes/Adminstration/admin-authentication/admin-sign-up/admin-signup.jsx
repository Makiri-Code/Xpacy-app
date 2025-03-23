import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import {ReactComponent as Logo} from '../../../../assets/x-pacy-logo.svg';
import FormInput from "../../../../components/form-input/formInput.component";
import ClipLoader from "react-spinners/ClipLoader";
import ModalComponent from "../../../../components/modal/modal";
import "./admin-signup.styles.css";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import { toast } from "sonner";

const AdminSignUp = () => {
    const location = useLocation();
    const token = new URLSearchParams(location.search);
    const {server, userToken} = useContext(UserContext);
    const navigate = useNavigate();
    const btnRef = useRef
    const [showLoader, setShowLoader] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const [adminInfo, setAdminInfo] = useState(null);
    const defaultFormFields = {
        password: '',
        confirmPassword: ''
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {password, confirmPassword} = formFields
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
          ...formFields,
          [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        btnRef.current.disabled = true;
        setShowLoader(true);
        const response = await fetchServer('PUT', {password: password}, '', `admin/complete-registration?token=${token}`, server);
        if(response.success){
          toast.success(response.message);
          navigate('/admin/auth/log-in');
        }
        setShowLoader(false);
        btnRef.current.disabled = false;
    }
    // const tokenNew = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm91dGUiOiJjb21wbGV0ZS1yZWdpc3RyYXRpb24iLCJpYXQiOjE3NDI2NDkzODAsImV4cCI6MTc0MjY1Mjk4MH0.IYwhdYJ2WslBFvTIxxB3hx1tu3kUph8_9lSjuAnHCsQ'
    useEffect(() => {
      const getAdminProfile = async () => {
        const response = await fetchServer('GET', {}, '', `admin/fetch-admin-information?token=${token}`, server);
        setAdminInfo(response.admin);
      };
      getAdminProfile();
    }, [])
  return (
    <>
      <div className="admin-signup-container d-flex align-items-start">
        <div className="signup-form d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Link className="logo-container" to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="signup-content d-flex flex-column align-items-start">
            <header className="signup-header">
              <h1>Welcome,</h1>
              <p>Let’s set up your Admin account to start managing properties and services on Xpacy.</p>
            </header>
            <main>
              <form onSubmit={handleSubmit}>
                <div className="signup-name">
                  <FormInput
                    label={"First Name"}
                    required
                    id="first-name"
                    name="firstname"
                    type="text"
                    value={adminInfo?.username.split(" ")[0].charAt(0).toUpperCase() + adminInfo?.username.split(" ")[0].slice(1).toLowerCase()}
                    placeholder="Enter your first name"
                  />
                  <FormInput
                    label={"Last Name"}
                    required
                    id="last-name"
                    name="lastname"
                    type="text"
                    value={adminInfo?.username.split(" ")[1].charAt(0).toUpperCase() + adminInfo?.username.split(" ")[1].slice(1).toLowerCase()}
                    placeholder="Enter your last name"
                  />
                </div>
                <FormInput
                  label={"Email"}
                  required
                  id="e-mail"
                  name="email"
                  type="email"
                  value={adminInfo?.email}
                  placeholder="Enter your Email"
                />
                <div className="signup-password d-flex flex-column align-items-start">
                  <FormInput
                    label={"Password"}
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={password}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    placeholder="Enter your password"
                  />
                  <p id="password-txt">
                    * At least 8 characters, including an uppercase letter, a
                    lowercase letter, and a number.
                  </p>
                </div>
                <div className="signup-password d-flex flex-column align-items-start">
                  <FormInput
                    label={"Confirm Password"}
                    className={
                      password !== confirmPassword
                        ? "form-input invalid"
                        : "form-input"
                    }
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={confirmPassword}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    placeholder="Confirm your password"
                  />
                  <p
                    className={
                      password !== confirmPassword
                        ? "password-nomatch"
                        : "password-match"
                    }
                  >
                    Passwords must match and meet the criteria. Please try
                    again.
                  </p>
                </div>
                <div className="checkbox d-flex justify-content-between align-items-start w-100">
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      name="agreement"
                      id="agreement"
                      required
                    />
                    <label htmlFor="agreement">
                      I agree to Xpacy’s Terms & Conditions and Privacy Policy.
                    </label>
                  </div>
                </div>
                <button type="submit" ref={btnRef}>
                  {showLoader ? (
                    <ClipLoader size={25} color="#fff" />
                  ) : (
                    "Set Up Account"
                  )}
                </button>
              </form>
              <p>
                Having trouble? <Link to={""}>Contact Support</Link>
              </p>
            </main>
          </div>
        </div>
        {isErrorMessage && (
          <ModalComponent>
            <div className="invalid-signup-content">
              <h3>Opps!</h3>
              <p>Email already exits. Please use a different email.</p>
              <IoClose
                style={{ width: "24px", height: "24px" }}
                className="close-email"
                onClick={() => {
                  setShowLoader(false);
                  setIsErrorMessage(false);
                }}
              />
            </div>
          </ModalComponent>
        )}
      </div>
    </>
  );
};

export default AdminSignUp;
