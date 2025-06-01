import { Header, NotificationTable, Container, Icon, IconContainer, ManagementDashboardContainer, ManagementDashboardContent, PropertiesCard } from "../dashboard/owner-dashboard.styles"
import TopNav from "../navigation/topnav/top-nav"
import { SlOptions } from "react-icons/sl";
import { DropdownContent, DropdownOption, DeleteModalContent, HeaderContainer, Select, ServicesCardFooter, FilterItem, SearchBox, SearchBoxContainer, SearchIcon, } from "./services.styles";
import ModalComponent from "../../../../components/modal/modal";
import Button from "../../../../components/button/button";
import {ReactComponent as Details} from '../../../../assets/details.svg';
import { BsGraphUp } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TableFooter } from "../notification/notification.styles";
import { BiPlus } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { IoArrowUp } from "react-icons/io5";
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter";
import SortBy from "../../../../components/sort-by/sortBy";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
const Services = ({isMobile, ownerServiceList, profileImage}) => {
    const navigate = useNavigate();
    const [showDeletModal, setShowDeleteModal] = useState(false);
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
    //   Convert time to 12 hours
    const converTo12HourFormat = (timeString) => {
        let [hours, minutes] = timeString?.split(":").map(Number);
        let period = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;   
        return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
        }
    const [showPropertyOptionId, setShowPropertyOptionId] = useState(null);
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={"Service Request"} isMobile={isMobile} profileImage={profileImage}/>
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
                                    <Icon className="service-request">
                                        <RiUserSettingsLine style={{width: '20px', height: '20px'}}/>
                                    </Icon>
                                    <p>SERVICE REQUESTS</p>
                                </IconContainer>
                                <ServicesCardFooter>
                                    <span>{ownerServiceList?.length}</span>
                                    <div className="stats">
                                        <IoArrowUp style={{width: '16px', height: '16px', color: '#357B38'}}/>
                                        <span>1.0%</span>
                                    </div>
                                </ServicesCardFooter>
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
                            <span>Upcoming</span>
                            <p>0</p>
                        </div>
                        <div className="card5">
                            <span>Pending</span>
                            <p>0</p>
                        </div>
                        <div className="card6">
                            <span>Cancelled</span>
                            <p>0</p>
                        </div>
                    </PropertiesCard>
                </Container>
                {/* Property List */}
                <Container>
                    <Header>
                        <p>Service Request List</p>
                        <FilterItem>
                        <SearchBoxContainer>
                            <SearchBox type="search" placeholder = "Search service request"  />
                            <SearchIcon/>
                        </SearchBoxContainer>
                        <SortBy selectOptions={selectOptions}/>
                        <DashboardFilter dropdownOptions={dropdownOptions}/>
                    </FilterItem>
                    </Header>
                    <NotificationTable>
                        <thead>
                            <th>Service Type</th>
                            <th>Property Address</th>
                            <th>Initiated by</th>
                            <th>Date/Time</th>
                            <th>Service Status</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                ownerServiceList?.map((service) => {
                                    const formattedDate = new Date(service?.scheduled_date)
                                            .toLocaleDateString('en-GB')
                                            .split("/")
                                            .map((part, index) => (index === 2 ? part.slice(-2) : part) )
                                            .join("/")

                                    return (
                                        <tr>
                                            <td>{service?.service_type}</td>
                                            <td>{service.address}</td>
                                            <td>{service.propertyOwner?.first_name}</td>
                                            <td>{formattedDate}<br/>{service.scheduled_time && (converTo12HourFormat(service.scheduled_time))}</td>
                                            <td><div className={service.service_status.toLowerCase()} >{service.service_status}</div></td>
                                            <td>{!service.serviceProvider ? 'Unassigned' : service.serviceProvider.provider_name}</td>
                                            <td>
                                                <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", position: 'relative'}} onClick={() => setShowPropertyOptionId(showPropertyOptionId === service.id ? null : service.id)} />
                                                {
                                                    showPropertyOptionId === service.id && (
                                                        <DropdownOption>
                                                            <DropdownContent onClick={() => {
                                                                setShowPropertyOptionId(null);
                                                                navigate('/dashboard/owner/reshedule-service-request')
                                                            }}>
                                                                <LuCalendarClock style={{width: '24px', height: '24px'}}/>
                                                                <span>Reschedule</span>
                                                            </DropdownContent>
                                                            <DropdownContent onClick={() => {
                                                                setShowPropertyOptionId(null);
                                                                setShowDeleteModal(!showDeletModal)
                                                            }} >
                                                                <MdOutlineCancel style={{width: '24px', height: '24px'}}/>
                                                                <span>Cancel request</span>
                                                            </DropdownContent>
                                                            <DropdownContent onClick={() => {
                                                                setShowPropertyOptionId(null);
                                                                navigate('/dashboard/owner/service-request-details')
                                                            }} >
                                                                <CgDetailsMore style={{width: '24px', height: '24px'}}/>
                                                                <span>View details</span>
                                                            </DropdownContent>
                                                            <DropdownContent className='last' onClick={() => {
                                                                setShowPropertyOptionId(null);
                                                                navigate('/dashboard/owner/new-service-request');
                                                            }}>
                                                                <RiUserSettingsLine style={{width: '24px', height: '24px'}}/>
                                                                <span>Submit new request</span>
                                                            </DropdownContent>
                                                        </DropdownOption>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <td>Plumbing</td>
                                <td>22, Awolowo Way, Ikoyi, Lagos </td>
                                <td style={{textAlign: 'center'}}>Jerry Briggs<br/><small style={{fontFamily: 'Unitext Regular'}}>Tenant</small></td>
                                <td>19/09/24<br/>12:00pm</td>
                                <td><div className="in-progress">In progress</div></td>
                                <td>
                                    <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowPropertyOption(!showPropertyOption)} />
                                        {
                                            showPropertyOption && (
                                                <DropdownOption>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/owner/reshedule-service-request')
                                                    }}>
                                                        <LuCalendarClock style={{width: '24px', height: '24px'}}/>
                                                        <span>Reschedule</span>
                                                    </DropdownContent>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        setShowDeleteModal(!showDeletModal)
                                                    }} >
                                                        <MdOutlineCancel style={{width: '24px', height: '24px'}}/>
                                                        <span>Cancel request</span>
                                                    </DropdownContent>
                                                    <DropdownContent onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/owner/service-request-details')
                                                    }} >
                                                        <CgDetailsMore style={{width: '24px', height: '24px'}}/>
                                                        <span>View details</span>
                                                    </DropdownContent>
                                                    <DropdownContent className='last' onClick={() => {
                                                        setShowPropertyOption(!showPropertyOption);
                                                        navigate('/dashboard/owner/new-service-request');
                                                    }}>
                                                        <RiUserSettingsLine style={{width: '24px', height: '24px'}}/>
                                                        <span>Submit new request</span>
                                                    </DropdownContent>
                                                </DropdownOption>
                                            )
                                        }
                                </td>
                            </tr> */}
                        </tbody>
                    </NotificationTable>
                </Container>
            </ManagementDashboardContent>
            {
                showDeletModal && (
                    <ModalComponent>
                        <DeleteModalContent>
                            <p>Are you sure you want to cancel this service request?</p>
                            <div className="btn-container">
                            <Button
                                buttonType={{primaryBtn: false}}
                                buttonHeight={'28px'} 
                                background={'#FBC0BC'}
                                buttonPadding={'6px 16px'}
                            >
                                Yes, cancel
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
        </ManagementDashboardContainer>
    );
};


export default Services;

