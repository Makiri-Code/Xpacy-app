import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import './verify-email.styles.css';
const VerifyEmail =() => {
    const {signupUser} = useContext(UserContext);
    if(!signupUser) return (<h2>Please go to sign up page </h2>)
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <div className="verify-container">
                <h2>Almost done!</h2>
                <p>
                    We have sent an email to <strong>{signupUser?.email}</strong>.<br/>
                    Kindly click the link in the email to complete your registration. 
                </p>
                <p>Already have an account? <Link to="/auth/log-in">Log In</Link></p>
            </div>
        </div>
    )
}

export default VerifyEmail;