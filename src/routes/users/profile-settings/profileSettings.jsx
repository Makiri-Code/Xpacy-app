import { useState, useContext, useEffect } from 'react';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import userImage from '../../../assets/user-profile-img.svg';
import { RiDeleteBin6Line } from "react-icons/ri";
import FormInput from '../../../components/form-input/formInput.component';
import Button from '../../../components/button/button';
import { FormCheck, FormSelect } from 'react-bootstrap';
import { PageContext } from '../../../contexts/page.context';
import ModalComponent from '../../../components/modal/modal';
import { UserDashboardTopNav } from '../../../components/user-dashboard/user-dashboard.styles.jsx';
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
import fetchServer from '../../../utils/serverutils/fetchServer.js';
import { UserContext } from '../../../contexts/userContext.jsx';

const ProfileSettings = ({isMobile, showDashboardSidebar, setShowDashboardSidebar, userProfile, profileImage, setProfileImage, notifications}) => {
    const {userToken} = useContext(UserContext);
    const [showPropertyStatus, setShowPropertyStatus] = useState(true);
    const [nigerianStates, setNigerianStates] = useState([]);
    // Get NigerianStates
    useEffect(() => {
        const getStatesData = async () => {
            try {
                const response = await fetch("https://app.xpacy.com/location/fetch-states", {method: "GET"});
                const data = await response.json();
                setNigerianStates(data.state);
            } catch (error) {
                console.error("Error", error);
            }
        }
        getStatesData();
    }, []);


    const defaultPersonalFormFields = {
        firstname: userProfile?.firstname,
        lastname: userProfile?.lastname,
        email: userProfile?.email,
        phoneNumber: userProfile?.phoneNumber,
        address: userProfile?.address,
    }
    const defaultPasswords = {
        currentPassword: '',
        newPassword: ''
    }
    
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
    const handlePersonalFormSubmit = (e) => {
        e.preventDefault();
        console.log(personalFormFields);
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
        console.log(state)
    }
    const uploadPhoto = async (file) => {
        const formData = new FormData();
        formData.append("display_picture", file); // 👈 Must match the server's expected field name
        try {
            const response = await fetch("https://app.xpacy.com/user/upload-display-image", {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${userToken}`, // Include token if needed
              },
              body: formData, // Send FormData (NOT JSON)
            });
        
            const data = await response.json();
            console.log("Server response:", data);
            setProfileImage(data.display_picture);
            setShowLoader(false);
          } catch (error) {
            console.error("Upload error:", error);
          }
    }
  const handlePhotoUpload = async(e) => {
      setShowLoader(true);
      const {files} = e.target;      
        await uploadPhoto(files[0]);
    }  
    // display picture loading

    return(
        <>
            {
                userProfile ? 
                (
                    <ProfileSettingsContainer>
                        <DashboardTopNav dashboardRoute={'Profile Settings'} isMobile={isMobile} setShowDashboardSidebar={setShowDashboardSidebar} showDashboardSidebar={showDashboardSidebar} profileImage={profileImage} notifications={notifications}/>
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
                                        <div style={{width: '100px', height: '100px', background: `url(${profileImage}) lightgray 50% / cover no-repeat` ,  borderRadius: '100px', objectFit: 'contain'} } >
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
                                            {userProfile?.display_picture ? "Change Photo" : "Upload Picture"}
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
                                            // placeholder={userProfile?.firstname}
                                            id="firstname"
                                            type="text"
                                            onChange={handleChange}
                                            value={firstname}
                                        />
                                        <FormInput
                                            label={'Last Name'}
                                            name={'lastname'}
                                            // placeholder={userProfile.lastname}
                                            id="lastname"
                                            type="text"
                                            onChange={handleChange}
                                            value={lastname}
                                        />
                                    </NameInputs>
                                    <FormInput
                                        label={'email'}
                                        name={'email'}
                                        // placeholder={userProfile.email}
                                        id="email"
                                        type="email"
                                        onChange={handleChange}
                                        value={email}
                                    />
                                    <FormInput
                                        label={'Phone number'}
                                        name={'phoneNumber'}
                                        placeholder={'+234 000 0000'}
                                        id="email"
                                        type="tel"
                                        pattern="[0-9]{11}"
                                        required
                                        onChange={handleChange}
                                        value={phoneNumber}
                                    />
                                    <FormInput
                                        label={'Address'}
                                        name={'address'}
                                        placeholder={'Enter Address'}
                                        id="address"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        value={address}
                                    />
                                    <SubmitControls>
                                        <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
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
                                    <TwoFactorContainer>
                                        <p>Two-Factor Authentication</p>
                                        <div class="form-switch" >
                                            <input type="checkbox" class="form-check-input" style={{width: '40px', height: '25px',}}/>
                                        </div>
                                    </TwoFactorContainer>
                                    <SubmitControls>
                                        <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                                    </SubmitControls>
                                </PersonalFormContainer>
                            </PersonalInfo>
                            <PersonalInfo>
                                <PersonalInfoHeading>Notification Preference</PersonalInfoHeading>
                                <PersonalFormContainer onSubmit={handlePersonalFormSubmit}>
                                    <NotificationPrefrenceContainer>
                                        <NotificationPrefrenceHeading>Notification Methods</NotificationPrefrenceHeading>
                                        <NotificationsInputsContainer onClick={handleRadioChange} >
                                            <div className="radio-btns">
                                                <input type="radio" name="notification_methods" id="notification_methods" value={'email'} defaultChecked/>
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className="radio-btns">
                                                <input type="radio" name="notification_methods" id="notification_methods" value={'app'}/>
                                                <label htmlFor="email">App</label>
                                            </div>
                                        </NotificationsInputsContainer>
                                    </NotificationPrefrenceContainer>
                                    <Divider/>
                                    <NotificationPrefrenceContainer>
                                        <NotificationPrefrenceHeading>Notification Type</NotificationPrefrenceHeading>
                                        <NotificationsTypeContainer onClick={handleRadioChange} >
                                            <div className="radio-btns">
                                                <input type="radio" name="radio" id="emailRadio" value={'email'} defaultChecked/>
                                                <label htmlFor="email">Services</label>
                                            </div>
                                            <div className="radio-btns">
                                                <input type="radio" name="radio" id="appRadio" value={'app'}/>
                                                <label htmlFor="email">Properties</label>
                                            </div>
                                            <div className="radio-btns">
                                                <input type="radio" name="radio" id="appRadio" value={'app'}/>
                                                <label htmlFor="email">Payments</label>
                                            </div>
                                        </NotificationsTypeContainer>
                                    </NotificationPrefrenceContainer>
                                    <Divider/>
                                    <TwoFactorContainer>
                                        <p>Two-Factor Authentication</p>
                                        <div class="form-switch" >
                                            <input type="checkbox" class="form-check-input" style={{width: '40px', height: '25px',}}/>
                                        </div>
                                    </TwoFactorContainer>
                                    <SubmitControls>
                                        <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                                    </SubmitControls>
                                </PersonalFormContainer>
                            </PersonalInfo>
                            <PersonalInfo>
                                <PersonalInfoHeading>Location Preference</PersonalInfoHeading>
                                <PersonalFormContainer onSubmit={handlePersonalFormSubmit}>
                                    <div className='signup-location'>
                                        <label htmlFor="state">Change selected location</label>
                                        <FormSelect name='state' required value={state}  onChange={handleStatesChange}>
                                            <option selected >Choose a Location</option>
                                            {
                                                nigerianStates &&
                                                nigerianStates.map((stateName) => {
                                                        const {location} = stateName
                                                        return (
                                                            <option key={location}>{location}</option>
                                                        )
                                                    })
                                            }
                                        </FormSelect>
                                    </div>
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
                ) :
                (
                    <PulseLoader
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "stretch",
                            height: "100vh",
                            width: '100%'
                        }}
                        margin={5}
                    />
                )
            }
        </>
    );
}

export default ProfileSettings;