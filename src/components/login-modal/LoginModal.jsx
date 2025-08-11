import { useContext, useState } from "react";
import ModalComponent from "./../modal/modal";
import { IoClose } from "react-icons/io5";
import FormInput from "../form-input/formInput.component";
import { ReactComponent as Logo } from "../../assets/x-pacy-logo.svg";
import Button from "../button/button";
import { ClipLoader } from "react-spinners";
import fetchServer from "../../utils/serverutils/fetchServer";
import {
  CloseIcon,
  LogInModalContainer,
  LogoContainer,
  LogInForm,
  LoginContent,
  LoginHeader,
  FormContainer,
  CheckboxForgotPasswordContainer,
  AnchorTag,
} from "./LoginModal.styles";
import { UserContext } from "../../contexts/userContext";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ setShowLogInModal, navigateLink }) => {
  const navigate = useNavigate();
  const { server, setUserToken, setUserData, setLoggedInUser } =
    useContext(UserContext);
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [disabled, setDisabled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setShowLoader(true);
    const body = {
      email,
      password,
    };
    try {
      const response = await fetchServer(
        "POST",
        body,
        "",
        "user/login",
        server
      );
      if (!response.success) toast.error(response.message);
      if (response.success) {
        Cookies.set("gt-jwt-br", response.token);
        setUserToken(response.token);
        setUserData(response);
        setLoggedInUser(true);
        toast.success(response.message);
      }
    } catch (error) {
      console.error(error.status);
    } finally {
      setDisabled(false);
      setShowLoader(false);
      setShowLogInModal(false);
    }
  };
  return (
    <>
      <ModalComponent>
        <LogInModalContainer>
          <CloseIcon onClick={() => setShowLogInModal(false)}>
            <IoClose />
          </CloseIcon>
          <LogInForm>
            <LogoContainer onClick={() => {}}>
              <Logo className="nav-logo" />
            </LogoContainer>
            <LoginContent>
              <LoginHeader>
                <h2>Please log in to continue</h2>
                <p>Enter your email address and password to log in.</p>
              </LoginHeader>
              <FormContainer onSubmit={handleSubmit}>
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
                <CheckboxForgotPasswordContainer>
                  <div className="checkbox-container">
                    <input type="checkbox" name="rememberMe" id="remember-me" />
                    <label className="checkbox-label" htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>
                  <AnchorTag to={"/auth/forgot-password"}>
                    Forgot password?
                  </AnchorTag>
                </CheckboxForgotPasswordContainer>
                <Button buttonType={{ primaryBtn: true }} disabled={disabled}>
                  {showLoader ? (
                    <ClipLoader size={25} color="#fff" />
                  ) : (
                    "Log In"
                  )}
                </Button>
              </FormContainer>
              <p className="form-txt">
                Don't have an account?{" "}
                <AnchorTag fontWeight={700} to={"/auth/sign-up"}>
                  Sign Up
                </AnchorTag>
              </p>
            </LoginContent>
          </LogInForm>
        </LogInModalContainer>
      </ModalComponent>
    </>
  );
};

export default LoginModal;
