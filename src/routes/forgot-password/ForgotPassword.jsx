import { useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/x-pacy-logo.svg';
import FormInput from '../../components/form-input/formInput.component';
import { IoMdArrowBack, IoIosClose } from "react-icons/io";
import fetchServer from '../../utils/serverutils/fetchServer';
import './forgot-password.styles.css';

const ForgotPassword = () => {
    const defaultFormFields = {
        email: ''
    }
    const [isUserValid, setIsUserValid] = useState(true);
    const [resetMessage, setResetMessage] = useState('')
    const [formFields, setFormFields] =useState(defaultFormFields);
    const {email} = formFields
    const handleChange = (e) => {
        const {name, value} = e.target

        setFormFields({
            ...formFields,
            [name]: value,
        })
    }
    const handleClick = () => setIsUserValid(!isUserValid)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const server = "https://app.xpacy.com"
        const body = {
            email: email,
        }
        const userData = await fetchServer('POST', body, 'user/request-password-reset', server);
        setIsUserValid(!userData.success)
        setResetMessage(userData.message)
        console.log(isUserValid);

    }
    return(
        <>
            {
                isUserValid ? 
                (   <div className='d-flex justify-content-center align-items-center'>
                        <div className="reset-password-container">
                            <div className="d-flex justify-content-center align-items-center">
                                <Link className="logo-container" to='/'>
                                    <Logo className='logo'/>
                                </Link>
                            </div>
                            <div className="reset-password-content">
                                <header>
                                    <h1>Forgot Password?</h1>
                                    <p>Enter your email address below, and we’ll send you a link to reset your password.</p>
                                </header>
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
                                    </div>
                                    <button type="submit">Send Reset Link</button>
                                </form>
                                <Link className="d-flex gap-1" to={'/auth/log-in'}>
                                    <IoMdArrowBack style={{width: '24px', height: '24px', color: '#333'}}/> 
                                    <p className="back-button">Back to <span>Log In</span></p>
                                </Link>
                            </div>
                        </div>
                    </div> ) :
                (
                    <div className="modal-success d-flex justify-content-center align-items-center w-100">
                        <div className="message d-flex justify-content-center align-items-center">
                            <IoIosClose style={{width: '24px', height: '24px'}} onClick={handleClick} className='reset-close-icon'/>
                            <div className="message-content">
                                <h1>Reset Link Sent!</h1>
                                <p>{resetMessage}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            

        </>
    );
}

export default ForgotPassword;