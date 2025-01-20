import { useState, useRef } from 'react';
import FormInput from '../../components/form-input/formInput.component';
import { BsUpload } from "react-icons/bs";
import Button from '../../components/button/button'
import { IoClose } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import './application-form.styles.css';
import ModalComponent from '../../components/modal/modal';

const ApplicationForm = () => {
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
            console.log(file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formFields);
        setShowSuccessModal(!showSuccessModal);

    }
    const handleDragOver = (e) => {
        console.log('File is in the drop zone');
        e.preventDefault(); // Prevent default browser behavior
    };
    
    const handleDrop = (e) => {
        console.log('File is dropped');
        e.preventDefault();
    
        const files = e.dataTransfer.items;
    
        // Allowed MIME types
        const allowedTypes = ['image/jpeg', 'image/png'];
    
        [...files].forEach((item) => {
            if (item.kind === 'file') {
                const file = item.getAsFile();
    
                // Validate the file type
                if (allowedTypes.includes(file.type)) {
                    console.log('Valid File:', {
                        name: file.name,
                        size: file.size,
                        type: file.type,
                    });
    
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
            <div className="apply-form-container">
                <div className="apply-form-content">
                    <header>
                        <h1>Proerty Application Form</h1>
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
                                    value={firstname}
                                    placeholder="Enter your first name"
                                />
                                <FormInput
                                    label={"Last Name"}
                                    required
                                    id="last-name"
                                    name='lastname'
                                    type="text"
                                    onChange={handleChange}
                                    value={lastname}
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
                                value={email}
                                placeholder="Enter your Email"
                            />
                            <FormInput
                                label={"Phone Number"}
                                required
                                id="phoneNumber"
                                name='phoneNum'
                                type="tel"
                                onChange={handleChange}
                                value={phoneNum}
                                placeholder="+234 000 000 000"
                            />
                            <div className="document">
                                <p>Attach a copy of your valid government ID <span>(driver’s license, Int’l passport or Voter’s card)</span></p>
                                <div className="document-btn" onClick={() => setShowUpLoadModal(!showUploadModal)}>
                                    <BsUpload style={{width: '24px', height: '24px'}}/>
                                    Attach Document
                                </div>
                                <span>*upload file from your computer.</span>
                            </div>
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
                                                                <div className='progressBar' />
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
                                className='align-self-center'
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