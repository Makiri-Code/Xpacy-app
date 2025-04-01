import { useNavigate } from "react-router-dom";
import { 
    Menu, 
    MenuContent, 
    RequestContainer, 
    RequestContent,
    Header,
    Heading,
    SearchBox,
    OptionsContainer,
} from "./service-request-list.styles";
import { VscNote } from "react-icons/vsc";
import { RiUserSettingsLine } from "react-icons/ri";
import { NavigationContainer, BackNav, LogoContainer } from "../../properties/add-new-property/add-new-property.styles";
import { IoArrowBack } from "react-icons/io5";
import xpacyLogo from "../../../../../assets/x-pacy-logo.svg";
import { useContext, useState, useRef, useEffect } from "react";
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
import { PulseLoader } from "react-spinners";
import { RiDeleteBin6Line } from "react-icons/ri";
import isTokenExpired from "../../../../../utils/token/handleUserToken";
import fetchServer from "../../../../../utils/serverutils/fetchServer";
import { toast } from "sonner";
import { UserContext } from "../../../../../contexts/userContext";

const ServiceRequestList = ({allServices, setAllServices, allServiceProviders, setAllServiceProviders}) => {
    const navigate = useNavigate();
    const {userToken, server} = useContext(UserContext);
    const btnRef = useRef(null);
    const btn2Ref = useRef(null);

    const [active, setActive] = useState(true)
    const [showOptionsDropdownId, setShowOptionsDropdownId] = useState(null);
    const [showRequestOptionId, setShowRequestOptionId] = useState(false);
    const [showRequestOption, setShowRequestOption] = useState(false);
    const [showDeletModal, setShowDeleteModal] = useState(false);
    const [deleteProvider, setDeleteProvider] = useState(false)
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
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
        // get all service requests
        const getAllServices = async() => {
            const response = await fetchServer("GET", {}, userToken, 'service/fetch-services', server);
            setAllServices(response.data);
        }
        // Delete service request 
        const handleDeleteService = async (id) => {
            if(isTokenExpired(userToken)){
                navigate('/admin/auth/log-in');
                return;
            }
            btnRef.current.disabled = true;
            const response = await fetchServer("DELETE", {}, userToken, `service/delete-service/${id}`, server);
            if(response.success) {
                toast.success(response.message);
                setShowOptionsDropdownId(null);
                setShowDeleteModal(false);
                getAllServices();
                btnRef.current.disabled = false;
            }
    
        }
        // Delete service provider
        const handleDeleteProvider = async (id) => {
            if(isTokenExpired(userToken)){
                navigate('/admin/auth/log-in');
                return;
            }
            btn2Ref.current.disabled = true;
            const response = await fetchServer("DELETE", {}, userToken, `service-provider/delete-service-provider/${id}`, server);
            console.log(response);
            if(response.message) {
                toast.success(response.message);
                setShowRequestOptionId(null);
                setShowDeleteModal(false);
                setDeleteProvider(true);
                btn2Ref.current.disabled = false;
            }
            btn2Ref.current.disabled = false;
            console.log(id)
        }
        // Get all service providers list
        useEffect(() => {
         const getAllServiceProviders = async () => {
          const response = await fetchServer("GET", {}, userToken, 'service-provider/get-all-service-providers', server);
          console.log(response);
          setAllServiceProviders(response.data);
         }
         getAllServiceProviders();
        }, [deleteProvider]);
    return(
        <>
            {
                allServices && allServiceProviders ?

                (<RequestContainer>
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
                                            {/* <tr>
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
                                            </tr> */}
                                            {
                                                allServices?.map((service, index) => {
                                                    const formattedDate = new Date(service.scheduled_date)
                                                            .toLocaleDateString('en-GB')
                                                            .split("/")
                                                            .map((part, index) => (index === 2 ? part.slice(-2) : part) )
                                                            .join("/")
    
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{service.service_type}</td>
                                                            <td>{service.address}</td>
                                                            <td>{service?.propertyOwner?.first_name}</td>
                                                            <td>{formattedDate}<br/>{service.scheduled_time && (converTo12HourFormat(service.scheduled_time))}</td>
                                                            <td><div className={service.service_status.toLowerCase()} >{service.service_status}</div></td>
                                                            <td>{!service.serviceProvider ? 'Unassigned' : service.serviceProvider?.provider_name}</td>
                                                            <td>
                                                                <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", position: 'relative'}} onClick={() => setShowOptionsDropdownId(showOptionsDropdownId === service.id ? null : service.id)} />
                                                                {
                                                                    showOptionsDropdownId === service.id && (
                                                                        <OptionsContainer>
                                                                            <div className="option-item" onClick={() => {
                                                                                navigate(`/dashboard/admin/services-request-form/${service.id}`);
                                                                            }}> 
                                                                                <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                                <span>View details</span>
                                                                            </div>
                                                                            <div className="option-item" onClick={() => navigate(`/dashboard/admin/assign-service-provider/${service.id}`) }>
                                                                                <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                                {
                                                                                    !service.serviceProvider ? 
                                                                                    (
                                                                                        <span>Assign provider</span>
                                                                                    ) : 
                                                                                    (
                                                                                        <span>Re-assign provider</span>
                                                                                    )
                                                                                }
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
                                                    )
                                                })
                                            }
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
                                                        btnRef={btnRef}
                                                        onClick={() => handleDeleteService(showOptionsDropdownId)}
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
                                            {
                                                allServiceProviders?.map((providerInfo, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{providerInfo.provider_name}</td>
                                                            <td>{providerInfo.phone}, {providerInfo.email}</td>
                                                            <td>{providerInfo.service_type}</td>
                                                            <td>{providerInfo.city}, {providerInfo.state}</td>
                                                            <td style={{textAlign: 'center'}}>{providerInfo.total_jobs_completed}</td>
                                                            <td>
                                                                <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowRequestOptionId(showRequestOptionId === providerInfo.id ? null : providerInfo.id )} />
                                                                {
                                                                    showRequestOptionId === providerInfo.id && (
                                                                        <DropdownOption>
                                                                            <DropdownContent onClick={() => {
                                                                                setShowRequestOptionId(!showRequestOption);
                                                                                navigate(`/dashboard/admin/service-provider-details/${providerInfo.id}`)
                                                                            }}>
                                                                                <Details/>
                                                                                <span>View details</span>
                                                                            </DropdownContent>
                                                                            <DropdownContent onClick={() => {
                                                                                setShowRequestOptionId(null);
                                                                                navigate(`/dashboard/admin/assign-service-request/${providerInfo.id}`);
                                                                            }} >
                                                                                <LuCalendarCheck style={{width: '24px', height: '24px'}}/>
                                                                                <span> Assign service request</span>
                                                                            </DropdownContent>
                                                                            <DropdownContent onClick={() => {
                                                                                setShowRequestOptionId(null);
                                                                                navigate(`/dashboard/admin/edit-provider/${providerInfo.id}`)
                                                                            }} >
                                                                                <Edit/>
                                                                                <span>Edit provider's details</span>
                                                                            </DropdownContent>
                                                                            <DropdownContent className='last' onClick={() => {
                                                                                setShowDeleteModal(!showDeletModal);
                                                                            }}>
                                                                                <Delete/>
                                                                                <span>Delete provider</span>
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
                                                <td>1</td>
                                                <td>Bright Plumbing</td>
                                                <td>08000000000, bplumbing@gmail,com</td>
                                                <td>Plumbing</td>
                                                <td>Ikoyi, Lagos</td>
                                                <td style={{textAlign: 'center'}}>10</td>
                                                <td>
                                                    <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowRequestOptionId(!showRequestOptionId)} />
                                                    {
                                                        showRequestOptionId && (
                                                            <DropdownOption>
                                                                <DropdownContent onClick={() => {
                                                                    setShowRequestOption(null);
                                                                    navigate('/dashboard/admin/service-provider-details')
                                                                }}>
                                                                    <Details/>
                                                                    <span>View details</span>
                                                                </DropdownContent>
                                                                <DropdownContent onClick={() => {
                                                                    setShowRequestOptionId(null);
                                                                    navigate('/dashboard/admin/assign-service-request')
                                                                }} >
                                                                    <LuCalendarCheck style={{width: '24px', height: '24px'}}/>
                                                                    <span> Assign service request</span>
                                                                </DropdownContent>
                                                                <DropdownContent onClick={() => {
                                                                    setShowRequestOptionId(null);
                                                                    navigate('/dashboard/admin/edit-provider')
                                                                }} >
                                                                    <Edit/>
                                                                    <span>Edit provider's details</span>
                                                                </DropdownContent>
                                                                <DropdownContent className='last' onClick={() => {
                                                                    setShowRequestOptionId(null);
                                                                    setShowDeleteModal(!showDeletModal)
                                                                }}>
                                                                    <Delete/>
                                                                    <span>Delete property</span>
                                                                </DropdownContent>
                                                            </DropdownOption>
                                                        )
                                                    }
                                                </td>
                                            </tr> */}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan={7} onClick={() => navigate("/dashboard/admin/add-new-provider")}><div style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}><FiPlus style={{width: '24px', height: '24px'}}/> <span style={{fontWeight: '700'}}>Add New Provider</span></div></td>
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
                                                        btnRef={btn2Ref}
                                                        onClick={() => handleDeleteProvider(showRequestOptionId) }
                                                    >
                                                        Yes, delete
                                                    </Button>
                                                    <Button
                                                        buttonType={{primaryBtn: true}} 
                                                        type={'button'}
                                                        buttonHeight={'28px'}
                                                        buttonPadding={'6px 16px'}
                                                        onClick={() => {
                                                            setShowDeleteModal(!showDeletModal);
                                                            setShowRequestOptionId(null);
                                                        }}
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
                </RequestContainer>) : 
                (
                    <PulseLoader
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        height: "100vh",
                        }}
                        margin={5}
                    />
                )
            }
        </>
    );
};

export default ServiceRequestList;