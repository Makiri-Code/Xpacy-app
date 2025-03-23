import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { ReactComponent as Naira } from "../../assets/mdi_naira.svg";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { PageContext } from "../../contexts/page.context";
import { UserContext } from "../../contexts/userContext";
import fetchServer from "../../utils/serverutils/fetchServer";
import { toast } from "sonner";
import "./card.styles.css";
const Card = ({ propertise, cardStyles, savedProperty = false, savedPropertyId, setSavedPropertiesArray, setSavedPropertiesPagination }) => {
  const [showPlacholderImg, setShowPlaceHolderImg] = useState(false);
  const [showLikeBtn, setShowLikeBtn] = useState(false);
  const { setPropertyObj, propertyObj, } = useContext(PageContext);
  const { server, userProfile, userToken} = useContext(UserContext);
  const navigate = useNavigate();
  const {
    cardWidth,
    cardHeight,
    titleSize,
    headingSize,
    iconWidth,
    iconHeight,
    imgHeight,
    likeIconSize,
    bodyGap,
    bodyPadding,
    headerGap,
    showDivider,
    priceSize,
    showButtons,
    isMobile,
  } = cardStyles;
  const {
    images,
    property_name,
    property_status,
    city,
    state,
    property_price,
    total_bedrooms,
    id,
  } = propertise;
  // console.log(savedPropertiesArray)
  // const fetchProperty = async (id) => {
  //   try {
  //     const property = await fetch(
  //       `https://app.xpacy.com/property/fetch-property/${id}`,
  //       { method: "GET" }
  //     );
  //     const response = await property.json();
  //     setPropertyObj(response);
  //     // console.log(propertyObj.property);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleClick = async () => {
    navigate(`/buy/property/${id}`);
  };
  const handleSavedProperties = async () => {
    if (!userProfile) {
      toast.error("Please log in to continue")
      navigate("/auth/log-in");
      return
    }
    const body = {
      propertyId: id,
    };
    const response = await fetchServer(
      "POST",
      body,
      userToken,
      "user-property/saved-properties",
      server
    );
    if(response.success){
      toast.success(response.message);
      setShowLikeBtn(!showLikeBtn);
    }
  };
  const getSavedPropertiesData = async () => {
    try {
      const resp = await fetchServer(
        "GET",
        {},
        userToken,
        "user-property/saved-properties",
        "https://app.xpacy.com"
      );
      
      setSavedPropertiesArray(resp.data);
      setSavedPropertiesPagination(resp.pagination);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleRemove = async () => {
    const response = await fetchServer(
      "DELETE",
      {},
      userToken,
      `user-property/delete-saved-property/${savedPropertyId}`,
      server
    );
    if(response.success){
      toast.success(response.message);
      getSavedPropertiesData();
    }
  };
  return (
    <div
      className="propertise-card d-flex flex-column align-items-start"
      style={{ width: `${isMobile ? "313px" : cardWidth}`, maxHeight: cardHeight }}
    >
      <div className="card-img-container position-relative align-self-stretch">
        <div
          className="card-image"
          style={{ height: imgHeight, background: `url(${images[0] == undefined ? "https://placehold.co/600x400" : `https://app.xpacy.com/src/upload/properties/${images[0]}`}) lightgray 50% / cover no-repeat` }}
          onClick={handleClick}

        />
        <div className="card-image-btns d-flex justify-content-between align-items-center position-absolute">
          <div className="btn rounded-pill d-flex justify-content-center align-items-center">
            {property_status.charAt(0).toUpperCase() +
              property_status.slice(1).toLowerCase()}
          </div>
          <div
            className="heart-icon-container d-flex justify-content-center align-items-center"
            style={{ width: likeIconSize, height: likeIconSize }}
          >
            {savedProperty ? (
              <FaHeart
                className="heart-icon"
                onClick={() => setShowLikeBtn(!showLikeBtn)}
              />
            ) : showLikeBtn ? (
              <FaHeart
                className="heart-icon"
                onClick={() => setShowLikeBtn(!showLikeBtn)}
              />
            ) : (
              <FaRegHeart
                className="heart-icon"
                onClick={handleSavedProperties}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className="card-body-container d-flex flex-column align-items-start align-self-stretch"
        style={{ gap: bodyGap, padding: bodyPadding }}
      >
        <div
          className="card-header d-flex flex-column align-items-start align-self-stretch"
          style={{ gap: headerGap }}
        >
          <p className="card-title" style={{ fontSize: titleSize }}>
            Terrace
          </p>
          <h1
            className="card-heading"
            style={{ fontSize: headingSize }}
          >
            {property_name}
          </h1>
          <div className="location d-flex justify-content-center align-items-center">
            <IoLocationOutline
              className="location-icon"
              style={{ width: iconWidth, height: iconHeight }}
            />
            <p className="location-text" style={{ fontSize: titleSize }}>
              {city}, {state}
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Naira
              className="price-icon"
              style={{ width: iconWidth, height: iconHeight }}
            />
            <h5 className="price-text m-0" style={{ fontSize: priceSize }}>
              {property_price.toLocaleString()}
            </h5>
          </div>
        </div>
        {showDivider && <div className="card-divider" />}
        <div className="card-footer w-100 d-flex justify-content-between align-items-center">
          <div className="card-footer-content d-flex align-items-center">
            <TbBed
              className="card-footer-icon"
              style={{ width: iconWidth, height: iconHeight }}
            />
            <p className="card-footer-text" style={{ fontSize: titleSize }}>
              Bed: {total_bedrooms}
            </p>
          </div>
          <div className="card-footer-content d-flex align-items-center">
            <LuBath
              className="card-footer-icon"
              style={{ width: iconWidth, height: iconHeight }}
            />
            <p className="card-footer-text" style={{ fontSize: titleSize }}>
              Bath: {4}
            </p>
          </div>
        </div>
        {showButtons && (
          <>
            <div className="card-divider" />
            <div className="card-footer-buttons">
              <button onClick={handleClick}>View Details</button>
              <div className="remove-btn" onClick={handleRemove}>
                <IoCloseSharp
                  style={{ width: iconWidth, height: iconHeight }}
                />
                <span>Remove</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
