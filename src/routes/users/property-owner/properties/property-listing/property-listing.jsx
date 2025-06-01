import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
} from "./property-listing.styles";
import FormInput from "../../../../../components/form-input/formInput.component";
import { IoArrowBack } from "react-icons/io5";
import Button from "../../../../../components/button/button";
import ModalComponent from "../../../../../components/modal/modal";
import { TbCurrencyNaira } from "react-icons/tb";





const PropertyListing = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const defaultFormFields = {
        propertyName: '',
        propertyAddress: '',
        propertyStatus: '',
        contactMethod: '',
        propertyType: '',
        propertyPrice: '',
        message: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {
            propertyName, 
            propertyStatus, 
            propertyAddress, 
            contactMethod, 
            propertyType,
            message,
            propertyPrice,
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
                <BookServicesForm onSubmit={handleSubmit}>
                    <FormInput
                        label={'Property Name'}
                        id={'first-name'}
                        placeholder={'Enter your property name'}
                        name={'propertyName'}
                        type={'text'}
                        value={propertyName}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        label={'Property Address'}
                        id={'property-address'}
                        placeholder={'Enter your property address'}
                        name={'propertyAddress'}
                        type={'text'}
                        value={propertyAddress}
                        onChange={handleChange}
                    />
                    <SelectOptionContainer>
                        <SelectOption>
                            <Label>Preferred Contact Method</Label>
                            <Select 
                                name="contactMethod"
                                value={contactMethod}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select your preferred contact method</option>
                                <option value="phone call">Phone call</option>
                                <option value="email">Email</option>
                            </Select>
                        </SelectOption>
                        <SelectOption>
                            <Label>Property Type</Label>
                            <Select 
                                name="propertyType"
                                value={propertyType}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select property type</option>
                                <option value="Terrace">Terrace</option>
                            </Select>
                        </SelectOption>
                    </SelectOptionContainer>
                    <SelectOptionContainer>
                        <SelectOption>
                            <Label>Property Price</Label>
                            <div className="price">
                                <input type="number" name="propertyPrice" value={propertyPrice} onChange={handleChange} />
                                <TbCurrencyNaira className="naira-icon"/>
                            </div>
                        </SelectOption>
                        <SelectOption>
                            <Label>Property Status</Label>
                            <Select 
                                name="propertyStatus"
                                value={propertyStatus}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select property status</option>
                                <option value="sale">For Sale</option>
                                <option value="rent">For Rent</option>
                            </Select>
                        </SelectOption>
                    </SelectOptionContainer>
                    <MessageContainer>
                        <p>Additional Note</p>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder='Type your additional note here' value={message} onChange={handleChange}></textarea>
                    </MessageContainer>
                    <Button
                        buttonType={{primaryBtn: true}}
                        type={'submit'}
                    >
                        Submit Request
                    </Button>
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
    );
};

export default PropertyListing;
