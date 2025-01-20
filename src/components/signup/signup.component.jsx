import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/x-pacy-logo.svg'
import FormInput from '../form-input/formInput.component';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import sliderImg from '../../assets/log-asset/carousel-photo01.png'
import { UserContext } from '../../contexts/userContext';
import ClipLoader from "react-spinners/ClipLoader";
import fetchServer from '../../utils/serverutils/fetchServer';
import './signup.styles.css';
import ModalComponent from '../modal/modal';
import { IoClose } from "react-icons/io5";

const SignUp = () => {
    const {setSignupUser} = useContext(UserContext);
    const navigate = useNavigate()
    const [nigeriaStates, setNigeriaStates] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    const defaultFormFields = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        state: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {firstname, lastname, email, password, confirmPassword, state} = formFields;

    useEffect(() => {
        const states = async () => {
            try {
                const statesArray = await fetch('https://app.xpacy.com/location/fetch-states', {method: 'GET'})
                const response = await statesArray.json();
                setNigeriaStates(response.state)
            } catch (error) {
                console.error('Error:', error)
            }
        }
        states()
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormFields({
            ...formFields,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        if(password !== confirmPassword){
            setShowLoader(false)
            return
        }
        const server = "https://app.xpacy.com"
        const body = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            state: state,
        }
        const userData = await fetchServer('POST', body, '', 'user/register', server );
        setSignupUser(userData.user);
        
        setFormFields(defaultFormFields);
        if(userData.success){
            setShowLoader(false)
            navigate("/auth/verify-email");
        } else {
            setIsErrorMessage(true);
        }
    }
    return(
        <>
            <div className="signup-container d-flex align-items-start">
                <div className="signup-form d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link className="logo-container" to='/'>
                            <Logo className='logo'/>
                        </Link>
                    </div>
                    <div className="signup-content d-flex flex-column align-items-start">
                        <header className="signup-header">
                            <h1>Sign Up</h1>
                            <p>Enter your email address and password to sign up.</p>
                        </header>
                        <main>
                            <form onSubmit={handleSubmit}>
                                <div className="signup-name">
                                    <FormInput
                                        label={"First Name"}
                                        required
                                        id="first-name"
                                        name='firstname'
                                        type="text"
                                        onChange={handleChange}
                                        value={firstname}
                                        placeholder="Enter your first name"
                                    />
                                    <FormInput
                                        label={"Last Name"}
                                        required
                                        id="last-name"
                                        name='lastname'
                                        type="text"
                                        onChange={handleChange}
                                        value={lastname}
                                        placeholder="Enter your last name"
                                    />
                                </div>
                                <FormInput
                                    label={"Email"}
                                    required
                                    id="e-mail"
                                    name='email'
                                    type="email"
                                    onChange={handleChange}
                                    value={email}
                                    placeholder="Enter your Email"
                                />
                                <div className="signup-password d-flex flex-column align-items-start">
                                    <FormInput
                                        label={"Password"}
                                        id="password"
                                        name='password'
                                        type="password"
                                        onChange={handleChange}
                                        value={password}
                                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                                        placeholder="Enter your password"
                                        
                                    />
                                    <p id='password-txt' >* At least 8 characters, including an uppercase letter, a lowercase letter, and a number.</p>
                                </div>
                                <div className="signup-password d-flex flex-column align-items-start">
                                    <FormInput
                                        label={"Confirm Password"}
                                        className= {password !== confirmPassword ? 'form-input invalid' : 'form-input'}
                                        id="confirmPassword"
                                        name='confirmPassword'
                                        type="password"
                                        onChange={handleChange}
                                        value={confirmPassword}
                                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                                        placeholder="Confirm your password"
                                    />
                                    <p className={password !== confirmPassword ? 'password-nomatch' : 'password-match'}>Passwords must match and meet the criteria. Please try again.</p> 
                                </div>
                                <div className='signup-location'>
                                    <label htmlFor="state">Choose a Location</label>
                                    <select name='state' required value={state}  onChange={handleChange}>
                                        <option selected >Choose a Location</option>
                                        {
                                            nigeriaStates.map((stateName) => {
                                                const {location} = stateName
                                                return (
                                                    <option key={location}>{location}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="checkbox d-flex justify-content-between align-items-start w-100">
                                    <div className="checkbox-container">
                                        <input type="checkbox" name="agreement" id="agreement" required/>
                                        <label htmlFor="agreement">I agree to Xpacy’s Terms & Conditions and Privacy Policy.</label>
                                    </div>
                                </div>
                                <button type="submit">
                                    {
                                        showLoader ? (<ClipLoader size={25} color='#fff'/>) : 'Sign Up'
                                    }
                                </button>
                            </form>
                            <p>Already have an account? <Link to={'/auth/log-in'}>Log In</Link></p>
                        </main>
                    </div>
                </div>
                <div className="signup-carousel" >
                    <Carousel>
                        <CarouselItem>
                            <img src={sliderImg} alt='beautiful house' className='signup-carousel-img'/>
                            <CarouselCaption>
                                <h2 className='carousel-caption-txt'>
                                    Discover properties that fit your vision and goals.
                                </h2>
                            </CarouselCaption>
                        </CarouselItem>
                    </Carousel>
                </div>
                {
                    isErrorMessage &&
                    (
                        <ModalComponent>
                            <div className="invalid-signup-content">
                                <h3>Opps!</h3>
                                <p>Email already exits. Please use a different email.</p>
                                <IoClose 
                                    style={{width: '24px', height: '24px'}} 
                                    className='close-email' 
                                    onClick={() => {
                                        setShowLoader(false);
                                        setIsErrorMessage(false)
                                    }}
                                />
                            </div>
                        </ModalComponent>
                    )
                }
            </div>
        </>
    );
}

export default SignUp; 