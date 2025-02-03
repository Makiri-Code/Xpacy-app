import Logo from '../../assets/xpacy-footer-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { LogoContainer, NavLogo } from '../navigation/navigation.styles'
import Button from '../../components/button/button'
import { 
    Company,
    ContactText,
    FooterContainer,
    FooterContent,
    FooterInfo,
    FooterInfoTitle,
    FooterInfoTop,
    FooterLogo,
    Newsletter,
    ContactInfo,
    Copywright,
 } from './footer.style'
import { useState } from 'react'


const Footer = ()=>{
    const navigate = useNavigate();
    const date = new Date;
    const [year, setYear] = useState(date.getUTCFullYear())
    return(
        <>
            <FooterContainer>
                <FooterContent>
                    <FooterInfo>
                         <div className='footer-info-top'>
                            <FooterInfoTop>
                                <LogoContainer onClick={() => navigate("/")}>
                                    <FooterLogo src={Logo} />
                                </LogoContainer>
                                <FooterInfoTitle>Experience Ease, Find Your Dream Property</FooterInfoTitle>
                            </FooterInfoTop>
                            <ContactInfo>
                                <ContactText><b>Address:</b> Wills Court Mbora, Citec Estate, Jabi, FCT, Nigeria</ContactText>
                                <ContactText><b>Email:</b> support@xpacy.com</ContactText>
                                <ContactText><b>Phone:</b> 00000000000</ContactText>
                            </ContactInfo>
                         </div>
                         <div className='footer-info-bottom'></div>
                    </FooterInfo>
                    <Company>
                        <h5 className='footer-company-title'>COMPANY</h5>        
                        <div className='footer-company-links'>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/buy'}>Buy</Link>
                            <Link to={'/rent'}>Rent</Link>
                            <Link to={'/admin'}>Management</Link>
                            <Link to={'/contacts'}>Contact</Link>
                        </div>
                    </Company>
                    <Company>
                        <div className='footer-company-title'>HELP</div>        
                        <div className='footer-company-links'>
                            <Link>Customer Support</Link>
                            <Link>Terms & Conditions</Link>
                            <Link>Privacy Policy</Link>
                        </div>
                    </Company>
                    <Company>
                        <div className='footer-company-title'>NEWSLETTER</div>        
                        <Newsletter>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email address'
                            />
                            <Button buttonType={{primaryBtn: false}} background={'var(--Secondary-Secondary500)'} >Subscribe Now</Button>
                        </Newsletter>
                    </Company>
                </FooterContent>
                <Copywright>&copy; Copyright {year}, All Rights Reserved by Xpacy</Copywright>
            </FooterContainer>
        </>
    )
}

export default Footer;