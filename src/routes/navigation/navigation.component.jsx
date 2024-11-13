import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/x-pacy-logo.svg'
import './navigation.styles.css';

const Navigation = () => {
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
    const homeClickHandler = () => {
        setClassName({
            ...classNames,
            home: "nav-item active"
        })
    }
    const buyClickHandler = () => {
        setClassName({
            ...classNames,
            buy: "nav-item active"
        })
    }
    const rentClickHandler = () => {
        setClassName({
            ...classNames,
            rent: "nav-item active"
        })
    }
    const blogClickHandler = () => {
        setClassName({
            ...classNames,
            blog: "nav-item active"
        })
    }
    const contactClickHandler = () => {
        setClassName({
            ...classNames,
            contact: "nav-item active"
        })
    }
    const managementClickHandler = () => {
        setClassName({
            ...classNames,
            management: "nav-item active"
        })
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
                        onClick={homeClickHandler} 
                        to='/'
                    >
                        Home
                    </Link>

                    <Link 
                        className= {buy}   
                        onClick={buyClickHandler}
                        to='/shop'
                    >
                        Buy
                    </Link>

                    <Link 
                        className={rent}  
                        onClick={rentClickHandler}
                        to='/rent'
                    >
                        Rent
                    </Link>

                    <Link 
                        className={management}  
                        onClick={managementClickHandler} 
                        to='/admin'
                    >
                        Management
                    </Link>

                    <Link 
                        className={blog} 
                        onClick={blogClickHandler} 
                        to='/blog'
                    >
                        Blog
                    </Link>

                    <Link 
                        className={contact} 
                        onClick={contactClickHandler} 
                        to='/contact'
                    >
                        Contact
                    </Link>
                </div>
                <div className="nav-btns-container">
                    <button className='nav-btns'>Log In</button>
                    <button className='nav-btns'>Sign Up</button>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navigation;

