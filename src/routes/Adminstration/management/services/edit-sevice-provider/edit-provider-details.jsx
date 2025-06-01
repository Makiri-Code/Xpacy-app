import { useState, useContext, useEffect, useRef } from "react";
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
 } from "./edit-service-provider.styles";
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
import { toast } from "sonner";
const EditServiceProvider = () => {
    const {isProviderAssigned, userToken, server} = useContext(UserContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const btnRef = useRef(null);
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
        const response = await fetchServer("PUT", formFields, userToken, `service-provider/update-service-provider/${id}`, server);
        toast.success(response.message);

        btnRef.current.disabled = false;

    }
    useEffect(() => {
        const getProviderDetails = async () => {
            const response = await fetchServer('GET', {}, userToken, `service-provider/get-service-provider/${id}`, server);
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
                       <h2>Edit Provider's Details</h2>
                    </HeaderContainer>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <FormInput
                            label={"Provider's Name"}
                            required
                            id={'provider-name'}
                            placeholder={'Enter provider first name'}
                            name={'provider_name'}
                            type={'text'}
                            value={provider_name}
                            onChange={handleChange}
                        />
                        <Names>
                            <FormInput
                                label={"Contact's First Name"}
                                required
                                id={'first-name'}
                                placeholder={'Enter provider first name'}
                                name={'contact_first_name'}
                                type={'text'}
                                value={contact_first_name}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={"Contact's Last Name"}
                                id={'last-name'}
                                required
                                placeholder={'Enter provider last name'}
                                name={'contact_last_name'}
                                type={'text'}
                                value={contact_last_name}
                                onChange={handleChange}
                            />
                        </Names>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            required
                            placeholder={'Enter provider email address'}
                            name={'email'}
                            type={'email'}
                            value={email}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone'}
                            required
                            placeholder={'+234000 000 0000'}
                            name={'phone'}
                            type={'tel'}
                            value={phone}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Address'}
                            id={'property-address'}
                            required
                            placeholder={'Enter provider address'}
                            name={'address'}
                            type={'text'}
                            value={address}
                            onChange={handleChange}
                        />
                        <Names>
                            <FormInput
                                label={'City/Town'}
                                id={'city'}
                                required
                                type={'text'}
                                name={'city'}
                                value={city}
                                onChange={handleChange}

                            />
                            <FormInput
                                label={'State'}
                                id={'state'}
                                type={'text'}
                                required
                                name={'state'}
                                value={state}
                                onChange={handleChange}
                            />
                        </Names>
                        <Names>
                            <FormInput
                                label={'Service Type'}
                                id={'service-type'}
                                type={'text'}
                                required
                                name={'service_type'}
                                value={service_type}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Building Type'}
                                id={'building-type'}
                                type={'text'}
                                name={'buildingType'}
                                value={buildingType}
                                onChange={handleChange}
                            />
                        </Names>
                        <Names>
                            <FormInput
                                label={'Available days'}
                                id={'available-days'}
                                type={'text'}
                                required
                                name={'days_available'}
                                value={days_available}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Available time'}
                                id={'available-time'}
                                required
                                type={'text'}
                                name={'time_available'}
                                value={time_available}
                                onChange={handleChange}
                            />
                        </Names>
                        <div style={{alignSelf: 'center', marginTop: '32px'}}>
                            <Button 
                                buttonType={{primaryBtn: true}}
                                btnRef={btnRef}
                            >
                            Save Changes
                            </Button>
                        </div>
                    </BookServicesForm>
                </BookServicesContent>
            </BookServicesContainer>
        </>
    );
}

export default EditServiceProvider;