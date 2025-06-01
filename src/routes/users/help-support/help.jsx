import { useState, useContext } from 'react';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import FormInput from '../../../components/form-input/formInput.component';
import './help-support.styles.jsx';
import Button from '../../../components/button/button';
import Faq from '../../../components/faq/faq.component';
import ModalComponent from '../../../components/modal/modal';
import { IoClose } from 'react-icons/io5';
import { SlOptionsVertical } from 'react-icons/sl';
import { PageContext } from '../../../contexts/page.context.jsx';
import { UserDashboardTopNav } from '../../../components/user-dashboard/user-dashboard.styles.jsx';
import { 
    TextArea, 
    TextAreaContainer,
    HelpAndSupportContainer, 
    SupportContainer,
    SupportForm,
    SupportFormContainer,
    SupportFormHeader,
    PersonalName,
    Label,
    FaqContainer,
    SupportModalContent,
} from './help-support.styles.jsx';
const HelpAndSupport = ({notifications, profileImage, isMobile, showDashboardSidebar,setShowDashboardSidebar}) => {
    const {faqs} = useContext(PageContext); 
    const defaultFormFields = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {firstName, lastName, email, subject, message} = formFields;
    const [showModal, setShowModal] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormFields(defaultFormFields);
        setShowModal(!showModal)
    }
    return(
        <HelpAndSupportContainer>
        <DashboardTopNav notifications={notifications} profileImage={profileImage} dashboardRoute={'Help/Support'} isMobile={isMobile} showDashboardSidebar={showDashboardSidebar} setShowDashboardSidebar={setShowDashboardSidebar}/>
            {
                isMobile && (
                    <UserDashboardTopNav>
                        <h5>Help/Support</h5>
                        <SlOptionsVertical style={{width: '24px', height: '24px'}} onClick={() => {}}/>
                    </UserDashboardTopNav>
                )
            }
            <SupportContainer>
                <SupportFormContainer>
                    <SupportFormHeader>
                        <h5>Need Help?</h5>
                        <p>Have a question or need assistance? Fill out the form below, and we'll get back to you shortly.</p>
                    </SupportFormHeader>
                    <SupportForm onSubmit={handleFormSubmit}>
                            <PersonalName>
                                <FormInput
                                    label={'First Name'}
                                    name={'firstName'}
                                    placeholder={'Enter your first name'}
                                    id="firstName"
                                    type="text"
                                    onChange={handleChange}
                                    value={firstName}
                                    required
                                />
                                <FormInput
                                    label={'Last Name'}
                                    name={'lastName'}
                                    placeholder={'Enter your last name'}
                                    id="lastName"
                                    type="text"
                                    onChange={handleChange}
                                    value={lastName}
                                    required
                                />
                            </PersonalName>
                            <FormInput
                                label={'email'}
                                name={'email'}
                                placeholder={'Enter your email'}
                                id="email"
                                type="email"
                                onChange={handleChange}
                                value={email}
                                required
                            />
                            <FormInput
                                label={'Subject'}
                                name={'subject'}
                                placeholder={'Enter the subject of your message'}
                                id="subject"
                                type="text"
                                onChange={handleChange}
                                value={subject}
                                required
                            />
                            <TextAreaContainer>
                                <Label htmlFor="message">How can we help?</Label>
                                <TextArea name="message" id="message" rows="5" value={message} required onChange={handleChange}></TextArea>
                            </TextAreaContainer>
                            <Button
                                buttonType={{primaryBtn: true}}
                                type={'submit'}
                                className = 'align-self-stretch custom-btn'
                            >Send A Message</Button>
                    </SupportForm>
                        {
                            showModal && 
                            (
                                <ModalComponent>
                                    <SupportModalContent>
                                        <IoClose 
                                            style={{width: '24px', height: '24px', cursor: 'pointer'}}  
                                            onClick={() => setShowModal(!showModal)}
                                        />
                                        <h3>Thank you for contacting us!</h3>
                                        <p>We will get back to you shortly.</p>
                                    </SupportModalContent>
                                </ModalComponent>
                            )
                        }
                </SupportFormContainer>
                <FaqContainer>
                    <h5>Frequently Asked Questions (FAQ)</h5>
                    <div className="align-self-stretch">
                        {
                            faqs?.map(({question, answer}, index) => (
                                <Faq 
                                    showDivider={index == 0 ? false : true}
                                    heading={question}
                                    answer={answer}
                                />
                            ))
                        }
                    </div>
                </FaqContainer>
            </SupportContainer>
        </HelpAndSupportContainer>
    )
}

export default HelpAndSupport;