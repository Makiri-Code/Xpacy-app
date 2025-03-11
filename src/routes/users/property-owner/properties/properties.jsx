import { BiBuildings } from "react-icons/bi";
import { Header, NotificationTable, Container, Icon, IconContainer, ManagementDashboardContainer, ManagementDashboardContent, PropertiesCard } from "../dashboard/owner-dashboard.styles"
import TopNav from "../navigation/topnav/top-nav"
import { SlOptions } from "react-icons/sl";
import { 
    DropdownContent, 
    DropdownOption, 
    DeleteModalContent, 
    HeaderContainer, 
    Select,
    FilterItem,
    SearchBox,
    SearchBoxContainer,
    SearchIcon,
 } from "./properties.styles";
import ModalComponent from "../../../../components/modal/modal";
import Button from "../../../../components/button/button";
import {ReactComponent as Details} from '../../../../assets/details.svg';
import { BsGraphUp } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import propertyImage from "../../../../assets/Property-Image.png"
import { TableFooter } from "../notification/notification.styles";
import { BiPlus } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter";

const Properties = ({isMobile}) => {
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
    const navigate = useNavigate();
    const [showPropertyOption, setShowPropertyOption] = useState(false)
    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={"My Properties"} isMobile={isMobile}/>
            <ManagementDashboardContent>
                <HeaderContainer>
                    <Select>
                        <option>Last 7 days</option>
                        <option>Last month</option>
                        <option>Last 90 days</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                    </Select>
                    <Button
                        buttonType={{primaryBtn: true}} 
                    >
                        <FiUpload style={{width: '24px', height: '24px'}} />
                        Export Report
                    </Button>
                </HeaderContainer>
                <Container>
                    <p>Summary</p>
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
                </Container>
                {/* Property List */}
                <Container>
                    <Header>
                        <p>Property List</p>
                    <FilterItem>
                        <SearchBoxContainer>
                            <SearchBox type="search" placeholder = "Search properties"  />
                            <SearchIcon/>
                        </SearchBoxContainer>
                        <DashboardFilter dropdownOptions={dropdownOptions}/>
                    </FilterItem>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Property Name/Address</th>
                            <th>Tenant/Buyer Name</th>
                            <th>Payment Status</th>
                            <th>Availability Status</th>
                            <th>Due Date</th>
                            <th>Current Price</th>
                            <th></th>
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
                                <td>
                                    <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowPropertyOption(!showPropertyOption)} />
                                        {
                                            showPropertyOption && (
                                                <DropdownOption>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('')
                                                    }}>
                                                        <Details/>
                                                        <span>View property details</span>
                                                    </DropdownContent>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/owner/new-service-request')
                                                    }} >
                                                        <RiUserSettingsLine style={{width: '24px', height: '24px'}}/>
                                                        <span>Submit service request</span>
                                                    </DropdownContent>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('')
                                                    }} >
                                                        <BsGraphUp style={{width: '24px', height: '24px'}}/>
                                                        <span>Property valuation</span>
                                                    </DropdownContent>
                                                    <DropdownContent className='last' onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/owner/new-property-listing');
                                                    }}>
                                                        <BiBuildings style={{width: '24px', height: '24px'}}/>
                                                        <span>New property listing</span>
                                                    </DropdownContent>
                                                </DropdownOption>
                                            )
                                        }
                                </td>
                            </tr>
                        </tbody>
                        <TableFooter>
                            <tr>
                                <td style={{cursor: 'pointer'}} onClick={() => navigate('/dashboard/owner/new-property-listing')}><div style={{display: 'flex', alignItems: 'center', gap: '4px'}}><BiPlus style={{width: '24px', height: '24px'}}/>Request New Property Listing</div></td>
                            </tr>
                        </TableFooter>
                    </NotificationTable>
                </Container>
            </ManagementDashboardContent>
        </ManagementDashboardContainer>
    );
};

export default Properties;