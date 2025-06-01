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

 } from "./assign-service.styles";
import { NotificationTable } from "../../dashboard/management_dashboard.styles";
import { IoSearchOutline } from "react-icons/io5";
import { DeleteModalContent } from "../../properties/properties.styles";
import Button from "../../../../../components/button/button";
import ModalComponent from "../../../../../components/modal/modal";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchServer from "../../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../../contexts/userContext";
const AssignServiceProvider = ({allServiceProviders}) => {
    const {userToken, server} = useContext(UserContext)
    const {id} = useParams()
    const [assignUser, setAssignUser] = useState(false);
    const [serviceMessage, setServiceMessae] = useState('')
    const navigate = useNavigate();
    const handleAssign = async (providerId) => {
        const response = await fetchServer("PUT", {provider_id: providerId}, userToken, `service/assign-provider/${id}`, server);
        setServiceMessae(response.message)
        setAssignUser(!assignUser);
    }
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
                    <h1>Assign Service Provider</h1>
                </AssignContainer>
                <AssignContent>
                    <SearchBox>
                        <IoSearchOutline className="search-icon"/>
                        <input type="search" name="search-box" placeholder="Search provider, service type, email or location"/>
                    </SearchBox>
                    <NotificationTable>
                        <thead>
                            <th>N/O</th>
                            <th>Provider's Name</th>
                            <th>Contact Info</th>
                            <th>Service Type</th>
                            <th>Location</th>
                            <th>Completed Services</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                allServiceProviders?.map((provider, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{provider.provider_name}</td>
                                            <td>{provider.phone}, <br/>{provider.email}</td>
                                            <td>{provider.service_type}</td>
                                            <td>{provider.city}, {provider.state}</td>
                                            <td style={{textAlign: 'center'}}>{provider.total_jobs_completed}</td>
                                            <td style={{cursor: 'pointer'}}><AssignLink  onClick={() => handleAssign(provider.id)}>Assign</AssignLink></td>
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
                                    <p style={{color: '#333333'}}>{serviceMessage}</p>
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

export default AssignServiceProvider;