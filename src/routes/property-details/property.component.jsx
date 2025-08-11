import { useEffect, useState, useContext, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  IoChevronForward,
  IoLocationOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { FaRegSquareFull, FaCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { TbBed } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { ReactComponent as Calender } from "../../assets/Calendar.svg";
import { ReactComponent as Naira } from "../../assets/mdi_naira.svg";
import { ReactComponent as ToiletIcon } from "../../assets/Toilets-icon.svg";
import { MdOutlineShare, MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import Review01 from "../../assets/homepage-assets/testimonial-section-images/review-img01.png";
import Card from "../../components/card/card.component";
import ClientRating from "../../components/clientRating/clientRating";
import "./property.styles.css";
import { PageContext } from "../../contexts/page.context";
import { UserContext } from "../../contexts/userContext";
import { PulseLoader } from "react-spinners";
import { toast } from "sonner";
import fetchServer from "../../utils/serverutils/fetchServer";
import ShareBtn from "../../components/share-btn/ShareBtn";
import LoginModal from "../../components/login-modal/LoginModal";
import { Select, MenuItem } from "@mui/material";
import { ClipLoader } from "react-spinners";
import isTokenExpired from "./../../utils/token/handleUserToken";
import CustomToast from "./../../components/custom-toast/CustomToast";
import Button from "../../components/button/button";
import BookPropertyModal from "../../components/book-property-modal/BookPropertyModal";

const Property = ({ status }) => {
  const tourBtnRef = useRef(null);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showLogInModalForTour, setShowLogInModalForTour] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const descriptionCharMax = 150;
  const { id } = useParams();
  const { propertyObj, propertiesArray } = useContext(PageContext);
  const [property, setProperty] = useState(null);
  const [bookingSlots, setBookingSlots] = useState(null);
  const [bookedSlot, setBookedSlot] = useState("");
  const { userProfile, userToken, server } = useContext(UserContext);
  const [showDescription, setShowDescription] = useState(false);
  const [showLikeBtn, setShowLikeBtn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const location = useLocation();
  const path = location.pathname.slice("").split("/")[1];
  // mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSavedProperties = async () => {
    if (!userProfile) {
      toast.error("Please log in to continue");
      navigate("/auth/log-in");
      return;
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
    console.log(response);
    if (response.success) {
      toast.success(response.message);
      setShowLikeBtn(!showLikeBtn);
    }
  };
  // Fetch property by id
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const property = await fetch(
          `https://app.xpacy.com/property/fetch-property/${id}`,
          { method: "GET" }
        );
        const response = await property.json();
        setProperty(response.property);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProperty();
  }, [id]);
  // Fetch booking slots on mount
  useEffect(() => {
    const fetchBookingSlots = async () => {
      try {
        const response = await fetchServer(
          "GET",
          {},
          "",
          "bookings/fetch-slots",
          server
        );
        setBookingSlots(response.slots);
      } catch (error) {}
    };
    fetchBookingSlots();
  }, []);

  const cardStyles = {
    cardWidth: "100%",
    showDivider: true,
    isMobile: isMobile,
  };
  const handleGetPropertyClick = () => {
    if (isTokenExpired(userToken)) {
      setShowLogInModal(true);
    } else {
      navigate(`/application-form/${id}`);
    }
  };
  const handleBookTourSubmit = async (e) => {
    e.preventDefault();
    if (isTokenExpired(userToken)) {
      setShowLogInModalForTour(true);
      return;
    }
    tourBtnRef.current.disabled = true;
    setShowLoader(true);
    try {
      const response = await fetchServer(
        "POST",
        { date: bookedSlot.date },
        userToken,
        `user/book-inspection/${id}`,
        server
      );
      console.log(response);
      if (!response.success) {
        toast.custom((t) => {
          return (
            <CustomToast
              title={"Error Message"}
              message={response.error}
              type={"error"}
            />
          );
        });
      }
      if (response.success) {
        toast.custom((t) => {
          return (
            <CustomToast
              title={"Success!"}
              message={response.message}
              type={"success"}
            />
          );
        });
      }
    } catch (error) {
    } finally {
      tourBtnRef.current.disabled = false;
      setShowLoader(false);
    }
  };
  const clientRatings = [
    {
      Reviewer: Review01,
      comment:
        "“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”",
      name: "Deola Alade",
      title: "Property owner",
      rating: 5,
    },
    {
      Reviewer:
        "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
      comment:
        '"Renting through Xpacy has been a fantastic experience. Their team made everything smooth and stress-free, and I’ve felt well taken care of from the start!"',
      name: "Dara Ojo",
      title: "Property tenant",
      rating: 4.5,
    },
    {
      Reviewer:
        "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      comment:
        '"I am so glad I found my place through Xpacy. The whole process was easy, the team was super helpful, and I’ve been really happy and comfortable ever since!"',
      name: "Dami Adeola",
      title: "Property buyer",
      rating: 5,
    },
  ];
  return (
    <>
      {property ? (
        <div>
          {/* Property Title and info */}
          <div className="property-title-container d-flex flex-column align-items-start">
            <div className="property-title">
              <div className="property-header-navigation">
                <Link to={"/"} className="header-nav-text">
                  Home
                </Link>
                <span>
                  <IoChevronForward />
                </span>
                <Link
                  to={`/${
                    property?.property_status === "Sale"
                      ? "buy"
                      : property?.property_status.toLowerCase()
                  }`}
                  className="header-nav-text"
                >
                  {property?.property_status === "Sale"
                    ? "Buy"
                    : property?.property_status}
                </Link>
                <span>
                  <IoChevronForward />
                </span>
                <span className="header-nav-text" style={{ color: "#007BFF" }}>
                  Property Details
                </span>
              </div>
            </div>
            <div className="property-info-container d-flex flex-column align-items-start ">
              <h1 className="property-heading m-0">
                {property?.property_name}
              </h1>
              <div className="property-cta">
                <div className="d-flex align-items-center py-1">
                  <IoLocationOutline
                    style={{ width: "24px", height: "24px" }}
                  />
                  <h5 className="location-text">{property?.address}</h5>
                </div>
                <div className="actions-container d-flex">
                  <button className="d-flex justify-content-center align-items-center px-2 py-1 rounded">
                    <IoSearchOutline className="actions-icon" />
                    Search properties
                  </button>
                  <button
                    className="d-flex justify-content-center align-items-center px-2 py-1 rounded"
                    onClick={handleSavedProperties}
                  >
                    {showLikeBtn ? (
                      <FaHeart className="actions-icon" />
                    ) : (
                      <CiHeart className="actions-icon" />
                    )}
                    Save
                  </button>
                  <ShareBtn />
                </div>
              </div>
            </div>
          </div>
          {/* Property Photos */}
          <div className="property-photos d-flex align-self-strech">
            <div className="property-img-container">
              <img
                src={
                  !property?.images.length > 0
                    ? "https://placehold.co/600x400"
                    : `https://app.xpacy.com/src/upload/properties/${property?.images[0]}`
                }
                alt=""
              />
            </div>
            <div className="property-other-images">
              <Link
                to={`/${path}/property-photos/${id}`}
                className="d-flex justify-content-center align-items-center position-absolute"
              >
                <MdOutlinePhotoSizeSelectActual
                  style={{ width: "16px", height: "16px" }}
                />
                View All Photos
              </Link>
              <img
                src={
                  !property?.images.length > 0
                    ? "https://placehold.co/600x400"
                    : `https://app.xpacy.com/src/upload/properties/${property?.images[0]}`
                }
                alt=""
              />
              <img
                src={
                  !property?.images.length > 0
                    ? "https://placehold.co/600x400"
                    : `https://app.xpacy.com/src/upload/properties/${property?.images[1]}`
                }
                alt=""
              />
              <img
                src={
                  !property?.images.length > 0
                    ? "https://placehold.co/600x400"
                    : `https://app.xpacy.com/src/upload/properties/${property?.images[2]}`
                }
                alt=""
              />
            </div>
          </div>
          <div className="property-details">
            <div className="left-panel d-flex flex-column align-items-start">
              <div className="property-specs d-flex flex-column align-self-stretch">
                <h2 className="property-details-heading">Specification</h2>
                <div className="specs-container">
                  <div className="specs d-flex flex-column align-items-center">
                    <div className="specs-details d-flex align-items-center">
                      <TbBed
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#203645",
                        }}
                      />
                      <p className="spec-icon-text">Bedrooms</p>
                    </div>
                    <p className="specs-text">{property?.total_bedrooms}</p>
                  </div>
                  <div className="specs d-flex flex-column align-items-center">
                    <div className="specs-details d-flex align-items-center">
                      <LuBath
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#203645",
                        }}
                      />
                      <p className="spec-icon-text">Bathrooms</p>
                    </div>
                    <p className="specs-text">{property?.total_bathrooms}</p>
                  </div>
                  <div className="specs d-flex flex-column align-items-center">
                    <div className="specs-details d-flex align-items-center">
                      <ToiletIcon
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#203645",
                        }}
                      />
                      <p className="spec-icon-text">Toilet</p>
                    </div>
                    <p className="specs-text">{property?.total_toilets}</p>
                  </div>
                  {property?.property_square_area && (
                    <div className="specs d-flex flex-column align-items-center">
                      <div className="specs-details d-flex align-items-center">
                        <FaRegSquareFull
                          style={{ width: "24px", height: "24px" }}
                        />
                        <p className="spec-icon-text">Square Area</p>
                      </div>
                      <p className="specs-text">
                        {property?.property_square_area}sqm&sup2;
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="divider" />
              <div className="property-description d-flex flex-column align-items-start align-self-stretch">
                <h2 className="property-details-heading m-0">Description</h2>
                <p className="property-details-text m-0">
                  {showDescription
                    ? property?.description
                    : `${property?.description.substring(
                        0,
                        descriptionCharMax
                      )}...`}
                  {!showDescription && (
                    <span onClick={() => setShowDescription(true)}>
                      Read More
                    </span>
                  )}
                </p>
              </div>
              <div className="divider" />
              {/* Property Features */}
              <div className="property-features d-flex flex-column align-items-start align-self-stretch">
                <h2 className="property-details-heading m-0">
                  Property Features
                </h2>
                <div className="features d-flex align-items-start">
                  <div className="left-features d-flex flex-column align-items-start">
                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                      <p className="features-text m-0">Location</p>
                      <p className="features-text m-0">
                        {property?.city} {property?.state}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                      <p className="features-text m-0">Status</p>
                      <p className="features-text m-0">
                        {property?.availability_status}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                      <p className="features-text m-0">Type</p>
                      <p className="features-text m-0">
                        {property?.property_type}
                      </p>
                    </div>
                    {property?.property_square_area && (
                      <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                        <p className="features-text m-0">Size</p>
                        <p className="features-text m-0">
                          {property?.property_square_area}sqm&sup2;
                        </p>
                      </div>
                    )}
                    {property?.land_area && (
                      <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                        <p className="features-text m-0">Land Size</p>
                        <p className="features-text m-0">
                          {property?.land_area}&sup2;
                        </p>
                      </div>
                    )}
                    {property?.parking_area && (
                      <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                        <p className="features-text m-0">Parking Area</p>
                        <p className="features-text m-0">
                          {property?.parking_area}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="left-features d-flex flex-column align-items-start">
                    {property?.kitchen_type && (
                      <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                        <p className="features-text m-0">Kitchen</p>
                        <p className="features-text m-0">
                          {property?.kitchen_type}
                        </p>
                      </div>
                    )}
                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                      <p className="features-text m-0">Bathrooms</p>
                      <p className="features-text m-0">Fully-fitted</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Property Amenities */}
              <div className="amenities d-flex flex-column align-items-start align-self-stretch">
                <h2 className="property-details-heading m-0">Amenities</h2>
                <div className="amenities-container w-100">
                  {property?.property_amenities.map((amenity, index) => {
                    return (
                      <div
                        className="amenities-items d-flex flex-column align-items-start"
                        key={index}
                      >
                        <div className="amenities-item d-flex align-items-center align-slef-strech">
                          <FaCheck
                            style={{
                              width: "24px",
                              height: "24px",
                              color: "#333333",
                            }}
                          />
                          <p className="amenities-txt m-0">{amenity}</p>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="amenities-items d-flex flex-column align-items-start">
                                            <div className="amenities-item d-flex align-items-center align-slef-strech">
                                                <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                                <p className='amenities-txt m-0'>{property?.property_amenities[1]}</p>
                                            </div>
                                            <div className="amenities-item d-flex align-items-center align-slef-strech">
                                                <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                                <p className='amenities-txt m-0'>24-Hour Security</p>
                                            </div>
                                        </div>
                                        <div className="amenities-items d-flex flex-column align-items-start">
                                            <div className="amenities-item d-flex align-items-center align-slef-strech">
                                                <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                                <p className='amenities-txt m-0'>Water Heater</p>
                                            </div>
                                            <div className="amenities-item d-flex align-items-center align-slef-strech">
                                                <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                                <p className='amenities-txt m-0'>Elevator</p>
                                            </div>
                                        </div>
                                        <div className="amenities-items d-flex flex-column align-items-start">
                                            <div className="amenities-item d-flex align-items-center align-slef-strech">
                                                <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                                <p className='amenities-txt m-0'>Air Conditioner</p>
                                            </div>
                                            <div className="amenities-item d-flex align-items-center align-slef-strech">
                                                <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                                <p className='amenities-txt m-0'>CCTV</p>
                                            </div>
                                        </div> */}
                </div>
              </div>
              <div className="divider" />
            </div>
            <div className="right-panel d-flex flex-column justify-content-center align-items-center">
              <div className="price d-flex justify-content-center align-items-center">
                <div className="price-content">
                  <div className="d-flex justify-content-center align-items-center">
                    <Naira style={{ width: "26px", height: "26px" }} />
                    <h5 className="m-0">
                      {property?.property_status === "Shortlet" &&
                        `${property?.property_price.toLocaleString()} / night`}
                      {property?.property_status === "Rent" &&
                        `${property?.property_price.toLocaleString()} / year`}
                      {property?.property_status === "Sale" &&
                        property?.property_price.toLocaleString()}
                    </h5>
                  </div>
                  {property?.property_status === "Sale" && (
                    <Button
                      buttonType={{ primaryBtn: true }}
                      onClick={handleGetPropertyClick}
                    >
                      Get This Property
                    </Button>
                  )}
                  {property?.property_status === "Rent" && (
                    <Button
                      buttonType={{ primaryBtn: true }}
                      onClick={handleGetPropertyClick}
                    >
                      Rent This Property
                    </Button>
                  )}
                  {property?.property_status === "Shortlet" && (
                    <BookPropertyModal
                      property_id={id}
                      onShowLogInModal={setShowLogInModal}
                    />
                  )}
                  {showLogInModal && (
                    <LoginModal setShowLogInModal={setShowLogInModal} />
                  )}
                  <a
                    className="virtual-tour d-flex align-items-center"
                    href={property?.virtual_tour_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiSearchAlt className="virtual-tour-icon" />
                    <p>
                      Take a <br /> virtual tour <br /> now!
                    </p>
                  </a>
                </div>
              </div>
              <div className="book-tour d-flex justify-content-center align-items-center">
                <form
                  className="book-tour-content d-flex  flex-column "
                  onSubmit={handleBookTourSubmit}
                >
                  <h5>Book In-person Property Tour</h5>
                  <div className="tour-date-container">
                    <Select
                      required
                      sx={{
                        width: "100%",
                        height: "2.8rem",
                        borderRadius: "8px",
                        fontFamily: "Unitext Regular",
                        fontSize: "1rem",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#DADADA",
                        },
                      }}
                      value={bookedSlot}
                      onChange={(e) => setBookedSlot(e.target.value)}
                      displayEmpty
                      renderValue={(value) =>
                        value
                          ? `${value?.weekday}, ${value?.date
                              .split("-")
                              .reverse()
                              .join("-")}`
                          : "Choose a date"
                      }
                    >
                      {bookingSlots?.map((slot, index) => (
                        <MenuItem
                          value={slot}
                          key={index}
                          disabled={slot.status === "unavailable"}
                        >
                          {slot.weekday},{" "}
                          {slot.date.split("-").reverse().join("-")}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  <button
                    ref={tourBtnRef}
                    type="submit"
                    className="d-flex justify-content-center align-items-center"
                  >
                    {showLoader ? (
                      <ClipLoader size={25} color="#fff" />
                    ) : (
                      "Book tour"
                    )}
                  </button>
                </form>
                {showLogInModalForTour && (
                  <LoginModal setShowLogInModal={setShowLogInModalForTour} />
                )}
              </div>
              <div className="enquires d-flex justify-content-center align-items-center">
                <div className="request-tour d-flex flex-column justify-content-center align-items-center">
                  <h5>For Enquiries</h5>
                  <div className="call d-flex justify-content-center align-items-center">
                    <MdOutlineLocalPhone
                      style={{ width: "16px", height: "16px" }}
                    />
                    <span>Call +2349068557780 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Map Section */}
          <div className="map d-flex flex-column align-items-center align-self-stretch">
            <div className="map-container">
              <h2 className="property-details-heading m-0">Map</h2>
              <iframe
                title="google map"
                src={`https://www.google.com/maps?q=${property?.lat},${property.long}&hl=es;z=14&output=embed`}
                style={{ border: "0px" }}
                width="100%"
                height="455"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Reviews Section */}
          <div className="property-reviews d-flex flex-column align-items-center align-self-stretch">
            <div className="property-reviews-container overflow-x-hidden">
              <h2 className="property-details-heading m-0">Reviews</h2>
              <div className="divider" />
              <div className="testimonial-scroll">
                {clientRatings.map((clientRating, index) => {
                  const { Reviewer, comment, name, title, rating } =
                    clientRating;
                  return (
                    <ClientRating
                      image={Reviewer}
                      comment={comment}
                      name={name}
                      title={title}
                      rating={rating}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Related properties */}
          <div className="related d-flex flex-column align-items-center align-self-stretch">
            <div className="related-container">
              <h2 className="property-details-heading m-0">
                You many also like these properties
              </h2>
              <div className="related-cards">
                {propertiesArray?.toSpliced(4).map((propertise) => {
                  return (
                    <Card
                      propertise={propertise}
                      cardStyles={cardStyles}
                      key={propertise.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PulseLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            height: "100vh",
          }}
          margin={5}
        />
      )}
    </>
  );
};

export default Property;
