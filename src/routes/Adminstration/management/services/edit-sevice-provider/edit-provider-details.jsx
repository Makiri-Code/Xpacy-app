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

const EditServiceProvider = () => {
    const {isProviderAssigned} = useContext(UserContext);
    const navigate = useNavigate();
    const [editStatus, setEditStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [formFields, setFormFields] = useState({
        providerName: 'Bright Plumbing',
        firstName: 'Bright',
        lastName: 'Nelson',
        email: 'bplumbing@gmail.com',
        phoneNumber: '+234 000000000',
        address: '16, Awolowo Way, Ikoyi, Lagos',
        serviceType: 'Plumbing',
        city: 'Ikoyi',
        state: 'Lagos',
        buildingType: 'Residential, Commercial',
        availableDays: 'Mondays-Fridays',
        availableTime: '8am - 6pm',
    });

    const {
            providerName,
            firstName, 
            lastName, 
            email, 
            phoneNumber, 
            address, 
            serviceDate,
            serviceTime, 
            serviceType, 
            buildingType,
            city,
            state,
            availableDays,
            availableTime,
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
                       <h2>Edit Provider's Details</h2>
                    </HeaderContainer>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <FormInput
                            label={"Provider's Name"}
                            id={'provider-name'}
                            // placeholder={'Enter your first name'}
                            name={'providerName'}
                            type={'text'}
                            value={providerName}
                            onChange={handleChange}
                        />
                        <Names>
                            <FormInput
                                label={"Contact's First Name"}
                                id={'first-name'}
                                // placeholder={'Enter your first name'}
                                name={'firstName'}
                                type={'text'}
                                value={firstName}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={"Contact's Last Name"}
                                id={'last-name'}
                                // placeholder={'Enter your last name'}
                                name={'lastName'}
                                type={'text'}
                                value={lastName}
                                onChange={handleChange}
                            />
                        </Names>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            // placeholder={'Enter your email address'}
                            name={'email'}
                            type={'email'}
                            value={email}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone'}
                            // placeholder={'+234000 000 0000'}
                            name={'phoneNumber'}
                            type={'tel'}
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                        <FormInput
                            label={'Address'}
                            id={'property-address'}
                            // placeholder={'Enter your address'}
                            name={'address'}
                            type={'text'}
                            value={address}
                            onChange={handleChange}
                        />
                            <Names>
                                <FormInput
                                    label={'City/Town'}
                                    id={'city'}
                                    type={'text'}
                                    name={'city'}
                                    value={city}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label={'State'}
                                    id={'state'}
                                    type={'text'}
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
                                    name={'serviceType'}
                                    value={serviceType}
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
                                    name={'availableDays'}
                                    value={availableDays}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label={'Available time'}
                                    id={'available-time'}
                                    type={'text'}
                                    name={'availableTime'}
                                    value={availableTime}
                                    onChange={handleChange}
                                />
                            </Names>
                            <div style={{alignSelf: 'center'}}>
                                <Button 
                                    buttonType={{primaryBtn: true}}
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