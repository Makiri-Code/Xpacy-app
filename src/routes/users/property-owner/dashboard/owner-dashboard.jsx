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
import propertyImage from "../../../../assets/Property-Image.png"


const Dashboard = ({isMobile}) => {

    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Dashboard Overview'} isMobile={isMobile} />
            <ManagementDashboardContent>
            <Heading>Welcome Fidamilola,</Heading>
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
                            <h3>9</h3>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                <div className="card2">
                    <span>Rented</span>
                    <p>4</p>
                </div>
                
                <div className="card3">
                    <span>Vacant</span>
                    <p>1</p>
                </div>
                <div className="card4">
                    <span>Under Maintenance</span>
                    <p>1</p>
                </div>
                <div className="card5">
                    <span>For Sale</span>
                    <p>2</p>
                </div>
                <div className="card6">
                    <span>Sold</span>
                    <p>4</p>
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
                            <h3>15</h3>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                    <div className="card2">
                        <span>Completed</span>
                        <p>10</p>
                    </div>
                    <div className="card3">
                        <span>In progress</span>
                        <p>1</p>
                    </div>
                    <div className="card4">
                        <span>Pending</span>
                        <p>1</p>
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
                                <h3>₦300,000,000</h3>
                            </div>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                        </div>
                        <div className="card2">
                            <span>Rent</span>
                            <p>₦300,000,000</p>
                        </div>
                        <div className="card3">
                            <span>Sale</span>
                            <p>₦300,000,000</p>
                        </div>
                    </RevenueCard>
                    <Upcoming>
                        <div>
                            <div className="revenue">
                                <HiOutlineCreditCard className="icon1"/>
                            </div>
                            <p>UPCOMING PAYMENTS</p>
                            <h3>₦300,000,000</h3>
                        </div>
                    </Upcoming>
                </div>
            </Container>
            {/* Notification Table */}
            <Container>
                <Header>
                    <p>Notifications</p>
                    <Link>View All</Link>
                </Header>
                <NotificationTable>
                    <thead>
                        <th>Type</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Time</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='typeData'>
                                <div className='type'><MoneyBag style={{width: '20px', height: '20px'}}/></div>
                                Payment
                            </td>
                            <td>Rent has been paid for your property</td>
                            <td>19/09/24</td>
                            <td>12:00pm</td>
                        </tr>
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
                        <th>Property Name/Address</th>
                        <th>Tenant/Buyer Name</th>
                        <th>Payment Status</th>
                        <th>Availability Status</th>
                        <th>Due Date</th>
                        <th>Current Price</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='typeData'>
                                <div style = {{width: '64px', height: '48px', background: `url(${propertyImage}) lightgray 50% / cover no-repeat`}}></div>
                                4 bedroom Villa, Mokola, Ibadan  
                            </td>
                            <td>N/A</td>
                            <td><div className="rented">Rented</div></td>
                            <td><div className='for-sale' >For-Sale</div></td>
                            <td>N/A</td>
                            <td><strong>₦4,500,000/year</strong></td>
                        </tr>
                    </tbody>
                </NotificationTable>
            </Container>
            {/* Service Request Overview */}
        </ManagementDashboardContent>
    </ManagementDashboardContainer>
    );
};

export default Dashboard;