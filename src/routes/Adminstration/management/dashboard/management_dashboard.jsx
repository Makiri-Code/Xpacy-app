import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import { TbCalendarMonth } from "react-icons/tb";
import TopNav from '../navigation/topnav/top-nav';
import {ReactComponent as MoneyBag} from "../../../../assets/money-bag.svg"
import { 
    ManagementDashboardContainer,
    ManagementDashboardContent,
    Heading,
    QuickOverviewCard,
    Container,
    Header,
    NotificationTable,
 } from './management_dashboard.styles';
const ManagementDashboard = ({
        isMobile,
        propertiesPagination, 
        allNotifications, 
        userProfile, 
        allProperties, 
        allServices, 
        allOwners, 
        allUsers, 
        profileImage,
        allBookings,
    }) => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(userProfile?.username.split(" ")[0])
    
    
    // Convert to Sentence case
    const toSentenceCase = (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const overviewCardArray = [
        {
            icon: BiBuildings,
            name: 'Properties Managed',
            number: propertiesPagination?.total
        },
        {
            icon: MdOutlineManageAccounts,
            name: 'Pending Services',
            number: allServices?.length
        },
        {
            icon: FaBuildingUser,
            name: 'Owners Managed',
            number: allOwners?.length
        },
        {
            icon: TbUsersGroup,
            name: 'Tenants Managed',
            number: allUsers?.length
        },
    ];
    return (
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Dashboard Overview'} isMobile={isMobile} userProfile={userProfile} profileImage={profileImage}/>
            <ManagementDashboardContent>
                <Heading>Welcome {toSentenceCase(firstName)},</Heading>
                {/* Overview */}
                <Container>
                    <p>Quick Overview</p>
                    <QuickOverviewCard>
                        {
                            overviewCardArray.map((card, index)=> {
                                const { name, number} = card;
                                return(
                                    <div className="card" key={index}>
                                        <div className="building-icon">
                                            <card.icon style={{width: '24px', height: '24px'}}/>
                                        </div>
                                        <p>{name.toLocaleUpperCase()}</p>
                                        <span>{number}</span>
                                    </div>
                                )
                            })
                        }
                        
                    </QuickOverviewCard>
                </Container>
                {/* Notification Table */}
                <Container>
                    <Header>
                        <p>Notifications</p>
                        <Link to={"/dashboard/admin/notification"}>View All</Link>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Type</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Time</th>
                        </thead>
                        <tbody>
                            {
                                allNotifications?.bookings?.toSpliced(3).map((item) => {
                                    const dateStr = new Date(item?.date);

                                    return(
                                        <tr>
                                            <td className='typeData'>
                                                <div className='type'>
                                                    {
                                                        item.notification_type === 'Payment' && <MoneyBag style={{width: '20px', height: '20px'}}/>
                                                    }
                                                    {
                                                        item.notification_type === 'Property Update' && <BiBuildings style={{width: '20px', height: '20px'}}/>
                                                    }
                                                    {
                                                        item.notification_type === 'Service Request' && <TbCalendarMonth style={{width: '20px', height: '20px'}}/>
                                                    }
                                                </div>
                                                {item?.notification_type}
                                            </td>
                                            <td>{item?.message}</td>
                                            <td>{dateStr.toLocaleDateString('en-GB')}</td>
                                            <td>{dateStr.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true})}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </NotificationTable>
                </Container>
                {/* Property List Table */}
                <Container>
                    <Header>
                        <p>Property List</p>
                        <Link to={'/dashboard/admin/properties'}>View All</Link>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Property</th>
                            <th>Location</th>
                            <th>Owner's Information</th>
                            <th>Availability Status</th>
                            <th>Current Price</th>
                        </thead>
                        <tbody>
                            {
                                allProperties?.toSpliced(5).map((property) => {
                                    return(
                                        <tr key={property.id}>
                                            <td className='typeData'>
                                                <div style = {{width: '64px', height: '48px', background: `url(https://app.xpacy.com/src/upload/properties/${property?.images[0]}) lightgray 50% / cover no-repeat`}}></div>
                                                {property.property_name} 
                                            </td>
                                            <td>{property.state}</td>
                                            <td><strong>{property.propertyOwner.first_name}</strong><br/> {property.propertyOwner.phone},<br/> {property.propertyOwner.email}</td>
                                            <td><div className={property.availability_status.toLowerCase()} >{property.availability_status}</div></td>
                                            <td><strong>₦{property.property_price.toLocaleString()}/year</strong></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </NotificationTable>
                </Container>
                {/* Service Request Overview */}
                <Container>
                    <Header>
                        <p>Service Request Overview</p>
                        <Link to={'/dashboard/admin/services'}>View All</Link>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Service Type</th>
                            <th>Property</th>
                            <th>Tenant/Owner</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Service Status</th>
                        </thead>
                        <tbody>
                            {
                                allServices?.toSpliced(5).map((service) => {
                                    return(
                                            <tr>
                                                <td>{service.service_type}</td>
                                                <td>{service.address}</td>
                                                <td>{service.propertyOwner?.first_name}</td>
                                                <td>{service.scheduled_date}</td>
                                                <td>{service.scheduled_time}</td>
                                                <td><div className={service.service_status.toLowerCase()} >{service.service_status}</div></td>
                                            </tr>
                                    )
                                })
                            }
                        </tbody>
                    </NotificationTable>
                </Container>
                {/* Tenant/Buyers Lists */}
                <Container>
                    <Header>
                        <p>Tenants/Buyers List</p>
                        <Link>View All</Link>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Name</th>
                            <th>Property</th>
                            <th>User Type</th>
                            <th>Rent Status</th>
                            <th>Due Date</th>
                            <th>Current Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='typeData'>
                                    <div style = {{width: '32px', height: '32px', background: `url(${profileImage}) lightgray 50% / cover no-repeat`, borderRadius: '50%'}}></div>
                                    <div><strong>Joy Osigwe</strong><br/> 08000000000, <br/>joyosigwe@gmail.com</div>
                                </td>
                                <td>2 Bedroom Appartment Jabi, Abuja</td>
                                <td>Tenant</td>
                                <td><div className='paid' >Paid</div></td>
                                <td>15/04/24</td>
                                <td><strong>₦4,500,000/year</strong></td>
                            </tr>
                        </tbody>
                    </NotificationTable>
                </Container>
                {/* Bookings */}
                <Container>
                    <Header>
                        <p>Property Bookings List</p>
                        <Link>View All</Link>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Name</th>
                            <th>Property Name</th>
                            <th>Property Type</th>
                            <th>Property Status</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </thead>
                        <tbody>
                            {
                                [...allBookings.bookings]?.map(({id, start_date, end_date, property, user, status}) => (
                                    <tr key={id}>
                                        <td className='typeData'>
                                            <div><strong>{user.firstname} {user.lastname}</strong><br/>{user.email}</div>
                                        </td>
                                        <td>{property?.property_name}</td>
                                        <td>{property?.property_type}</td>
                                        <td>{status}</td>
                                        <td>{start_date.split('-').reverse().join('-')}</td>
                                        <td>{end_date.split('-').reverse().join('-')}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </NotificationTable>
                </Container>
            </ManagementDashboardContent>
        </ManagementDashboardContainer>
    );
}

export default ManagementDashboard;

