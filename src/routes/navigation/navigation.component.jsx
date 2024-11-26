import { useRef, useState } from 'react';
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
    const clickHandler = (e) => {
        const name = e.target.name
        setClassName({
            ...classNames,
            [name]: "nav-item active"
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
                    <button className='nav-btns'>Log In</button>
                    <button className='nav-btns'>Sign Up</button>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navigation;

