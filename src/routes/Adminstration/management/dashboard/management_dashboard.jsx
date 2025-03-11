import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { FaBuildingUser } from "react-icons/fa6";
import { TbUsersGroup } from "react-icons/tb";
import TopNav from '../navigation/topnav/top-nav';
import propertyImage from '../../../../assets/Property-Image.png';
import {ReactComponent as MoneyBag} from "../../../../assets/money-bag.svg"
import profileImage from '../../../../assets/profile-picture.png';
import { 
    ManagementDashboardContainer,
    ManagementDashboardContent,
    Heading,
    QuickOverviewCard,
    Container,
    Header,
    NotificationTable,
 } from './management_dashboard.styles';
const ManagementDashboard = ({isMobile, allNotifications, userProfile, allProperties, allServices, allOwners, allUsers}) => {
    
    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(userProfile?.username)
    if(userProfile?.username.includes(".")){
        setFirstName(userProfile?.username.split(".")[0]);
    }
    
    // Convert to Sentence case
    const toSentenceCase = (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const overviewCardArray = [
        {
            icon: BiBuildings,
            name: 'Properties Managed',
            number: allProperties?.pagination.total
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
    console.log(allProperties)
    return (
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Dashboard Overview'} isMobile={isMobile} userProfile={userProfile}/>
            <ManagementDashboardContent>
                <Heading>Welcome {toSentenceCase(firstName)},</Heading>
                {/* Overview */}
                <Container>
                    <p>Quick Overview</p>
                    <QuickOverviewCard>
                        {
                            overviewCardArray.map((card)=> {
                                const { name, number} = card;
                                return(
                                    <div className="card">
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
                                allNotifications.map((item) => {
                                    return(
                                        <tr>
                                            <td className='typeData'>
                                                <div className='type'>
                                                    {
                                                        item.notification_type === 'Payment' && <MoneyBag style={{width: '20px', height: '20px'}}/>
                                                    }
                                                    {
                                                        item.notification_type === 'Properties' && <BiBuildings style={{width: '20px', height: '20px'}}/>
                                                    }
                                                </div>
                                                Payment
                                            </td>
                                            <td>Rent overdue for 2-Bedroom Apartment, Lagos</td>
                                            <td>19/09/24</td>
                                            <td>12:00pm</td>
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
                        <Link>View All</Link>
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
                            <tr>
                                <td className='typeData'>
                                    <div style = {{width: '64px', height: '48px', background: `url(${propertyImage}) lightgray 50% / cover no-repeat`}}></div>
                                    3 Bedroom Apartment 
                                </td>
                                <td>Ikoyi, Lagos</td>
                                <td><strong>Joy Osigwe</strong><br/> 08000000000,<br/> joyosigwe@gmail.com</td>
                                <td><div className='rented' >Rented</div></td>
                                <td><strong>₦4,500,000/year</strong></td>
                            </tr>
                        </tbody>
                    </NotificationTable>
                </Container>
                {/* Service Request Overview */}
                <Container>
                    <Header>
                        <p>Service Request Overview</p>
                        <Link>View All</Link>
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
                            <tr>
                                <td>Plumbing</td>
                                <td>3 Bedroom flat Ikoyi, Lagos</td>
                                <td>Jerry Brigs</td>
                                <td>15/04/24</td>
                                <td>12:00pm</td>
                                <td><div className='in-progress' >In progress</div></td>
                            </tr>
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
            </ManagementDashboardContent>
        </ManagementDashboardContainer>
    );
}

export default ManagementDashboard;

