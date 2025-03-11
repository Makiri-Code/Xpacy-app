import { useState, useRef, useContext } from 'react';
import xpacyLogo from '../../../../../assets/x-pacy-logo.svg';
import { IoArrowBack } from "react-icons/io5";
import { PageContext } from '../../../../../contexts/page.context';
import FormInput from '../../../../../components/form-input/formInput.component';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import FileUploader from '../../../../../components/file-uploader/file-uploader';
import ModalComponent from '../../../../../components/modal/modal';
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
 } from './add-new-property.styles';
import { useNavigate, Link } from 'react-router-dom';
import fetchServer from '../../../../../utils/serverutils/fetchServer';
import { UserContext } from '../../../../../contexts/userContext';
import { TwoFactorContainer } from '../../../../users/profile-settings/profile-settings.styles';
import { toast } from 'sonner';
import isTokenExpired from '../../../../../utils/token/handleUserToken';
import styled from 'styled-components';
import Button from '../../../../../components/button/button';
import { PulseLoader } from 'react-spinners';
const AddNewProperty = ({allOwners}) => {
    const {userToken, server} = useContext(UserContext);
    const {nigerianStates} = useContext(PageContext)
    const inputRef = useRef(null);
    const finishRef = useRef(null);
    const navigate = useNavigate();
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
            status: 'Available',
        },
        {
            id: 2,
            status: 'Unavailable',
        },
        {
            id: 3,
            status: 'Sold',
        },
    ];
    // options for property status
    const propertyStatus = [
        {
            id: 1,
            status: 'sale',
        },
        {
            id: 2,
            status: 'rent',
        },
        {
            id: 3,
            status: 'lease',
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
    const defaultOwnerFormFields = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        address: '',
    }
    const defaultSearchField = {
        owner: ''
    }
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
        featured: '',
    }
    const [propertyInfo, setPropertyInfo] = useState(defaultPropertyInfo);
    const {
            address, 
            property_name, 
            city, 
            state, 
            property_price, 
            property_status, 
            property_type,
            description,
            availability_status,
            property_amenities,
            property_square_area,
            land_area,
            parking_area,
            images,
            videos,
            virtual_tour_url,
            long,
            lat,
            total_baths,
            total_bedrooms,
            total_toilets,
            featured,
        } = propertyInfo;
    const defaultFilesData = {
        name: '',
        size: '',
    }
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [ownerInfo , setOwnerInfo] = useState({});
    const [searchField, setSearchField] = useState(defaultSearchField);
    const {owner} = searchField;
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [selectImages, setSelectImages] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [filteredPropertyOwner, setFilteredPropertyOwner] = useState([])
    const [filesData, setFilesData] = useState(defaultFilesData)
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
    ];
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPropertyInfo({
            ...propertyInfo,
            [name]: value,
        })

    }

    
    const handleSearchChange = (e) => {
        const {name, value} = e.target;
        setSearchField({
            ...searchField,
            [name]: value,
        });
        setShowError(false);
        setShowSearchDropdown(true);
        const owner = allOwners.filter((item) => item.first_name.includes(value))
        setFilteredPropertyOwner(owner);
        if(!value.length > 0){
            setShowSearchDropdown(false);
        }
    }


    const handleFileSelect = (acceptedFiles) => {
        setPropertyInfo((prev) => ({
            ...prev,
            images: [...prev.images, ...acceptedFiles ],
        }));
    }
    const ErrorList = styled.ul`
        padding-left: 1rem;
        font-size: 14px;
        color: #C4170B;
        font-family: "Unitext Regular"

        li {
            margin-bottom: 4px;
        }
    `;
// Styled Retry Button
const RetryButton = styled.button`
  align-self: center;
  margin-top: 12px;
  font-family: "Unitext Regular", sans-serif;
  background-color: white;
  color: #c4170b;
  border: 1px solid #c4170b;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c4170b;
    color: white;
  }
`;
    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isTokenExpired(userToken)){
           toast.error("Session expired. Log in again to continue");
          navigate("/admin/auth/log-in");
          return;
       }
        finishRef.current.disabled = true;
        setShowSuccessModal(true)
        const data = new FormData();
        Object.entries(propertyInfo).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                // Handle arrays separately (e.g., property_amenities, images, videos)
                value.forEach((item) => {
                    data.append(key, item); // Append each item in the array
                });
            } else if (value !== null && value !== undefined) {
                data.append(key, value);
            }
        });
        try {
            const response = await fetch(`${server}/property/create-property`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${userToken}`
                 },
                body: data,
            });
            const resp = await response.json();

            finishRef.current.disabled = false;
            if(!resp.success){
                console.log(resp.errors.message)
                toast.custom((t) => ( // ✅ Use `toast.custom` instead of `toast.error`
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "16px",
                        backgroundColor: "#FBC0BC",
                        color: "#C4170B",
                        fontFamily: "Unitext Regular, sans-serif",
                        borderRadius: "8px",
                      }}
                    >
                      <p style={{fontSize: '1.2rem', fontWeight: 'bold', alignSelf: 'start'}}>The following error occurred:</p>
                      <ul style={{ paddingLeft: "20px" }}>
                        {resp.errors.map((err, index) => (<li style={{fontFamily: "Unitext Rgular", fontSize: "1rem", }}>{err.message}</li>))}
                      </ul>
                      <RetryButton onClick={() => {
                        setPageNum(2)
                        toast.dismiss(t); // ✅ Close toast when clicking Retry
                      }}>
                        Retry
                      </RetryButton>
                    </div>
                  ), {
                    duration: 10000,
                    position: "bottom-center",
                  });
            }
            if(resp.success){
                toast.success("Upload Successful!", {
                    duration: 5000,
                    position: "bottom-center",
                  });
                setShowSuccessModal(false);
                setPageNum(1);
                setOwnerInfo({});
                setPropertyInfo(defaultPropertyInfo);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);
            finishRef.current.disabled = false;
        }
        // for (let pair of data.entries()) {
        //     console.log(pair[0], pair[1]);
        // }
        setShowSuccessModal(false);
    }   
    const [pageNum, setPageNum] = useState(1);
    return(
            <PropertyDetails>
                <NavigationContainer>
                    <LogoContainer>
                        <BackNav
                            onClick={() => {
                                if(pageNum === 1){
                                    navigate(-1);
                                    return;
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
                <PropertyFormContainer onSubmit={handleSubmit}>
                    <Header>
                        <HeaderText>
                            <h1>Add New Property</h1>
                            <p>Fill in the correct detailed information for the new property.</p>
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
                                <SearchField>
                                    <label>Search for owner's account</label>
                                    <div className="search">
                                        <input type="search" name="owner" id="" placeholder="Enter property owner’s name or email" value={owner}  ref={inputRef} onChange={handleSearchChange} />
                                        <SearchIcon/>
                                        {
                                            showSearchDropdown && 
                                            (
                                                <div className='search-dropdown'>
                                                    {
                                                        filteredPropertyOwner.length > 0 ? 
                                                        (
                                                            <ol>
                                                                {
                                                                filteredPropertyOwner.map((item) => {
                                                                    const {first_name, last_name} = item;
                                                                        return(
                                                                                <li onClick={() => {
                                                                                    setOwnerInfo(item);
                                                                                    setPropertyInfo({
                                                                                        ...propertyInfo,
                                                                                        property_owner_id: item.id,
                                                                                    });
                                                                                    setShowSearchDropdown(false);
                                                                                }} style={{marginTop: '10px'}}>{first_name} {last_name}</li>
                                                                        )
                                                                    })
                                                                }
                                                            </ol>
                                                        ) :
                                                        (
                                                            <span>No property owner available with this name</span>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    {showError && <span>Please select the property owner</span>}
                                    
                                </SearchField>
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
                                                if(owner.length <= 0){
                                                    setShowError(true);
                                                    inputRef.current.focus();
                                                    console.log(showError);
                                                    return;
                                                } 
                                                setPageNum(2);
                                                console.log(propertyInfo)
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
                                        required
                                        value={property_name}
                                        onChange = {handleChange}
                                    />
                                    <FormInput
                                        label={"Property Address"}
                                        id="property-address"
                                        placeholder="Enter property address"
                                        name="address"
                                        type="text"
                                        required
                                        value={address}
                                        onChange = {handleChange}
                                    />
                                    <NameContainer>
                                        <FormInput
                                            label={"City/Town"}
                                            id="city"
                                            name="city"
                                            placeholder="Enter property city/town"
                                            type="text"
                                            required
                                            value={city}
                                            onChange = {handleChange}
                                        />
                                        <SelectContainer>
                                            <label>State</label>
                                            <Option name = "state" value={state} onChange={handleChange} required>
                                            <option value="" disabled>Select State</option>
                                                {
                                                    nigerianStates.map((state) => {
                                                        return(
                                                            <option value={state.location} key={state.id}>{state.location}</option>
                                                        )
                                                    } )
                                                }
                                            </Option>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Property Type</label>
                                            <Option name = "property_type" value={property_type} onChange={handleChange} required>
                                            <option value="" disabled>Select Property Type</option>
                                                {
                                                    propertyType.map((type) => {
                                                        return(
                                                            <option value={type.type} key={type.id}>{type.type}</option>
                                                        )
                                                    } )
                                                }
                                            </Option>
                                        </SelectContainer>
                                        <SelectContainer>
                                            <label>Availabilty Status</label>
                                            <Option name = "availability_status" value={availability_status} required onChange={handleChange}>
                                            <option value="" disabled>Select property availibility status</option>
                                                {
                                                    availabilityStatus.map((status) => {
                                                        return(
                                                            <option value={status.status} key={status.id}>{status.status}</option>
                                                        )
                                                    } )
                                                }
                                            </Option>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer> 
                                        <SelectContainer>
                                            <label>Property Type</label>
                                            <Price>
                                                <FormInput type="number" name="property_price" id=""  value={property_price} onChange={handleChange} required/>
                                                <Currnecy></Currnecy>
                                            </Price>
                                        </SelectContainer>
                                        <SelectContainer>
                                            <label>Property Status</label>
                                            <Option name = "property_status" value={property_status} onChange={handleChange} required>
                                            <option value="" disabled>Select property status</option>
                                                {
                                                    propertyStatus.map((status) => {
                                                        return(
                                                            <option value={status.status} key={status.id}>{status.status}</option>
                                                        )
                                                    } )
                                                }
                                            </Option>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Description</label>
                                            <TextArea 
                                                placeholder="Type property description here"
                                                value={description}
                                                name="description"
                                                onChange={handleChange}
                                                required
                                            >
                                            </TextArea>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(1)
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(3);
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
                                            <label>Bedrooms</label>
                                            <Option required name = "total_bedrooms" value={total_bedrooms} onChange={handleChange}>
                                                <option value="" disabled>Number of bedrooms</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </Option>
                                        </SelectContainer>
                                        <SelectContainer>
                                            <label>Bathrooms</label>
                                            <Option required name = "total_baths" value={total_baths} onChange={handleChange}>
                                                <option value="" disabled>Number of bathrooms</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </Option>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Toilets</label>
                                            <Option required name = "total_toilets" value={total_toilets} onChange={handleChange}>
                                                <option value="" disabled>Number of toilets</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </Option>
                                        </SelectContainer>
                                        <SelectContainer>
                                        <label>Parking area</label>
                                            <Option required name = "parking_area" value={parking_area} onChange={handleChange}>
                                                <option value="" disabled>Number of cars that fit</option>
                                                <option value="Fit 1 car">Fit 1 car</option>
                                                <option value="Fit 2 car">Fit 2 car</option>
                                                <option value="Fit 3 car">Fit 3 car</option>
                                                <option value="Fit 4 car">Fit 4 car</option>
                                                <option value="Fit 5 car">Fit 5 car</option>
                                                <option value="Fit 6 car">Fit 6 car</option>
                                            </Option>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <FormInput
                                            label={"Property Size (square area)"}
                                            id="property-size"
                                            placeholder="Sqm2"
                                            name="property_square_area"
                                            type="text"
                                            required
                                            value={property_square_area}
                                            onChange = {handleChange}
                                        />
                                        <FormInput
                                            label={"Land area"}
                                            id="lad-area"
                                            placeholder="Sqm2"
                                            name="land_area"
                                            type="text"
                                            required
                                            value={land_area}
                                            onChange = {handleChange}
                                        />
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Select Amenties</label>
                                            <AmenitiesContainer>
                                                {
                                                    amenitites.map((item, index) => {
                                                        const isSelected = selectedAmenities.includes(item);
                                                        return(
                                                            <Item 
                                                                className = {isSelected ? 'selected' : ''}
                                                                key={index}  
                                                                onClick={() => {
                                                                    setSelectedAmenities((prev) => {
                                                                        if(prev.includes(item)){
                                                                            return prev.filter((selected) => selected !== item)
                                                                        } else {
                                                                            return [...prev, item];
                                                                        }
                                                                    });
                                                                    setPropertyInfo({
                                                                        ...propertyInfo,
                                                                        property_amenities: selectedAmenities,
                                                                    })
                                                                    console.log(selectedAmenities)
                                                                }}
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
                                                setPageNum(() => pageNum - 1)
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(() => pageNum + 1);
                                                console.log(propertyInfo)
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
                                    <MediaContent>
                                        {
                                            images.length > 0 ? 
                                            (<>
                                                <UploadContainer style={{background: '#fff', border: '1px solid #333'}}>
                                                    {/* <p style={{color: '#333'}}>Files uploaded</p> */}
                                                    {images.map((image) => (<img src={image.preview} alt={image.name}/>))}
                                                </UploadContainer> 
                                            
                                            </>) :
                                            (<>
                                                <UploadContainer onClick = {() => setShowUploadModal(true)}>
                                                    <FiUpload style={{width: '24px', height: '24px', color: '#fff'}}/>
                                                    <p>Upload photos or videos</p>
                                                </UploadContainer>
                                                <span>*upload files from your computer</span>
                                            </>)
                                        }
                                    </MediaContent>
                                    <FormInput
                                        label={"Virtual Tour"}
                                        id="virtual_tour"
                                        name="virtual_tour_url"
                                        type="url"
                                        required
                                        placeholder= "Enter virtual tour link"
                                        value={virtual_tour_url}
                                        onChange={handleChange}
                                    />
                                    <Location>
                                        Location Coordinates 
                                        <Link 
                                            to={'#'} 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.open("https://www.latlong.net", "_blank", "noopener,noreferrer")
                                            }}
                                        >
                                            (Get coordinates)
                                        </Link>
                                    </Location>
                                    <NameContainer>
                                        <FormInput
                                            label={"Latitude"}
                                            id="latitude"
                                            name="lat"
                                            type="text"
                                            required
                                            placeholder= "Enter location latitude"
                                            value={lat}
                                            onChange={handleChange}
                                        />
                                        <FormInput
                                            label={"Longitude"}
                                            id="longitude"
                                            name="long"
                                            required
                                            type="text"
                                            placeholder= "Enter location longitude"
                                            value={long}
                                            onChange={handleChange}
                                        />
                                    </NameContainer>
                                        <TwoFactorContainer>
                                        <p>Featured</p>
                                        <div class="form-switch" >
                                            <input type="checkbox" class="form-check-input" name='featured' value={featured} style={{width: '40px', height: '25px',}} onChange={(e) => {
                                                setPropertyInfo({
                                                    ...propertyInfo,
                                                    featured: e.target.checked
                                                })
                                            }}/>
                                        </div>
                                        </TwoFactorContainer>
                                    <NameContainer>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(() => pageNum - 1)
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <FinishBtn type= "submit" ref={finishRef}>
                                            Finish
                                        </FinishBtn>
                                    </NameContainer>
                                </FormContainer>
                            </Main>
                        )
                    }
                </PropertyFormContainer>
                {/* Upload Modal */}
                {
                    showUploadModal && (
                        <ModalComponent>
                            <UploadModalContainer>
                                <CloseIcon onClick={() => setShowUploadModal(false)}></CloseIcon>
                                <FileUploader onFilesSelected={handleFileSelect} filesData={filesData} setFilesData={setFilesData}/>
                            </UploadModalContainer>
                        </ModalComponent>
                    )
                }
                {
                    showSuccessModal && (
                        <ModalComponent>
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
                        </ModalComponent>
                    )
                }
            </PropertyDetails>    
    );
}

export default AddNewProperty;