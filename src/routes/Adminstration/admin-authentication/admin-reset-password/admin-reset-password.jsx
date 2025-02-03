import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../../assets/x-pacy-logo.svg';
import FormInput from '../../../../components/form-input/formInput.component';
import './admin-reset-password.styles.css';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const AdminResetPassword = () => {
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);
    const defaultFormFields = {
        password: '',
        confirmPassword: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {password, confirmPassword} = formFields
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            {
                showSuccess ? 
                (
                    <div className='success-page-container d-flex justify-content-center align-items-center'>
                        <div className="success-page-content ">
                            <h1>Your Password Has Been Reset!</h1>
                            <IoIosCheckmarkCircle style={{width: '100px', height: '100px', color: '#203645',}}/>
                            <p>You can now log in using your new password.</p>
                            <button onClick={() => navigate('/admin/auth/log-in')}>LogIn Now</button>
                        </div>
                    </div>
                ): 
                (
                    <div className='reset-container d-flex flex-column justify-content-center align-items-center'>
                        <div className="reset-content d-flex flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <Link className="logo-container" to='/'>
                                    <Logo className='logo'/>
                                </Link>
                            </div>
                            <header className='reset-header d-flex flex-column'>
                                <h1>Reset Password</h1>
                                <p>Please enter a new password for your account.</p>
                            </header>
                            <form onSubmit={handleSubmit}>
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
                                    <p id='reset-password-txt'>* At least 8 characters, including an uppercase letter, a lowercase letter, and a number.</p>
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
                                <button type="submit">Reset Password</button>
                            </form>
                            <p>Having trouble? <Link>Contact support</Link></p>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default AdminResetPassword;