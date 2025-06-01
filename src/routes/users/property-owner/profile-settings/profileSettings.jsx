import { useState, useContext, useEffect, useRef } from 'react';
import { UserDashboardTopNav } from '../../../../components/user-dashboard/user-dashboard.styles.jsx';
import TopNav from '../navigation/topnav/top-nav.jsx';
import userImage from '../../../../assets/user-profile-img.svg';
import { RiDeleteBin6Line } from "react-icons/ri";
import FormInput from '../../../../components/form-input/formInput.component';
import Button from '../../../../components/button/button';
import { FormCheck, FormSelect } from 'react-bootstrap';
import ModalComponent from '../../../../components/modal/modal';
import { SlOptionsVertical } from 'react-icons/sl';
import { PulseLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";
import { 
    ProfileSettingsContainer,
    ProfilePhotoTxt,
    ProfileContainer, 
    ProfileInfo, 
    UploadInput,
    ProfileUploadSection,
    PhotoInfo,
    PhotoInfoWrapper,
    UploadControls,
    UploadPictureLabel,
    DeleteBtnContainer,
    PersonalInfo,
    PersonalFormContainer,
    PersonalInfoHeading,
    SubmitControls,
    NameInputs,
    ResetButtonContainer,
    Divider,
    TwoFactorContainer,
    NotificationPrefrenceContainer,
    NotificationPrefrenceHeading,
    NotificationsInputsContainer,
    NotificationsTypeContainer,
    DeactivateModalHeading,
    DeactivateModalContent,
    ModalCardFooter,
    PaymentNotification
} from './profile-settings.styles.jsx';
import fetchServer from '../../../../utils/serverutils/fetchServer.js';
import { UserContext } from '../../../../contexts/userContext.jsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import isTokenExpired from '../../../../utils/token/handleUserToken.js';
const ProfileSettingsOwner = ({isMobile, showDashboardSidebar, setShowDashboardSidebar, ownerProfile, setOwnerProfile, profileImage, setProfileImage, notifications}) => {
    const {userToken, server} = useContext(UserContext);
    const [showPropertyStatus, setShowPropertyStatus] = useState(true);
    const navigate = useNavigate()

    const defaultPersonalFormFields = {
        first_name: ownerProfile?.first_name,
        last_name: ownerProfile?.last_name,
        email: ownerProfile?.email,
        phone: ownerProfile?.phone,
        address: ownerProfile?.address,
    }
    const defaultPasswords = {
        currentPassword: '',
        newPassword: ''
    }
    const btnRef = useRef(null)
    const [personalFormFields, setPersonalFormFields] = useState(defaultPersonalFormFields);
    const {firstname, lastname, email, phoneNumber, address} = personalFormFields;
    const [passwordFields, setPassWordFields] = useState(defaultPasswords);
    const {currentPassword, newPassword} = passwordFields;
    const [notificationRadio, setNotificationRadio] = useState('');
    const [state, setState] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const handleSecurityChange = (e) => {
        const {name, value} = e.target;
        setPassWordFields({
            ...passwordFields,
            [name]: value,
        });
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPersonalFormFields({
            ...personalFormFields,
            [name]: value,
        })
    }
    const handlePersonalFormSubmit = async (e) => {
        e.preventDefault();
        if(isTokenExpired(userToken)) {
            navigate("/auth/log-in");
            return;
        }
        btnRef.current.disabled = true;
        const response = await fetchServer("PUT", personalFormFields, userToken, 'property-owner/update-profile', server);
        if(response.success) {
            toast.success(response.message);
            setOwnerProfile(response.user);
        }
        btnRef.current.disabled = false;
    }

    const handlePasswordClick = () => {
        console.log(passwordFields);
    }
    const handleRadioChange = (e) => {
        const {name, value} = e.target;
       if(name){
            setNotificationRadio(value);
       }

    }
    const handleStatesChange = (e) => {
        const {name, value} = e.target;
        setState({
            [name]: value
        });
    }
    const uploadPhoto = async (file) => {
        const formData = new FormData();
        formData.append("display_picture", file); // 👈 Must match the server's expected field name
        try {
            const response = await fetch("https://app.xpacy.com/property-owner/upload-display-image", {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${userToken}`, // Include token if needed
              },
              body: formData, // Send FormData (NOT JSON)
            });
        
            const data = await response.json();
            setProfileImage(data.display_picture);
            setShowLoader(false);
          } catch (error) {
            console.error("Upload error:", error);
            setShowLoader(false);
          }
    }
  const handlePhotoUpload = async(e) => {
      setShowLoader(true);
      const {files} = e.target;      
        await uploadPhoto(files[0]);
    }  
    // display picture loading
    const adjustProfilePicture = () => {
        if(profileImage.includes(" ")){
            const adjusted = profileImage.replace(" ", "%20");
            return adjusted
        }
    }
    return(
        <>
                    <ProfileSettingsContainer>
                        <TopNav dashboardRoute={'Profile Settings'} isMobile={isMobile} setShowDashboardSidebar={setShowDashboardSidebar} showDashboardSidebar={showDashboardSidebar} profileImage={profileImage} notifications={notifications}/>
                        {
                            isMobile && (
                                <UserDashboardTopNav>
                                    <h5>Profile Settings</h5>
                                    <SlOptionsVertical style={{width: '24px', height: '24px'}} onClick={() => {}}/>
                                </UserDashboardTopNav>
                            )
                        }
                        {
                            isMobile && (
                                <>
                                    {
                                        
                                        showPropertyStatus && (
                                            <PaymentNotification className='pending'>
                                                <p>
                                                    The verification for your property application is pending.
                                                </p>
                                                <Button
                                                    buttonType={{primaryBtn: false}}
                                                    buttonHeight={'36px'}
                                                    buttonPadding={'16px'}
                                                >
                                                    View Details
                                                </Button>
                                            </PaymentNotification>
                                        )
                                        
                                    }
                                </>
                            )
                        }
                        <ProfileContainer>
                            <ProfileInfo>
                                <ProfilePhotoTxt>Profile Photo</ProfilePhotoTxt>
                                <ProfileUploadSection>
                                    <PhotoInfo>
                                        <div style={{width: '100px', height: '100px', background: `url(https://app.xpacy.com/src/upload/display_img/${profileImage?.includes(" ") ? profileImage.replace(" ", "%20") : profileImage}) lightgray 50% / cover no-repeat` ,  borderRadius: '100px', objectFit: 'contain'} } >
                                            {
                                                showLoader && <ClipLoader size={25} color="#fff" />
                                            }
                                        </div>
                                        <PhotoInfoWrapper>
                                            <h5>Profile photo</h5>
                                            <p>PNG, JPEG under 15MB</p>
                                        </PhotoInfoWrapper>
                                    </PhotoInfo>
                                    <UploadControls>
                                        <UploadPictureLabel htmlFor="upload-photo" >
                                            <UploadInput type="file" accept='.jpg, .png' name="display_picture" id="upload-photo" onChange={handlePhotoUpload}  />
                                            {ownerProfile?.display_picture ? "Change Photo" : "Upload Picture"}
                                        </UploadPictureLabel>
                                        <DeleteBtnContainer>
                                            <RiDeleteBin6Line style={{width: '24px', height: '24px'}}/>
                                        </DeleteBtnContainer>
                                    </UploadControls>
                                </ProfileUploadSection>
                            </ProfileInfo>
                            <PersonalInfo>
                                <PersonalInfoHeading>Personal Information</PersonalInfoHeading>
                                <PersonalFormContainer onSubmit={handlePersonalFormSubmit}>
                                    <NameInputs>
                                        <FormInput
                                            label={'First Name'}
                                            name={'firstname'}
                                            id="firstname"
                                            type="text"
                                            onChange={handleChange}
                                            value={ownerProfile?.first_name}
                                        />
                                        <FormInput
                                            label={'Last Name'}
                                            name={'lastname'}
                                            value={ownerProfile?.last_name}
                                            id="lastname"
                                            type="text"
                                            onChange={handleChange}
                                        />
                                    </NameInputs>
                                    <FormInput
                                        label={'email'}
                                        name={'email'}
                                        value={ownerProfile?.email}
                                        id="email"
                                        type="email"
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        label={'Phone number'}
                                        name={'phone'}
                                        placeholder={'+234 000 0000'}
                                        id="email"
                                        type="tel"
                                        pattern="[0-9]{11}"
                                        onChange={handleChange}
                                        value={ownerProfile?.phone}
                                    />
                                    <FormInput
                                        label={'Address'}
                                        name={'address'}
                                        placeholder={'Enter Address'}
                                        id="address"
                                        type="text"
                                        onChange={handleChange}
                                        value={ownerProfile?.address}
                                    />
                                    <SubmitControls>
                                        <Button buttonType={{primaryBtn: true}} type={'submit'} btnRef={btnRef}>Save Changes</Button>
                                        <Button buttonType={{primaryBtn: false}} type={'button'}>Cancel</Button>
                                    </SubmitControls>
                                </PersonalFormContainer>
                            </PersonalInfo>
                            <PersonalInfo>
                                <PersonalInfoHeading>Account Security</PersonalInfoHeading>
                                <PersonalFormContainer onSubmit={handlePersonalFormSubmit}>
                                    <FormInput
                                        label={'Current Password'}
                                        name={'currentPassword'}
                                        placeholder={'current password'}
                                        id="password"
                                        type="password"
                                        onChange={handleSecurityChange}
                                        value={currentPassword}
                                    />
                                    <FormInput
                                        label={'New Password'}
                                        name={'newPassword'}
                                        placeholder={'new password'}
                                        id="password"
                                        type="password"
                                        onChange={handleSecurityChange}
                                        value={newPassword}
                                    />
                                    <ResetButtonContainer>
                                        <Button buttonType={{primaryBtn: false}} type={'button'} onClick={handlePasswordClick} >Reset Password</Button>
                                    </ResetButtonContainer>
                                    <Divider/>
                                    {/* <TwoFactorContainer>
                                        <p>Two-Factor Authentication</p>
                                        <div class="form-switch" >
                                            <input type="checkbox" class="form-check-input" style={{width: '40px', height: '25px',}}/>
                                        </div>
                                    </TwoFactorContainer> */}
                                    <SubmitControls>
                                        <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                                    </SubmitControls>
                                </PersonalFormContainer>
                            </PersonalInfo>
                            <PersonalInfo>
                                <PersonalInfoHeading>Account Management</PersonalInfoHeading>
                                <SubmitControls>
                                        <Button 
                                            buttonType={{primaryBtn: false}} 
                                            type={'submit'} 
                                            background={'#FBC0BC'} 
                                            textColor={'#333333'}
                                            onClick={()=> setShowModal(true)}
                                        >
                                            Deactivate Account
                                        </Button>
                                </SubmitControls>
                            </PersonalInfo>
                            {
                                showModal && 
                                (
                                    <ModalComponent>
                                        <DeactivateModalContent>
                                            <DeactivateModalHeading>
                                                <h5>Are you sure you want to deactivate your account?</h5>
                                                <p>You would have to register again to reactivate your account.</p>
                                            </DeactivateModalHeading>
                                            <ModalCardFooter>
                                                <Button 
                                                    buttonType={{primaryBtn: false}} 
                                                    type={'submit'} 
                                                    background={'#FBC0BC'} 
                                                    textColor={'#333333'}
                                                    buttonPadding={'6px 16px'}
                                                    buttonHeight={'28px'}
                                                >
                                                    Yes, deactivate
                                                </Button>
                                                <Button 
                                                    buttonType={{primaryBtn: true}} 
                                                    type={'button'} 
                                                    background={'#FBC0BC'} 
                                                    textColor={'#333333'}
                                                    buttonPadding={'6px 16px'}
                                                    buttonHeight={'28px'}
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    No, undo
                                                </Button>
                                            </ModalCardFooter>
                                        </DeactivateModalContent>
                                    </ModalComponent>
                                )
                            }
                        </ProfileContainer>
                    </ProfileSettingsContainer>
        </>
    );
}

export default ProfileSettingsOwner;