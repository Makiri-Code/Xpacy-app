import { useState, useContext } from 'react';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import userImage from '../../../assets/user-profile-img.png';
import { RiDeleteBin6Line } from "react-icons/ri";
import FormInput from '../../../components/form-input/formInput.component';
import Button from '../../../components/button/button';
import { FormCheck } from 'react-bootstrap';
import { PageContext } from '../../../contexts/page.context';
import ModalComponent from '../../../components/modal/modal';
import './profile-settings.styles.css';
const ProfileSettings = () => {
    const {nigerianStates} = useContext(PageContext)
    const defaultPersonalFormFields = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
    }
    const defaultPasswords = {
        currentPassword: '',
        newPassword: ''
    }
    const [personalFormFields, setPersonalFormFields] = useState(defaultPersonalFormFields);
    const {firstName, lastName, email, phoneNumber, address} = personalFormFields;
    const [passwordFields, setPassWordFields] = useState(defaultPasswords);
    const {currentPassword, newPassword} = passwordFields;
    const [notificationRadio, setNotificationRadio] = useState('');
    const [state, setState] = useState('');
    const [showModal, setShowModal] = useState(false)

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

    return(
        <div className="notification-container">
            <DashboardTopNav dashboardRoute={'Profile Settings'}/>
            <main className='profile-container'>
                <div className="profile-info">
                    <h3>Profile Photo</h3>
                    <div className="photo-upload-section">
                        <div className="photo-info">
                            <div style={{width: '100px', height: '100px', background: `url(${userImage}) lightgray 50% / cover no-repeat `, borderRadius: '100px'}} />
                            <div className="d-flex align-items-start flex-column">
                                <h5>Profile photo</h5>
                                <p>PNG, JPEG under 15MB</p>
                            </div>
                        </div>
                        <div className="upload-controls">
                            <label htmlFor="upload-photo" className='upload-picture'>
                                <input type="file" name="profile-picture" id="upload-photo" />
                                Upload Picture
                            </label>
                            <div>
                                <RiDeleteBin6Line style={{width: '24px', height: '24px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personal-info">
                    <h3>Personal Information</h3>
                    <form onSubmit={handlePersonalFormSubmit}>
                        <div className='d-flex justify-content-between align-self-stretch personal-info-name'>
                            <FormInput
                                label={'First Name'}
                                name={'firstName'}
                                placeholder={'Emmanuel'}
                                id="firstName"
                                type="text"
                                onChange={handleChange}
                                value={firstName}
                            />
                            <FormInput
                                label={'Last Name'}
                                name={'lastName'}
                                placeholder={'Amakiri'}
                                id="lastName"
                                type="text"
                                onChange={handleChange}
                                value={lastName}
                            />
                        </div>
                        <FormInput
                            label={'email'}
                            name={'email'}
                            placeholder={'manuel.makiri@gmail.com'}
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
                            onChange={handleChange}
                            value={phoneNumber}
                        />
                        <FormInput
                            label={'Address'}
                            name={'address'}
                            placeholder={'Enter Address'}
                            id="address"
                            type="text"
                            onChange={handleChange}
                            value={address}
                        />
                        <div className="submit-controls">
                            <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                            <Button buttonType={{primaryBtn: false}} type={'button'}>Cancel</Button>
                        </div>
                    </form>
                </div>
                <div className="personal-info">
                    <h3>Account Security</h3>
                    <form onSubmit={handlePersonalFormSubmit}>
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
                        <div className="align-self-stretch d-flex justify-content-end">
                            <Button buttonType={{primaryBtn: false}} type={'button'} onClick={handlePasswordClick} >Reset Password</Button>
                        </div>
                        <div className='divider'/>
                        <div className="align-self-stretch d-flex justify-content-between">
                            <p>Two-Factor Authentication</p>
                            <div class="form-switch" >
                                <input type="checkbox" class="form-check-input" style={{width: '40px', height: '25px',}}/>
                            </div>
                        </div>
                        <div className="submit-controls">
                            <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                        </div>
                    </form>
                </div>
                <div className="personal-info">
                    <h3>Notification Preference</h3>
                    <form onSubmit={handlePersonalFormSubmit}>
                        <div className="notification-preference-container">
                            <p>Notification Methods</p>
                            <div className="notification-inputs-container" onClick={handleRadioChange} >
                                <div className="radio-btns">
                                    <input type="radio" name="emailradio" id="emailRadio" value={'email'} defaultChecked/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="radio-btns">
                                    <input type="radio" name="radio" id="appRadio" value={'app'}/>
                                    <label htmlFor="email">App</label>
                                </div>
                            </div>
                        </div>
                        <div className='divider'/>
                        <div className="notification-preference-container">
                            <p>Notification Type</p>
                            <div className="notification-type-container" onClick={handleRadioChange} >
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
                            </div>
                        </div>
                        <div className='divider'/>
                        <div className="align-self-stretch d-flex justify-content-between">
                            <p>Two-Factor Authentication</p>
                            <div class="form-switch" >
                                <input type="checkbox" class="form-check-input" style={{width: '40px', height: '25px',}}/>
                            </div>
                        </div>
                        <div className="submit-controls">
                            <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                        </div>
                    </form>
                </div>
                <div className="personal-info">
                    <h3>Location Preference</h3>
                    <form onSubmit={handlePersonalFormSubmit}>
                        <div className='signup-location'>
                            <label htmlFor="state">Change selected location</label>
                            <select name='state' required value={state}  onChange={handleStatesChange}>
                                <option selected >Choose a Location</option>
                                {
                                    nigerianStates &&
                                    (
                                        nigerianStates.map((stateName) => {
                                            const {location} = stateName
                                            return (
                                                <option key={location}>{location}</option>
                                            )
                                        })
                                    )
                                }
                            </select>
                        </div>
                        <div className="submit-controls">
                            <Button buttonType={{primaryBtn: true}} type={'submit'}>Save Changes</Button>
                        </div>
                    </form>
                </div>
                <div className="personal-info">
                    <h3>Account Management</h3>
                    <div className="submit-controls">
                            <Button 
                                buttonType={{primaryBtn: false}} 
                                type={'submit'} 
                                background={'#FBC0BC'} 
                                textColor={'#333333'}
                                onClick={()=> setShowModal(true)}
                            >
                                Deactivate Account
                            </Button>
                    </div>
                </div>
                {
                    showModal && 
                    (
                        <ModalComponent>
                            <div className="deactivate-modal-content">
                                <div className="deactivate-card-header">
                                    <h5>Are you sure you want to deactivate your account?</h5>
                                    <p>You would have to register again to reactivate your account.</p>
                                </div>
                                <div className="card-footer">
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
                                </div>
                            </div>
                        </ModalComponent>
                    )
                }
            </main>
        </div>
    );
}

export default ProfileSettings;