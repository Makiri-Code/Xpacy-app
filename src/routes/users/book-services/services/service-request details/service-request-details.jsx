import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import fetchServer from "../../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../../contexts/userContext";
import { PulseLoader } from "react-spinners";
const ServiceRequestDetails = ({userProfile}) => {
    const {id} = useParams();
    const {userToken, server} = useContext(UserContext);
    const [serviceDetails, setServiceDetails] = useState(null);
    useEffect(() => {
        const getServiceDetails = async () => {
            const response = await fetchServer("GET", {}, userToken, `user/fetch-service/${id}`, server);
            setServiceDetails(response.data);
        }
        getServiceDetails();
    }, [])
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const defaultFormFields = {
        firstName: userProfile?.firstname,
        lastName: userProfile?.lastname,
        email: userProfile?.email,
        phoneNumber: userProfile?.phonenumber,
        propertyAddress: serviceDetails?.address,
        serviceType: serviceDetails?.service_type,
        buildingType: serviceDetails?.building_type,
        serviceDate: serviceDetails?.scheduled_date,
        serviceTime: serviceDetails?.scheduled_time,
        message: serviceDetails?.service_description,
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
    const formatDate = (dateStr) =>{
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB');
    }
    const formatTime = (timeStr) => {
        const date = new Date(timeStr);
        return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
    }
    return(
        <>
            {
                serviceDetails && userProfile? 

                (
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
                                    <p>Date Issued: <span>{formatDate(serviceDetails.created_at)}</span></p>
                                    <p>Time Issued: <span>{formatTime(serviceDetails.created_at)}</span></p>
                                </div>
                            </Heading>
                            <BookServicesForm>
                                <Names>
                                    <FormInput
                                        label={'First Name'}
                                        id={'first-name'}
                                        name={'firstName'}
                                        type={'text'}
                                        value={userProfile?.firstname}
                                        // onChange={handleChange}
                                    />
                                    <FormInput
                                        label={'Last Name'}
                                        id={'last-name'}
                                        name={'lastName'}
                                        type={'text'}
                                        value={userProfile?.lastname}
                                        // onChange={handleChange}
                                    />
                                </Names>
                                <FormInput
                                    label={'Email'}
                                    id={'email'}
                                    name={'email'}
                                    type={'email'}
                                    value={userProfile?.email}
                                    // onChange={handleChange}
                                />
                                <FormInput
                                    label={'Phone Number'}
                                    id={'phone'}
                                    name={'phoneNumber'}
                                    type={'tel'}
                                    value={userProfile?.phonenumber}
                                    // onChange={handleChange}
                                />
                                <FormInput
                                    label={'Property Address'}
                                    id={'property-address'}
                                    name={'propertyAddress'}
                                    type={'text'}
                                    value={serviceDetails?.address}
                                    // onChange={handleChange}
                                />
                                <SelectOptionContainer>
                                    <SelectContainer>
                                        <SelectOption>
                                            <FormInput
                                                label={'Service Type'}
                                                id={'service-type'}
                                                name={'serviceType'}
                                                type={'text'}
                                                value={serviceDetails?.service_type}
                                                // onChange={handleChange}
                                            />
                                        </SelectOption>
                                        <SelectOption>
                                            <FormInput
                                                label={'Building Type'}
                                                id={'service-type'}
                                                name={'buildingType'}
                                                type={'text'}
                                                value={serviceDetails?.building_type}
                                                // onChange={handleChange}
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
                                                value={serviceDetails?.scheduled_date}
                                                // onChange={handleChange}
                                            />
                                        </SelectOption>
                                        <SelectOption>
                                            <FormInput
                                                label={'Schedule Visit Time'}
                                                id={'service-time'}
                                                name={'serviceTime'}
                                                type={'text'}
                                                value={serviceDetails?.scheduled_time}
                                                // onChange={handleChange}
                                            />
                                        </SelectOption>
                                    </SelectContainer>
                                </SelectOptionContainer>
                                <MessageContainer>
                                    <p>Additional Information</p>
                                    <textarea name="message" id="message" cols="30" rows="10" value={serviceDetails?.service_description}></textarea>
                                </MessageContainer>
                                <AttachmentContainer>
                                    <p style={{textDecoration: 'underline', cursor: 'pointer', fontSize: '700'}}>View Attachments</p>
                                </AttachmentContainer>
                                {/* <HistoryContainer>
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
                                </HistoryContainer> */}
                            </BookServicesForm>
                        </BookServicesContent>
                    </BookServicesContainer>
                ):
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
    )
};

export default ServiceRequestDetails;