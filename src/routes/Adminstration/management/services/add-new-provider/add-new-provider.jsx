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
const AddNewProvider = () => {
    const {isProviderAssigned} = useContext(UserContext);
    const navigate = useNavigate();
    const [editStatus, setEditStatus] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [formFields, setFormFields] = useState({
        providerName: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        serviceType: '',
        city: '',
        state: '',
        buildingType: '',
        availableDays: '',
        availableTime: '',
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
                       <h2>Add New Provider</h2>
                    </HeaderContainer>
                    <BookServicesForm onSubmit={handleSubmit}>
                        <FormInput
                            required
                            label={"Provider's Name"}
                            id={'provider-name'}
                            placeholder={"Enter provider’s company name"}
                            name={'providerName'}
                            type={'text'}
                            value={providerName}
                            onChange={handleChange}
                        />
                        <Names>
                            <FormInput
                                required
                                label={"Contact's First Name"}
                                id={'first-name'}
                                placeholder={"Enter contact’s first name"}
                                name={'firstName'}
                                type={'text'}
                                value={firstName}
                                onChange={handleChange}
                            />
                            <FormInput
                                required
                                label={"Contact's Last Name"}
                                id={'last-name'}
                                placeholder={"Enter contact’s last name"}
                                name={'lastName'}
                                type={'text'}
                                value={lastName}
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
                            name={'phoneNumber'}
                            type={'tel'}
                            value={phoneNumber}
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
                                    name={'serviceType'}
                                    value={serviceType}
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
                                    name={'availableDays'}
                                    value={availableDays}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    required
                                    label={'Available time'}
                                    placeholder={"Enter provider’s available time"}
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
                                    type={"submit"}
                                >
                                    <FiPlus style={{width: '24px', height: '24px'}}/>Add New Provider
                                </Button>
                            </div>
                    </BookServicesForm>
                </BookServicesContent>
            </BookServicesContainer>
        </>
    );
}

export default AddNewProvider;