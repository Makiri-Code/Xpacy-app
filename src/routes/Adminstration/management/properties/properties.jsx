import { useContext, useState, useRef, useEffect} from "react";
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
import Pagination from "../../../../components/pagination/pagination";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import { toast } from "sonner";
import { ClipLoader, PulseLoader } from "react-spinners";
import isTokenExpired from "../../../../utils/token/handleUserToken";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import CustomToast from "../../../../components/custom-toast/CustomToast";

const Properties = ({isMobile, allProperties, setAllProperties, profileImage, propertiesPagination}) => {
    const {userToken, server} = useContext(UserContext);
    const navigate = useNavigate();
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const [showPropertyOptionId, setShowPropertyOptionId] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [showDeletModal, setShowDeleteModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
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
    // Fetch properties 
    const getAllProperties = async () => {
        const response = await fetchServer(
        "GET",
        {},
        userToken,
        "admin/fetch-all-propreties",
        server
        );
        setAllProperties(response);
    };
    //   Remove property
    const handleDeleteProperty = async (id) => {
        if(isTokenExpired(userToken)){
            toast.custom((t) => {
                return (
                    <CustomToast title={'Error!'} message={'Session expired please log in to continue'} type={'error'}/>
                )
            });
            navigate('/admin/auth/log-in');
            return;
        }
        setShowLoader(true);
        setDisabled(true);
        const response = await fetchServer("Delete", {}, userToken, `property/delete-property/${id}`, server)
        if(response.success){
            setShowLoader(false);
            toast.success(response.message);
            setShowDeleteModal(false);
            getAllProperties();
        } else if(!response.success && response.error === 'Internal Server Error' ){
            setShowLoader(false);
            toast.error('Internal Server Error');
        }
        setShowLoader(false);
        setDisabled(false);
        setShowPropertyOptionId(null);
    };

    // pagination
const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  const fetchNextPage = async () => {
    try {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        `admin/fetch-all-propreties?page=${currentPage}`,
        server
      );
      setAllProperties(response.properties);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if(isTokenExpired(userToken)){
        toast.custom((t) => {
            return (
                <CustomToast title={'Error!'} message={'Session expired please log in to continue'} type={'error'}/>
            )
        });
        navigate('/admin/auth/log-in');
        return;
    } else {
        fetchNextPage();
    }

}, [currentPage]);

    return (
        <>
            <ManagementDashboardContainer>
                <TopNav dashboardRoute={'Properties'} isMobile={isMobile} profileImage={profileImage}/>
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
                                            <span>{propertiesPagination.total}</span>
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
                                        <SearchBox type="search" placeholder = "Search properties"  />
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
                                {
                                    allProperties ? 
                                    (
                                        <tbody>
                                            {
                                                allProperties?.map((property) => {
                                                    return(
                                                        <tr key={property.id}>
                                                            <td className='typeData'>
                                                                <div style = {{width: '64px', height: '48px', background: `url(https://app.xpacy.com/src/upload/properties/${property?.images[0]}) lightgray 50% / cover no-repeat`}}></div>
                                                                {property.property_name} 
                                                            </td>
                                                            <td>{property.state}</td>
                                                            <td><strong>{property.propertyOwner.first_name} {property.propertyOwner.last_name}</strong><br/> {property.propertyOwner.phone},<br/> {property.propertyOwner.email}</td>
                                                            <td><div className={property.availability_status.toLowerCase()} >{property.availability_status}</div></td>
                                                            <td><strong>₦{property.property_price.toLocaleString()}/year</strong></td>
                                                            <td>
                                                                <SlOptions style={{width: '24px', height: '24px', cursor: 'pointer', position: 'relative'}} onClick={() => setShowPropertyOptionId( showPropertyOptionId === property.id ? null : property.id)} />
                                                                {
                                                                    showPropertyOptionId === property.id && (
                                                                        <DropdownOption>
                                                                            <DropdownContent onClick={() => {
                                                                                setShowPropertyOptionId(null);
                                                                                navigate(`/dashboard/admin/properties-details/${property.id}`)
                                                                            }}>
                                                                                <Details/>
                                                                                <span>View property details</span>
                                                                            </DropdownContent>
                                                                            <DropdownContent onClick={() => {
                                                                                setShowPropertyOptionId(null);
                                                                                navigate(`/dashboard/admin/edit/${property.id}`);
                                                                            }} >
                                                                                <Edit/>
                                                                                <span>Edit property</span>
                                                                            </DropdownContent>
                                                                            <DropdownContent className='last' onClick={() => {
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
                                                    )
                                                })
                                            }
                                            <tr>
                                                {/* Pagination */}
                                                <td colSpan={6}>
                                                    <Pagination
                                                        totalPages={propertiesPagination?.totalPages}
                                                        currentPage={currentPage}
                                                        onPageChange={setCurrentPage}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    ) :
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
                                            disabled={disabled}
                                            onClick={() => handleDeleteProperty(showPropertyOptionId)}
                                        >
                                            { showLoader ? (<ClipLoader size={18} color='#fff'/>): "Yes, delete"}
                                        </Button>
                                        <Button
                                            buttonType={{primaryBtn: true}} 
                                            buttonHeight={'28px'}
                                            buttonPadding={'6px 16px'}
                                            disabled={disabled}
                                            onClick={() => {
                                                setShowDeleteModal(!showDeletModal)
                                                setShowPropertyOptionId(null);
                                            }}
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
        </>
    );
};

export default Properties; 