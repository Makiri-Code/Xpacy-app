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
import { useNavigate } from 'react-router-dom';


const PropertyDetailsComponent = () => {
    const navigate = useNavigate();
    const {nigerianStates} = useContext(PageContext)
    const inputRef = useRef(null);
    const itemRef = useRef(null);
    const imageSrc = [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D',
    ]
    const [imageSrcArray, setImageSrcArray] = useState(imageSrc)
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
        address: '',
    }
    // defaullt search fields
    const defaultSearchField = {
        owner: ''
    }
    // Default property information
    const defaultPropertyInfo = {
        property_owner_id: '',
        property_name: '',
        property_address: '',
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


    // handle delete photo
    const handleDeleteImg = (imgSrc) => {
        console.log(imgSrc);
        const newImageSrc = imageSrcArray.filter((item) => item !== imgSrc);
        setImageSrcArray(newImageSrc)
    }
    const [propertyInfo, setPropertyInfo] = useState(defaultPropertyInfo);
    const {
            property_owner_id,
            property_address, 
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
        } = propertyInfo;

    const [ownerInfo , setOwnerInfo] = useState(defaultOwnerFormFields);
    const {firstname, lastname, email, phonenumber, address} = ownerInfo;
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        const {images, ...otherFields} = propertyInfo;
         data.append('propertyInfo',JSON.stringify(propertyInfo));
         
         for (let pair of data.entries()) {
            console.log(pair[0], pair[1]);
        }
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
                                                value={firstname}
                                            />
                                            <FormInput
                                                label={"Last Name"}
                                                id="last-name"
                                                name="lastname"
                                                type="text"
                                                value={lastname}
                                            />
                                        </NameContainer>
                                        <FormInput
                                            label={"Email"}
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                        />
                                        <FormInput
                                            label={"Phone Number"}
                                            id="phone-num"
                                            name="phone"
                                            type="text"
                                            value={phonenumber}
                                        />
                                        <FormInput
                                            label={"Address"}
                                            id="address"
                                            name="address"
                                            type="text"
                                            value={address}
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
                                        value={property_name}
                                        onChange = {handleChange}
                                    />
                                    <FormInput
                                        label={"Property Address"}
                                        id="property-address"
                                        placeholder="Enter property address"
                                        name="property_address"
                                        type="text"
                                        value={property_address}
                                        onChange = {handleChange}
                                    />
                                    <NameContainer>
                                        <FormInput
                                            label={"City/Town"}
                                            id="city"
                                            name="city"
                                            placeholder="Enter property city/town"
                                            type="text"
                                            value={city}
                                            onChange = {handleChange}
                                        />
                                        <SelectContainer>
                                            <label>State</label>
                                            <Option name = "state" value={state} onChange={handleChange}>
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
                                            <Option name = "property_type" value={property_type} onChange={handleChange}>
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
                                            <Option name = "availability_status" value={availability_status} onChange={handleChange}>
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
                                                <FormInput type="number" name="property_price" id=""  value={property_price} onChange={handleChange}/>
                                                <Currnecy></Currnecy>
                                            </Price>
                                        </SelectContainer>
                                        <SelectContainer>
                                            <label>Property Status</label>
                                            <Option name = "property_status" value={property_status} onChange={handleChange}>
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
                                            <label>Bedrooms</label>
                                            <Option name = "total_bedrooms" value={total_bedrooms} onChange={handleChange}>
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
                                            <Option name = "total_baths" value={total_baths} onChange={handleChange}>
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
                                            <Option name = "total_toilets" value={total_toilets} onChange={handleChange}>
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
                                        <label>Toilets</label>
                                            <Option name = "parking_area" value={parking_area} onChange={handleChange}>
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
                                            value={property_square_area}
                                            onChange = {handleChange}
                                        />
                                        <FormInput
                                            label={"Land area"}
                                            id="lad-area"
                                            placeholder="Sqm2"
                                            name="land_area"
                                            type="text"
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
                                                                    property_amenities.push(selectedAmenities)
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
                                            imageSrcArray.map((imageSrc) => {
                                                return (
                                                    <div className='img-container'>
                                                        <img src={imageSrc} alt="house photo" /> 
                                                        <DeleteBtn onClick={() => handleDeleteImg(imageSrc) }>
                                                                <RiDeleteBin6Line style={{width: '15px', height: '15px'}}/>
                                                        </DeleteBtn>                                                  
                                                    </div>
                                                )
                                            })
                                        }
                                    </PhotosContainer>
                                    <MediaContent>
                                        <UploadContainer onClick = {() => setShowUploadModal(true)}>
                                            <FiUpload style={{width: '24px', height: '24px', color: '#fff'}}/>
                                            <p>Upload more files</p>
                                        </UploadContainer>
                                        <span style={{alignSelf: 'flex-end'}}>*upload files from your computer</span>
                                    </MediaContent>
                                    <FormInput
                                        label={"Virtual Tour"}
                                        id="virtual_tour"
                                        name="virtual_tour_url"
                                        type="url"
                                        placeholder= "Enter virtual tour link"
                                        value={virtual_tour_url}
                                        onChange={handleChange}
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
                                            value={lat}
                                            onChange={handleChange}
                                        />
                                        <FormInput
                                            label={"Longitude"}
                                            id="longitude"
                                            name="long"
                                            type="text"
                                            placeholder= "Enter location longitude"
                                            value={long}
                                            onChange={handleChange}
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
                {/* Upload Modal */}
                {
                    showUploadModal && (
                        <ModalComponent>
                            <UploadModalContainer>
                                <CloseIcon onClick={() => setShowUploadModal(false)}></CloseIcon>
                                <FileUploader onFilesSelected={handleFileSelect}/>
                            </UploadModalContainer>
                        </ModalComponent>
                    )
                }
            </PropertyDetails>    
    );
}

export default PropertyDetailsComponent;