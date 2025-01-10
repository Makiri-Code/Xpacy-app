import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import {ReactComponent as LogOutIcon} from '../../../assets/log-out-icon.svg'
import Profile from '../../../assets/profile-picture.png';
import './dashboard-top-nav.styles.css';

const DashboardTopNav = ({dashboardRoute}) => {
    const dropDown = [
        {
            link: 'Notification',
            icon: GoBell,
            to: ''
        },
        {
            link: 'Profile Settings',
            icon: RiUserSettingsLine,
            to: ''
        },

    ]
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>
            <nav className='dashboard-nav-wrapper'>
                <div className="dashboard-nav-title">
                    <h2>{dashboardRoute}</h2>
                </div>
                <div className="dashboard-nav-items">
                    <div className="dashboard-search">
                        <input type="search" name="search" id="search" placeholder='Search properties eg type, location' />
                        <IoIosSearch className='search-icon' />
                    </div>
                    <Link className="dashboard-nav-link">Book a service</Link>
                    <div className="notification-profile">
                        <div className="notification-icon">
                            <GoBell className="bell-icon"/>
                            <span>5</span>
                        </div>
                        <div className="dashboard-profile-image-wrapper" onClick={() => setShowDropdown(!showDropdown)}>
                            <img src={Profile} alt="profile picture" style={{width: '24px', height: '24px'}}/>
                            <RiArrowDropDownLine style={{width: '24px', height: '24px'}} />
                            <div className={showDropdown ? 'dashboard-dropdown' : 'hide-dropdown'}>
                                {
                                    dropDown.map((link)=> {
                                        return (
                                            <Link className="dropdown-link" key={link.link}> <link.icon className="dropdown-icon"/> {link.link} </Link>
                                        )
                                    })
                                }
                                <div className="dropdown-link log-out"> <LogOutIcon className="dropdown-icon"/> Log out </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default DashboardTopNav;

