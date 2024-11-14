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
    const navClickHandler = (e) => {
        const name = e.target.getAttribute('name')
        if (name) {
            setClassName({
                ...classNames, [name]:'nav-item active'
            })
        }
    }

    return(
        <>
            <nav>
                <Link className="logo-container" to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className="nav-item-container" onClick={navClickHandler}>
                    <Link 
                        className= {home}  
                        to='/'
                        name='home'
                    >
                        Home
                    </Link>

                    <Link 
                        className= {buy}   
                        to='/shop'
                        name='buy'
                    >
                        Buy
                    </Link>

                    <Link 
                        className={rent}  
                        to='/rent'
                        name='rent'
                    >
                        Rent
                    </Link>

                    <Link 
                        className={management}  
                        to='/admin'
                        name='management'
                    >
                        Management
                    </Link>

                    <Link 
                        className={blog} 
                        to='/blog'
                        name='blog'
                    >
                        Blog
                    </Link>

                    <Link 
                        className={contact} 
                        to='/contact'
                        name='contact'
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

