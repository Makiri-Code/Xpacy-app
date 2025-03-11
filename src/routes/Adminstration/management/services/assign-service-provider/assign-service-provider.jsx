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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AssignServiceProvider = () => {
    const [assignUser, setAssignUser] = useState(false)
    const navigate = useNavigate();
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
                            <tr>
                                <td>1</td>
                                <td>Spark Cleaners</td>
                                <td>08000000000, sparkcleans@gmail,com</td>
                                <td>Cleaning</td>
                                <td>Ikeja, Lagos</td>
                                <td style={{textAlign: 'center'}}>12</td>
                                <td onClick={() => setAssignUser(!assignUser)} style={{cursor: 'pointer'}}><AssignLink>Assign</AssignLink></td>
                            </tr>
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

export default AssignServiceProvider;