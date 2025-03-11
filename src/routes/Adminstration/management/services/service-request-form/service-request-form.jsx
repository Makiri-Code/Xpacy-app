import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import FormInput from "../../../../../components/form-input/formInput.component";
import Button from "../../../../../components/button/button";
import { FaAngleDown } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { UserContext } from "../../../../../contexts/userContext";
import ModalComponent from "../../../../../components/modal/modal";
import { IoClose } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import xpacyLogo from "../../../../../assets/x-pacy-logo.svg";
import { 
    NavigationContainer,
    LogoContainer,
    BackNav,

 } from "../../properties/add-new-property/add-new-property.styles";
import { 
    HeaderContainer,
    Link,
    InputContainer,
    Details,
    Inputs,
    Input,
    Heading,
    HistoryContainer,
 } from "./service-request-form.styles";
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
    } from "../../../../services/book-services";
import { IoArrowBack } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const ServicesRequestForm = () => {
    const {isProviderAssigned} = useContext(UserContext);
    const navigate = useNavigate();
    const [editStatus, setEditStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
        serviceProviderName: '',
        serviceStatus: '',
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
            serviceProviderName,
            serviceStatus,
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

    }
    return (
        <>
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
                    <HeaderContainer>
                        <div className="header">
                            <h2>Service Request Details</h2>
                            <SlOptionsVertical style={{width: '24px', height: '24px'}}/>
                        </div>
                        <div className="sub-heading">
                            <p>Date Issued: 25/01/25</p>
                            <p>Time Issued: 5:02pm</p>
                        </div>
                    </HeaderContainer>
                    <BookServicesForm onSubmit={handleSubmit}>
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
                                <FormInput
                                    label={'Service Type'}
                                    id={'service-type'}
                                    type={'text'}
                                    value={serviceType}
                                />
                                <FormInput
                                    label={'Building Type'}
                                    id={'building-type'}
                                    type={'text'}
                                    value={buildingType}
                                />
                            </SelectContainer>
                            <SelectContainer>
                                <FormInput
                                    label={'Scheduled Date'}
                                    id={'scheduled-date'}
                                    type={'text'}
                                    value={serviceDate}
                                />
                                <FormInput
                                    label={'Scheduled Time'}
                                    id={'scheduled-time'}
                                    type={'text'}
                                    value={serviceTime}
                                />
                            </SelectContainer>
                        </SelectOptionContainer>
                        <MessageContainer>
                            <p>Additional Information</p>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here' value={message} onChange={handleChange}></textarea>
                        </MessageContainer>
                        <AttachmentContainer>
                            <Link>View attachements</Link>
                        </AttachmentContainer>
                        {
                            isProviderAssigned ? 
                            (
                                <>
                                    
                                    <Details>
                                        <Heading>Service Provider Details</Heading>
                                        <InputContainer>
                                            <p>Service Provider</p>
                                            <Input type="text" name="service-provider" id="" value={serviceProviderName} />
                                        </InputContainer>
                                        <InputContainer>
                                            <p>Contact Info</p>
                                            <Inputs>
                                                <Input type="text" name="service-provider" id="" value={serviceProviderName} />
                                                <Input type="text" name="service-provider" id="" value={serviceProviderName} />
                                            </Inputs>
                                        </InputContainer>
                                        <InputContainer>
                                            <p>Service Status</p>
                                            {
                                                editStatus ? 
                                                (<Select name="service_status" id="" value={serviceStatus}>
                                                    <option name="service_status" value="in-progress">In progress</option>
                                                    <option name="service_status" value="upcoming">Upcoming</option>
                                                    <option name="service_status" value="pending">Pending</option>
                                                    <option name="service_status" value="completed">Completed</option>
                                                    <option name="service_status" value="cancelled">Cancelled</option>
                                                </Select>) :
                                                (<Input type="text" name="service-provider" id="" value={serviceProviderName} />)
                                            }
                                        </InputContainer>
                                        {
                                            editStatus ? 
                                            (
                                                <Button
                                                buttonType={{primaryBtn: true}}
                                                >
                                                    Save Changes
                                                </Button>
                                            ) : 
                                            (
                                                <Button
                                                    buttonType={{primaryBtn: false}}
                                                    onClick={() => setEditStatus(true)}
                                                >
                                                    Edit Status
                                                </Button>
                                            )
                                        }
                                    </Details>
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
                                </>
                            ) : 
                            (
                                <Button
                                    buttonType={{primaryBtn: true}}
                                    onClick={() => navigate('/dashboard/admin/assign-service-provider')}
                                >
                                    <RiUserSettingsLine style={{width: '24px', height: '24px'}}/>
                                    Assign Service Provider
                                </Button>
                            )
                        }
                    </BookServicesForm>
                </BookServicesContent>
            </BookServicesContainer>
            {/* {
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
            } */}
        </>
    );
}

export default ServicesRequestForm;