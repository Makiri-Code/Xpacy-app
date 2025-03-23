import { useState, useRef, useContext, useEffect } from 'react';
import xpacyLogo from '../../../../../assets/x-pacy-logo.svg';
import { IoArrowBack } from "react-icons/io5";
import { PageContext } from '../../../../../contexts/page.context';
import FormInput from '../../../../../components/form-input/formInput.component';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import FileUploader from '../../../../../components/file-uploader/file-uploader';
import ModalComponent from '../../../../../components/modal/modal';
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '../../../../../components/button/button';
import { 
    NavigationContainer,
    LogoContainer,
    BackNav,
    PropertyDetails,
    PropertyFormContainer,
    Header,
    HeaderText,
    ProgressBar,
    ProgressBarItem,
    Main,
    SearchField,
    SearchIcon,
    FormContainer,
    NameContainer,
    OwnerInfo,
    NextBtn,
    Option,
    SelectContainer,
    Price,
    Currnecy,
    TextArea,
    CloseIcon,
    AmenitiesContainer,
    Item,
    UploadContainer,
    MediaContent,
    Location,
    UploadModalContainer,
    FinishBtn,
    PhotosContainer,
    DeleteBtn,
 } from './property-details.styles';
import { useNavigate, useParams } from 'react-router-dom';
import fetchServer from '../../../../../utils/serverutils/fetchServer';
import { UserContext } from '../../../../../contexts/userContext';
import { PulseLoader } from 'react-spinners';

const PropertyDetailsComponent = () => {
    const {userToken, server} = useContext(UserContext)
    const navigate = useNavigate();
    const {id} = useParams();
    const {nigerianStates} = useContext(PageContext)
    const inputRef = useRef(null);
    const itemRef = useRef(null);
    
    
    // fetch property details
    useEffect(() => {
        const getPropertyDetails = async () => {
            const response = await fetchServer("GET", {}, userToken, `admin/fetch-property/${id}`, server );
            console.log(response);
            setPropertyInfo(response.property);
            setOwnerInfo(response.property.propertyOwner);
        }
        getPropertyDetails()
    }, [])
    // options for property type
    const propertyType = [
        {
            id: 1,
            type: 'Commercial',
        },
        {
            id: 2,
            type: 'Residential',
        },
        {
            id: 3,
            type: 'Terrace',
        },
        {
            id: 4,
            type: 'Flat/Appartment',
        },
        {
            id: 5,
            type: 'Duplex',
        },
        {
            id: 6,
            type: 'Semi-detached',
        },
        {
            id: 7,
            type: 'Fully-detached',
        },
        {
            id: 9,
            type: 'Villa',
        },
    ]
    // Options for availability status
    const availabilityStatus = [
        {
            id: 1,
            status: 'Rented',
        },
        {
            id: 2,
            status: 'Vacant',
        },
        {
            id: 3,
            status: 'For Sale',
        },
        {
            id: 4,
            status: 'Sold',
        },
        {
            id: 5,
            status: 'Under Maintenance',
        },
    ];
    // options for property status
    const propertyStatus = [
        {
            id: 1,
            status: 'For Sale',
        },
        {
            id: 2,
            status: 'For Rent',
        },
        {
            id: 3,
            status: 'For Lease',
        },
    ];
    // Amenities 
    const amenitites = [
        "Washing Machine", 
        "Heat Extractor", 
        "Water Heater", 
        "A/C", 
        "CCTV", 
        "Free Wifi",
        "24 Hour Power",
        "24 Hour Security", 
        "Elevator",
        "Smart Home",
        "Fully-fitted Kitchen",
        "Fully-fitted Bathrooms",
        "Garden Area",
        "Swimming Pool",
        "Fully-equiped Gym",
    ]
    // Default formfields
    const defaultOwnerFormFields = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
    }
    // defaullt search fields
    const defaultSearchField = {
        owner: ''
    }
    // Default property information
    const defaultPropertyInfo = {
        property_owner_id: '',
        property_name: '',
        address: '',
        city: '',
        state: '',
        property_type: '',
        availability_status: '',
        property_price: '',
        property_status: '',
        description: '',
        total_bedrooms: '',
        total_baths: '',
        total_toilets: '',
        parking_area: '',
        property_square_area: '',
        land_area: '',
        property_amenities: [],
        images: [], 
        videos: [],
        virtual_tour_url: '',
        long: '',
        lat: '',
    }

    const [propertyInfo, setPropertyInfo] = useState(null);
    // const {
    //         property_owner_id,
    //         address, 
    //         property_name, 
    //         city, 
    //         state, 
    //         property_price, 
    //         property_status, 
    //         property_type,
    //         description,
    //         availability_status,
    //         property_amenities,
    //         property_square_area,
    //         land_area,
    //         parking_area,
    //         images,
    //         videos,
    //         virtual_tour_url,
    //         long,
    //         lat,
    //         total_baths,
    //         total_bedrooms,
    //         total_toilets,
    //     } = propertyInfo;

    const [ownerInfo , setOwnerInfo] = useState(null);
    const [showOwnerInfo, setShowOwnerInfo] = useState(true);
    const [searchField, setSearchField] = useState(defaultSearchField);
    const {owner} = searchField;
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [selectImages, setSelectImages] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    // Progress bar steps
    const steps = [
        {
            id: 1,
            label: 'Owner Info',
        },
        {
            id: 2,
            label: 'Property Overview',
        },
        {
            id: 3,
            label: 'Property Info',
        },
        {
            id: 4,
            label: 'Media',
        },
        // {
        //     id: 5,
        //     label: 'Tenant Info',
        // },
    ];
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPropertyInfo({
            ...propertyInfo,
            [name]: value,
        })

    }
    // Scroll to top 
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scrolling effect
        });
      };


    const handleSearchChange = (e) => {
        const {name, value} = e.target;
        setSearchField({
            ...searchField,
            [name]: value,
        });
        setShowError(false);
    }
    const handleFileSelect = (acceptedFiles) => {
        console.log("Selected Files:", acceptedFiles)
        setPropertyInfo((prev) => ({
            ...prev,
            images: [...prev.images, ...acceptedFiles ],
        }));
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     const {images, ...otherFields} = propertyInfo;
    //      data.append('propertyInfo',JSON.stringify(propertyInfo));
         
    //      for (let pair of data.entries()) {
    //         console.log(pair[0], pair[1]);
    //     }
    // }   
    const [pageNum, setPageNum] = useState(1);
    return(
        <>
            {
                propertyInfo && ownerInfo ? 
                (
                    <PropertyDetails>
                <NavigationContainer>
                    <LogoContainer>
                        <BackNav
                            onClick={() => {
                                if(pageNum === 1){
                                    navigate(-1);
                                }
                                if(pageNum > 1){
                                    setPageNum((prevNum)=>{
                                        return prevNum - 1
                                    });
                                } else {
                                    setPageNum(1);

                                }
                            }}
                        >
                            <IoArrowBack style={{width: '24px', height: '24px'}}/>
                            <span>Back</span>
                        </BackNav>
                        <img src={xpacyLogo} alt="x-pacy logo" />
                    </LogoContainer>
                </NavigationContainer>
                <PropertyFormContainer>
                    <Header>
                        <HeaderText>
                            <h1>Property Details</h1>
                        </HeaderText>
                        <ProgressBar>
                            {
                                steps.map((item, index) => {
                                    const {id, label} = item;
                                    return(
                                        <ProgressBarItem key={id}>
                                            <span className={ pageNum === id ? 'active' : pageNum < id ? 'inactive' : 'completed' } >
                                                {pageNum > id ? <IoMdCheckmark style={{width: '24px', height: '24px', color: '#fff'}} /> : id}
                                            </span>
                                            <span>{label}</span>
                                            {index < steps.length - 1 && (<div className={pageNum > id ? 'active' : 'completed' }/>)}
                                        </ProgressBarItem>
                                    )
                                })
                            }
                        </ProgressBar>
                    </Header>
                    {
                        pageNum === 1 && (
                            <Main>
                                <h3>Owner Information</h3>
                                <FormContainer>
                                    <OwnerInfo>
                                        <NameContainer>
                                            <FormInput
                                                label={"First Name"}
                                                id="first-name"
                                                name="firstname"
                                                type="text"
                                                value={ownerInfo?.first_name}
                                            />
                                            <FormInput
                                                label={"Last Name"}
                                                id="last-name"
                                                name="lastname"
                                                type="text"
                                                value={ownerInfo?.last_name}
                                            />
                                        </NameContainer>
                                        <FormInput
                                            label={"Email"}
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={ownerInfo?.email}
                                        />
                                        <FormInput
                                            label={"Phone Number"}
                                            id="phone-num"
                                            name="phone"
                                            type="text"
                                            value={ownerInfo?.phonenumber}
                                        />
                                        <FormInput
                                            label={"Address"}
                                            id="address"
                                            name="address"
                                            type="text"
                                        />  
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(2);
                                                scrollToTop();
                                            }
                                            }
                                        >
                                            <span>Next</span>
                                            <MdOutlineArrowForwardIos style={{width: '16px', height: '16px'}}/>
                                        </NextBtn>
                                    </OwnerInfo>
                                </FormContainer>
                            </Main>
                        )
                    }
                    {
                        pageNum === 2 && (
                            <Main>
                                <h3>Property Overview</h3>
                                <FormContainer>
                                    <FormInput
                                        label={"Property Name"}
                                        id="property-name"
                                        placeholder="Enter property name"
                                        name="property_name"
                                        type="text"
                                        value={propertyInfo?.property_name}
                                    />
                                    <FormInput
                                        label={"Property Address"}
                                        id="property-address"
                                        placeholder="Enter property address"
                                        name="property_address"
                                        type="text"
                                        value={propertyInfo?.address}
                                    />
                                    <NameContainer>
                                        <FormInput
                                            label={"City/Town"}
                                            id="city"
                                            name="city"
                                            placeholder="Enter property city/town"
                                            type="text"
                                            value={propertyInfo?.city}
                                        />
                                        <SelectContainer>
                                            <FormInput
                                                label={"State"}
                                                id="city"
                                                name="state"
                                                placeholder="Enter property city/town"
                                                type="text"
                                                value={propertyInfo?.state}
                                            />
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Property Type"}
                                                name="property_type"
                                                placeholder="Enter property city/town"
                                                type="text"
                                                value={propertyInfo?.property_type}
                                            />
                                        </SelectContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Availabilty Status"}
                                                name="availability_status"
                                                placeholder="Enter property city/town"
                                                type="text"
                                                value={propertyInfo?.availability_status}
                                            />
                                            
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer> 
                                        <SelectContainer>
                                            
                                            <label>Property Price</label>
                                            <Price>
                                                <FormInput type="text" name="property_price" id=""  value={propertyInfo?.property_price.toLocaleString()} onChange={handleChange}/>
                                                <Currnecy></Currnecy>
                                            </Price>
                                        </SelectContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Property Status"}
                                                name="property_status"
                                                placeholder="Enter property city/town"
                                                type="text"
                                                value={propertyInfo?.property_status}
                                            />
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Description</label>
                                            <TextArea 
                                                placeholder="Type property description here"
                                                value={propertyInfo?.description}
                                                name="description"
                                                onChange={handleChange}
                                            >
                                            </TextArea>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(1);
                                                scrollToTop();
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(3);
                                                scrollToTop();
                                            }
                                            }
                                        >
                                            <span>Next</span>
                                            <MdOutlineArrowForwardIos style={{width: '16px', height: '16px'}}/>
                                        </NextBtn>
                                    </NameContainer>
                                </FormContainer>
                            </Main>
                        )
                    }
                    {
                        pageNum === 3 && (
                            <Main>
                                <h3>Property Information</h3>
                                <FormContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Bedrooms"}
                                                placeholder="Enter property name"
                                                name="total_bedrooms"
                                                type="text"
                                                value={propertyInfo?.total_bedrooms}
                                            />
                                            
                                        </SelectContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Bathrooms"}
                                                placeholder="Enter property name"
                                                name="total_baths"
                                                type="text"
                                                value={propertyInfo?.total_bathrooms}
                                            />
                                            
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Toilets"}
                                                placeholder="Enter property name"
                                                name="total_toilets"
                                                type="text"
                                                value={propertyInfo?.total_toilets}
                                            />
                                            
                                        </SelectContainer>
                                        <SelectContainer>
                                            <FormInput
                                                label={"Parking area"}
                                                placeholder="Enter property name"
                                                name="parking_area"
                                                type="text"
                                                value={propertyInfo?.parking_area}
                                            />
                                        
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <FormInput
                                            label={"Property Size (square area)"}
                                            id="property-size"
                                            placeholder="Sqm2"
                                            name="property_square_area"
                                            type="text"
                                            value={propertyInfo?.property_square_area}
                                        />
                                        <FormInput
                                            label={"Land area"}
                                            id="lad-area"
                                            placeholder="Sqm2"
                                            name="land_area"
                                            type="text"
                                            value={propertyInfo?.land_area}
                                        />
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Select Amenties</label>
                                            <AmenitiesContainer>
                                                {
                                                    propertyInfo?.property_amenities.map((item, index) => {
                                                        const isSelected = selectedAmenities.includes(item);
                                                        return(
                                                            <Item 
                                                                className = 'selected'
                                                                key={index}  
                                                                // onClick={() => {
                                                                //     setSelectedAmenities((prev) => {
                                                                //         if(prev.includes(item)){
                                                                //             return prev.filter((selected) => selected !== item)
                                                                //         } else {
                                                                //             return [...prev, item];
                                                                //         }
                                                                //     });
                                                                //     property_amenities.push(selectedAmenities)
                                                                // }}

                                                            >
                                                                {item}
                                                            </Item>
                                                        )
                                                    })
                                                }
                                            </AmenitiesContainer>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(() => pageNum - 1);
                                                scrollToTop();
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(() => pageNum + 1);
                                                scrollToTop();
                                            }
                                            }
                                        >
                                            <span>Next</span>
                                            <MdOutlineArrowForwardIos style={{width: '16px', height: '16px'}}/>
                                        </NextBtn>
                                    </NameContainer>
                                </FormContainer>
                            </Main>
                        )
                    }
                    {
                        pageNum === 4 && (
                            <Main>
                                <h3>Media</h3>
                                <FormContainer>
                                    <PhotosContainer>
                                        {
                                            propertyInfo?.images.map((imageSrc, index) => {
                                                return (
                                                    <div className='img-container' key={index}>
                                                        <img src={`https://app.xpacy.com/src/upload/properties/${imageSrc}`} alt="house photo" /> 
                                                        {/* <DeleteBtn onClick={() => handleDeleteImg(imageSrc) }>
                                                                <RiDeleteBin6Line style={{width: '15px', height: '15px'}}/>
                                                        </DeleteBtn>                                                   */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </PhotosContainer>
                                    {/* <MediaContent>
                                        <UploadContainer onClick = {() => setShowUploadModal(true)}>
                                            <FiUpload style={{width: '24px', height: '24px', color: '#fff'}}/>
                                            <p>Upload more files</p>
                                        </UploadContainer>
                                        <span style={{alignSelf: 'flex-end'}}>*upload files from your computer</span>
                                    </MediaContent> */}
                                    <FormInput
                                        label={"Virtual Tour"}
                                        id="virtual_tour"
                                        name="virtual_tour_url"
                                        type="url"
                                        placeholder= "Enter virtual tour link"
                                        value={propertyInfo?.virtual_tour_url}
                                    />
                                    <Location>
                                        Location Coordinates 
                                    </Location>
                                    <NameContainer>
                                        <FormInput
                                            label={"Latitude"}
                                            id="latitude"
                                            name="lat"
                                            type="text"
                                            placeholder= "Enter location latitude"
                                            value={propertyInfo?.lat}
                                        />
                                        <FormInput
                                            label={"Longitude"}
                                            id="longitude"
                                            name="long"
                                            type="text"
                                            placeholder= "Enter location longitude"
                                            value={propertyInfo?.long}
                                        />
                                    </NameContainer>
                                    {/* <NameContainer>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(() => pageNum - 1)
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <FinishBtn >
                                            Finish
                                        </FinishBtn>
                                    </NameContainer> */}
                                </FormContainer>
                            </Main>
                        )
                    }
                </PropertyFormContainer>
                    </PropertyDetails>  
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
        </>
                    
    );
}

export default PropertyDetailsComponent;