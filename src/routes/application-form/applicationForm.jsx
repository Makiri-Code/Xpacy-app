import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/form-input/formInput.component';
import { BsUpload } from "react-icons/bs";
import Button from '../../components/button/button'
import { IoClose } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ModalComponent from '../../components/modal/modal';
import styled from 'styled-components';
import { UserContext } from '../../contexts/userContext';
import { IoArrowBack } from 'react-icons/io5';
import xpacyLogo from "../../assets/x-pacy-logo.svg";
import './application-form.styles.css';
const DocumentBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    p, sapn{
        margin-bottom: 8px;
        color: var(--Base-02, #090914);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
        span{
            color: var(--Neutrals-Neutrals900, #585858);
        }
    }
    .document-btn{
        align-self: flex-start;
        position: relative;
        display: flex;
        height: 48px;
        padding: var(--Spacing-ml, 24px);
        justify-content: center;
        align-items: center;
        gap: var(--Spacing-s, 8px);
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary, #203645);
        background: var(--Base-Base-White, #FFF);
        color: var(--Primary-Primary, #203645);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
        margin-bottom: 8px;
        input[type="file"]{
            position: absolute;
            left: 0;
            opacity: 0;
        }
    }
    span{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 141.4%; /* 1.0605rem */
        letter-spacing: 0.0075rem;
    }
    .document-btn:hover{
        filter: brightness(80%);
        cursor: pointer;
    }
`
const NavigationContainer = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 24px 120px;
    align-items: start;
    border-bottom: 1px solid #E3ECF2;
`
const LogoContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    img{
        width: 153.6px;
        height: 31.725px;
    }
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`
const BackNav = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
    }
    &:hover{
        text-decoration: underline;
    }
`
const ApplicationForm = () => {
    const navigate = useNavigate();
    const {userProfile} = useContext(UserContext)
    const inputRef = useRef(null);
    const defaultFormFields = {
        firstname: '',
        lastname: '',
        email: '',
        phoneNum: '',
        document: '',
    }
    const currFileObj = {
        nameOfFile: '',
        sizeOfFile: ''
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [file, setFile] = useState(currFileObj);
    const {nameOfFile, sizeOfFile} = file
    const {firstname, lastname, email, phoneNum, document} = formFields;
    const [showUploadModal, setShowUpLoadModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
        if(name === 'document'){
            const files = inputRef.current.files;
            for ( const uploadFile of files){
                setFile({
                    ...file,
                    nameOfFile: uploadFile.name,
                    sizeOfFile: Math.floor((uploadFile.size / (1024 * 1024))),
                });
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessModal(!showSuccessModal);

    }
    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default browser behavior
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
    
        const files = e.dataTransfer.items;
    
        // Allowed MIME types
        const allowedTypes = ['image/jpeg', 'image/png'];
    
        [...files].forEach((item) => {
            if (item.kind === 'file') {
                const file = item.getAsFile();
    
                // Validate the file type
                if (allowedTypes.includes(file.type)) {
                    // console.log('Valid File:', {
                    //     name: file.name,
                    //     size: file.size,
                    //     type: file.type,
                    // });
    
                    // Access the file content using FileReader
                    const reader = new FileReader();
    
                    // Event listener for when the file is read
                    reader.onload = (event) => {
                        const fileContent = event.target.result;
                        console.log('File Content:', fileContent);
    
                        // Further processing (e.g., display the image)
                    };
    
                    // Read the file as a data URL (useful for images)
                    reader.readAsDataURL(file);
    
                    // Other options:
                    // reader.readAsText(file); // For plain text files
                    // reader.readAsArrayBuffer(file); // For binary data
                } else {
                    console.error('Invalid File Type:', file.name);
                    alert(`The file "${file.name}" is not a valid image. Please upload a JPG or PNG file.`);
                }
            }
        });
    };
    
    return (
        <>
            <NavigationContainer>
              <LogoContainer>
                <BackNav onClick={() => navigate(-1)}>
                  <IoArrowBack style={{ width: '24px', height: '24px' }} />
                  <span>Back</span>
                </BackNav>
                <img src={xpacyLogo} alt="x-pacy logo" />
              </LogoContainer>
            </NavigationContainer>
            <div className="apply-form-container">
                <div className="apply-form-content">
                    <header>
                        <h1>Property Application Form</h1>
                        <p>Please fill in the required information below</p>
                    </header>
                    <main>
                        <h3>Applicant's Details</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="apply-name">
                                <FormInput
                                    label={"First Name"}
                                    required
                                    id="first-name"
                                    name='firstname'
                                    type="text"
                                    onChange={handleChange}
                                    value={userProfile?.firstname}
                                    placeholder="Enter your first name"
                                />
                                <FormInput
                                    label={"Last Name"}
                                    required
                                    id="last-name"
                                    name='lastname'
                                    type="text"
                                    onChange={handleChange}
                                    value={userProfile?.lastname}
                                    placeholder="Enter your last name"
                                />
                            </div>
                            <FormInput
                                label={"Email"}
                                required
                                id="e-mail"
                                name='email'
                                type="email"
                                onChange={handleChange}
                                value={userProfile?.email}
                                placeholder="Enter your Email"
                            />
                            <FormInput
                                label={"Phone Number"}
                                required
                                id="phoneNumber"
                                name='phoneNum'
                                type="tel"
                                onChange={handleChange}
                                value={userProfile?.phoneNum}
                                placeholder="+234 000 000 000"
                            />
                            <DocumentBtnContainer>
                                <p>Attach a copy of your valid government ID <span>(driver’s license, Int’l passport or Voter’s card)</span></p>
                                <div className="document-btn" onClick={() => setShowUpLoadModal(!showUploadModal)}>
                                    <BsUpload style={{width: '24px', height: '24px'}}/>
                                    Attach Document
                                </div>
                                <span>*upload file from your computer.</span>
                            </DocumentBtnContainer>
                            {
                                showUploadModal && 
                                (
                                    <div className="file-upload-container">
                                        <div className="file-upload-modal">
                                            <IoClose className='close-icon' onClick={() => setShowUpLoadModal(!showUploadModal)}/>
                                            <div className="modal-content">
                                                <div className="upload-area" onDrop={handleDrop} onDragOver={handleDragOver}>
                                                    <h3>Drag file here to upload</h3>
                                                    <span>or</span>
                                                    <div>
                                                        <input 
                                                            ref={inputRef}
                                                            type="file" 
                                                            name="document" 
                                                            id="document" 
                                                            value={document} 
                                                            accept='.png, .jpg, .jpeg' 
                                                            onChange={handleChange}
                                                        />
                                                        Browse Files
                                                    </div>
                                                    <p>Maximum file size: <strong>100MB</strong></p>
                                                    <p>Surported file type: <strong>JPEG, PNG</strong></p>
                                                </div>
                                                {
                                                    nameOfFile && 
                                                    (
                                                        <div className="progress-status">
                                                            <div className="file-info">
                                                                <div className="file-name">
                                                                    <IoIosCheckmarkCircleOutline className='success-icon'/>
                                                                    <span>{nameOfFile} <strong>{sizeOfFile}MB</strong></span>
                                                                </div>
                                                                <div className='progressBar ldBar' data-value='50' />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <Button
                                buttonType={{primaryBtn: true}}
                                type={'submit'}
                                className='align-self-center custom-btn'
                            >
                                Submit Application
                            </Button>
                        </form>
                    </main>
                </div>
            </div>
            {
                showSuccessModal && 
                (
                    <ModalComponent>
                        <div className="confirmed-application">
                            <IoClose className="confirmed-close-icon" onClick={() => setShowSuccessModal(!showSuccessModal)}/>
                            <h3>Your application has been sent successfully!</h3>
                            <p>Our Admin will contact you shortly.</p>
                        </div>
                    </ModalComponent>
                )
            }
        </>
    )
};

export default ApplicationForm;