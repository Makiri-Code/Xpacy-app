import './footer.style.css'
import Logo from '../../assets/xpacy-footer-logo.png'
import { Link } from 'react-router-dom'
const Footer = ()=>{
    return(
        <>
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='footer-info'>
                         <div className='footer-info-top'>
                            <div className='footer-logo-info'>
                                <Link className="logo-container" to='/'>
                                    <img className='logo' src={Logo}/>
                                </Link>
                                <div className='footer-info-title'>Experience Ease, Find Your Dream Property</div>
                            </div>
                            <div className='footer-contact-info'>
                                <div className='footer-info-text'><b>Address:</b> Wills Court Mbora, Citec Estate, Jabi, FCT, Nigeria</div>
                                <div className='footer-info-text'><b>Email:</b> support@xpacy.com</div>
                                <div className='footer-info-text'><b>Phone:</b> 00000000000</div>
                            </div>
                         </div>
                         <div className='footer-info-bottom'></div>
                    </div>
                    <div className='footer-company'>
                        <div className='footer-company-title'>COMPANY</div>        
                        <div className='footer-company-links'>
                            <div>Home</div>
                            <div>Buy</div>
                            <div>Rent</div>
                            <div>Management</div>
                            <div>Contact</div>
                        </div>
                    </div>
                    <div className='footer-company'>
                        <div className='footer-company-title'>HELP</div>        
                        <div className='footer-company-links'>
                            <div>Customer Support</div>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                    <div className='footer-company'>
                        <div className='footer-company-title'>NEWSLETTER</div>        
                        <div className='footer-company-newsletter'>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email address'
                            />
                            <div className='footer-button'>Subscribe Now</div>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>© Copyright 2024, All Rights Reserved by Xpacy</div>
            </footer>
        </>
    )
}

export default Footer