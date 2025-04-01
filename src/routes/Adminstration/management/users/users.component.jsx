import { 
    ManagementDashboardContainer,
    ManagementDashboardContent,
    Container,
 } from "../dashboard/management_dashboard.styles";
import { Form } from "react-bootstrap";
import { IconContainer, Icon, ServicesCardFooter,  } from "../services/services-dashboard/services.styles";
import { HeaderContainer, Select, } from "../properties/properties.styles";
import Button from "../../../../components/button/button";
import TopNav from "../navigation/topnav/top-nav";
import { FiUpload } from "react-icons/fi";
import { IoArrowUp, IoClose } from "react-icons/io5";
import { RiDeleteBin6Line, RiUserSettingsLine } from "react-icons/ri";
import ServicesBarChart from "../../../../components/services-barchart/services-barchart"
import { UsersAnalyticsContainer, ChartContainer, SummaryUsers, AddOwnerModalForm, AddOwnerModalContent, OptionsContainer, PropertyModalContainer, } from "./users.styles";
import { NotificationTable } from "../dashboard/management_dashboard.styles";
import profileImage from "../../../../assets/profile-picture.png"
import { FilterContainer, FilterItem, SearchBoxContainer, SearchBox, SearchIcon } from "../notification/notification.styles";
import SortBy from "../../../../components/sort-by/sortBy";
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter";
import { SlOptions } from "react-icons/sl";
import { VscNote } from "react-icons/vsc";
import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "../../../../components/modal/modal";
import { DeleteModalContent } from "../properties/properties.styles";
import { RiProfileLine } from "react-icons/ri";
import { KycModalContent, ButtonContainer } from "../invoice/issue-invoice.styles";
import { HiOutlineUserAdd } from "react-icons/hi";
import FormInput from "../../../../components/form-input/formInput.component";
import { RiAdminLine } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import { MdOutlineError } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
const UsersComponent = ({isMobile, userProfile, allUsers, allAdmin, allOwners, profileImage}) => {
    const {userToken, server} = useContext(UserContext);
    console.log(allOwners);
    console.log(allUsers);
    const defaultFormFields = {
        first_name: '',
        last_name: '',
        email: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {first_name, last_name, email} = formFields;
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
    const [showOptionsDropdownUsersListId, setShowOptionsDropdownUsersListId] = useState(false);    
    const [showOptionsDropdownAdminListId, setShowOptionsDropdownAdminListId] = useState(null);    
    const [showOptionsDropdownOwnerListId, setShowOptionsDropdownOwnerListId] = useState(null);    
    const [showAddOwnerModal, setShowAddOwnerModal] = useState(false);
    const navigate = useNavigate();
    const [showDeletModal, setShowDeleteModal] = useState(false);
    const [showKYCModal, setShowKYCModal] = useState(false);
    const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);
    const [showAddAdminModal, setShowAddAdminModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(true);
    const [disabledBtn, setDisabledBtn] = useState(false)
    const btnRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formFields);
        setShowAddOwnerModal(!showAddOwnerModal);
        setShowAddPropertyModal(!showAddPropertyModal);
    }
    const handleAddAdminSumit = async (e) => {
        e.preventDefault();
        btnRef.current.disabled = true
        const response = await fetchServer('POST', formFields, userToken, 'admin/create-admin', server);
        console.log(response);
        if(response.success){
            setDisabledBtn(false)
            setMessage(response.message);
            setShowSuccessModal(!showSuccessModal);
            setFormFields(defaultFormFields);
        } else {
            setDisabledBtn(false)
            setSuccess(false);
            setShowSuccessModal(!showSuccessModal);
            setMessage(response.message);
            setFormFields(defaultFormFields);
        }
        btnRef.current.disabled = false
    }
    const users_data = [
    { name: "Owerri", value: 2, color: "#203645" },
    { name: "Lagos", value: 8, color: "#203645" },
    { name: "Minna", value: 1, color: "#203645" },
    { name: "Ilorin", value: 2, color: "#203645" },
    { name: "Calabar", value: 3, color: "#203645" },
    { name: "Jos", value: 2, color: "#203645" },
    { name: "Bauchi", value: 1, color: "#203645" },
    { name: "Port", value: 5, color: "#203645" },
    { name: "Enugu", value: 3, color: "#203645" },
    { name: "Abuja", value: 5, color: "#203645" },
    { name: "Benin", value: 4, color: "#203645" },
    { name: "Ibadan", value: 5, color: "#203645" },
    { name: "Kano", value: 3, color: "#203645" },
  ];
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormFields({
        ...formFields,
        [name] : value
    });
  }
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
            <TopNav dashboardRoute={'Users'} isMobile={isMobile} profileImage={profileImage} />
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
                    <SummaryUsers>
                        <div className="card1">
                            <div className="services-card">
                                <IconContainer>
                                    <Icon>
                                        <PiUsersThreeBold style={{width: '20px', height: '20px'}}/>
                                    </Icon>
                                    <p>Total Users</p>
                                </IconContainer>
                                <ServicesCardFooter>
                                    <span>{allUsers?.length + allOwners?.length}</span>
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
                            <span>Owners</span>
                            <p>{allOwners.length}</p>
                        </div>
                        <div className="card3">
                            <span>Tenants</span>
                            <p>0</p>
                        </div>
                        <div className="card4">
                            <span>Active Users</span>
                            <p>0</p>
                        </div>
                        <div className="card5">
                            <span>Inactive Users</span>
                            <p>0</p>
                        </div>
                        <div className="card6">
                            <span>Unverified Users</span>
                            <p>{allUsers.filter((user) => user.kyc_status === 'Pending').length}</p>
                        </div>
                    </SummaryUsers>
                </Container>
                {/* Users Metrics */}
                <Container>
                    <p>User Metrics</p>
                    <UsersAnalyticsContainer>
                            <ChartContainer>
                                <p>Number of users based on location<span>(last month)</span></p>
                                <ServicesBarChart data={users_data}/>
                            </ChartContainer>
                        </UsersAnalyticsContainer>
                </Container>
                {/* Tenants/Buyers List */}
                <Container>
                    <FilterContainer>
                        <p>Tenants/Buyers List</p>
                        <FilterItem>
                            <SearchBoxContainer>
                                <SearchBox type="search" placeholder = "Search property, type or name"  />
                                <SearchIcon/>
                            </SearchBoxContainer>
                            <DashboardFilter dropdownOptions={dropdownOptions}/>
                        </FilterItem>
                    </FilterContainer>
                    <NotificationTable>
                        <thead>
                            <th>Name</th>
                            <th>Property</th>
                            <th>User Type</th>
                            <th>Rent Status</th>
                            <th>Due Date</th>
                            <th>Current Price</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='typeData'>
                                    <div style = {{width: '32px', height: '32px', background: `url(${profileImage}) lightgray 50% / cover no-repeat`, borderRadius: '50%'}}></div>
                                    <div><strong>Joy Osigwe</strong><br/> 08000000000, <br/>joyosigwe@gmail.com</div>
                                </td>
                                <td>2 Bedroom Appartment Jabi, Abuja</td>
                                <td>Tenant</td>
                                <td><div className='paid' >Paid</div></td>
                                <td>15/04/24</td>
                                <td><strong>₦4,500,000/year</strong></td>
                                <td style={{position: 'relative'}}>
                                    <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", }} onClick={() => setShowOptionsDropdown(!showOptionsDropdown)} />
                                    {
                                        showOptionsDropdown && (
                                            <OptionsContainer>
                                                <div className="option-item" onClick={() => {
                                                    navigate('/dashboard/admin/user-details');
                                                }}> 
                                                    <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                    <span>View details</span>
                                                </div>
                                                <div className="option-item" onClick={() => navigate('/dashboard/admin/issue-invoice') }>
                                                    <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                    <span>Issue Invoice</span>
                                                </div>
                                                <div className="option-item" onClick={() => {
                                                    setShowDeleteModal(true);
                                                    setShowOptionsDropdown(!showOptionsDropdown);
                                                }}>
                                                    <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                    <span>Delete User</span>
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
                                <p>Are you sure you want to delete this user?</p>
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
                {/* Registered Users List */}
                <Container>
                    <FilterContainer>
                        <p>Registered Users List</p>
                        <FilterItem>
                            <SearchBoxContainer>
                                <SearchBox type="search" placeholder = "Search property, type or name"  />
                                <SearchIcon/>
                            </SearchBoxContainer>
                            <DashboardFilter dropdownOptions={dropdownOptions}/>
                        </FilterItem>
                    </FilterContainer>
                    <NotificationTable>
                        <thead>
                            <th>Name</th>
                            <th>Contact Details</th>
                            <th>User Status</th>
                            <th>KYC Status</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                allUsers?.map((user, index) => {
                                    return (
                                        <tr>
                                            <td className='typeData'>
                                                <div style = {{width: '32px', height: '32px', background: `url(https://app.xpacy.com/src/upload/display_img/${user?.display_picture}) lightgray 50% / cover no-repeat`, borderRadius: '50%'}}></div>
                                                <div><strong>{user.firstname} {user.lastname}</strong></div>
                                            </td>
                                            <td>{user.phone_number}, {user.email}</td>
                                            <td><div className='active' >Active</div></td>
                                            <td><div className={user.kyc_status.toLowerCase()} >{user.kyc_status}</div></td>
                                            <td style={{position: 'relative'}}>
                                                <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", }} onClick={() => setShowOptionsDropdownUsersListId(showOptionsDropdownUsersListId === user.id ? null : user.id)} />
                                                {
                                                    showOptionsDropdownUsersListId === user.id && (
                                                        <OptionsContainer>
                                                            <div className="option-item" onClick={() => {
                                                                navigate(`/dashboard/admin/user-details/${user.id}`);
                                                            }}> 
                                                                <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>View details</span>
                                                            </div>
                                                            <div className="option-item" onClick={() => navigate(`/dashboard/admin/issue-invoice/${user.id}`) }>
                                                                <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>Issue Invoice</span>
                                                            </div>
                                                            {
                                                                user.kyc_status === 'Verified' && 
                                                                (
                                                                    <div className="option-item" onClick={() => {
                                                                        setShowKYCModal(!showKYCModal);
                                                                        setShowOptionsDropdownUsersListId(null)
                                                                    } }>
                                                                        <RiProfileLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                        <span>View KYC</span>
                                                                    </div>
                                                                )
                                                            }
                                                            <div className="option-item" onClick={() => {
                                                                setShowDeleteModal(true);
                                                                setShowOptionsDropdownUsersListId(null);
                                                            }}>
                                                                <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>Delete User</span>
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
                </Container>
                {
                    showDeletModal && (
                        <ModalComponent>
                            <DeleteModalContent>
                                <p>Are you sure you want to delete this user?</p>
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
                {
                    showKYCModal && (
                        <ModalComponent>
                            <KycModalContent>
                                <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowKYCModal(!showKYCModal)}/>
                                <p>User’s government ID card</p>
                                <div className="kyc-image">
                                    <img src="" alt="" />
                                </div>
                                <ButtonContainer>
                                    <Button
                                        buttonType={{primaryBtn: true}}
                                        
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        buttonType={{primaryBtn: false}} 
                                        background={'#FBC0BC'}
                                        onClick={() => setShowDeleteModal(!showDeletModal)}
                                    >
                                       Decline
                                    </Button>
                                </ButtonContainer>
                            </KycModalContent>
                        </ModalComponent>
                    )
                }

                {/* Admin List */}
                <Container>
                    <FilterContainer>
                        <p>Admin List</p>
                        <FilterItem>
                            <SearchBoxContainer>
                                <SearchBox type="search" placeholder = "Search property, type or name"  />
                                <SearchIcon/>
                            </SearchBoxContainer>
                            <DashboardFilter dropdownOptions={dropdownOptions}/>
                        </FilterItem>
                    </FilterContainer>
                    <NotificationTable>
                        <thead>
                            <th>Name</th>
                            <th>Contact Details</th>
                            <th>User Status</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                allAdmin?.map((admin, index) => {
                                    const firstName = admin.username.split(" ")[0];
                                    const lastName = admin.username.split(" ")[1];
                                    return(
                                        <tr key={index}>
                                            <td className='typeData'>
                                                <div style = {{width: '32px', height: '32px', background: `url(https://app.xpacy.com/src/upload/display_img/${admin.display_picture}) lightgray 50% / cover no-repeat`, borderRadius: '50%'}}></div>
                                                <div><strong>{firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()} {lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()}</strong></div>
                                            </td>
                                            <td>{admin.phone_number}, {admin.email}</td>
                                            <td><div className='active' >Active</div></td>
                                            <td style={{position: 'relative'}}>
                                                <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", }} onClick={() => setShowOptionsDropdownAdminListId(showOptionsDropdownAdminListId === admin.id ? null : admin.id)} />
                                                {
                                                    showOptionsDropdownAdminListId === admin.id && (
                                                        <OptionsContainer>
                                                            <div className="option-item" onClick={() => {
                                                                // navigate(`/dashboard/admin/admin-details/${admin.id}`);
                                                            }}> 
                                                                <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>View details</span>
                                                            </div>
                                                            <div className="option-item" onClick={() => {
                                                                setShowDeleteModal(true);
                                                                setShowOptionsDropdownAdminListId(null);
                                                            }}>
                                                                <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>Delete User</span>
                                                            </div>
                                                        </OptionsContainer>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    )
                                } )
                            }
                        </tbody>
                    </NotificationTable>
                    {
                        userProfile?.role === "Super Admin" && (
                            <Button 
                                buttonType={{primaryBtn: true}}
                                onClick={() => setShowAddAdminModal(!showAddAdminModal)}
                            >
                                <RiAdminLine style={{width: '24px', height: '24px'}} />
                                Add New Admin
                            </Button>
                        )
                    }
                </Container>
                {/* Delete Modal */}
                {
                    showDeletModal && (
                        <ModalComponent>
                            <DeleteModalContent>
                                <p>Are you sure you want to delete this user?</p>
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
                {
                    userProfile?.role === "Super Admin" && 
                    (
                        <>
                            {/* Add admin modal */}
                            {
                                showAddAdminModal && (
                                    <ModalComponent>
                                        <AddOwnerModalContent>
                                            <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowAddAdminModal(!showAddAdminModal)}/>
                                            <AddOwnerModalForm onSubmit={handleAddAdminSumit}>
                                                <h1>Create New Admin Account</h1>
                                                <p>Enter admin details</p>
                                                <FormInput
                                                    label={'First Name'}
                                                    name='first_name'
                                                    value={first_name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <FormInput
                                                    label={'Last Name'}
                                                    name='last_name'
                                                    value={last_name}
                                                    onChange={handleChange}
                                                    required    
                                                />
                                                <FormInput
                                                    label={'Email'}
                                                    name='email'
                                                    value={email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Button
                                                    btnRef={btnRef}
                                                    type={"submit"}
                                                    buttonType={{primaryBtn: true}} 
                                                >
                                                    Send Invitation
                                                </Button>
                                            </AddOwnerModalForm>
                                        </AddOwnerModalContent>
                                    </ModalComponent>
                                )
                            }
                            {/* Successfully sent invitation */}
                            {
                                showSuccessModal && (
                                    <ModalComponent>
                                        <PropertyModalContainer>
                                            <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => {
                                                setDisabledBtn(false);
                                                setShowSuccessModal(!showSuccessModal);
                                            }}/>
                                            <div className="property-modal-content">
                                                {success ? <FaCircleCheck style={{width: '40px', height: '40px', color: '#357B38', alignSelf: 'center'}}/> : <MdOutlineError style={{width: '40px', height: '40px', color: '#F44336', alignSelf: 'center'}}/>}
                                                <p style={{color: `${success ? '#333' : '#F44336'}`, textAlign: 'center'}}>{message}</p>
                                            </div>
                                        </PropertyModalContainer>
                                    </ModalComponent>
                                )
                            }
                        </>
                    )
                }
                {/* Property Owners List */}
                <Container>
                    <FilterContainer>
                        <p>Property Owners List</p>
                        <FilterItem>
                            <SearchBoxContainer>
                                <SearchBox type="search" placeholder = "Search property, type or name"  />
                                <SearchIcon/>
                            </SearchBoxContainer>
                            <DashboardFilter dropdownOptions={dropdownOptions}/>
                        </FilterItem>
                    </FilterContainer>
                    <NotificationTable>
                        <thead>
                            <th>Owner's information</th>
                            <th>Contact Details</th>
                            <th>User Status</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                allOwners?.map((ownerProfile, index) => {
                                    return(
                                        <tr>
                                            <td className='typeData'>
                                                <div style = {{width: '32px', height: '32px', background: `url(${ownerProfile.display_picture}) lightgray 50% / cover no-repeat`, borderRadius: '50%'}}></div>
                                                <div><strong>{ownerProfile.first_name} {ownerProfile.last_name}</strong></div>
                                            </td>
                                            <td>{ownerProfile.phone}, {ownerProfile.email}</td>
                                            <td><div className='active' >Active</div></td>
                                            <td style={{}}>
                                                <SlOptions style={{width: '24px', height: '24px', cursor: "pointer", position: 'relative'}} onClick={() => setShowOptionsDropdownOwnerListId(showOptionsDropdownOwnerListId === ownerProfile.id ? null : ownerProfile.id)} />
                                                {
                                                    showOptionsDropdownOwnerListId === ownerProfile.id && (
                                                        <OptionsContainer>
                                                            <div className="option-item" onClick={() => {
                                                                navigate(`/dashboard/admin/admin-details/${ownerProfile.id}`);
                                                            }}> 
                                                                <VscNote style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>View details</span>
                                                            </div>
                                                            <div className="option-item" onClick={() => navigate('/dashboard/admin/issue-invoice') }>
                                                                <RiUserSettingsLine style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>Issue Invoice</span>
                                                            </div>
                                                            <div className="option-item" onClick={() => {
                                                                setShowDeleteModal(true);
                                                                setShowOptionsDropdownOwnerListId(null);
                                                            }}>
                                                                <RiDeleteBin6Line style={{width: '20px', height: '20px', color: '#203645'}}/>
                                                                <span>Delete User</span>
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
                    <Button 
                        buttonType={{primaryBtn: true}}
                        onClick={() => setShowAddOwnerModal(!showAddOwnerModal)}
                    >
                        <HiOutlineUserAdd style={{width: '24px', height: '24px'}} />
                        Add New Owner
                    </Button>
                </Container>
                {
                    showDeletModal && (
                        <ModalComponent>
                            <DeleteModalContent>
                                <p>Are you sure you want to delete this user?</p>
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
                {
                    showAddOwnerModal && (
                        <ModalComponent>
                            <AddOwnerModalContent>
                                <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowAddOwnerModal(!showAddOwnerModal)}/>
                                <AddOwnerModalForm onSubmit={handleSubmit}>
                                    <h1>Create New Property Owner Account</h1>
                                    <p>Enter property owner’s details</p>
                                    <FormInput
                                        label={'First Name'}
                                        name='first_name'
                                        value={first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <FormInput
                                        label={'Last Name'}
                                        name='last_name'
                                        value={last_name}
                                        onChange={handleChange}
                                        required    
                                    />
                                    <FormInput
                                        label={'Email'}
                                        name='email'
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Button
                                        type={"submit"}
                                        buttonType={{primaryBtn: true}} 
                                    >
                                        Send Invitation
                                    </Button>
                                </AddOwnerModalForm>
                            </AddOwnerModalContent>
                        </ModalComponent>
                    )
                }
                {
                    showAddPropertyModal && (
                        <ModalComponent>
                            <PropertyModalContainer>
                                <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowAddPropertyModal(!showAddPropertyModal)}/>
                                <div className="property-modal-content">
                                    <p style={{color: '#333'}}>Invitation sent successfully!</p>
                                    <span>Would you like to add a new property?</span>
                                    <div className="btn-container">
                                        <Button
                                            buttonType={{primaryBtn: false}}
                                            buttonHeight={'28px'} 
                                            buttonPadding={'6px 16px'}
                                            onClick={() => setShowAddPropertyModal(!showAddPropertyModal)}
                                        >
                                            No, not now
                                        </Button>
                                        <Button
                                            buttonType={{primaryBtn: true}} 
                                            buttonHeight={'28px'}
                                            buttonPadding={'6px 16px'}
                                        onClick={() => navigate("/dashboard/admin/add-new-property")}
                                        >
                                            Yes, let's go!
                                        </Button>
                                    </div>
                                </div>
                            </PropertyModalContainer>
                        </ModalComponent>
                    )
                }
            </ManagementDashboardContent>
        </ManagementDashboardContainer>
    )
};

export default UsersComponent;