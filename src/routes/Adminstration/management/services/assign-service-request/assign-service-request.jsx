import { BookServicesContainer } from "../../../../services/book-services";
import { 
    NavigationContainer,
    LogoContainer,
    BackNav,
 } from "../../properties/add-new-property/add-new-property.styles";
import { IoArrowBack, IoClose } from "react-icons/io5";
import xpacyLogo from "../../../../../assets/x-pacy-logo.svg";
import { 
    AssignContainer,
    AssignContent,
    AssignLink,
    SearchBox,

 } from "./assign-request.styles";
import { NotificationTable } from "../../dashboard/management_dashboard.styles";
import { IoSearchOutline } from "react-icons/io5";
import { DeleteModalContent } from "../../properties/properties.styles";
import Button from "../../../../../components/button/button";
import ModalComponent from "../../../../../components/modal/modal";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../../../contexts/userContext";
import fetchServer from "../../../../../utils/serverutils/fetchServer";
const AssignServiceRequest= ({allServices}) => {
    const [assignUser, setAssignUser] = useState(false);
    const {id} = useParams();
    const {userToken, server} = useContext(UserContext)
    const navigate = useNavigate();

    const handleAssign = async (serviceId) => {
        const response = await fetchServer("PUT", {provider_id: id}, userToken, `service/assign-provider/${serviceId}`, server);
        console.log(response);
    }
    console.log(allServices)
    return(
        <BookServicesContainer>
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
                <AssignContainer>
                    <h1>Assign Service Request</h1>
                </AssignContainer>
                <AssignContent>
                    <SearchBox>
                        <IoSearchOutline className="search-icon"/>
                        <input type="search" name="search-box" placeholder="Search provider, service type, email or location"/>
                    </SearchBox>
                    <NotificationTable>
                        <thead>
                            <th>Service Type</th>
                            <th>Property Address</th>
                            <th>Tenant/Owner</th>
                            <th>Date/Time</th>
                            <th>Status</th>
                            <th>Assigned Provider</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                allServices?.map((service, index) => {
                                        // Format dateStr
                                        const formattedDate = new Date(service?.scheduled_date).toLocaleDateString('en-GB').split("/").map((part, index) => (index === 2 ? part.slice(-2): part)).join("/")
                                        const converTo12HourFormat = (timeString) => {
                                            let [hours, minutes] = timeString?.split(":").map(Number);
                                            let period = hours >= 12 ? 'pm' : 'am';
                                            hours = hours % 12 || 12;   
                                            return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
                                        }
                                    return(
                                        <tr>
                                            <td>{service.service_type}</td>
                                            <td>{service.address} </td>
                                            <td>{service.propertyOwner.first_name} {service.propertyOwner.last_name}</td>
                                            <td>{formattedDate} <br/> {converTo12HourFormat(service.scheduled_time)}</td>
                                            <td><div className={service.service_status.toLowerCase()}>{service.service_status}</div></td>
                                            <td>{service.serviceProvider.provider_name}</td>
                                            <td onClick={() => handleAssign(service.id)} style={{cursor: 'pointer'}}>
                                                {
                                                    <>
                                                    {
                                                        !service.serviceProvider ? 
                                                        (
                                                            <AssignLink style={{fontWeight: '700'}}>Assign</AssignLink>
                                                        ) : 
                                                        (
                                                            <AssignLink style={{fontWeight: '700'}}>Re-assign</AssignLink>
                                                        )
                                                    }
                                                </>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </NotificationTable>
                    {
                        assignUser && 
                        (
                            <ModalComponent>
                                <DeleteModalContent>
                                    <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setAssignUser(!assignUser)}/>
                                    <p style={{color: '#333333'}}>Your have successfully assigned a provider to the service request!</p>
                                    <div className="btn-container">
                                    <Button
                                        buttonType={{primaryBtn: false}}
                                        buttonHeight={'28px'} 
                                        background={'#203645'}
                                        buttonPadding={'6px 16px'}
                                        textColor={'#FFFFFF'}
                                        onClick={() => navigate('/dashboard/admin/services')}
                                    >
                                        Back To Dashboard
                                    </Button>
                                    </div>
                                </DeleteModalContent>
                            </ModalComponent>
                        )
                    }
                </AssignContent>
        </BookServicesContainer>
    )
};

export default AssignServiceRequest;