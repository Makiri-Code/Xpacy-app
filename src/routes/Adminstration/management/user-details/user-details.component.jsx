import { useNavigate, Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { 
    BookServicesContainer,
    BookServicesContent,
 } from "../../../services/book-services";

import { 
    NavigationContainer, 
    LogoContainer,
    BackNav,
    NameContainer,

 } from "../properties/add-new-property/add-new-property.styles";
import { IoArrowBack } from "react-icons/io5";
import { Container } from "../dashboard/management_dashboard.styles";
import xpacyLogo from "../../../../assets/x-pacy-logo.svg";
import { SlOptionsVertical } from "react-icons/sl";
import { 
    ProfilePhoto,
    SubHeading,
    HeaderContainer,
    Table,
    Content,
 } from "./user-details.styles";
import {ReactComponent as MoneyBag} from "../../../../assets/money-bag.svg";
import profileImage from "../../../../assets/profile-picture.png";
import FormInput from "../../../../components/form-input/formInput.component";
import { FilterContainer, FilterItem, SearchBoxContainer, SearchBox, SearchIcon  } from "../notification/notification.styles";
import { SlOptions } from "react-icons/sl";
import SortBy from "../../../../components/sort-by/sortBy";
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter";
import { OptionsContainer } from "../services/services-dashboard/services.styles";
import { VscNote } from "react-icons/vsc";
import { RiUserSettingsLine, RiDeleteBin6Line } from "react-icons/ri";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import { PulseLoader } from "react-spinners";

 const UserDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {userToken, server} = useContext(UserContext)
    const defaultFormFields = {
        firstname: 'Juliet',
        lastname: 'Okon',
        email: 'julietokon@gmail.com',
        phone_num: '+23481645670014',
        address: '2, Awolowo Way',
        state: 'Ikeja, Lagos',
    }


    const [userProfile, setUserProfile] = useState(null);
    // const {firstname, lastname, email, phone_num, address, state} = formFields;
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);  
    const [showOptionsDropdownService, setShowOptionsDropdownService] = useState(false);  
    useEffect(() => {
       const getUserProfile = async () => {
        const response = await fetchServer('GET', {}, userToken, `admin/users/fetch-user/${id}`, server);
        console.log(response);
        setUserProfile(response.user);
       }
       getUserProfile();
    }, [])
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
    
    return(
        <>
        {   
            userProfile ?

            (<BookServicesContainer>
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
                    <Content>
                        <HeaderContainer>
                            <div className="header">
                                <h2>User Details</h2>
                                <SlOptionsVertical style={{width: '24px', height: '24px'}}/>
                            </div>
                            <div className="sub-heading">
                                <p>User Since: 25/01/25</p>
                                <p>User Type: Tenant</p>
                            </div>
                            <SubHeading>Personal Information</SubHeading>
                        </HeaderContainer>
                        <Container>
                            <ProfilePhoto src={userProfile.display_picture ? userProfile.display_picture : profileImage} alt="Profile photo"></ProfilePhoto>
                            <NameContainer>
                                <FormInput
                                    label={'First Name'}
                                    id={'first-name'}
                                    placeholder={'Enter your first name'}
                                    type={'text'}
                                    value={userProfile.firstname}
                                />
                                <FormInput
                                    label={'Last Name'}
                                    id={'last-name'}
                                    type={'text'}
                                    value={userProfile.lastname}
                                />
                            </NameContainer>
                            <NameContainer>
                                <FormInput
                                    label={'Email'}
                                    id={'email'}
                                    type={'email'}
                                    value={userProfile.email}
                                />
                                <FormInput
                                    label={'Phone Number'}
                                    id={'phone_number'}
                                    type={'text'}
                                    value={userProfile.phone_number}
                                />
                            </NameContainer>
                            <NameContainer>
                                <FormInput
                                    label={'Residential Address'}
                                    id={'address'}
                                    type={'text'}
                                    value={userProfile.address}
                                />
                                <FormInput
                                    label={'City, State'}
                                    id={'state'}
                                    type={'text'}
                                    value={userProfile.state}
                                />
                            </NameContainer>
                        </Container>
                        <SubHeading>User Activity Log</SubHeading>
                        {/* User Property list */}
                        <Container>
                            <FilterContainer>
                                <p>Properties</p>
                                <FilterItem>
                                    <SearchBoxContainer>
                                        <SearchBox type="search" placeholder = "Search property, type or name"  />
                                        <SearchIcon/>
                                    </SearchBoxContainer>
                                    <SortBy selectOptions={selectOptions}/>
                                    <DashboardFilter dropdownOptions={dropdownOptions}/>
                                </FilterItem>
                            </FilterContainer>
                            <Table>
                                <thead>
                                    <th>Property</th>
                                    <th>Rent Status</th>
                                    <th>Availability Status</th>
                                    <th>Current Rent Starts</th>
                                    <th>Current Rent Ends</th>
                                    <th>Current Price</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2 Bedroom Appartment Jabi, Abuja</td>
                                        <td><div className='paid' >Paid</div></td>
                                        <td><div className='rented' >Rented</div></td>
                                        <td>15/04/24</td>
                                        <td>15/04/25</td>
                                        <td><strong>₦4,500,000/year</strong></td>
                                        <td style={{position: 'relative'}}>
                                            <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", }} onClick={() => setShowOptionsDropdown(!showOptionsDropdown)} />
                                            {
                                                showOptionsDropdown && (
                                                    <OptionsContainer>
                                                        <div className="option-item" onClick={() => {
                                                            navigate('/dashboard/admin/properties-details');
                                                        }}> 
                                                            <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                            <span>View property details</span>
                                                        </div>
                                                        <div className="option-item" onClick={() => navigate('/dashboard/admin/edit') }>
                                                            <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                            <span>Edit property</span>
                                                        </div>
                                                        <div className="option-item" onClick={() => {
                                                            setShowDeleteModal(true);
                                                            setShowOptionsDropdown(!showOptionsDropdown);
                                                        }}>
                                                            <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                            <span>Delete property</span>
                                                        </div>
                                                    </OptionsContainer>
                                                )
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                        {/* User Services list */}
                        <Container>
                            <FilterContainer>
                                <p>Service Requests</p>
                                <FilterItem>
                                    <SearchBoxContainer>
                                        <SearchBox type="search" placeholder = "Search property, type or name"  />
                                        <SearchIcon/>
                                    </SearchBoxContainer>
                                    <SortBy selectOptions={selectOptions}/>
                                    <DashboardFilter dropdownOptions={dropdownOptions}/>
                                </FilterItem>
                            </FilterContainer>
                            <Table>
                                <thead>
                                    <th>Service Type</th>
                                    <th>Property</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Assigned Provider</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Plumbing</td>
                                        <td>2 Bedroom Appartment Jabi, Abuja</td>
                                        <td>15/04/24 <br/> 12:00pm</td>
                                        <td><div className='inprogress' >Inprogress</div></td>
                                        <td>Bright Plumbing</td>
                                        <td style={{position: 'relative'}}>
                                            <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", }} onClick={() => setShowOptionsDropdownService(!showOptionsDropdownService)} />
                                            {
                                                showOptionsDropdownService && (
                                                    <OptionsContainer>
                                                        <div className="option-item" onClick={() => {
                                                            navigate('/dashboard/admin/services-request-form');
                                                        }}> 
                                                            <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                            <span>View details</span>
                                                        </div>
                                                        <div className="option-item" onClick={() => navigate('/dashboard/admin/assign-service-provider') }>
                                                            <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                            <span>Reassign provider</span>
                                                        </div>
                                                        <div className="option-item" onClick={() => {
                                                            setShowDeleteModal(true);
                                                            setShowOptionsDropdownService(!showOptionsDropdownService);
                                                        }}>
                                                            <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                            <span>Delete service request</span>
                                                        </div>
                                                    </OptionsContainer>
                                                )
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                        {/* User Invoice List */}
                        <Container>
                            <FilterContainer>
                                <p>Invoice list</p>
                                <FilterItem>
                                    <SearchBoxContainer>
                                        <SearchBox type="search" placeholder = "Search property, type or name"  />
                                        <SearchIcon/>
                                    </SearchBoxContainer>
                                    <SortBy selectOptions={selectOptions}/>
                                    <DashboardFilter dropdownOptions={dropdownOptions}/>
                                </FilterItem>
                            </FilterContainer>
                            <Table>
                                <thead>
                                    <th>Invoice No</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Issued Date</th>
                                    <th>Due Date</th>
                                    <th>Payment Amount</th>
                                    <th>Payment Status</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>45678</td>
                                        <td className='typeData'>
                                            <div className='payment'><MoneyBag style={{width: '20px', height: '20px'}}/></div>
                                            Rent
                                        </td>
                                        <td>Rent for 2 Bedroom Appartment Jabi, Abuja</td>
                                        <td>15/04/24</td>
                                        <td>15/04/25</td>
                                        <td><div className='paid' >paid</div></td>
                                        <td>Bright Plumbing</td>
                                        <td><Link>View</Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </Content>
            </BookServicesContainer>) :
            (<PulseLoader
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            height: "100vh",
            }}
            margin={5}
        />)
        }
        </>
    );
};

export default UserDetails;


