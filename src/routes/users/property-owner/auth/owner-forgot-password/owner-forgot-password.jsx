import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as Logo} from '../../../../../assets/x-pacy-logo.svg';
import FormInput from '../../../../../components/form-input/formInput.component';
import { IoMdArrowBack, IoIosClose } from "react-icons/io";
import fetchServer from '../../../../../utils/serverutils/fetchServer';
import { LoginLogoContainer } from '../../../../../components/login/login.styles.jsx';
import { LogoContainer, NavLogo } from '../../../../navigation/navigation.styles.jsx';
import Button from '../../../../../components/button/button.jsx';
import { 
    ResetContainer, 
    ResetPasswordContainer,
    ResetPasswordContent,
    EmailContainer,
    BackLink,
    Heading,
    SuccesModal,
    MessageContainer,
    MessageContent

} from '../../../../forgot-password/forgot-password.styles.jsx';

const OwnerForgotPassword = () => {
    const navigate = useNavigate()
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
        // const server = "https://app.xpacy.com"
        // const body = {
        //     email: email,
        // }
        // const userData = await fetchServer('POST', body, 'user/request-password-reset', server);
        // setIsUserValid(!userData.success)
        // setResetMessage(userData.message)
        // console.log(isUserValid);

    }
    return(
        <>
            {
                isUserValid ? 
                (   
                    <ResetContainer>
                            <ResetPasswordContainer>
                                <LoginLogoContainer>
                                    <LogoContainer onClick={() => navigate("/")}>
                                        <NavLogo />
                                    </LogoContainer>
                                </LoginLogoContainer>
                                <ResetPasswordContent>
                                    <Heading>
                                        <h1>Forgot Password?</h1>
                                        <p>Enter your email address below, and we’ll send you a link to reset your password.</p>
                                    </Heading>
                                    <form onSubmit={handleSubmit}>
                                        <EmailContainer>
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
                                        </EmailContainer>
                                        <Button buttonType={{primaryBtn: true}} type={'submit'}>Send Reset Link</Button>
                                    </form>
                                    <BackLink to={'/owner/auth/log-in'}>
                                        <IoMdArrowBack style={{width: '24px', height: '24px', color: '#333'}}/> 
                                        <p className="back-button">Back to <span>Log In</span></p>
                                    </BackLink>
                                </ResetPasswordContent>
                            </ResetPasswordContainer>
                    </ResetContainer> 
                ) :
                (
                    <SuccesModal>
                        <MessageContainer>
                            <IoIosClose onClick={handleClick} className='reset-close-icon' />
                            <MessageContent>
                                <h1>Reset Link Sent!</h1>
                                <p>{resetMessage}</p>
                            </MessageContent>
                        </MessageContainer>
                    </SuccesModal>
                )
            }
            

        </>
    );
}

export default OwnerForgotPassword;