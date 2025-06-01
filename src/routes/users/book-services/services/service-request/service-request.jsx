import { useState } from "react";
import { useNavigate } from "react-router-dom";
import xpacyLogo from "../../../../../assets/x-pacy-logo.svg";
import { IoClose } from "react-icons/io5";
import { 
    BookServicesContainer,
    NavigationContainer,
    LogoContainer,
    BackNav,
    BookServicesContent,
    BookServicesForm,
    Names,
    SelectContainer,
    Select,
    SelectOption,
    SelectOptionContainer,
    BookServicesModal,
    Label,
    MessageContainer,
    DropdownIconContainer,
    AttachmentContainer,
    Heading,
} from "./services-request.styles";
import FormInput from "../../../../../components/form-input/formInput.component";
import { IoArrowBack } from "react-icons/io5";
import Button from "../../../../../components/button/button";
import ModalComponent from "../../../../../components/modal/modal";
import { FiUpload } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
const ServiceRequest = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const defaultFormFields = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        propertyAddress: '',
        serviceType: '',
        buildingType: '',
        serviceDate: '',
        serviceTime: '',
        message: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
            firstName, 
            lastName, 
            email, 
            phoneNumber, 
            propertyAddress, 
            serviceDate,
            serviceTime, 
            serviceType, 
            buildingType,
            message
        } = formFields;


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(!showModal);
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
                <BookServicesContent>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <Heading>Service Request</Heading>
                        <Names>
                            <FormInput
                                label={'First Name'}
                                id={'first-name'}
                                placeholder={'Enter your first name'}
                                name={'firstName'}
                                type={'text'}
                                value={firstName}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Last Name'}
                                id={'last-name'}
                                placeholder={'Enter your last name'}
                                name={'lastName'}
                                type={'text'}
                                value={lastName}
                                onChange={handleChange}
                            />
                        </Names>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            placeholder={'Enter your email address'}
                            name={'email'}
                            type={'email'}
                            value={email}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone'}
                            placeholder={'+234000 000 0000'}
                            name={'phoneNumber'}
                            type={'tel'}
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Property Address'}
                            id={'property-address'}
                            placeholder={'Enter your address'}
                            name={'propertyAddress'}
                            type={'text'}
                            value={propertyAddress}
                            onChange={handleChange}
                        />
                        <SelectOptionContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <Label htmlFor="">Service Type</Label>
                                    <Select  name="serviceType" id="service-type" value={serviceType} onChange={handleChange}>
                                        <option name="serviceType" value="">Choose a service</option>
                                        <option name="serviceType" value="Plumbing Services">Plumbing Services</option>
                                        <option name="serviceType" value="Painting And WallCare">Painting and Wall Care</option>
                                        <option name="serviceType" value="Security Guard Services">Security Guard Services</option>
                                        <option name="serviceType" value="Landscaping And Lawn Care">Lanscaping And Lawn Care</option>
                                        <option name="serviceType" value="Waste Management"> Waste Management </option>
                                        <option name="serviceType" value="Electrical repairs">Electrical repairs</option>
                                    </Select>
                                </SelectOption>
                                <SelectOption>
                                    <Label htmlFor="building-type">Building Type</Label>
                                    <Select name="buildingType" id="building-type" value={buildingType} onChange={handleChange}>
                                        <option value="" disabled>Choose type of building</option>
                                        <option name="buildingType" value="Commercial">Commercial</option>
                                        <option name="buildingType" value="Residential">Residential</option>
                                    </Select>
                                </SelectOption>
                            </SelectContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <Label htmlFor="service-visit">Schedule Service Visit</Label>
                                    <div className="custom-select">
                                        <span>{serviceDate ? serviceDate : 'Choose a date'}</span>
                                        <DropdownIconContainer>
                                            <FaAngleDown className=".calender" style={{width: '16px', height: '16px', cursor: 'pointer'}}/>
                                        </DropdownIconContainer>
                                        <input type="date" value={serviceDate} id="" onChange={(e) => setFormFields({...formFields, serviceDate: e.target.value})}/>
                                    </div>
                                </SelectOption>
                                <SelectOption>
                                    <Label htmlFor="service-visit">Schedule Visit Time</Label>
                                    <div className="custom-select">
                                        <span>{serviceTime ? serviceTime : 'Choose a time'}</span>
                                        <DropdownIconContainer>
                                            <FaAngleDown className=".calender" style={{width: '16px', height: '16px', cursor: 'pointer'}}/>
                                        </DropdownIconContainer>
                                        <input type="time" value={serviceTime} id="" onChange={(e) => setFormFields({...formFields, serviceTime: e.target.value})}/>
                                    </div>
                                </SelectOption>
                            </SelectContainer>
                        </SelectOptionContainer>
                        <MessageContainer>
                            <p>Additional Information</p>
                            <span>( Kindly include the description of your service request. E.g. a full cleaning service for a 3-bedroom and 4-bathroom apartment, including the balcony and staircase area.) </span>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here' value={message} onChange={handleChange}></textarea>
                        </MessageContainer>
                        <AttachmentContainer>
                            <div className="position-relative"  style={{width: '20px', height: '20px'}}>
                                <FiUpload className='attachment-icon' />
                                <input type="file" name="attachement" id="attachment" title='upload a file' onChange={handleChange}/>
                            </div>
                            <p>Attach necessary documents/photos <span>(if applicable)</span></p>
                        </AttachmentContainer>
                        <Button buttonType={{primaryBtn: true}} type='submit' >Submit</Button>
                    </BookServicesForm>
                </BookServicesContent>
                {
                showModal && 
                    (
                        <ModalComponent>
                            <BookServicesModal>
                                <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowModal(!showModal)}/>
                                <h3>Your request was sent successfully</h3>
                                <p>Our Admin will contact you shortly</p>
                                <Button
                                    buttonType={{primaryBtn: true}}
                                    buttonPadding={'8px 16px'}
                                    className='book-service-btn'
                                >
                                    Back To Dashboard
                                </Button>
                            </BookServicesModal>
                        </ModalComponent>
                    )
            }
            </BookServicesContainer>
    )
};

export default ServiceRequest;