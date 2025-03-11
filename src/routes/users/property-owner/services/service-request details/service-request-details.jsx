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
import { HistoryContainer } from "../../../../Adminstration/management/services/service-request-form/service-request-form.styles";
const ServiceRequestDetails = () => {
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
        console.log(formFields);
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
                    <Heading>
                        <h2>Service Request Details</h2>
                        <div className="sub-heading">
                            <p>Date Issued: 23/10/24</p>
                            <p>Time Issued: 5:02pm</p>
                        </div>
                    </Heading>
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
                        </SelectOptionContainer>
                        <MessageContainer>
                            <p>Additional Information</p>
                            <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleChange}></textarea>
                        </MessageContainer>
                        <AttachmentContainer>
                            <p style={{textDecoration: 'underline', cursor: 'pointer', fontSize: '700'}}>View Attachments</p>
                        </AttachmentContainer>
                        <HistoryContainer>
                            <Heading>History Timeline</Heading>
                            <div className="item">
                                <div className="box"/>
                                <p>Oct 2, 2024, 10:15 AM: Service request submitted by tenant.</p>
                            </div>
                            <div className="item">
                                <div className="box"/>
                                <p>Oct 2, 2024, 1:00 PM: Request reviewed by admin.</p>
                            </div>
                            <div className="item">
                                <div className="box"/>
                                <p>Oct 2, 2024, 3:30 PM: Bright Tech Plumbing Services assigned to the job.</p>
                            </div>
                            <div className="item">
                                <div className="box"/>
                                <p>Oct 3, 2024, 2:00 PM: Service scheduled for repair to commence.</p>
                            </div>
                        </HistoryContainer>
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

export default ServiceRequestDetails;