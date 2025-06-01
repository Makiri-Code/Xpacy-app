import { 
    ManagementDashboardContainer,
    ManagementDashboardContent,
    Heading,
    Container,
    PropertiesCard,
    IconContainer,
    Icon,
    ServiceRequestCard,
    RevenueCard,
    Upcoming,
    Header,
    NotificationTable,
 } from "./owner-dashboard.styles";
import {ReactComponent as RecievePayments} from "../../../../assets/recieve-money.svg";
import {ReactComponent as MoneyBag} from "../../../../assets/money-bag.svg";
import TopNav from "../navigation/topnav/top-nav";
import { BiBuildings } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuUserRoundCog } from "react-icons/lu";
import { HiOutlineCreditCard } from "react-icons/hi";
import { TbCalendarMonth } from "react-icons/tb";

const Dashboard = ({isMobile, ownerProfile, ownerProperties, ownerServiceList, profileImage, ownerNotifications}) => {
    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Dashboard Overview'} isMobile={isMobile} profileImage={profileImage} />
            <ManagementDashboardContent>
            <Heading>Welcome {ownerProfile?.first_name},</Heading>
            {/* Overview */}
            <Container>
                <p>Key Metrics</p>
                <PropertiesCard>
                    <div className="card1">
                        <div className="services-card">
                            <IconContainer>
                                <Icon>
                                    <BiBuildings style={{width: '20px', height: '20px'}}/>
                                </Icon>
                                <p>Properties Owned</p>
                            </IconContainer>
                            <h3>{ownerProperties?.length}</h3>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                <div className="card2">
                    <span>Rented</span>
                    <p>0</p>
                </div>
                
                <div className="card3">
                    <span>Vacant</span>
                    <p>0</p>
                </div>
                <div className="card4">
                    <span>Under Maintenance</span>
                    <p>0</p>
                </div>
                <div className="card5">
                    <span>For Sale</span>
                    <p>0</p>
                </div>
                <div className="card6">
                    <span>Sold</span>
                    <p>0</p>
                </div>
                </PropertiesCard>
                <ServiceRequestCard>
                    <div className="card1">
                        <div className="services-card">
                            <IconContainer>
                                <Icon className="service-request">
                                    <LuUserRoundCog style={{width: '20px', height: '20px'}}/>
                                </Icon>
                                <p>Service Request</p>
                            </IconContainer>
                            <h3>{ownerServiceList?.length}</h3>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                    <div className="card2">
                        <span>Completed</span>
                        <p>0</p>
                    </div>
                    <div className="card3">
                        <span>In progress</span>
                        <p>0</p>
                    </div>
                    <div className="card4">
                        <span>Pending</span>
                        <p>0</p>
                    </div>
                </ServiceRequestCard>
                <div style={{display: 'flex', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'start'}}>
                    <RevenueCard>
                        <div className="card1">
                            <div className="services-card">
                                <IconContainer>
                                    <Icon className="revenue">
                                        <RecievePayments style={{width: '20px', height: '20px'}}/>
                                    </Icon>
                                    <p>Service Request</p>
                                </IconContainer>
                                <h3>₦0</h3>
                            </div>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                        </div>
                        <div className="card2">
                            <span>Rent</span>
                            <p>₦0</p>
                        </div>
                        <div className="card3">
                            <span>Sale</span>
                            <p>₦0</p>
                        </div>
                    </RevenueCard>
                    <Upcoming>
                        <div>
                            <div className="revenue">
                                <HiOutlineCreditCard className="icon1"/>
                            </div>
                            <p>MAINTEANCE CHARGE</p>
                            <h3>₦0</h3>
                        </div>
                    </Upcoming>
                </div>
            </Container>
            {/* Notification Table */}
            <Container>
                <Header>
                    <p>Notifications</p>
                    <Link to={'/dashboard/owner/notification'}>View All</Link>
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
                            ownerNotifications?.toSpliced(3).map((item) => {
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
                    <Link to={'/dashboard/owner/properties'}>View All</Link>
                </Header>
                <NotificationTable>
                    <thead>
                        <th>Property Name/Address</th>
                        <th>Tenant/Buyer Name</th>
                        <th>Payment Status</th>
                        <th>Availability Status</th>
                        <th>Due Date</th>
                        <th>Current Price</th>
                    </thead>
                    <tbody>
                            {
                                ownerProperties.toSpliced(5).map((property) => {
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
        </ManagementDashboardContent>
    </ManagementDashboardContainer>
    );
};

export default Dashboard;