import { useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/x-pacy-logo.svg';
import './navigation.styles.css';
import Footer from '../footer/footer.component';
import { IoClose } from "react-icons/io5";
import Button from '../../components/button/button';
import {ReactComponent as MobileNav} from '../../assets/nav.svg';
const Navigation = () => {
    const [showNav, setShowNav] = useState(false);
    const classNames = {
        home: 'nav-item',
        buy: 'nav-item',
        rent: 'nav-item',
        management: 'nav-item',
        blog: 'nav-item',
        contact: 'nav-item',
    }
    const [className, setClassName] = useState(classNames);
    
    const {home, buy, rent, management, blog, contact} = className;

    const clickHandler = (e) => {
        const name = e.target.name
        setClassName({
            ...classNames,
            [name]: "nav-item active"
        });
        setShowNav(false)

    }

    return(
        <>
            <nav>
                <Link className="logo-container" to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className="nav-item-container" >
                    <Link 
                        className= {home}  
                        onClick={clickHandler} 
                        to='/'
                        name = 'home'
                    >
                        Home
                    </Link>

                    <Link 
                        className= {buy}   
                        onClick={clickHandler}
                        to='/buy'
                        name = 'buy'
                    >
                        Buy
                    </Link>

                    <Link 
                        className={rent}  
                        onClick={clickHandler}
                        to='/rent'
                        name = 'rent'
                    >
                        Rent
                    </Link>

                    <Link 
                        className={management}  
                        onClick={clickHandler} 
                        to='/admin'
                        name = 'management'
                    >
                        Management
                    </Link>

                    <Link 
                        className={blog} 
                        onClick={clickHandler} 
                        to='/blog'
                        name = 'blog'
                    >
                        Blog
                    </Link>

                    <Link 
                        className={contact} 
                        onClick={clickHandler} 
                        to='/contact'
                        name = 'contact'
                    >
                        Contact
                    </Link>
                </div>
                <div className="nav-btns-container">
                    <Link to='auth/log-in' >
                        <Button 
                            buttonType={{primaryBtn: false}}
                            buttonPadding={'16px'}
                            buttonHeight={'36px'}

                        >Log In</Button>
                    </Link>
                    <Link to='auth/sign-up' >
                        <Button 
                            buttonType={{primaryBtn: true}}
                            buttonPadding={'16px'}
                            buttonHeight={'36px'}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </div>
                <div className={showNav ? "mobile-nav-container show-nav" : "mobile-nav-container"}>
                    <h3>Menu</h3>
                    <div className="mobile-nav-item-container" >
                        <Link 
                            className= {home}  
                            onClick={clickHandler} 
                            to='/'
                            name = 'home'
                        >
                            Home
                        </Link>
                        <Link 
                            className= {buy}   
                            onClick={clickHandler}
                            to='/buy'
                            name = 'buy'
                        >
                            Buy
                        </Link>
                        <Link 
                            className={rent}  
                            onClick={clickHandler}
                            to='/rent'
                            name = 'rent'
                        >
                            Rent
                        </Link>
                        <Link 
                            className={management}  
                            onClick={clickHandler} 
                            to='/admin'
                            name = 'management'
                        >
                            Management
                        </Link>
                        <Link 
                            className={blog} 
                            onClick={clickHandler} 
                            to='/blog'
                            name = 'blog'
                        >
                            Blog
                        </Link>
                        <Link 
                            className={contact} 
                            onClick={clickHandler} 
                            to='/contact'
                            name = 'contact'
                        >
                            Contact
                        </Link>
                        <Link 
                            to='auth/log-in'
                            className='nav-item' 
                        >
                            Log In
                        </Link>
                        <Link 
                            to='auth/sign-up'
                            className='nav-item' 
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
               {
                    showNav ? 
                    ( <IoClose style={{width: '24px', height: '24px'}} className='mobile-nav' onClick={() => setShowNav(!showNav)} />) :
                    ( <MobileNav style={{width: '24px', height: '24px'}} className='mobile-nav' onClick={() => setShowNav(!showNav)} />)
               }
            </nav>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Navigation;

