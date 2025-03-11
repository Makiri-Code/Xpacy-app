import { useState } from "react";
import { 
    ManagementDashboardContainer,
    ManagementDashboardContent,
    Container,
    Header,
    NotificationTable,
 } from "../../dashboard/management_dashboard.styles";
 import { 
    HeaderContainer,
    Select,
  } from "../../properties/properties.styles";
import { Form } from "react-bootstrap";
import SortBy from "../../../../../components/sort-by/sortBy";
import DashboardFilter from "../../../../../components/dashboard-filter/dasboardFilter";
import TopNav from "../../navigation/topnav/top-nav";
import Button from "../../../../../components/button/button";
import { FiUpload } from "react-icons/fi";
import { 
    SummaryContainer,
    IconContainer,
    Icon,
    ServicesCardFooter,
    AnalyticsContainer,
    ChartContainer,
    OptionsContainer,
 } from "./services.styles";
import ModalComponent from "../../../../../components/modal/modal";
import { DeleteModalContent } from "../../properties/properties.styles";
import { VscNote } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";
import PropertiesMultiplePieChart from "../../../../../components/properties-pie-chart/properties-multiple-piechart";
import ServicesBarChart from "../../../../../components/services-barchart/services-barchart";
import { 
    FilterContainer,
    FilterItem,
    SearchBox,
    SearchBoxContainer,
    SearchIcon,
 } from "../../notification/notification.styles";
import { SlOptions } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Services = ({isMobile}) => {
    const navigate = useNavigate();
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
    const [showDeletModal, setShowDeleteModal] = useState(false);
    const data = [
        { name: "Over Due", value: 4, color: "#8FB3CB" },
        { name: "Pending", value: 25, color: "#477899" },
        { name: "Inprogress", value: 16, color: "#73A0BE" },
        { name: "Completed", value: 75, color: "#2D4C61" },
      ];
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
            <TopNav dashboardRoute={'Services'} isMobile={isMobile} />
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
                            <div className="card1">
                                <div className="services-card">
                                    <IconContainer>
                                        <Icon>
                                            <RiUserSettingsLine style={{width: '20px', height: '20px'}}/>
                                        </Icon>
                                        <p>Total Services</p>
                                    </IconContainer>
                                    <ServicesCardFooter>
                                        <span>120</span>
                                        <div className="stats">
                                            <IoArrowUp style={{width: '16px', height: '16px', color: '#357B38'}}/>
                                            <span>3.0%</span>
                                        </div>
                                    </ServicesCardFooter>
                                </div>
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                            </div>
                            <div className="card2">
                                <span>Properties Under Xpacy</span>
                                <p>100</p>
                            </div>
                            <div className="card3">
                                <span>External Properties</span>
                                <p>20</p>
                            </div>
                            <div className="card4">
                                <span>Canceled Requests</span>
                                <p>4</p>
                            </div>
                        </SummaryContainer>
                        <AnalyticsContainer>
                            <ChartContainer>
                                <p>Total number of services <span>(last month)</span></p>
                                <ServicesBarChart/>
                            </ChartContainer>
                            <ChartContainer>
                                <p>Service Status <span>(last month)</span></p>
                                <PropertiesMultiplePieChart chart_data={data}/>
                            </ChartContainer>
                        </AnalyticsContainer>
                    </Container>
                    <Container>
                        <FilterContainer>
                            <p>Services List</p>
                            <FilterItem>
                                <SearchBoxContainer>
                                    <SearchBox type="search" placeholder = "Search property, type or name"  />
                                    <SearchIcon/>
                                </SearchBoxContainer>
                                <SortBy selectOptions={selectOptions}/>
                                <DashboardFilter dropdownOptions={dropdownOptions}/>
                            </FilterItem>
                        </FilterContainer>
                        <NotificationTable>
                            <thead>
                                <th>Service Type</th>
                                <th>Property Address</th>
                                <th>Tenant/Owner</th>
                                <th>Date/Time</th>
                                <th>Service Status</th>
                                <th>Assigned Provider</th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Plumbing</td>
                                    <td>3 Bedroom flat Ikoyi, Lagos</td>
                                    <td>Jerry Brigs</td>
                                    <td>15/04/24<br/>12:00pm</td>
                                    <td><div className='in-progress' >In progress</div></td>
                                    <td>Bright Plumbing</td>
                                    <td style={{position: 'relative'}}>
                                        <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", }} onClick={() => setShowOptionsDropdown(!showOptionsDropdown)} />
                                        {
                                            showOptionsDropdown && (
                                                <OptionsContainer>
                                                    <div className="option-item" onClick={() => {
                                                        navigate('/dashboard/admin/services-request-form');
                                                    }}> 
                                                        <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                        <span>View details</span>
                                                    </div>
                                                    <div className="option-item" onClick={() => navigate('/dashboard/admin/assign-service-provider') }>
                                                        <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                        <span>Assign provider</span>
                                                    </div>
                                                    <div className="option-item" onClick={() => setShowDeleteModal(true)}>
                                                        <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                        <span>Delete service request</span>
                                                    </div>
                                                </OptionsContainer>
                                            )
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </NotificationTable>
                    </Container>
                    {
                        showDeletModal && (
                            <ModalComponent>
                                <DeleteModalContent>
                                    <p>Are you sure you want to delete this service request?</p>
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

export default Services;

