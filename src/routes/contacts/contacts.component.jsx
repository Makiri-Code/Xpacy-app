import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import hero from '../../assets/contacts-img.png';
import FormInput from '../../components/form-input/formInput.component';
import Button from '../../components/button/button';
import ModalComponent from '../../components/modal/modal';
import './contacts.styles.css';

const Contacts = () => {
    const [showModal, setShowModal] = useState(false)
    const defaultFormFields = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {firstName, lastName, email, phoneNumber, message} = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formFields);
        setShowModal(true)
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
                            <div className="name-container d-flex justify-content-between align-self-stretch">
                                <FormInput
                                    label={'First Name'}
                                    id={'first-name'}
                                    placeholder={'Enter your first name'}
                                    name={'firstName'}
                                    type={'text'}
                                    value={firstName}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label={'Last Name'}
                                    id={'last-name'}
                                    placeholder={'Enter your last name'}
                                    name={'lastName'}
                                    type={'text'}
                                    value={lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <FormInput
                                label={'Email'}
                                id={'email'}
                                placeholder={'Enter your email address'}
                                name={'email'}
                                type={'email'}
                                value={email}
                                onChange={handleChange}
                            />
                            <FormInput
                                label={'Phone Number'}
                                id={'phone'}
                                placeholder={'+234000 000 0000'}
                                name={'phoneNumber'}
                                type={'tel'}
                                value={phoneNumber}
                                onChange={handleChange}
                            />
                            <div className="message-container">
                                <label>How can we help?</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type your message here' value={message} onChange={handleChange}></textarea>
                            </div>
                            <Button
                                buttonType={{primaryBtn: true}}
                                type={'submit'}
                            >
                                Send A Message
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