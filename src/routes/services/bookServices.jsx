import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import FormInput from "../../components/form-input/formInput.component";
import Button from "../../components/button/button";
import { FaAngleDown } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import ModalComponent from "../../components/modal/modal";
import { IoClose } from "react-icons/io5";
import isTokenExpired from "../../utils/token/handleUserToken.js";
import { 
    AttachmentContainer, 
    BookServicesContainer,
     BookServicesContent, 
     BookServicesForm, 
     BookServicesNav,
      SelectContainer, 
      SelectOption, 
      Title,
      Names,
      SelectOptionContainer,
      DropdownIconContainer,
      MessageContainer,
      BookServicesModal,
      Select,
      Label,
      UploadModalContainer,
      CloseIcon,
    } from "./book-services.jsx";
import FileUploader from "../../components/file-uploader/file-uploader.jsx";
import { UserContext } from "../../contexts/userContext.jsx";
import { MdEditCalendar } from "react-icons/md";
import { TbClockEdit } from "react-icons/tb";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";

const BookServices = ({userProfile}) => {
    const {userToken, server} = useContext(UserContext);
    const navigate = useNavigate();
    const btnRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const defaultFormFields = {
        address: '',
        service_type: '',
        building_type: '',
        scheduled_date: '',
        scheduled_time: '',
        service_description: '',
        images: [],
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [showUploadModal, setShowUploadModal] = useState(false)
    const {
            address, 
            scheduled_date,
            scheduled_time, 
            service_type, 
            building_type,
            service_description,
            images,
        } = formFields;
    
    if(!userProfile){
        toast.error("Please log in to continue")
        navigate('/auth/log-in');
    }
   
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isTokenExpired(userToken)){
            toast.error("Session expired. Log in again to continue");
            navigate("/auth/log-in");
            return;
        }
        btnRef.current.disabled = true
        setShowLoader(true);
        const data = new FormData();
        Object.entries(formFields).forEach(([key, value]) => {
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
            const response = await fetch(`${server}/service/request-service`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${userToken}`
                    },
                body: data,
            });
            const resp = await response.json();
            if(resp.success){
                setShowModal(true);
                setFormFields(defaultFormFields);
                setShowLoader(false);
                btnRef.current.disabled = false;
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);
            setShowLoader(false)
            btnRef.current.disabled = false;

        }
        setShowLoader(false);

    };

    const handleFileSelect = (acceptedFiles) => {
        setFormFields((prev) => ({
            ...prev,
            images: [...acceptedFiles ],
        }));
    };
    
    return (
        <>
            <BookServicesContainer>
                <BookServicesNav>
                    <IoMdArrowBack/>
                    <span>Back To Dashboard</span>
                </BookServicesNav>
                <BookServicesContent>
                    <Title>
                        <h1>Ready To Experience Ease?</h1>
                        <p>Need us to manage your facility? Kindly fill out the form below, and we'll get back to you shortly.</p>
                    </Title>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <Names>
                            <FormInput
                                label={'First Name'}
                                id={'first-name'}
                                placeholder={'Enter your first name'}
                                name={'firstName'}
                                type={'text'}
                                value={userProfile?.firstname}
                            />
                            <FormInput
                                label={'Last Name'}
                                id={'last-name'}
                                placeholder={'Enter your last name'}
                                name={'lastName'}
                                type={'text'}
                                value={userProfile?.lastname}
                            />
                        </Names>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            placeholder={'Enter your email address'}
                            name={'email'}
                            type={'email'}
                            value={userProfile?.email}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone'}
                            placeholder={'+234000 000 0000'}
                            name={'phoneNumber'}
                            type={'tel'}
                            value={userProfile?.phoneNumber}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Property Address'}
                            required
                            id={'property-address'}
                            placeholder={'Enter your address'}
                            name={'address'}
                            type={'text'}
                            value={address}
                            onChange={handleChange}
                        />
                        <SelectOptionContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <Label htmlFor="">Service Type</Label>
                                    <Select required  name="service_type" id="service-type" value={service_type} onChange={handleChange}>
                                        <option name="service_type" value="">Choose a service</option>
                                        <option name="service_type" value="Plumbing Services">Plumbing Services</option>
                                        <option name="service_type" value="Painting And WallCare">Painting and Wall Care</option>
                                        <option name="service_type" value="Security Guard Services">Security Guard Services</option>
                                        <option name="service_type" value="Landscaping And Lawn Care">Lanscaping And Lawn Care</option>
                                        <option name="service_type" value="Waste Management"> Waste Management </option>
                                        <option name="service_type" value="Electrical repairs">Electrical repairs</option>
                                    </Select>
                                </SelectOption>
                                <SelectOption>
                                    <Label htmlFor="building-type">Building Type</Label>
                                    <Select required name="building_type" id="building-type" value={building_type} onChange={handleChange}>
                                        <option value="" disabled>Choose type of building</option>
                                        <option name="building_type" value="Commercial">Commercial</option>
                                        <option name="building_type" value="Residential">Residential</option>
                                    </Select>
                                </SelectOption>
                            </SelectContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <Label htmlFor="service-visit">Schedule Service Visit</Label>
                                    <div className="custom-select">
                                        <span>{scheduled_date ? scheduled_date : 'Choose a date'}</span>
                                        <DropdownIconContainer>
                                            <MdEditCalendar className=".calender" style={{width: '28px', height: '28px'}} title="show date picker"/>
                                        </DropdownIconContainer>
                                        <input required type="date" value={scheduled_date} id="" onChange={(e) => setFormFields({...formFields, scheduled_date: e.target.value})}/>
                                    </div>
                                </SelectOption>
                                <SelectOption>
                                    <Label htmlFor="service-visit">Schedule Visit Time</Label>
                                    <div className="custom-select">
                                        <span>{scheduled_time ? scheduled_time : 'Choose a time'}</span>
                                        <DropdownIconContainer>
                                            <TbClockEdit className=".calender" style={{width: '28px', height: '28px'}}/>
                                        </DropdownIconContainer>
                                        <input required type="time" value={scheduled_time} id="" onChange={(e) => setFormFields({...formFields, scheduled_time: e.target.value})}/>
                                    </div>
                                </SelectOption>
                            </SelectContainer>
                        </SelectOptionContainer>
                        <MessageContainer>
                            <p>Additional Information</p>
                            <span>( Kindly include the description of your service request. E.g. a full cleaning service for a 3-bedroom and 4-bathroom apartment, including the balcony and staircase area.) </span>
                            <textarea required name="service_description" id="message" cols="30" rows="10" placeholder='Type your message here' value={service_description} onChange={handleChange}></textarea>
                        </MessageContainer>
                        {
                            images.length > 0 ?
                            (
                                <AttachmentContainer>
                                    {images.map((imageSrc) => (<img src={imageSrc.preview} alt={imageSrc.name}/>))}
                                </AttachmentContainer>
                            ) : 
                            (
                                <AttachmentContainer onClick={() => setShowUploadModal(true)}>
                                    <div className="position-relative"  style={{width: '20px', height: '20px'}} >
                                        <FiUpload className='attachment-icon' />
                                        {/* <input type="file" name="attachement" id="attachment" title='upload a file' onChange={handleChange}/> */}
                                    </div>
                                    <p>Attach necessary documents/photos <span>(if applicable)</span></p>
                                </AttachmentContainer>
                            )
                        }
                        
                        <Button buttonType={{primaryBtn: true}} type='submit' btnRef={btnRef} >
                            {
                                showLoader ? (<ClipLoader size={25} color='#fff'/>) : 'Submit'
                            }
                        </Button>
                    </BookServicesForm>
                </BookServicesContent>
            </BookServicesContainer>
            {
                showModal && 
                    (
                        <ModalComponent>
                            <BookServicesModal>
                                <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => {
                                    setDisabled(false);
                                    setShowModal(!showModal)
                                    }}/>
                                <h3>Your request was sent successfully</h3>
                                <p>Our Admin will contact you shortly</p>
                                <Button
                                    buttonType={{primaryBtn: true}}
                                    buttonPadding={'8px 16px'}
                                    className='book-service-btn'
                                    onClick={() => navigate('/dashboard/user')}
                                    disabled={false}
                                >
                                    Back To Dashboard
                                </Button>
                            </BookServicesModal>
                        </ModalComponent>
                    )
            }
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
        </>
    );
}

export default BookServices;