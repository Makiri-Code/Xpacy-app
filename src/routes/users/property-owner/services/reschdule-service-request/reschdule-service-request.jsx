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
import { toast, Toaster  } from "sonner";
import FormInput from "../../../../../components/form-input/formInput.component";
import { IoArrowBack } from "react-icons/io5";
import Button from "../../../../../components/button/button";
import ModalComponent from "../../../../../components/modal/modal";
import { FiUpload } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
const ReschduleServiceRequest = () => {
    const heading = {
        color: '#333',
        fontFamily: "Unitext Regular",
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '120%'
    }
   const paragraph = {
        fontFamily: "Unitext Regular",
        color: '#7D7D7D',
        fontStyle: '0.875rem',
        fontWeight: '400',
        marginBottom: '48px',
    }
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
        message: '',
        rescheduleServiceTime: '',
        rescheduleServiceDate: '',
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
            message,
            rescheduleServiceTime,
            rescheduleServiceDate,
        } = formFields;
        const handleDateFormat = (dateStr) => {
            const date = new Date(`${dateStr}T00:00:00`);
            const formattedDate = new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(date);
            return formattedDate;
        }
        const formatTime = (timeStr) => {
            // Create a Date object with today's date and the given time
            const [hour, minute] = timeStr.split(":");
            const date = new Date();
            date.setHours(hour, minute, 0); // Set hours and minutes
        
            // Format time in 12-hour format with AM/PM
            return new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true, // Ensures 12-hour format
            }).format(date);
        };
        const [reschduledate, setreschduledate] = useState('')
        const [reschduletime, setreschduletime] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setreschduledate(handleDateFormat(rescheduleServiceDate));
        setreschduletime(formatTime(rescheduleServiceTime));
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
                    <Heading>Reschedule Service Request</Heading>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <Names>
                            <FormInput
                                label={'First Name'}
                                id={'first-name'}
                                name={'firstName'}
                                type={'text'}
                                value={firstName}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Last Name'}
                                id={'last-name'}
                                name={'lastName'}
                                type={'text'}
                                value={lastName}
                                onChange={handleChange}
                            />
                        </Names>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            name={'email'}
                            type={'email'}
                            value={email}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone'}
                            name={'phoneNumber'}
                            type={'tel'}
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Property Address'}
                            id={'property-address'}
                            name={'propertyAddress'}
                            type={'text'}
                            value={propertyAddress}
                            onChange={handleChange}
                        />
                        <SelectOptionContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <FormInput
                                        label={'Service Type'}
                                        id={'service-type'}
                                        name={'serviceType'}
                                        type={'text'}
                                        value={serviceType}
                                        onChange={handleChange}
                                    />
                                </SelectOption>
                                <SelectOption>
                                    <FormInput
                                        label={'Building Type'}
                                        id={'service-type'}
                                        name={'buildingType'}
                                        type={'text'}
                                        value={buildingType}
                                        onChange={handleChange}
                                    />
                                </SelectOption>
                            </SelectContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <FormInput
                                        label={'Schedule Service Visit'}
                                        id={'service-visit'}
                                        name={'serviceDate'}
                                        type={'text'}
                                        value={serviceDate}
                                        onChange={handleChange}
                                    />
                                </SelectOption>
                                <SelectOption>
                                    <FormInput
                                        label={'Schedule Visit Time'}
                                        id={'service-time'}
                                        name={'serviceTime'}
                                        type={'text'}
                                        value={serviceTime}
                                        onChange={handleChange}
                                    />
                                </SelectOption>
                            </SelectContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <Label htmlFor="service-visit">Reschedule service visit</Label>
                                    <div className="custom-select">
                                        <span>{rescheduleServiceDate ? rescheduleServiceDate : 'Choose a date'}</span>
                                        <DropdownIconContainer>
                                            <FaAngleDown className=".calender" style={{width: '16px', height: '16px', cursor: 'pointer'}}/>
                                        </DropdownIconContainer>
                                        <input type="date" value={rescheduleServiceDate} id="" onChange={(e) => setFormFields({...formFields, rescheduleServiceDate: e.target.value})} required/>
                                    </div>
                                </SelectOption>
                            </SelectContainer>
                            <SelectContainer>
                                <SelectOption>
                                    <Label htmlFor="service-visit">Reschedule visit time</Label>
                                    <div className="custom-select">
                                        <span>{rescheduleServiceTime ? rescheduleServiceTime : 'Choose a time'}</span>
                                        <DropdownIconContainer>
                                            <FaAngleDown className=".calender" style={{width: '16px', height: '16px', cursor: 'pointer'}}/>
                                        </DropdownIconContainer>
                                        <input type="time" value={rescheduleServiceTime} id="" onChange={(e) => setFormFields({...formFields, rescheduleServiceTime: e.target.value})} required/>
                                    </div>
                                </SelectOption>
                            </SelectContainer>
                        </SelectOptionContainer>
                        <MessageContainer>
                            <p>Additional Information</p>
                            <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleChange}></textarea>
                        </MessageContainer>
                        <AttachmentContainer>
                            <p style={{textDecoration: 'underline', cursor: 'pointer', fontSize: '700'}}>View Attachments</p>
                        </AttachmentContainer>
                        <Button 
                            buttonType={{primaryBtn: true}} 
                            type='submit' 
                            
                        >
                            Reschedule Service Request
                        </Button>
                    </BookServicesForm>
                </BookServicesContent>
                {
                showModal && 
                    (
                        <ModalComponent>
                            <BookServicesModal>
                                <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowModal(!showModal)}/>
                                <div className="modal-content">
                                    <div>
                                        <h3>Service request rescheduled to</h3>
                                        <p>{reschduledate} at {reschduletime}</p>
                                    </div>
                                    <Button
                                        buttonType={{primaryBtn: false}}
                                        buttonHeight={'32px'}
                                        buttonPadding={'0px 12px'}
                                    >
                                        Undo
                                    </Button>
                                </div>
                            </BookServicesModal>
                        </ModalComponent>
                    )
            }
            </BookServicesContainer>
    )
};

export default ReschduleServiceRequest;