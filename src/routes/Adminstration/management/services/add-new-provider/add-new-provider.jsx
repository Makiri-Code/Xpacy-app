import { useState, useContext, useRef } from "react";
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
 } from "./add-new-provider.styles";
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
import { FiPlus } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import isTokenExpired from "../../../../../utils/token/handleUserToken";
import fetchServer from "../../../../../utils/serverutils/fetchServer";
import { toast } from "sonner";

const AddNewProvider = () => {
    const {isProviderAssigned, userToken, server} = useContext(UserContext);
    const btnRef = useRef(null);
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
    const navigate = useNavigate();
    const [editStatus, setEditStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        btnRef.current.disabled = true;
        setShowLoader(true);
         if(isTokenExpired(userToken)){
            navigate('/admin/auth/log-in');
            return;
        }
        const response = await fetchServer('POST', formFields, userToken, 'service-provider/create-service-provider', server);
        if(response.success){
            toast.success(response.message);
            setFormFields(defaultFormFields);
        }
        btnRef.current.disabled = false;
        setShowLoader(false);
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
                       <h2>Add New Provider</h2>
                    </HeaderContainer>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <FormInput
                            required
                            label={"Provider's Name"}
                            id={'provider-name'}
                            placeholder={"Enter provider’s company name"}
                            name={'provider_name'}
                            type={'text'}
                            value={provider_name}
                            onChange={handleChange}
                        />
                        <Names>
                            <FormInput
                                required
                                label={"Contact's First Name"}
                                id={'first-name'}
                                placeholder={"Enter contact’s first name"}
                                name={'contact_first_name'}
                                type={'text'}
                                value={contact_first_name}
                                onChange={handleChange}
                            />
                            <FormInput
                                required
                                label={"Contact's Last Name"}
                                id={'last-name'}
                                placeholder={"Enter contact’s last name"}
                                name={'contact_last_name'}
                                type={'text'}
                                value={contact_last_name}
                                onChange={handleChange}
                            />
                        </Names>
                        <FormInput
                            required
                            label={'Email'}
                            id={'email'}
                            placeholder={"Enter provider’s email address"}
                            name={'email'}
                            type={'email'}
                            value={email}
                            onChange={handleChange}
                        />
                        <FormInput
                            required
                            label={'Phone Number'}
                            id={'phone'}
                            placeholder={"Enter provider’s phone number"}
                            name={'phone'}
                            type={'tel'}
                            value={phone}
                            onChange={handleChange}
                        />
                        <FormInput
                            required
                            label={'Address'}
                            id={'property-address'}
                            placeholder={"Enter provider’s address"}
                            name={'address'}
                            type={'text'}
                            value={address}
                            onChange={handleChange}
                        />
                            <Names>
                                <FormInput
                                    required
                                    label={'City/Town'}
                                    placeholder={"Enter city/town e.g Ikeja"}
                                    id={'city'}
                                    type={'text'}
                                    name={'city'}
                                    value={city}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    required
                                    label={'State'}
                                    placeholder={"Enter state e.g Lagos"}
                                    id={'state'}
                                    type={'text'}
                                    name={'state'}
                                    value={state}
                                    onChange={handleChange}
                                />
                            </Names>
                            <Names>
                                <FormInput
                                    required
                                    label={'Service Type'}
                                    placeholder={"E.g. Plumbing"}
                                    id={'service-type'}
                                    type={'text'}
                                    name={'service_type'}
                                    value={service_type}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    required
                                    label={'Building Type'}
                                    placeholder={"E.g. residential, commercial"}
                                    id={'building-type'}
                                    type={'text'}
                                    name={'buildingType'}
                                    value={buildingType}
                                    onChange={handleChange}
                                />
                            </Names>
                            <Names>
                                <FormInput
                                    required
                                    label={'Available days'}
                                    placeholder={"Enter provider’s available days"}
                                    id={'available-days'}
                                    type={'text'}
                                    name={'days_available'}
                                    value={days_available}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    required
                                    label={'Available time'}
                                    placeholder={"Enter provider’s available time"}
                                    id={'available-time'}
                                    type={'text'}
                                    name={'time_available'}
                                    value={time_available}
                                    onChange={handleChange}
                                />
                            </Names>
                            <div style={{alignSelf: 'center', marginTop: '32px'}}>
                                <Button 
                                    buttonType={{primaryBtn: true}}
                                    type={"submit"}
                                    btnRef={btnRef}
                                >
                                    <FiPlus style={{width: '24px', height: '24px'}}/>
                                    {
                                        showLoader ? (<ClipLoader size={25} color='#fff'/>) : ( 'Add New Provider')
                                    }
                                    
                                </Button>
                            </div>
                    </BookServicesForm>
                </BookServicesContent>
            </BookServicesContainer>
        </>
    );
}

export default AddNewProvider;