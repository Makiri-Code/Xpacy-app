import { useState } from "react";
import { 
    ManagementDashboardContainer,
    ManagementDashboardContent,
    Container,

 } from "../dashboard/management_dashboard.styles";
import TopNav from "../navigation/topnav/top-nav";
import { Form } from "react-bootstrap";
import { FiUpload } from "react-icons/fi";
import Button from "../../../../components/button/button";
import { BiBuildings } from "react-icons/bi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import PropertiesPieChart from "../../../../components/properties-pie-chart/properties-pie-chart";
import PropertiesSingleLineChart from '../../../../components/properties-single-line/properties-single-line';
import {ReactComponent as Details} from '../../../../assets/details.svg';
import {ReactComponent as Edit} from '../../../../assets/edit.svg';
import {ReactComponent as Delete} from '../../../../assets/delete.svg';
import { RiUserSettingsLine } from "react-icons/ri";
import PropertiesMultiplePieChart from "../../../../components/properties-pie-chart/properties-multiple-piechart";
import propertyImage from '../../../../assets/Property-Image.png';
import { 
    HeaderContainer,
    Select,
    SummaryContainer,
    ChartContainer,
    Upstats,
    TotalRentCards,
    CardHeader,
    PropertyTableList,
    DropdownContent,
    DropdownOption,
    DeleteModalContent,
 } from "./properties.styles";
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter";
import SortBy from "../../../../components/sort-by/sortBy";
import { SlOptions } from "react-icons/sl";
import { 
    FilterContainer,
    FilterItem,
    SearchBox,
    SearchBoxContainer,
    SearchIcon,
    NotificationTable,
 } from "../notification/notification.styles";
import ModalComponent from "../../../../components/modal/modal";
import { useNavigate } from "react-router-dom";

const Properties = ({isMobile}) => {
    const navigate = useNavigate();
    const [showPropertyOption, setShowPropertyOption] = useState(false)
    const [showDeletModal, setShowDeleteModal] = useState(false);
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
    const selectOptions = [
        {
          option: "Default",
        },
        {
          option: "Newest",
        },
        {
          option: "Oldest",
        },
      ];

    return (
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Properties'} isMobile={isMobile} />
            <ManagementDashboardContent>
                    <HeaderContainer>
                        <Form>
                            <Select>
                                <option>Last 7 days</option>
                                <option>Last month</option>
                                <option>Last 90 days</option>
                                <option>Last 6 months</option>
                                <option>Last year</option>
                            </Select>
                        </Form>
                        <Button
                            buttonType={{primaryBtn: true}} 
                        >
                            <FiUpload style={{width: '24px', height: '24px'}} />
                            Export Report
                        </Button>
                    </HeaderContainer>
                    <Container>
                        <p>Summary</p>
                        <SummaryContainer>
                            <div className="first-card card">
                                <header>
                                    <CardHeader>
                                        <div className='building-icon'>
                                            <BiBuildings style={{width: '24px', height: '24px'}}/>
                                        </div>
                                        <span>Total Properties</span>
                                    </CardHeader>
                                    <div className='stats'>
                                        <span>45</span>
                                        <Upstats>
                                            <FaArrowUp style={{width: '17px', height: '17px', color: '#357B38' }}/>
                                            <p>3.5%</p>
                                        </Upstats>
                                    </div>
                                </header>
                                <ChartContainer>
                                    <PropertiesPieChart/>
                                </ChartContainer>
                            </div>
                            <div className="second-card">
                                <div className="total-rent-container">
                                    <header>
                                        <span>Total Rent: <strong>25</strong></span>
                                        <Upstats>
                                            <FaArrowUp style={{width: '17px', height: '17px', color: '#357B38' }}/>
                                            <p>2.0%</p>
                                        </Upstats>
                                    </header>
                                    <TotalRentCards>
                                        <div className="vacant-card">
                                            <p>Vacant</p>
                                            <span>12</span>
                                        </div>
                                        <div className="vacant-card">
                                            <p>Rented</p>
                                            <span>10</span>
                                        </div>
                                        <div className="vacant-card">
                                            <p>Under Maintenance</p>
                                            <span>3</span>
                                        </div>
                                    </TotalRentCards>
                                </div>
                                <div className="total-sale-container">
                                    <header>
                                            <span>Total Sales: <strong>20</strong></span>
                                            <Upstats className="down-trend">
                                                <FaArrowDown style={{width: '17px', height: '17px', color: '#C4170B' }}/>
                                                <p>2.0%</p>
                                            </Upstats>
                                            
                                    </header>
                                    <ChartContainer>
                                        <PropertiesSingleLineChart/>
                                    </ChartContainer>
                                </div>
                            </div>
                            <div className="third-card card">
                                <header>
                                    <CardHeader>
                                        <div className='services-icon'>
                                            <RiUserSettingsLine style={{width: '16px', height: '16px', color: '#203645'}}/>
                                        </div>
                                        <span>Facility Management</span>
                                    </CardHeader>
                                    <Upstats className="down-trend">
                                        <FaArrowDown style={{width: '17px', height: '17px', color: '#C4170B' }}/>
                                        <p>0.5%</p>
                                    </Upstats>
                                </header>
                                <ChartContainer>
                                    <PropertiesMultiplePieChart/>
                                </ChartContainer>
                            </div>
                        </SummaryContainer>
                    </Container>
                    <Container>
                        <FilterContainer>
                            <p>Property List</p>
                            <FilterItem>
                                <SearchBoxContainer>
                                    <SearchBox type="search" placeholder = "Search notifications"  />
                                    <SearchIcon/>
                                </SearchBoxContainer>
                                <SortBy selectOptions={selectOptions}/>
                                <DashboardFilter dropdownOptions={dropdownOptions}/>
                            </FilterItem>
                        </FilterContainer>
                        <PropertyTableList>
                            <thead>
                                <th>Property</th>
                                <th>Location</th>
                                <th>Owner's Information</th>
                                <th>Availability Status</th>
                                <th>Current Price</th>
                                <th></th>
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
                                    <td>
                                        <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowPropertyOption(!showPropertyOption)} />
                                        {
                                            showPropertyOption && (
                                                <DropdownOption>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/admin/properties-details')
                                                    }}>
                                                        <Details/>
                                                        <span>View property details</span>
                                                    </DropdownContent>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/admin/edit')
                                                    }} >
                                                        <Edit/>
                                                        <span>Edit property</span>
                                                    </DropdownContent>
                                                    <DropdownContent className='last' onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        setShowDeleteModal(!showDeletModal)
                                                    }}>
                                                        <Delete/>
                                                        <span>Delete property</span>
                                                    </DropdownContent>
                                                </DropdownOption>
                                            )
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </PropertyTableList>
                    </Container>
                    {
                        showDeletModal && (
                            <ModalComponent>
                                <DeleteModalContent>
                                    <p>Are you sure you want to delete this property?</p>
                                    <div className="btn-container">
                                    <Button
                                        buttonType={{primaryBtn: false}}
                                        buttonHeight={'28px'} 
                                        background={'#FBC0BC'}
                                        buttonPadding={'6px 16px'}
                                    >
                                        Yes, delete
                                    </Button>
                                    <Button
                                        buttonType={{primaryBtn: true}} 
                                        buttonHeight={'28px'}
                                        buttonPadding={'6px 16px'}
                                        onClick={() => setShowDeleteModal(!showDeletModal)}
                                    >
                                        No, undo
                                    </Button>
                                    </div>
                                </DeleteModalContent>
                            </ModalComponent>
                        )
                    }
            </ManagementDashboardContent>
        </ManagementDashboardContainer>

    );
};

export default Properties; 