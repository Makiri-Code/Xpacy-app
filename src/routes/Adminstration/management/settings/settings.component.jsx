import {
  ProfileContainer,
  ProfileInfo,
  ProfilePhotoTxt,
  ProfileUploadSection,
  PhotoInfo,
  PhotoInfoWrapper,
  UploadControls,
  UploadPictureLabel,
  DeleteBtnContainer,
  PersonalInfo,
  PersonalInfoHeading,
  UploadInput,
  PersonalFormContainer,
  NameInputs,
  SubmitControls,
  DeactivateModalContent,
  DeactivateModalHeading,
  ModalCardFooter,
  ImageContainer,
  WebContainer,
  EditImageContainer,
  EditBtn,
  BannerImg,
  UploadModalContainer,
  CloseIcon,
} from "./setings.styles";
import ModalComponent from "../../../../components/modal/modal";
import FormInput from "../../../../components/form-input/formInput.component";
import { ClipLoader } from "react-spinners";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext, useState, useRef } from "react";
import Button from "../../../../components/button/button";
import { TwoFactorContainer } from "../../../users/profile-settings/profile-settings.styles";
import { NotificationTable } from "../dashboard/management_dashboard.styles";
import { ManagementDashboardContainer } from "../dashboard/management_dashboard.styles";
import TopNav from "../navigation/topnav/top-nav";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";
import { BannerContainer } from "./../../../home/home.styles";
import { toast } from "sonner";
import isTokenExpired from "../../../../utils/token/handleUserToken";
import { useNavigate } from "react-router-dom";
import BannerModal from "../../../../components/banner-modal/BannerModal";

const Settings = ({
  isMobile,
  userProfile,
  profileImage,
  setProfileImage,
  setHomePageBanners,
  homePageBanners,
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const btnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const navigate = useNavigate();
  const [showBannerLoader, setShowBannerLoader] = useState(false);
  const { userToken, server } = useContext(UserContext);
  const [bannerTitle, setBannerTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const defaultPersonalFormFields = {
    firstName:
      userProfile.role === "Super Admin"
        ? userProfile.username.charAt(0).toUpperCase() +
          userProfile.username.slice(1).toLowerCase()
        : userProfile?.username.split(" ")[0].charAt(0).toUpperCase() +
          userProfile?.username.split(" ")[0].slice(1).toLowerCase(),
    lastName:
      userProfile.role === "Super Admin"
        ? ""
        : userProfile?.username?.split(" ")[1].charAt(0).toUpperCase() +
          userProfile?.username.split(" ")[1].slice(1).toLowerCase(),
    email: userProfile?.email,
    phone: "",
    address: "",
  };
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [bannerID, setBannerID] = useState(null);
  const [personalFormFields, setPersonalFormFields] = useState(
    defaultPersonalFormFields
  );
  const { firstName, lastName, email, phone, address } = personalFormFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalFormFields({
      ...personalFormFields,
      [name]: value,
    });
  };

  const handlePersonalFormSubmit = async (e) => {
    e.preventDefault();
    if (isTokenExpired(userToken)) {
      navigate("/auth/log-in");
      return;
    }
    saveBtnRef.current.disabled = true;
    const response = await fetchServer(
      "PUT",
      personalFormFields,
      userToken,
      "admin/update-profile",
      server
    );
    if (response.success) {
      toast.success(response.message);
    }
    saveBtnRef.current.disabled = false;
  };

  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append("display_picture", file); // 👈 Must match the server's expected field name
    try {
      const response = await fetch(
        "https://app.xpacy.com/admin/upload-display-image",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${userToken}`, // Include token if needed
          },
          body: formData, // Send FormData (NOT JSON)
        }
      );

      const data = await response.json();
      setProfileImage(
        `https://app.xpacy.com/src/upload/display_img/${data.display_picture}`
      );
      setShowLoader(false);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  const handlePhotoUpload = async (e) => {
    setShowLoader(true);
    const { files } = e.target;
    await uploadPhoto(files[0]);
    setShowLoader(false);
  };

  return (
    <ManagementDashboardContainer>
      <TopNav
        dashboardRoute={"Settings"}
        isMobile={isMobile}
        profileImage={profileImage}
      />
      <ProfileContainer>
        <ProfileInfo>
          <ProfilePhotoTxt>Profile Photo</ProfilePhotoTxt>
          <ProfileUploadSection>
            <PhotoInfo>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  background: `url(${profileImage}) lightgray 50% / cover no-repeat`,
                  borderRadius: "100px",
                  objectFit: "contain",
                }}
              >
                {showLoader && <ClipLoader size={25} color="#fff" />}
              </div>
              <PhotoInfoWrapper>
                <h5>Profile photo</h5>
                <p>PNG, JPEG under 15MB</p>
              </PhotoInfoWrapper>
            </PhotoInfo>
            <UploadControls>
              <UploadPictureLabel htmlFor="upload-photo">
                <UploadInput
                  type="file"
                  accept=".jpg, .png"
                  name="display_picture"
                  id="upload-photo"
                  onChange={handlePhotoUpload}
                />
                {userProfile.display_picture
                  ? "Change Photo"
                  : "Upload Picture"}
              </UploadPictureLabel>
              <DeleteBtnContainer>
                <RiDeleteBin6Line style={{ width: "24px", height: "24px" }} />
              </DeleteBtnContainer>
            </UploadControls>
          </ProfileUploadSection>
        </ProfileInfo>
        <PersonalInfo>
          <PersonalInfoHeading>Account Settings</PersonalInfoHeading>
          <PersonalFormContainer onSubmit={handlePersonalFormSubmit}>
            <NameInputs>
              <FormInput
                label={"First Name"}
                name={"firstName"}
                // placeholder={userProfile.firstname}
                id="firstName"
                type="text"
                onChange={handleChange}
                value={firstName}
              />
              <FormInput
                label={"Last Name"}
                name={"lastName"}
                // placeholder={userProfile.lastname}
                id="lastName"
                type="text"
                onChange={handleChange}
                value={lastName}
              />
            </NameInputs>
            <FormInput
              label={"email"}
              name={"email"}
              // placeholder={userProfile.email}
              id="email"
              type="email"
              onChange={handleChange}
              value={email}
            />
            <FormInput
              label={"Phone number"}
              name={"phone"}
              placeholder={"+234 000 0000"}
              id="email"
              type="tel"
              pattern="[0-9]{11}"
              onChange={handleChange}
              value={phone}
            />
            <FormInput
              label={"Address"}
              name={"address"}
              placeholder={"Enter Address"}
              id="address"
              type="text"
              onChange={handleChange}
              value={address}
            />
            <TwoFactorContainer>
              <p>Two-Factor Authentication</p>
              <div class="form-switch">
                <input
                  type="checkbox"
                  class="form-check-input"
                  style={{ width: "40px", height: "25px" }}
                />
              </div>
            </TwoFactorContainer>
            <SubmitControls>
              <Button
                buttonType={{ primaryBtn: true }}
                type={"submit"}
                btnRef={saveBtnRef}
              >
                Save Changes
              </Button>
            </SubmitControls>
          </PersonalFormContainer>
        </PersonalInfo>
        <PersonalInfo>
          <PersonalInfoHeading>Recent Login Activity</PersonalInfoHeading>
          <NotificationTable>
            <thead>
              <th>Date/Time</th>
              <th>Session Type</th>
              <th>Device Type</th>
              <th>Appropriate location</th>
            </thead>
            <tbody>
              <tr>
                <td>2 hours ago</td>
                <td>Successful login</td>
                <td>Iphone 16 Pro Max</td>
                <td>Lagos, Nigeria</td>
              </tr>
            </tbody>
          </NotificationTable>
        </PersonalInfo>
        <PersonalInfo>
          <PersonalInfoHeading>Web Settings</PersonalInfoHeading>
          <WebContainer>
            <p>Banner Settings</p>
            <ImageContainer>
              {homePageBanners.map((banner) => {
                const { image_url, title, id } = banner;
                return (
                  <EditImageContainer>
                    <BannerImg
                      src={`https://app.xpacy.com/src/upload/homepage_slider/${image_url}`}
                      alt="banner"
                    />
                    <div
                      className="edit-btn-wrapper"
                      onClick={() => {
                        setBannerTitle(title);
                        setBannerID(id);
                        setShowUploadModal(true);
                      }}
                    >
                      <EditBtn />
                    </div>
                  </EditImageContainer>
                );
              })}

              {showUploadModal && (
                <BannerModal
                  setHomePageBanners={setHomePageBanners}
                  bannerTitle={bannerTitle}
                  onShowModal={setShowUploadModal}
                  userToken={userToken}
                  bannerID={bannerID}
                />
              )}
            </ImageContainer>
          </WebContainer>
        </PersonalInfo>
        <PersonalInfo>
          <PersonalInfoHeading>Notification Settings</PersonalInfoHeading>
          <TwoFactorContainer>
            <p>Enable payment related notifications</p>
            <div class="form-switch">
              <input
                type="checkbox"
                checked
                class="form-check-input"
                style={{ width: "40px", height: "25px" }}
              />
            </div>
          </TwoFactorContainer>
          <TwoFactorContainer>
            <p>Enable service related notifications</p>
            <div class="form-switch">
              <input
                type="checkbox"
                checked
                class="form-check-input"
                style={{ width: "40px", height: "25px" }}
              />
            </div>
          </TwoFactorContainer>
          <TwoFactorContainer>
            <p>Enable general updates/notifications</p>
            <div class="form-switch">
              <input
                type="checkbox"
                checked
                class="form-check-input"
                style={{ width: "40px", height: "25px" }}
              />
            </div>
          </TwoFactorContainer>
        </PersonalInfo>
        <PersonalInfo>
          <PersonalInfoHeading>Account Management</PersonalInfoHeading>
          <SubmitControls>
            <Button
              buttonType={{ primaryBtn: false }}
              type={"submit"}
              background={"#FBC0BC"}
              textColor={"#333333"}
              onClick={() => setShowModal(true)}
            >
              Deactivate Account
            </Button>
          </SubmitControls>
        </PersonalInfo>
        {showModal && (
          <ModalComponent>
            <DeactivateModalContent>
              <DeactivateModalHeading>
                <h5>Are you sure you want to deactivate your account?</h5>
                <p>
                  You would have to register again to reactivate your account.
                </p>
              </DeactivateModalHeading>
              <ModalCardFooter>
                <Button
                  buttonType={{ primaryBtn: false }}
                  type={"submit"}
                  background={"#FBC0BC"}
                  textColor={"#333333"}
                  buttonPadding={"6px 16px"}
                  buttonHeight={"28px"}
                >
                  Yes, deactivate
                </Button>
                <Button
                  buttonType={{ primaryBtn: true }}
                  type={"button"}
                  background={"#FBC0BC"}
                  textColor={"#333333"}
                  buttonPadding={"6px 16px"}
                  buttonHeight={"28px"}
                  onClick={() => setShowModal(false)}
                >
                  No, undo
                </Button>
              </ModalCardFooter>
            </DeactivateModalContent>
          </ModalComponent>
        )}
      </ProfileContainer>
    </ManagementDashboardContainer>
  );
};

export default Settings;
