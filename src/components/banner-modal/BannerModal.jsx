import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ModalComponent from "../modal/modal";
import { IoClose } from "react-icons/io5";
import FormInput from "../form-input/formInput.component";
import Button from "../button/button";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import FileUploader from "../file-uploader/file-uploader";

const UploadInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
export const UploadPictureLabel = styled.label`
  color: var(--Primary-Primary);
  border: 1px solid var(--Primary-Primary);
  font-family: "Unitext Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  cursor: pointer;
  display: flex;
  height: 48px;
  padding: var(--Spacing-ml, 24px);
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  &:hover {
    filter: brightness(70%);
  }
`;
const UploadModalContainer = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  padding: 24px 48px;
  flex-direction: column;
  gap: 12px;
  background: var(--Base-Base-White, #fff);
  width: 60%;
  & .btn-container {
    display: flex;
    justify-content: start;
    align-items: flex-end;
    gap: 20px;
  }
  & .loader {
    margin: 0 auto;
    display: inline-block;
    padding: 24px;
  }
`;
const CloseIcon = styled(IoClose)`
  width: 32px;
  height: 32px;
  align-self: flex-end;
  cursor: pointer;
`;
export const BannerImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  align-self: center;
`;
const BannerModal = ({ onShowModal, onBannerUpload, bannerID, userToken }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bannerDetails, setBannerDetails] = useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [showFileUploader, setShowFileUploader] = useState(false);
  const btnRef = useRef(null);
  useEffect(() => {
    const fetchSlider = async () => {
      const response = await fetch(
        `https://app.xpacy.com/settings/homepage-sliders/${bannerID}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`, // Include token if needed
          },
        }
      );
      const data = await response.json();
      setBannerDetails(data.data);
      setIsLoading(false);
    };
    fetchSlider();
  }, []);
  const handleSelectedFile = (acceptedFiles) => {
    setSelectedFile([...acceptedFiles]);
  };
  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    btnRef.current.disabled = true;
    const formData = new FormData();
    if (selectedFile.length > 0)
      formData.append("homepage_slider", selectedFile[0]);
    formData.append("title", bannerDetails.title);
    try {
      const response = await fetch(
        `https://app.xpacy.com/settings/homepage-sliders/${bannerID}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${userToken}`, // Include token if needed
          },
          body: formData, // Send FormData (NOT JSON)
        }
      );
      const data = await response.json();
      !data.success && toast.error(data.message);
      data.success && toast.success(data.message);
      setShowLoader(false);
      btnRef.current.disabled = false;
    } catch (error) {}

    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
  };
  return (
    <ModalComponent>
      <UploadModalContainer onSubmit={handleBannerSubmit}>
        {isLoading ? (
          <div className="loader">
            <ClipLoader size={50} color="#333" />
          </div>
        ) : (
          <>
            <CloseIcon onClick={() => onShowModal(false)}></CloseIcon>
            <FormInput
              label={"Banner Title"}
              name={"bannerTitle"}
              placeholder={"Type the banner title"}
              id="bannerTitle"
              type="text"
              onChange={(e) =>
                setBannerDetails((prev) => ({ ...prev, title: e.target.value }))
              }
              value={bannerDetails.title}
            />
            <div className="btn-container">
              {showFileUploader || (
                <BannerImg
                  src={
                    selectedFile.length > 0
                      ? selectedFile[0].preview
                      : `https://app.xpacy.com/src/upload/homepage_slider/${bannerDetails.image_url}`
                  }
                  alt=""
                />
              )}
              {showFileUploader ? (
                <div>
                  <FileUploader
                    onFilesSelected={handleSelectedFile}
                    showUI={false}
                  />
                </div>
              ) : (
                <UploadPictureLabel onClick={() => setShowFileUploader(true)}>
                  {bannerDetails ? "Change Picture" : "Upload Picture"}
                </UploadPictureLabel>
              )}
            </div>
            <Button buttonType={{ primaryBtn: true }} btnRef={btnRef}>
              {showLoader ? (
                <ClipLoader size={25} color="#fff" />
              ) : (
                "Save Changes"
              )}
            </Button>
          </>
        )}
      </UploadModalContainer>
    </ModalComponent>
  );
};

export default BannerModal;
