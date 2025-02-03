import { useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../../assets/x-pacy-logo.svg';
import FormInput from '../../../../components/form-input/formInput.component';
import { IoMdArrowBack } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import './admin-forgot-password.styles.css';

const AdminForgotPassword = () => {
    const [isUserValid, setIsUserValid] = useState(false);
    const [resetMessage, setResetMessage] = useState('');

    const defaultFormFields = {
        email: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    };

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
                                <Link className="d-flex gap-1" to={'/admin/auth/log-in'}>
                                    <IoMdArrowBack style={{width: '24px', height: '24px', color: '#333'}}/> 
                                    <p className="back-button">Back to <span>Log In</span></p>
                                </Link>
                            </div>
                        </div>
                    </div> ) :
                (
                    <div className="modal-success d-flex justify-content-center align-items-center w-100">
                        <div className="message d-flex justify-content-center align-items-center">
                            <IoIosClose style={{width: '24px', height: '24px'}} onClick={() => setIsUserValid(!isUserValid)} className='reset-close-icon'/>
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
};

export default AdminForgotPassword;
