import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import {ReactComponent as Logo} from '../../assets/x-pacy-logo.svg';
import { Carousel, CarouselCaption, CarouselItem, Modal } from 'react-bootstrap';
import sliderImg from '../../assets/log-asset/carousel-photo01.png';
import './login.styles.css';
import FormInput from '../form-input/formInput.component';
import fetchServer from '../../utils/serverutils/fetchServer';
import { UserContext } from '../../contexts/userContext';
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "js-cookie";
import ModalComponent from '../modal/modal';
const LogIn = () => {
    const defaultFormFields = {
        email: '',
        password: '',
    }
    const [isUserValid, setIsUserValid] = useState(false);
    const [formFields, setFormFields] =useState(defaultFormFields);
    const {email, password} = formFields;
    const [showLoader, setShowLoader] = useState(false)
    const {userProfile, setUserData, setUserToken, server, userToken, setUserProfile} = useContext(UserContext);
    const navigate =  useNavigate();

    useEffect(() => {
        if(userToken){
            const getUserProfile = async () => {
                try{
                    const resp = await fetchServer('GET', {},  userToken, 'user/fetch-profile', server);
                    setUserProfile(resp.user);
                } catch(error) {
                    console.log(error)
                }
            }
            getUserProfile()
            console.log(userProfile)
            console.log(userToken)
        }
    }, [userToken]);

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({
            ...formFields,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoader(true)
        const body = {
            email: email,
            password: password
        }
        const userData = await fetchServer('POST', body, '', 'user/login', server, );
        setIsUserValid(!userData.success)
        setFormFields(defaultFormFields);
        setUserData(userData);
        setShowLoader(false);

        if(userData.success){
            Cookies.set('gt-jwt-br', userData.token)
            setUserToken(userData.token)
            setTimeout(() => {
                navigate("/dashboard/user")
            }, 2000)
        }
    }
    return(
        <>
            <div className="login-container d-flex align-items-start">
                <div className="login-form d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link className="logo-container" to='/'>
                            <Logo className='logo'/>
                        </Link>
                    </div>
                    <div className="login-content d-flex flex-column align-items-start">
                        <header className="login-header">
                            <h1>Welcome back!</h1>
                            <p>Enter your email address and password to log in.</p>
                        </header>
                        <main>
                            <form onSubmit={handleSubmit}>
                                <div className="email-container w-100">
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
                                            <div className="invalid-email-content">
                                                <h3>Opps!</h3>
                                                <p>Incorrect Email or Password. Please try again</p>
                                                <IoClose 
                                                    style={{width: '24px', height: '24px'}} 
                                                    className='close-email' 
                                                    onClick={() => setIsUserValid(false)}
                                                />
                                            </div>
                                        </ModalComponent>)
                                    }
                                </div>
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
                                <div className="checkbox d-flex justify-content-between align-items-start w-100">
                                    <div className="checkbox-container">
                                        <input type="checkbox" name="rememberMe" id="remember-me" />
                                        <label htmlFor="remember-me">Remember me</label>
                                    </div>
                                    <Link to={'/auth/forgot-password'}>Forgot password?</Link>
                                </div>
                                <button type="submit">
                                    {
                                        showLoader ? (<ClipLoader size={25} color='#fff'/>) : 'Log In'
                                    }
                                </button>
                            </form>
                            <p>Don't have an account? <Link to={'/auth/sign-up'}>Sign Up</Link></p>
                        </main>
                    </div>
                </div>
                <div className="login-carousel">
                    <Carousel>
                        <CarouselItem>
                            <img src={sliderImg} alt='beautiful house' className='login-image'/>
                            <CarouselCaption>
                                <h2 className='carousel-caption-txt'>
                                    Discover properties that fit your vision and goals.
                                </h2>
                            </CarouselCaption>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </>
    )
};

export default LogIn;