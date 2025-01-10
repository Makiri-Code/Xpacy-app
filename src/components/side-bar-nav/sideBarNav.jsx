import { Outlet, Link, useNa, useNavigate } from 'react-router-dom';
import sidebarLogo from '../../assets/sidebarLogo.png';
import { RiHome2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { RiGift2Fill } from "react-icons/ri";
import { LuExternalLink } from "react-icons/lu";
import './side-bar.styles.css';

const SideBarNav = () => {
    const navigate = useNavigate();

    const sideBarContent = [
        {
            link: 'Go To Home Page',
            icon: RiHome2Line,
            to: '/'
        },
        {
            link: 'Dashboard',
            icon: RxDashboard,
            to: '/dashboard/user/'
        },
        {
            link: 'Notification',
            icon: IoNotificationsOutline,
            to: '/dashboard/user/notification'
        },
        {
            link: 'Saved Properties',
            icon: CiHeart,
            to: '/dashboard/user/saved-properties'
        },
        {
            link: 'Booked Services',
            icon: LuCalendarCheck, 
            to: ''
        },
        {
            link: 'Payments',
            icon: IoCardOutline,
            to: '/dashboard/user/payments'
        },
        {
            link: 'Profile Settings',
            icon: RiUserSettingsLine,
            to: '/dashboard/user/profile-settings'
        },
        {
            link: 'Help Support',
            icon: MdOutlineContactSupport,
            to: '/dashboard/user/support'
        },
    ]
    return (
        <div className='dashboard-container'>
            <nav className="side-bar-nav-container">
                <div className="side-bar-content">
                    <div className="nav-link-container">
                        <div className="side-bar-logo-container">
                            <img src={sidebarLogo} alt="X-pacy Logo" />
                        </div>
                        <div className="nav-links">
                            {
                                sideBarContent.map((content) => {
                                    return(
                                        <Link className="nav-link" key={content.link} to={content.to}><content.icon style={{width: '24px', height: '24px', color: '#fff'}}/> <span className='nav-link-item'>{content.link}</span> </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="referral-card" onClick={() => navigate('/dashboard/user/referral')}>
                        <FaCircle className='elipse'/>
                        <div className="referral-content">
                            <div className="referral-header">
                                <RiGift2Fill style={{width: '42px', height: '42px'}}/>
                                <LuExternalLink style={{width: '42px', height: '42px'}}/>
                            </div>
                            <div className="referral-body">
                                <h5>Refer Friends and Earn</h5>
                                <p>Invite your friends to Xpacy and earn rewards for every successful signup. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
};

export default SideBarNav;