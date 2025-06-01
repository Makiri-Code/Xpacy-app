import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import fetchServer from "../../../../../utils/serverutils/fetchServer";
import { PulseLoader } from "react-spinners";
const ServicesRequestForm = () => {

    const {isProviderAssigned, userToken, server} = useContext(UserContext);
    const {id} = useParams();
    const [serviceDetails, setServiceDetails] = useState(null)
    // Fetch service details
    useEffect(() => {
        const getServiceDetails = async () => {
            const response = await fetchServer("GET", {}, userToken, `service/fetch-service/${id}`, server);
            setServiceDetails(response.data)
        }
        getServiceDetails();
    }, []);
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
    // Format dateStr
    const formattedDate = new Date(serviceDetails?.scheduled_date).toLocaleDateString('en-GB').split("/").map((part, index) => (index === 2 ? part.slice(-2): part)).join("/")
    const converTo12HourFormat = (timeString) => {
        let [hours, minutes] = timeString?.split(":").map(Number);
        let period = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;   
        return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            {
                serviceDetails ? 
                (<BookServicesContainer>
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
                                <p>Date Issued: {formattedDate}</p>
                                <p>Time Issued: {converTo12HourFormat(serviceDetails?.scheduled_time)}</p>
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
                                    value={serviceDetails?.user.firstname}
                                />
                                <FormInput
                                    label={'Last Name'}
                                    id={'last-name'}
                                    placeholder={'Enter your last name'}
                                    name={'lastName'}
                                    type={'text'}
                                    value={lastName}
                                />
                            </Names>
                            <FormInput
                                label={'Email'}
                                id={'email'}
                                placeholder={'Enter your email address'}
                                name={'email'}
                                type={'email'}
                                value={serviceDetails?.user.email}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Phone Number'}
                                id={'phone'}
                                placeholder={'+234000 000 0000'}
                                name={'phoneNumber'}
                                type={'tel'}
                                value={serviceDetails?.user.phone}
                            />
                            <FormInput
                                label={'Property Address'}
                                id={'property-address'}
                                placeholder={'Enter your address'}
                                name={'propertyAddress'}
                                type={'text'}
                                value={serviceDetails?.address}
                            />
                            <SelectOptionContainer>
                                <SelectContainer>
                                    <FormInput
                                        label={'Service Type'}
                                        id={'service-type'}
                                        type={'text'}
                                        value={serviceDetails?.service_type}
                                    />
                                    <FormInput
                                        label={'Building Type'}
                                        id={'building-type'}
                                        type={'text'}
                                        value={serviceDetails?.building_type}
                                    />
                                </SelectContainer>
                                <SelectContainer>
                                    <FormInput
                                        label={'Scheduled Date'}
                                        id={'scheduled-date'}
                                        type={'text'}
                                        value={serviceDetails?.scheduled_date}
                                    />
                                    <FormInput
                                        label={'Scheduled Time'}
                                        id={'scheduled-time'}
                                        type={'text'}
                                        value={serviceDetails?.scheduled_time}
                                    />
                                </SelectContainer>
                            </SelectOptionContainer>
                            <MessageContainer>
                                <p>Additional Information</p>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here' value={serviceDetails?.service_description}></textarea>
                            </MessageContainer>
                            <AttachmentContainer>
                                <Link>View attachements</Link>
                            </AttachmentContainer>
                            {
                                serviceDetails?.serviceProvider ? 
                                (
                                    <>
                                        
                                        <Details>
                                            <Heading>Service Provider Details</Heading>
                                            <InputContainer>
                                                <p>Service Provider</p>
                                                <Input type="text" name="service-provider" id="" value={serviceDetails?.serviceProvider.provider_name} />
                                            </InputContainer>
                                            <InputContainer>
                                                <p>Contact Info</p>
                                                <Inputs>
                                                    <Input type="text" name="service-provider" id="" value={`${serviceDetails?.serviceProvider.contact_first_name}  ${serviceDetails?.serviceProvider.contact_last_name}`} />
                                                    <Input type="text" name="service-provider" id="" value={serviceDetails?.serviceProvider.phone} />
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
                                                    (<Input type="text" name="service-provider" id="" value={serviceDetails?.service_status} />)
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
                                        onClick={() => navigate(`/dashboard/admin/assign-service-provider/${id}`)}
                                    >
                                        <RiUserSettingsLine style={{width: '24px', height: '24px'}}/>
                                        Assign Service Provider
                                    </Button>
                                )
                            }
                        </BookServicesForm>
                    </BookServicesContent>
                </BookServicesContainer>) : 
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

export default ServicesRequestForm;