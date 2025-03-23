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

const ServicesProviderDetails = () => {
    const {isProviderAssigned, userToken, server} = useContext(UserContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [editStatus, setEditStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const defaultFormFields = {
        provider_name: '',
        contact_first_name: '',
        contact_last_name: '',
        email: '',
        phone: '',
        address: '',
        service_type: '',
        city: '',
        state: '',
        buildingType: '',
        days_available: '',
        time_available: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {
            provider_name,
            contact_first_name, 
            contact_last_name, 
            email, 
            phone, 
            address, 
            serviceDate,
            serviceTime, 
            service_type, 
            buildingType,
            city,
            state,
            days_available,
            time_available,
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
    useEffect(() => {
        const getProviderDetails = async () => {
            const response = await fetchServer('GET', {}, userToken, `service-provider/get-service-provider/${id}`, server);
            console.log(response);
            if(response.success){
                setFormFields(response.serviceProvider);
            }
        }
        getProviderDetails();
    }, []);
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
                       <h2>Service Provider Details</h2>
                    </HeaderContainer>
                    <BookServicesForm>
                        <FormInput
                            label={"Provider's Name"}
                            id={'provider-name'}
                            // placeholder={'Enter your first name'}
                            name={'provider_name'}
                            type={'text'}
                            value={provider_name}
                            // onChange={handleChange}
                        />
                        <Names>
                            <FormInput
                                label={"Contact's First Name"}
                                id={'first-name'}
                                // placeholder={'Enter your first name'}
                                name={'contact_first_name'}
                                type={'text'}
                                value={contact_first_name}
                                // onChange={handleChange}
                            />
                            <FormInput
                                label={"Contact's Last Name"}
                                id={'last-name'}
                                // placeholder={'Enter your last name'}
                                name={'contact_last_name'}
                                type={'text'}
                                value={contact_last_name}
                                // onChange={handleChange}
                            />
                        </Names>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            // placeholder={'Enter your email address'}
                            name={'email'}
                            type={'email'}
                            value={email}
                            // onChange={handleChange}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone'}
                            // placeholder={'+234000 000 0000'}
                            name={'phone'}
                            type={'tel'}
                            value={phone}
                            // onChange={handleChange}
                        />
                        <FormInput
                            label={'Address'}
                            id={'property-address'}
                            // placeholder={'Enter your address'}
                            name={'address'}
                            type={'text'}
                            value={address}
                            // onChange={handleChange}
                        />
                            <Names>
                                <FormInput
                                    label={'City/Town'}
                                    id={'city'}
                                    type={'text'}
                                    value={city}
                                />
                                <FormInput
                                    label={'State'}
                                    id={'state'}
                                    type={'text'}
                                    value={state}
                                />
                            </Names>
                            <Names>
                                <FormInput
                                    label={'Service Type'}
                                    id={'service-type'}
                                    type={'text'}
                                    value={service_type}
                                />
                                <FormInput
                                    label={'Building Type'}
                                    id={'building-type'}
                                    type={'text'}
                                    value={buildingType}
                                />
                            </Names>
                            <Names>
                                <FormInput
                                    label={'Available days'}
                                    id={'available-days'}
                                    type={'text'}
                                    value={days_available}
                                />
                                <FormInput
                                    label={'Available time'}
                                    id={'available-time'}
                                    type={'text'}
                                    value={time_available}
                                />
                            </Names>
                            <div style={{alignSelf: 'center'}}>
                                <Button 
                                    buttonType={{primaryBtn: true}}
                                    onClick={() => navigate(`/dashboard/admin/edit-provider/${id}`)}
                                >
                                    Edit Provider's Details
                                </Button>
                            </div>
                    </BookServicesForm>
                </BookServicesContent>
            </BookServicesContainer>
        </>
    );
}

export default ServicesProviderDetails;