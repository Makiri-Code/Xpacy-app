import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import DashboardTopNav from '../../routes/dashoard-top-nav/dashboardTopNav';
import { BiBuildings } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import { LuCalendarCheck } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import Card from '../card/card.component';
import { PulseLoader } from 'react-spinners';
import './user-dashboard.styles.css';

const DashboardPage = ({userProfile}) => {
    const navigate = useNavigate();
    const cardStytles = {
        cardWidth: '209px',
        cardHeight: '294px',
        titleSize: '12px',
        headingSize: '14px',
        priceSize: '14px',
        iconWidth: '16px',
        iconHeight: '16px',
        imgHeight: '140px',
        likeIconSize: '32px',
        bodyGap: '8px',
        headerGap: '4px',
        showDivider: false,
        showButtons: false,
        bodyPadding: '8px 10px',

    }
    const latestPropertises = [
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
    ]
    const bookedServicesTable  = [
        {
            serviceType: 'Waste Management',
            property: '22, Awolowo way Ikoyi, Lagos',
            date: '29/12/24',
            status: 'upcoming',
        },
        {
            serviceType: 'Cleaning',
            property: '22, Awolowo way Ikoyi, Lagos',
            date: '29/12/24',
            status: 'in-progress',
        },
        {
            serviceType: 'Plumbing',
            property: '3, Ahmed Musa Crescent, Jabi, Abuja ',
            date: '29/12/24',
            status: 'completed',
        },
    ]
    const notificationLists = [
        {
            icon: LuCalendarCheck,
            title: 'Service Request',
            time: '35 mins',
            message: 'Plumbing service request confirmed'
        },
        {
            icon: IoCardOutline,
            title: 'Payment',
            time: '3 hours',
            message: 'Your current rent expires on Nov 25.'
        },
        {
            icon: CiHeart,
            title: 'Saved Property',
            time: '2 days',
            message: 'You just saved a new property.'
        },
    ]
    const paymentLists = [
        {
            icon: IoCardOutline,
            title: 'Rent',
            status: 'unpaid',
            message: '3-bedroom in Abuja'
        },
        {
            icon: IoCardOutline,
            title: 'Rent',
            status: 'paid',
            message: '3-bedroom in Abuja'
        },
    ]
    
    return (
            <div className='user-dashboard-container'>
                <DashboardTopNav dashboardRoute={'Dashboard Overview'}/>
                <div className="user-dashboard-main-content">
                    <h2>Welcome {userProfile.firstname},</h2>
                    <div className="content-layout">
                        <div className="property-services-container">
                            <div className="property-section">
                                <div className="property-section-title">
                                    <h3>Saved Properties</h3>
                                    <Link>View All</Link>
                                </div>
                                <div className="property-list">
                                    {latestPropertises.map((properties) => {
                                        return(
                                            <Card propertise={properties} cardStyles={cardStytles}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="services-section">
                                <div className="property-section-title">
                                    <h3>Booked Services</h3>
                                    <Link>View All</Link>
                                </div>
                                <table className="booked-table">
                                    <thead>
                                        <tr>
                                            <th>Services Type</th>
                                            <th>Property</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    {
                                        bookedServicesTable.map((tableData) => {
                                            const {serviceType, property, date, status,} = tableData
                                            return(
                                                <tbody>
                                                    <tr>
                                                        <td>{serviceType}</td>
                                                        <td>{property}</td>
                                                        <td>{date}</td>
                                                        <td ><span className={status}>{status}</span></td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                        <div className="notifications-payment-container">
                            <div className="notification-section">
                                <div className="property-section-title">
                                    <h3>Notification</h3>
                                    <Link>View All</Link>
                                </div>
                                {
                                    notificationLists.map((item, index) => {
                                        const { title, time, message} = item;
                                        return(
                                            <div className="notification-list" key={index}>
                                                <div className="notification-icon">
                                                    <item.icon style={{width:'24px', height:'24px'}}/>
                                                </div> 
                                                <div className="notification-content">
                                                    <div className="notification-title">
                                                        <p>{title}</p>
                                                        <span>{time} ago</span>
                                                    </div>
                                                    <p>{message}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="payment-section">
                                <div className="property-section-title">
                                    <h3>Payment</h3>
                                    <Link>View All</Link>
                                </div>
                                {
                                    paymentLists.map((item, index) => {
                                        const {title, status, message} = item
                                        return(
                                            <div className="notification-list" key={index}>
                                                <div className="notification-icon">
                                                    <item.icon style={{width:'24px', height:'24px'}}/>
                                                </div> 
                                                <div className="notification-content">
                                                    <div className="notification-title">
                                                        <p>{title}</p>
                                                        <span className={status}>{status}</span>
                                                    </div>
                                                    <p>{message}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default DashboardPage;

