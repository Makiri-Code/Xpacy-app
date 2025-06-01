import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import {ReactComponent as Logo} from '../../assets/x-pacy-logo.svg';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import sliderImg from '../../assets/log-asset/carousel-photo01.png';
import FormInput from '../form-input/formInput.component';
import fetchServer from '../../utils/serverutils/fetchServer';
import { UserContext } from '../../contexts/userContext';
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "js-cookie";
import ModalComponent from '../modal/modal';
import { LogoContainer, NavLogo } from '../../routes/navigation/navigation.styles';
import { 
    AnchorTag,
    FormContainer,
    LogInContainer,
    LogInForm,
    LoginLogoContainer,
    MainContent,
    LoginContent,
    LogInHeader,
    CheckboxForgotPasswordContainer,
    LoginCarouselImg,
    CarouselCaptionTxt,
    LoginCarouselContainer,
    ErroModal,
} from './login.styles';
import Button from '../button/button';


const LogIn = () => {
    const defaultFormFields = {
        email: '',
        password: '',
    }
    const [disabled, setDisabled] = useState(false);
    const [isUserValid, setIsUserValid] = useState(false);
    const [formFields, setFormFields] =useState(defaultFormFields);
    const {email, password} = formFields;
    const [showLoader, setShowLoader] = useState(false)
    const {userProfile, setUserData, setUserToken, server, userToken, setUserProfile} = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState(" ")
    const navigate =  useNavigate();

    // useEffect(() => {
        
    // }, [userToken]);

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({
            ...formFields,
            [name]: value,
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setShowLoader(true);
        const body = {
            email: email,
            password: password
        }
        const userData = await fetchServer('POST', body, '', 'user/login', server,);
        if(!userData.success){
            if(userData.error === "Internal Server Error"){
                setIsUserValid(!userData.success);
                setErrorMessage("Something went wrong. Please try again later");
                
            } else if(userData.message === "Invalid credentials"){
                setIsUserValid(!userData.success)
                setErrorMessage("Invalid email or password. Please try again");
            }
        }
        setFormFields(defaultFormFields);
        setUserData(userData);
        setShowLoader(false);

        if(userData.success){
            Cookies.set('gt-jwt-br', userData.token)
            setUserToken(userData.token);
            // getUserProfile(userData.token);
            navigate("/dashboard/user");
        }
        setDisabled(false)
    }
    
    return(
        <>
            <LogInContainer>
                <LogInForm>
                    <LoginLogoContainer>
                        <LogoContainer onClick={() => navigate("/")}>
                            <NavLogo />
                        </LogoContainer>
                    </LoginLogoContainer>
                    <LoginContent>
                        <LogInHeader>
                            <h1>Welcome back!</h1>
                            <p>Enter your email address and password to log in.</p>
                        </LogInHeader>
                        <MainContent>
                            <FormContainer onSubmit={handleSubmit}>
                                <FormInput
                                    label={"Email address"}
                                    id="e-mail"
                                    name='email'
                                    type="email"
                                    onChange={handleChange}
                                    value={email}
                                    required
                                    placeholder="Enter your email address"
                                />
                                {
                                    (isUserValid && 
                                    <ModalComponent>
                                        <ErroModal>
                                            <h3>Opps!</h3>
                                            <p>{errorMessage}</p>
                                            <IoClose 
                                                style={{width: '24px', height: '24px'}} 
                                                className='close-email' 
                                                onClick={() => setIsUserValid(false)}
                                            />
                                        </ErroModal>
                                    </ModalComponent>)
                                }
                                <FormInput
                                    label={"password"}
                                    id="password"
                                    name='password'
                                    type="password"
                                    onChange={handleChange}
                                    value={password}
                                    required
                                    placeholder="Enter your password"
                                />
                                <CheckboxForgotPasswordContainer>
                                    <div className="checkbox-container">
                                        <input type="checkbox" name="rememberMe" id="remember-me" />
                                        <label htmlFor="remember-me">Remember me</label>
                                    </div>
                                    <AnchorTag to={'/auth/forgot-password'}>Forgot password?</AnchorTag>
                                </CheckboxForgotPasswordContainer>
                                <Button buttonType={{primaryBtn: true}} disabled={disabled}>
                                    {
                                        showLoader ? (<ClipLoader size={25} color='#fff'/>) : 'Log In'
                                    }
                                </Button>
                            </FormContainer>
                            <p>Don't have an account? <AnchorTag fontWeight={700} to={'/auth/sign-up'}>Sign Up</AnchorTag></p>
                        </MainContent>
                    </LoginContent>
                </LogInForm>
                <LoginCarouselContainer>
                    <Carousel controls={false} wrap={true}>
                        <CarouselItem>
                            <LoginCarouselImg src={sliderImg} alt='beautiful house' className='login-image'/>
                            <CarouselCaption>
                                <CarouselCaptionTxt className='carousel-caption-txt'>
                                    Discover properties that fit your vision and goals.
                                </CarouselCaptionTxt>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem>
                            <LoginCarouselImg src={sliderImg} alt='beautiful house' className='login-image'/>
                            <CarouselCaption>
                                <CarouselCaptionTxt>
                                    Discover properties that fit your vision and goals.
                                </CarouselCaptionTxt>
                            </CarouselCaption>
                        </CarouselItem>
                        <CarouselItem>
                            <LoginCarouselImg src={sliderImg} alt='beautiful house' className='login-image'/>
                            <CarouselCaption>
                                <CarouselCaptionTxt className='carousel-caption-txt'>
                                    Discover properties that fit your vision and goals.
                                </CarouselCaptionTxt>
                            </CarouselCaption>
                        </CarouselItem>
                    </Carousel>
                </LoginCarouselContainer>
            </LogInContainer>
        </>
    )
};

export default LogIn;