import { useState, useRef, useContext, useEffect } from 'react';
import xpacyLogo from '../../../../../assets/x-pacy-logo.svg';
import { IoArrowBack, IoClose } from "react-icons/io5";
import { PageContext } from '../../../../../contexts/page.context';
import FormInput from '../../../../../components/form-input/formInput.component';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import FileUploader from '../../../../../components/file-uploader/file-uploader';
import ModalComponent from '../../../../../components/modal/modal';
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from '../../../../../components/button/button';
import { Autocomplete, Paper, TextField } from '@mui/material';
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
 } from './edit-property.styles';
import { useNavigate, useParams } from 'react-router-dom';
import fetchServer from '../../../../../utils/serverutils/fetchServer';
import { UserContext } from '../../../../../contexts/userContext';
import { PulseLoader } from 'react-spinners';
import { toast } from 'sonner';
import isTokenExpired from '../../../../../utils/token/handleUserToken';
import styled from 'styled-components';
import { TwoFactorContainer } from '../../settings/setings.styles';

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
    `
    const CustomPaper = (props) => {
        return <Paper sx={{
            "& .MuiAutocomplete-option" : {
            fontFamily: 'Unitext Regular',
            fontSize: '1rem',
            borderBottom: '1px solid #DADADA',
            padding: '8px'
            }
        }} {...props} />
    }
    const ToastContainer = styled.div`
        display: flex;
        background-color: white;
        padding: 0px;
        border-radius: 0px 8px 8px 0px;
        color: #203645;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        max-width: 300px;
        font-family: "Unitext Regular";
    `;

    const Title = styled.p`
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0px;
        font-family: "Unitext Regular";
    `;

    const Description = styled.p`
        font-size: 1rem;
        color: #555;
        margin: 0px;
        font-style: italic;
        font-family: "Unitext Regular";
    `;
    const Content = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 8px;
    `
    const Block = styled.div`
        width: 10px;
        background-color:rgba(68, 243, 68, 0.46);
    `
const EditProperty = ({allOwners}) => {
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
        total_bathrooms: '',
        total_toilets: '',
        parking_area: '',
        kitchen_type: '',
        property_square_area: '',
        land_area: '',
        property_amenities: [],
        images: [], 
        videos: [],
        virtual_tour_url: '',
        long: '',
        lat: '',
        featured: false,
    }
    const [propertyInfo, setPropertyInfo] = useState(defaultPropertyInfo);
    const [isFetchingPropertyInfo, setIsFetchingPropertyInfo] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const navigate = useNavigate();
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
            kitchen_type,
            virtual_tour_url,
            long,
            lat,
            total_bathrooms,
            total_bedrooms,
            total_toilets,
            featured,
        } = propertyInfo;
    const {id} = useParams();
    const {userToken, server} = useContext(UserContext)
    const {nigerianStates} = useContext(PageContext)
    const inputRef = useRef(null);
    const itemRef = useRef(null);
    // fetch property details
        useEffect(() => {
            const getPropertyDetails = async () => {
                const response = await fetchServer("GET", {}, userToken, `admin/fetch-property/${id}`, server );
                setPropertyInfo(response.property);
                setImageFiles(response.property.images)
                setOwnerInfo(response.property.propertyOwner);
                setIsFetchingPropertyInfo(response.success)
            }
            getPropertyDetails()
        }, []);

        
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
            type: 'Flat/Apartment',
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
            status: 'Sale',
        },
        {
            id: 2,
            status: 'Rent',
        },
        {
            id: 3,
            status: 'Lease',
        },
        {
            id: 4,
            status: 'Shortlet',
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

    const defaultSearchField = {
        owner: ''
    }

    const handleDeleteImg = (image) => {
        const newImageSrcArray = imageFiles?.filter((item) => item !== image);
        setImageFiles(newImageSrcArray);
    }
    const handleDeletePropertyImg = (image) => {
        const newImgArray = propertyInfo?.images.filter((filterImg) => filterImg !== image);
        setPropertyInfo((prev) => ({
            ...prev,
             images: [...newImgArray]
        }))
    }


    const [ownerInfo , setOwnerInfo] = useState(null);
    const [searchField, setSearchField] = useState(defaultSearchField);
    const {owner} = searchField;
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showError, setShowError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
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
            [name]: value
        })
    }

    const handleFileSelect = (acceptedFiles) => {
        setImageFiles((prevImg) => (
            [...prevImg, ...acceptedFiles]
        ));
    }
    useEffect(() => {
        setPropertyInfo((prev) => ({
            ...prev,
            images: imageFiles
        }))
    }, [imageFiles])
    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isTokenExpired(userToken)){
            toast('Session Expired!', {
                description: 'Your session has expired please log-in again to continue',
                action: {
                    label: 'Go to Log-in',
                    onClick: () => navigate("/admin/auth/log-in"),
                },
                duration: 100000,
                position: 'top-center',
                style: {
                    fontFamily: "inherit",
                    backgroundColor: '#fff',
                    color: '#212121',
                    borderRadius: '12px',
                },
            });
          return;
       }
        setDisabled(true);
        setShowSuccessModal(true);
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
            const response = await fetch(`${server}/property/update-property/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${userToken}`
                 },
                body: data,
            });
            const resp = await response.json();
            setDisabled(false)
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
                // toast('Upload Complete', {
                //     description: 'Your property was uploaded successfully.',
                //     icon: '📁',
                //     duration: 5000,
                //     position: 'bottom-right',
                //     style: {
                //         backgroundColor: '#edffdb',
                //         color: '#fffefe',
                //         fontFamily: 'Unitext Regular',
                //         border: '1px solid #4a4a4a',
                //     },
                // });
                toast.custom((t) => (
                    <ToastContainer>
                        <Block/>
                        <Content>
                            <Title>Upload Successful</Title>
                            <Description>Your property has been saved successfully.</Description>
                        </Content>
                    </ToastContainer>
                ), {
                    position: 'bottom-center',
                    duration: 6000,
                });
                setShowSuccessModal(false);
                setPageNum(1);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);
        }
        // for (let pair of data.entries()) {
        //     console.log(pair[0], pair[1]);
        // }
        setShowSuccessModal(false);
        setDisabled(false)
    }
    const [pageNum, setPageNum] = useState(1);
    return(
        <>
        {
            isFetchingPropertyInfo ? 
            (<PropertyDetails>
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
                            <h1>Edit Property</h1>
                            <p>Make necessary edits to the property.</p>
                        </HeaderText>
                        <ProgressBar>
                            {
                                steps.map((item, index) => {
                                    const {id, label} = item;
                                    return(
                                        <ProgressBarItem key={id}>
                                            <span className={ pageNum === id ? 'active' : pageNum < id ? 'inactive' : 'completed' } onClick={() => pageNum > id ? setPageNum((prev) => prev -= 1) : setPageNum((prev) => prev += 1)} >
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
                                    <Autocomplete
                                        sx={{
                                                width: '100%',
                                                "& .MuiOutlinedInput-notchedOutline" : {
                                                    border: '1.5px solid #DADADA',
                                                    borderRadius: '8px',
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline" : {
                                                    borderColor: '#DADADA'
                                                }
                                        }}
                                        PaperComponent={CustomPaper}
                                        options={allOwners}
                                        // onBlur={(event) => event.target.value !== searchField ? setSearchField(event.target.value) : null}
                                        getOptionLabel={(option) => typeof option === 'string' ? option :`${option?.first_name} ${option?.last_name}`} 
                                        getOptionKey={(option) => option.id}
                                        renderInput={(params) => <TextField {...params} placeholder='Search..' inputRef={inputRef}/>}
                                        // value={searchField}
                                        // onChange={(event, newValue) => {
                                        //     setSearchField(newValue)
                                        // }}
                                    />
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
                                            value={ownerInfo?.address}
                                        />  
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(2);
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
                                        onChange = {handleChange}
                                    />
                                    <FormInput
                                        label={"Property Address"}
                                        id="property-address"
                                        placeholder="Enter property address"
                                        name="property_address"
                                        type="text"
                                        value={propertyInfo?.property_address}
                                        onChange = {handleChange}
                                    />
                                    <NameContainer>
                                        <FormInput
                                            label={"City/Town"}
                                            id="city"
                                            name="city"
                                            placeholder="Enter property city/town"
                                            type="text"
                                            value={propertyInfo?.city}
                                            onChange = {handleChange}
                                        />
                                        <SelectContainer>
                                            <label>State</label>
                                            <Option name = "state" value={propertyInfo?.state} onChange={handleChange}>
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
                                            <Option name = "property_type" value={propertyInfo?.property_type} onChange={handleChange}>
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
                                            <Option name = "availability_status" value={propertyInfo?.availability_status} onChange={handleChange}>
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
                                            <label>Property Amount</label>
                                            <Price>
                                                <FormInput type="number" name="property_price" id=""  value={propertyInfo?.property_price} onChange={handleChange}/>
                                                <Currnecy></Currnecy>
                                            </Price>
                                        </SelectContainer>
                                        <SelectContainer>
                                            <label>Property Status</label>
                                            <Option name = "property_status" value={propertyInfo?.property_status} onChange={handleChange}>
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
                                                setPageNum(1)
                                            }
                                            }
                                        >
                                            <MdOutlineArrowBackIos style={{width: '16px', height: '16px'}}/>
                                            <span>Previous</span>
                                        </NextBtn>
                                        <NextBtn 
                                            onClick={() => {
                                                setPageNum(3)
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
                                            <Option name = "total_bedrooms" value={propertyInfo?.total_bedrooms} onChange={handleChange}>
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
                                            <Option 
                                                name = "total_bathrooms" 
                                                value={propertyInfo?.total_bathrooms} 
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Number of bathrooms</option>
                                                <option value="0">0</option>
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
                                            <Option name = "total_toilets" value={propertyInfo?.total_toilets} onChange={handleChange}>
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
                                        <label>Parking Area</label>
                                            <Option name = "parking_area" value={propertyInfo?.parking_area} onChange={handleChange}>
                                                <option value="" disabled>Number of cars that fit</option>
                                                <option value="Fit 1 car">Fit 1 car</option>
                                                <option value="Fit 2 cars">Fit 2 cars</option>
                                                <option value="Fit 3 cars">Fit 3 cars</option>
                                                <option value="Fit 4 cars">Fit 4 cars</option>
                                                <option value="Fit 5 cars">Fit 5 cars</option>
                                                <option value="Fit 6 cars">Fit 6 cars</option>
                                            </Option>
                                        </SelectContainer>
                                    </NameContainer>
                                    <NameContainer>
                                        <FormInput
                                            label={"Kitchen Type"}
                                            id="kitchen_type"
                                            placeholder="Enter type of Kitchen"
                                            name="kitchen_type"
                                            type="text"
                                            required
                                            value={propertyInfo?.kitchen_type}
                                            onChange = {handleChange}
                                        />
                                    </NameContainer>
                                    <NameContainer>
                                        <FormInput
                                            label={"Property Size (square area)"}
                                            id="property-size"
                                            placeholder="Sqm2"
                                            name="property_square_area"
                                            type="text"
                                            value={propertyInfo?.property_square_area}
                                            onChange = {handleChange}
                                        />
                                        <FormInput
                                            label={"Land area"}
                                            id="lad-area"
                                            placeholder="Sqm2"
                                            name="land_area"
                                            type="text"
                                            value={propertyInfo?.land_area}
                                            onChange = {handleChange}
                                        />
                                    </NameContainer>
                                    <NameContainer>
                                        <SelectContainer>
                                            <label>Select Amenties</label>
                                            <Autocomplete 
                                                freeSolo
                                                sx={{
                                                    bgcolor: '#fff',
                                                    "& .MuiInputBase-input" : {
                                                        height: '2rem'
                                                    },
                                                    "& > div > placeholder" : {
                                                        color : 'red'
                                                    },
                                                    "& .MuiOutlinedInput-notchedOutline" : {
                                                        border: '1.5px solid #DADADA',
                                                        borderRadius: '8px',
                                                    },
                                                    "&:hover .MuiOutlinedInput-notchedOutline" : {
                                                        borderColor: '#DADADA'
                                                    },
                                                    "& .MuiAutocomplete-inputRoot > input::placeholder" : {
                                                        fontFamily: 'Unitext Regular'
                                                    }
                                                }}
                                                ChipProps={{
                                                    sx: {bgcolor: '#E3ECF2', color: '#585858', fontFamily: 'Unitext Regular',   }}}
                                                multiple
                                                options={amenitites}
                                                value={propertyInfo?.property_amenities}
                                                renderInput={(params) => <TextField {...params} placeholder='Select amenities' />}
                                                onChange={(event, newValue) => {
                                                    setPropertyInfo({
                                                        ...propertyInfo,
                                                        property_amenities: newValue
                                                    });
                                                }}
                                                PaperComponent={CustomPaper}
                                            />
                                            {/* <AmenitiesContainer>
                                                {
                                                    propertyInfo?.property_amenities.map((item, index) => {
                                                        const isSelected = selectedAmenities.includes(item);
                                                        return(
                                                            <Item 
                                                                className = 'selected'
                                                                key={index}  
                                                                onClick={() => {
                                                                    setSelectedAmenities((prev) => {
                                                                        if(prev.includes(item)){
                                                                            return prev.filter((selected) => selected !== item)
                                                                        } else {
                                                                            return [...prev, item];
                                                                        }
                                                                    });
                                                                }}
                                                            >
                                                                {item}
                                                            </Item>
                                                        )
                                                    })
                                                }
                                            </AmenitiesContainer> */}
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
                                                setPageNum(() => pageNum + 1)
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
                                            imageFiles?.map((imageSrc, index) => {
                                                return (
                                                    <>
                                                        {
                                                            !imageSrc.preview ? (
                                                                <div className='img-container' key={index}>
                                                                        <img src={`https://app.xpacy.com/src/upload/properties/${imageSrc}`} alt="house" />
                                                                    
                                                                        <DeleteBtn onClick={() => handleDeleteImg(imageSrc) }>
                                                                                <RiDeleteBin6Line style={{width: '15px', height: '15px'}}/>
                                                                        </DeleteBtn>                                                  
                                                                </div>
                                                            ) : 
                                                            null
                                                        }
                                                       {
                                                        imageSrc.preview && 
                                                        (
                                                             <div className='img-container' key={index}>
                                                                <img src={imageSrc.preview} alt="house"/>
                                                                <DeleteBtn onClick={() => handleDeleteImg(imageSrc) }>
                                                                        <RiDeleteBin6Line style={{width: '15px', height: '15px'}}/>
                                                                </DeleteBtn>                                                  
                                                            </div>
                                                        )
                                                       }
                                                         
                                                    </>
                                                    
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
                                        value={propertyInfo?.virtual_tour_url}
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
                                            value={propertyInfo?.lat}
                                            onChange={handleChange}
                                        />
                                        <FormInput
                                            label={"Longitude"}
                                            id="longitude"
                                            name="long"
                                            type="text"
                                            placeholder= "Enter location longitude"
                                            value={propertyInfo?.long}
                                            onChange={handleChange}
                                        />
                                    </NameContainer>
                                    <TwoFactorContainer>
                                        <p>Featured</p>
                                        <div class="form-switch" >
                                            <input type="checkbox" class="form-check-input" name='featured' checked={propertyInfo.featured} style={{width: '40px', height: '25px',}} onChange={(e) => {
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
                                        <Button buttonType={{primaryBtn: true}} disabled={disabled}>Save Changes</Button>
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
                                <FileUploader onFilesSelected={handleFileSelect} />
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
            </PropertyDetails> ):
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

export default EditProperty;