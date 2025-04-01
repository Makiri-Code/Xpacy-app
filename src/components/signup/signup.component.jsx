import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/x-pacy-logo.svg";
import FormInput from "../form-input/formInput.component";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import sliderImg from "../../assets/log-asset/carousel-photo01.png";
import { UserContext } from "../../contexts/userContext";
import ClipLoader from "react-spinners/ClipLoader";
import fetchServer from "../../utils/serverutils/fetchServer";
import ModalComponent from "../modal/modal";
import { IoClose } from "react-icons/io5";
import Button from "../button/button.jsx";
import {
  LoginLogoContainer,
  LoginContent,
  LogInHeader,
  MainContent,
  CheckboxForgotPasswordContainer,
  LoginCarouselContainer,
  ErroModal,
  AnchorTag,
} from "../login/login.styles.jsx";
import {
  LogoContainer,
  NavLogo,
} from "../../routes/navigation/navigation.styles.jsx";
import {
  Label,
  Select,
  SignUpCarouselCaptionTxt,
  SignUpContainer,
  SignUpForm,
  SignUpFormContainer,
  SignUpName,
  SignUpPasswordField,
  SignUpLocation,
  SignUpCarouselImg,
  SignUpCarouselCaption,
  PasswordError,
} from "./signup.styles.jsx";
const SignUp = () => {
  const { setSignupUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [nigeriaStates, setNigeriaStates] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
 
  const defaultFormFields = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstname, lastname, email, password, confirmPassword, state } =
    formFields;
  // Fetch nigerian states
  useEffect(() => {
    const states = async () => {
      try {
        const statesArray = await fetch(
          "https://app.xpacy.com/location/fetch-states",
          { method: "GET" }
        );
        const response = await statesArray.json();
        setNigeriaStates(response.state);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    states();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    if (password !== confirmPassword) {
      setShowLoader(false);
      return;
    }
    const server = "https://app.xpacy.com";
    const body = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      state: state,
    };
    const userData = await fetchServer(
      "POST",
      body,
      "",
      "user/register",
      server
    );
    setSignupUser(userData.user);
    if (userData.success) {
      setShowLoader(false);
      setFormFields(defaultFormFields);
      navigate("/auth/verify-email");
    } else if(!userData.success && userData.errors ){
      setShowLoader(false);
      setErrorMessage(`${userData.errors[0].msg} Please select a state`);
      setIsErrorMessage(true);
    } else if(!userData.success){
      setShowLoader(false);
      setFormFields(defaultFormFields);
      setErrorMessage(userData.message);
      setIsErrorMessage(true);
    }
    setShowLoader(false);
  };
  return (
    <>
      <SignUpContainer>
        <SignUpForm>
          <LoginLogoContainer>
            <LogoContainer onClick={() => navigate("/")}>
              <NavLogo />
            </LogoContainer>
          </LoginLogoContainer>
          <LoginContent>
            <LogInHeader>
              <h1>Sign Up</h1>
              <p>Enter your email address and password to sign up.</p>
            </LogInHeader>
            <MainContent>
              <SignUpFormContainer onSubmit={handleSubmit}>
                <SignUpName>
                  <FormInput
                    label={"First Name"}
                    required
                    id="first-name"
                    name="firstname"
                    type="text"
                    onChange={handleChange}
                    value={firstname}
                    placeholder="Enter your first name"
                  />
                  <FormInput
                    label={"Last Name"}
                    required
                    id="last-name"
                    name="lastname"
                    type="text"
                    onChange={handleChange}
                    value={lastname}
                    placeholder="Enter your last name"
                  />
                </SignUpName>
                <FormInput
                  label={"Email"}
                  required
                  id="e-mail"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="Enter your Email"
                />
                <SignUpPasswordField>
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
                </SignUpPasswordField>
                <SignUpPasswordField>
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
                  <PasswordError
                    className={
                      password !== confirmPassword
                        ? "password-nomatch"
                        : "password-match"
                    }
                  >
                    Passwords must match and meet the criteria. Please try
                    again.
                  </PasswordError>
                </SignUpPasswordField>
                <SignUpLocation>
                  <Label htmlFor="state">Choose a Location</Label>
                  <Select
                    name="state"
                    required
                    value={state}
                    onChange={handleChange}
                  >
                    <option >Choose a Location</option>
                    {/* <option value={"Rivers"}>Rivers</option> */}
                    {nigeriaStates?.map((stateName) => {
                      const { location } = stateName;
                      return <option key={location}>{location}</option>;
                    })}
                  </Select>
                </SignUpLocation>
                <CheckboxForgotPasswordContainer>
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
                </CheckboxForgotPasswordContainer>
                <Button buttonType={{ primaryBtn: true }}>
                  {showLoader ? (
                    <ClipLoader size={25} color="#fff" />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </SignUpFormContainer>
              <p>
                Already have an account? <AnchorTag fontWeight={700} to={"/auth/log-in"}>Log In</AnchorTag>
              </p>
            </MainContent>
          </LoginContent>
        </SignUpForm>
        <LoginCarouselContainer>
          <Carousel controls={false} wrap={true}>
            <CarouselItem>
              <SignUpCarouselImg
                src={sliderImg}
                alt="beautiful house"
                className="login-image"
              />
              <SignUpCarouselCaption>
                <SignUpCarouselCaptionTxt>
                  Discover properties that fit your vision and goals.
                </SignUpCarouselCaptionTxt>
              </SignUpCarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <SignUpCarouselImg
                src={sliderImg}
                alt="beautiful house"
                className="login-image"
              />
              <SignUpCarouselCaption>
                <SignUpCarouselCaptionTxt>
                  Discover properties that fit your vision and goals.
                </SignUpCarouselCaptionTxt>
              </SignUpCarouselCaption>
            </CarouselItem>
            <CarouselItem>
              <SignUpCarouselImg
                src={sliderImg}
                alt="beautiful house"
                className="login-image"
              />
              <SignUpCarouselCaption>
                <SignUpCarouselCaptionTxt className="carousel-caption-txt">
                  Discover properties that fit your vision and goals.
                </SignUpCarouselCaptionTxt>
              </SignUpCarouselCaption>
            </CarouselItem>
          </Carousel>
        </LoginCarouselContainer>
        {isErrorMessage && (
          <ModalComponent>
            <ErroModal>
              <h3>Opps!</h3>
              <p>{errorMessage}</p>
              <IoClose
                style={{ width: "24px", height: "24px" }}
                className="close-email"
                onClick={() => {
                  setShowLoader(false);
                  setIsErrorMessage(false);
                }}
              />
            </ErroModal>
          </ModalComponent>
        )}
      </SignUpContainer>
    </>
  );
};

export default SignUp;
