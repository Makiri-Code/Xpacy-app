import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookServicesContainer } from "../../../services/book-services"
import { Content, HeaderContainer, ProfilePhoto, SubHeading } from "../user-details/user-details.styles"
import { Container } from "../dashboard/management_dashboard.styles"
import { NameContainer } from "../properties/add-new-property/add-new-property.styles"
import FormInput from "../../../../components/form-input/formInput.component"
import { NavigationContainer, LogoContainer, BackNav } from "../properties/add-new-property/add-new-property.styles"
import { IoArrowBack } from "react-icons/io5"
import xpacyLogo from "../../../../assets/x-pacy-logo.svg";
import profileImage from "../../../../assets/profile-picture.png"
import { SlOptionsVertical } from "react-icons/sl";

const AdminDetails = () => {
    const navigate = useNavigate();
    const defaultFormFields = {
        firstname: 'Juliet',
        lastname: 'Okon',
        email: 'julietokon@gmail.com',
        phone_num: '+23481645670014',
        address: '2, Awolowo Way',
        state: 'Ikeja, Lagos',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {firstname, lastname, email, phone_num, address, state} = formFields;
    return (
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
            <Content>
                <HeaderContainer>
                    <div className="header">
                        <h2>User Details</h2>
                        <SlOptionsVertical style={{width: '24px', height: '24px'}}/>
                    </div>
                    <div className="sub-heading">
                        <p>User Since: 25/01/25</p>
                        <p>User Type: Admin</p>
                    </div>
                    <SubHeading>Personal Information</SubHeading>
                </HeaderContainer>
                <Container>
                    <ProfilePhoto src={profileImage} alt="Profile photo"></ProfilePhoto>
                    <NameContainer>
                        <FormInput
                            label={'First Name'}
                            id={'first-name'}
                            placeholder={'Enter your first name'}
                            type={'text'}
                            value={firstname}
                        />
                        <FormInput
                            label={'Last Name'}
                            id={'last-name'}
                            type={'text'}
                            value={lastname}
                        />
                    </NameContainer>
                    <NameContainer>
                        <FormInput
                            label={'Email'}
                            id={'email'}
                            type={'email'}
                            value={email}
                        />
                        <FormInput
                            label={'Phone Number'}
                            id={'phone_number'}
                            type={'text'}
                            value={phone_num}
                        />
                    </NameContainer>
                    <NameContainer>
                        <FormInput
                            label={'Residential Address'}
                            id={'address'}
                            type={'text'}
                            value={address}
                        />
                        <FormInput
                            label={'City, State'}
                            id={'state'}
                            type={'text'}
                            value={state}
                        />
                    </NameContainer>
                </Container>
            </Content>
        </BookServicesContainer>
    )
};

export default AdminDetails;