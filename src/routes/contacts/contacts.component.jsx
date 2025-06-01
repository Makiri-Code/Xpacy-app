import { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import hero from '../../assets/contacts-img.png';
import FormInput from '../../components/form-input/formInput.component';
import Button from '../../components/button/button';
import ModalComponent from '../../components/modal/modal';
import fetchServer from "../../utils/serverutils/fetchServer";
import { ClipLoader } from 'react-spinners';
import { UserContext } from './../../contexts/userContext';
import './contacts.styles.css';
const Contacts = () => {
    const {server} = useContext(UserContext);
    const btnRef = useRef(null);
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const defaultFormFields = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {first_name, last_name, email, phone, message} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
             [name]: value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        btnRef.current.disabled = true;
        setShowLoader(true);
        const response = await fetchServer("POST", formFields, '', 'contact/send-mail', server);
        if(response.success){
            setShowModal(true)
        }
        btnRef.current.disabled = false;
        setShowLoader(false);
        setFormFields(defaultFormFields);
    }
    return (
        <>
            <div className='contacts-container'>
                <div className="header d-flex flex-column align-items-start">
                    <div className="header-navigation">
                        <Link to={'/'} className="header-nav-text">Home</Link> <span><IoChevronForward/></span> <span className="header-nav-text" style={{color:  "#007BFF"}}>Contacts</span>
                    </div>
                    <div className="header-text-container">
                            <h1 className="header-heading">Contact Us</h1>
                            
                    </div>
                </div>
                <main>
                    <div className="form-container">
                        <h2>We would love to hear from you!</h2>
                        <p>Have a question or need assistance? Fill out the form below, and we'll get back to you shortly.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="name-container">
                                <FormInput
                                    label={'First Name'}
                                    id={'first-name'}
                                    placeholder={'Enter your first name'}
                                    name={'first_name'}
                                    type={'text'}
                                    value={first_name}
                                    required
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label={'Last Name'}
                                    id={'last-name'}
                                    placeholder={'Enter your last name'}
                                    name={'last_name'}
                                    type={'text'}
                                    required
                                    value={last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <FormInput
                                label={'Email'}
                                id={'email'}
                                placeholder={'Enter your email address'}
                                name={'email'}
                                type={'email'}
                                required
                                value={email}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Phone Number'}
                                id={'phone'}
                                placeholder={'+234000 000 0000'}
                                name={'phone'}
                                type={'tel'}
                                required
                                value={phone}
                                onChange={handleChange}
                            />
                            <div className="message-container">
                                <label>How can we help?</label>
                                <textarea name="message" id="message" required cols="30" rows="10" placeholder='Type your message here' value={message} onChange={handleChange}></textarea>
                            </div>
                            <Button
                                buttonType={{primaryBtn: true}}
                                type={'submit'}
                                btnRef={btnRef}
                            >
                               {
                                    showLoader ? (<ClipLoader size={25} color='#fff'/>) : 'Send A Message'
                                } 
                            </Button>
                        </form>
                    </div>
                    <img src={hero} alt="" />
                </main>
            </div>
            {
                showModal && 
                (
                    <ModalComponent>
                        <div className="book-services-modal">
                            <IoClose style={{width: '24px', height: '24px', alignSelf: 'flex-end', cursor: 'pointer'}} onClick={() => setShowModal(!showModal)} title='close'/>
                            <h3>Thank you for contacting us</h3>
                            <p>We will get back to you shortly</p>
                        </div>
                    </ModalComponent>
                )
            }
        </>
    );
}

export default Contacts;