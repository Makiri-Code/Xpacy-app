import { useNavigate } from "react-router-dom";
import { 
    Menu, 
    MenuContent, 
    RequestContainer, 
    RequestContent,
    Header,
    Heading,
    SearchBox,
} from "./service-request-list.styles";
import { NavigationContainer, BackNav, LogoContainer } from "../../properties/add-new-property/add-new-property.styles";
import { IoArrowBack } from "react-icons/io5";
import xpacyLogo from "../../../../../assets/x-pacy-logo.svg";
import { useState } from "react";
import { Container, NotificationTable } from "../../dashboard/management_dashboard.styles";
import { FilterContainer, FilterItem, SearchBoxContainer, SearchIcon,  } from "../../notification/notification.styles";
import SortBy from "../../../../../components/sort-by/sortBy";
import DashboardFilter from "../../../../../components/dashboard-filter/dasboardFilter";
import { SlOptions } from "react-icons/sl";
import { DropdownOption, DropdownContent,  } from "../../properties/properties.styles";
import {ReactComponent as Details} from '../../../../../assets/details.svg';
import {ReactComponent as Edit} from '../../../../../assets/edit.svg';
import {ReactComponent as Delete} from '../../../../../assets/delete.svg';
import { DeleteModalContent } from "../../properties/properties.styles";
import ModalComponent from "../../../../../components/modal/modal";
import Button from "../../../../../components/button/button";
import { LuUserRoundCog } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

const ServiceRequestList = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(true)
    const [showRequestOption, setShowRequestOption] = useState(false)
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
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
    return(
        <RequestContainer>
            <NavigationContainer>
                <LogoContainer>
                    <BackNav
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        <IoArrowBack style={{width: '24px', height: '24px'}}/>
                        <span>Back</span>
                    </BackNav>
                    <img src={xpacyLogo} alt="x-pacy logo" />
                </LogoContainer>
            </NavigationContainer>
            <RequestContent>
                <Heading>
                    <Header>Manage Service Requests</Header>
                    <Menu>
                        <MenuContent className={active ? 'active' : ''} onClick={() => setActive(true)}>
                            <p>Service Requests List</p>
                        </MenuContent>
                        <MenuContent className={active ? '' : 'active'} onClick={() => setActive(false)}>
                            <p>Service Providers List</p>
                        </MenuContent>
                    </Menu>
                </Heading>
                {/* Service Request List */}
                {
                    active && 
                    (
                        <Container>
                            <FilterContainer>
                                <p>Service Requests List</p>
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
                                    <th>N/O</th>
                                    <th>Service Type</th>
                                    <th>Property Address</th>
                                    <th>Tenant/Owner</th>
                                    <th>Date/Time</th>
                                    <th>Status</th>
                                    <th>Assigned Provider</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Plumbing</td>
                                        <td>22, Awolowo Way, Ikoyi, Lagos </td>
                                        <td>Jerry Briggs</td>
                                        <td>19/09/24 <br/> 12:00pm</td>
                                        <td><div className='in-progress' >Inprogress</div></td>
                                        <td>Bright Plumbing</td>
                                        <td>
                                            <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowRequestOption(!showRequestOption)} />
                                            {
                                                showRequestOption && (
                                                    <DropdownOption>
                                                        <DropdownContent onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
                                                            navigate('/dashboard/admin/services-request-form')
                                                        }}>
                                                            <Details/>
                                                            <span>View details</span>
                                                        </DropdownContent>
                                                        <DropdownContent onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
                                                            navigate('/dashboard/admin/assign-service-provider')
                                                        }} >
                                                            <LuUserRoundCog style={{width: '24px', height: '24px'}}/>
                                                            <span> Assign provider</span>
                                                        </DropdownContent>
                                                        <DropdownContent className='last' onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
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
                            </NotificationTable>
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
                        </Container>
                        
                    )
                }
                {
                    !active && 
                    (
                        <Container>
                            <FilterContainer>
                                <p>Service Providers List</p>
                                <FilterItem>
                                    <SearchBoxContainer>
                                        <SearchBox type="search" placeholder = "Search provider, service type, email or location"  />
                                        <SearchIcon/>
                                    </SearchBoxContainer>
                                    <SortBy selectOptions={selectOptions}/>
                                    <DashboardFilter dropdownOptions={dropdownOptions}/>
                                </FilterItem>
                            </FilterContainer>
                            <NotificationTable>
                                <thead>
                                    <th>N/O</th>
                                    <th>Provider’s Name</th>
                                    <th>Contact Info</th>
                                    <th>Service Type</th>
                                    <th>Location</th>
                                    <th>Completed Services</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bright Plumbing</td>
                                        <td>08000000000, bplumbing@gmail,com</td>
                                        <td>Plumbing</td>
                                        <td>Ikoyi, Lagos</td>
                                        <td style={{textAlign: 'center'}}>10</td>
                                        <td>
                                            <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowRequestOption(!showRequestOption)} />
                                            {
                                                showRequestOption && (
                                                    <DropdownOption>
                                                        <DropdownContent onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
                                                            navigate('/dashboard/admin/service-provider-details')
                                                        }}>
                                                            <Details/>
                                                            <span>View details</span>
                                                        </DropdownContent>
                                                        <DropdownContent onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
                                                            navigate('/dashboard/admin/assign-service-request')
                                                        }} >
                                                            <LuCalendarCheck style={{width: '24px', height: '24px'}}/>
                                                            <span> Assign service request</span>
                                                        </DropdownContent>
                                                        <DropdownContent onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
                                                            navigate('/dashboard/admin/edit-provider')
                                                        }} >
                                                            <Edit/>
                                                            <span>Edit provider's details</span>
                                                        </DropdownContent>
                                                        <DropdownContent className='last' onClick={() => {
                                                            setShowRequestOption(!showRequestOption);
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
                                <tfoot>
                                    <tr>
                                        <td onClick={() => navigate("/dashboard/admin/add-new-provider")}><div style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}><FiPlus style={{width: '24px', height: '24px'}}/> <span style={{fontWeight: '700'}}>Add New Provider</span></div></td>
                                    </tr>
                                </tfoot>
                            </NotificationTable>
                            {
                                showDeletModal && (
                                    <ModalComponent>
                                        <DeleteModalContent>
                                            <p>Are you sure you want to delete this service provider?</p>
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
                        </Container>
                    )
                }
            </RequestContent>
        </RequestContainer>
    );
};

export default ServiceRequestList;