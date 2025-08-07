import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/formInput.component";
import { BsUpload } from "react-icons/bs";
import Button from "../../components/button/button";
import { IoClose } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ModalComponent from "../../components/modal/modal";
import styled from "styled-components";
import { UserContext } from "../../contexts/userContext";
import { IoArrowBack } from "react-icons/io5";
import xpacyLogo from "../../assets/x-pacy-logo.svg";
import "./application-form.styles.css";
import fetchServer from "../../utils/serverutils/fetchServer";
import FileUploader from "./../../components/file-uploader/file-uploader";
const DocumentBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  p,
  sapn {
    margin-bottom: 8px;
    color: var(--Base-02, #090914);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.05rem */
    span {
      color: var(--Neutrals-Neutrals900, #585858);
    }
  }
  .kyc-img {
    min-width: 350px;
    width: 100%;
    height: 200px;
    margin-top: 8px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .document-btn {
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
    background: var(--Base-Base-White, #fff);
    color: var(--Primary-Primary, #203645);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.2rem */
    margin-bottom: 8px;
    input[type="file"] {
      position: absolute;
      left: 0;
      opacity: 0;
    }
  }
  span {
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 141.4%; /* 1.0605rem */
    letter-spacing: 0.0075rem;
  }
  .document-btn:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;
const NavigationContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 24px 120px;
  align-items: start;
  border-bottom: 1px solid #e3ecf2;
`;
const LogoContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  img {
    width: 153.6px;
    height: 31.725px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const BackNav = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  span {
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.05rem */
  }
  &:hover {
    text-decoration: underline;
  }
`;
const ApplicationForm = () => {
  const navigate = useNavigate();
  const { userProfile, userToken, setUserProfile, server, setLoggedInUser } =
    useContext(UserContext);
  const btnRef = useRef(null);

  const [showUploadModal, setShowUpLoadModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [kycImageFile, setKycImageFile] = useState([]);
  const handleSelectImageFile = (acceptedFiles) => {
    setKycImageFile([...acceptedFiles]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    btnRef.current.disabled = true;
    const formData = new FormData();
    formData.append("kyc_image", kycImageFile[0]);
    try {
      const response = await fetch("https://app.xpacy.com/user/upload-kyc", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`, // Include token if needed
        },
        body: formData, // Send FormData (NOT JSON)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {}
    setShowSuccessModal(!showSuccessModal);
  };

  // Fetch userProfile on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetchServer(
          "GET",
          {},
          userToken,
          "user/fetch-profile",
          server
        );
        setUserProfile(response.user);
        setLoggedInUser(response.user);
      } catch (error) {
        console.log("Error getting user", error);
      }
    };
    fetchUserProfile();
  }, []);
  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <BackNav onClick={() => navigate(-1)}>
            <IoArrowBack style={{ width: "24px", height: "24px" }} />
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
                  name="firstname"
                  type="text"
                  value={userProfile?.firstname}
                  placeholder="Enter your first name"
                />
                <FormInput
                  label={"Last Name"}
                  required
                  id="last-name"
                  name="lastname"
                  type="text"
                  value={userProfile?.lastname}
                  placeholder="Enter your last name"
                />
              </div>
              <FormInput
                label={"Email"}
                id="e-mail"
                name="email"
                type="email"
                value={userProfile?.email}
                placeholder="Enter your Email"
              />
              <FormInput
                label={"Phone Number"}
                id="phoneNumber"
                name="phoneNum"
                type="tel"
                value={userProfile?.phoneNum}
                placeholder="+234 000 000 000"
              />
              <DocumentBtnContainer>
                <p>
                  Attach a copy of your valid government ID{" "}
                  <span>
                    (driver’s license, Int’l passport or Voter’s card)
                  </span>
                </p>
                {kycImageFile.length > 0 ? (
                  <div className="kyc-img">
                    <img src={kycImageFile[0].preview} alt="kyc" />
                  </div>
                ) : (
                  <>
                    <div
                      className="document-btn"
                      onClick={() => setShowUpLoadModal(true)}
                    >
                      <BsUpload style={{ width: "24px", height: "24px" }} />
                      Attach Document
                    </div>
                    <span>*upload file from your computer.</span>
                  </>
                )}
              </DocumentBtnContainer>
              {showUploadModal && (
                <div className="file-upload-container">
                  <div className="file-upload-modal">
                    <IoClose
                      className="close-icon"
                      onClick={() => setShowUpLoadModal(false)}
                    />
                    <FileUploader onFilesSelected={handleSelectImageFile} />
                  </div>
                </div>
              )}
              <Button
                buttonType={{ primaryBtn: true }}
                type={"submit"}
                className="align-self-center custom-btn"
              >
                Submit Application
              </Button>
            </form>
          </main>
        </div>
      </div>
      {showSuccessModal && (
        <ModalComponent>
          <div className="confirmed-application">
            <IoClose
              className="confirmed-close-icon"
              onClick={() => setShowSuccessModal(!showSuccessModal)}
            />
            <h3>Your application has been sent successfully!</h3>
            <p>Our Admin will contact you shortly.</p>
          </div>
        </ModalComponent>
      )}
    </>
  );
};

export default ApplicationForm;
