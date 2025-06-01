import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { Form } from "react-bootstrap";
import LatestImage from "../../assets/shop-page-assets/latest-img.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { ReactComponent as Naira } from "../../assets/mdi_naira.svg";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Card from "../card/card.component";
import Pagination from "../pagination/pagination";
import { PageContext } from "../../contexts/page.context";
import { PulseLoader } from "react-spinners";
import "./shop.styles.css";

const Shop = ({
  propHeadings,
  page,
  propType,
  propertiesArray,
  pagination,
}) => {
  // const {propertiesArray, pagination} = useContext(PageContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showPlacholderImg, setShowPlaceHolderImg] = useState(false);
  const [latestProperties] = useState(propertiesArray.toSpliced(6))
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { heading, subHeading } = propHeadings;
  const cardStyles = {
    cardWidth: "419px",
    showDivider: true,
    isMobile: isMobile,
  };
  return (
        <div className="shop-container d-flex flex-column align-items-center align-self-stretch">
          <div className="header d-flex flex-column align-items-start">
            <div className="header-navigation">
              <Link to={"/"} className="header-nav-text">
                Home
              </Link>{" "}
              <span>
                <IoChevronForward />
              </span>{" "}
              <span className="header-nav-text" style={{ color: "#007BFF" }}>
                {page}
              </span>
            </div>
            <div className="header-text-container">
              <h1 className="header-heading">{heading}</h1>
              <p className="header-text">{subHeading}</p>
            </div>
          </div>
          <div className="main-container">
            {/* Sidebar */}
            {isMobile ? (
              <>
                {showMobileSidebar && (
                  <div
                    className={isMobile ? "show-sidebar" : "sidebar-container"}
                  >
                    {isMobile && (
                      <div
                        className="mobile-close-nav"
                        onClick={() =>
                          setShowMobileSidebar(!setShowMobileSidebar)
                        }
                      >
                        <IoClose
                          style={{
                            width: "24px",
                            height: "24px",
                            color: "#C4170B",
                          }}
                        />
                        <p>Close</p>
                      </div>
                    )}
                    {/* Fileter sidebar */}
                    <div className="filter-options d-flex flex-column align-items-start">
                      <h1 className="sidebar-header">Filter Options</h1>
                      <div className="input d-flex flex-column align-items-center">
                        <Form className="d-flex flex-column select-form">
                          <Form.Select className="select-option">
                            <option>Purpose</option>
                            <option value={"buy"}>Buy</option>
                            <option value={"rent"}>Rent</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                          <option>Location</option>
                            <option value={"Abuja"}>Abuja</option>
                            <option value={"Aba"}>Aba</option>
                            <option value={"Benin"}>Benin</option>
                            <option value={"Calabar"}>Calabar</option>
                            <option value={"Enugu"}>Enugu</option>
                            <option value={"Ibadan"}>Ibadan</option>
                            <option value={"Ilorin"}>Ilorin</option>
                            <option value={"Lagos"}>Lagos</option>
                            <option value={"Minna"}>Minna</option>
                            <option value={"Port Harcourt"}>Port Harcourt</option>
                            <option value={"Uyo"}>Uyo</option>
                            <option value={"Warri"}>Warri</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                          <option>Type</option>
                            <option value={"All types"}>All types</option>
                            <option value={"Commercial"}>Commercial</option>
                            <option value={"Residential"}>Residential</option>
                            <option value={"Terrace"}>Terrace</option>
                            <option value={"Flat/Apartment"}>Flat/Apartment</option>
                            <option value={"Duplex"}>Duplex</option>
                            <option value={"Semi-detached"}>Semi-detached</option>
                            <option value={"Fully-detached"}>Fully-detached</option>
                            <option value={"Villa"}>Villa</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                          <option>Bedroom</option>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                            <option value={"4"}>4</option>
                            <option value={"5"}>5</option>
                            <option value={"6"}>6</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                            <option>Min Price</option>
                            <option value={""}>{"<N5m"}</option>
                            <option value={""}>{"<N5m"}</option>
                            <option value={""}>{"<N10m"}</option>
                            <option value={""}>{"<100m"}</option>
                            <option value={""}>{"<N200m"}</option>
                            <option value={""}>{">N200m"}</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                            <option>Max Price</option>
                            <option value={""}>{"<N5m"}</option>
                            <option value={""}>{"<N5m"}</option>
                            <option value={""}>{"<N10m"}</option>
                            <option value={""}>{"<100m"}</option>
                            <option value={""}>{"<N200m"}</option>
                            <option value={""}>{">N200m"}</option>
                          </Form.Select>
                        </Form>
                        <div className="filter-btn-container d-flex flex-column align-items-start">
                          <button className="filter-btn d-flex justify-content-center align-items-center">
                            Apply Filter
                          </button>
                          <button className="filter-btn-white d-flex justify-content-center align-items-center">
                            Clear Filter
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Latest side bar */}
                    <div className="latest-propertises d-flex flex-column">
                      <h1 className="latest-propertises-header">
                        Latest Properties
                      </h1>
                      {/* Latest Sidebar Card */}
                      <div className="latest-propertises-card d-flex flex-column">
                        {latestProperties.map((property, index) => {
                          const {
                            images,
                            property_name,
                            property_status,
                            city,
                            state,
                            property_price,
                            total_bedrooms,
                            id,
                            property_type,
                          } = property;
                          return (
                            <div className="latest-card-container d-flex" key={index}>
                              <img
                                    src={
                                     images[0] == undefined
                                        ? "https://placehold.co/600x400"
                                        : `https://app.xpacy.com/src/upload/properties/${images[0]}`
                                    }
                                    alt=""
                                    className="latest-card-img"
                                />
                              <div className="latest-card-body d-flex flex-column align-items-start">
                                <p className="latest-card-title my-0">
                                  {property_type}
                                </p>
                                <h1 className="latest-card-heading">
                                  {property_name}
                                </h1>
                                <div className="location-container d-flex justify-content-center align-items-center">
                                  <IoLocationOutline className="location" />
                                  <p className="latest-card-title my-0">
                                    {city}, {state}
                                  </p>
                                </div>
                                <div className="price-container d-flex justify-content-center align-items-center">
                                  <Naira className="naira" />
                                  <p className="latest-price my-1">
                                    {property_price.toLocaleString()}
                                  </p>
                                </div>
                                <div className="latest-card-divider" />
                                <div className="latest-card-footer d-flex justify-content-between align-items-center">
                                  <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
                                    <TbBed className="bedroom-icon" />
                                    <p className="latest-card-txt my-0">
                                      Bed: {total_bedrooms}
                                    </p>
                                  </div>
                                  <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
                                    <LuBath className="bedroom-icon" />
                                    <p className="latest-card-txt my-0">
                                      Bath: {total_bedrooms}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className={isMobile ? "show-sidebar" : "sidebar-container"}>
                {isMobile && (
                  <div
                    className="mobile-close-nav"
                    onClick={() => setShowMobileSidebar(!setShowMobileSidebar)}
                  >
                    <IoClose
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#C4170B",
                      }}
                    />
                    <p>Close</p>
                  </div>
                )}
                {/* Fileter sidebar */}
                <div className="filter-options d-flex flex-column align-items-start">
                  <h1 className="sidebar-header">Filter Options</h1>
                  <div className="input d-flex flex-column align-items-center">
                    <Form className="d-flex flex-column select-form">
                      <Form.Select className="select-option">
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                      <option>Location</option>
                        <option value={"Abuja"}>Abuja</option>
                        <option value={"Aba"}>Aba</option>
                        <option value={"Benin"}>Benin</option>
                        <option value={"Calabar"}>Calabar</option>
                        <option value={"Enugu"}>Enugu</option>
                        <option value={"Ibadan"}>Ibadan</option>
                        <option value={"Ilorin"}>Ilorin</option>
                        <option value={"Lagos"}>Lagos</option>
                        <option value={"Minna"}>Minna</option>
                        <option value={"Port Harcourt"}>Port Harcourt</option>
                        <option value={"Uyo"}>Uyo</option>
                        <option value={"Warri"}>Warri</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                      <option>Type</option>
                        <option value={"All types"}>All types</option>
                        <option value={"Commercial"}>Commercial</option>
                        <option value={"Residential"}>Residential</option>
                        <option value={"Terrace"}>Terrace</option>
                        <option value={"Flat/Apartment"}>Flat/Apartment</option>
                        <option value={"Duplex"}>Duplex</option>
                        <option value={"Semi-detached"}>Semi-detached</option>
                        <option value={"Fully-detached"}>Fully-detached</option>
                        <option value={"Villa"}>Villa</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                      <option>Bedroom</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                        <option value={"6"}>6</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                        <option>Min Price</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N10m"}</option>
                        <option value={""}>{"<100m"}</option>
                        <option value={""}>{"<N200m"}</option>
                        <option value={""}>{">N200m"}</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                        <option>Max Price</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N5m"}</option>
                        <option value={""}>{"<N10m"}</option>
                        <option value={""}>{"<100m"}</option>
                        <option value={""}>{"<N200m"}</option>
                        <option value={""}>{">N200m"}</option>
                      </Form.Select>
                    </Form>
                    <div className="filter-btn-container d-flex flex-column align-items-start">
                      <button className="filter-btn d-flex justify-content-center align-items-center">
                        Apply Filter
                      </button>
                      <button className="filter-btn-white d-flex justify-content-center align-items-center">
                        Clear Filter
                      </button>
                    </div>
                  </div>
                </div>
                {/* Latest side bar */}
                <div className="latest-propertises d-flex flex-column">
                  <h1 className="latest-propertises-header">
                    Latest Properties
                  </h1>
                  {/* Latest Sidebar Card */}
                  <div className="latest-propertises-card d-flex flex-column">
                    {latestProperties.map((properties, index) => {
                      const {
                        images,
                        property_name,
                        property_type,
                        property_status,
                        city,
                        state,
                        property_price,
                        total_bedrooms,
                        id,
                      } = properties;
                      return (
                        <div className="latest-card-container d-flex" key={index}>
                          <img
                            src={
                              images[0] == undefined
                                ? "https://placehold.co/600x400"
                                :`https://app.xpacy.com/src/upload/properties/${images[0]}`
                            }
                            alt=""
                            className="latest-card-img"
                          />
                          <div className="latest-card-body d-flex flex-column align-items-start">
                            <p className="latest-card-title my-0">Duplex</p>
                            <h1 className="latest-card-heading">
                              {property_name}
                            </h1>
                            <div className="location-container d-flex justify-content-center align-items-center">
                              <IoLocationOutline className="location" />
                              <p className="latest-card-title my-0">
                                {city}, {state}
                              </p>
                            </div>
                            <div className="price-container d-flex justify-content-center align-items-center">
                              <Naira className="naira" />
                              <p className="latest-price my-1">
                                {property_price.toLocaleString()}
                              </p>
                            </div>
                            <div className="latest-card-divider" />
                            <div className="latest-card-footer d-flex justify-content-between align-items-center">
                              <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
                                <TbBed className="bedroom-icon" />
                                <p className="latest-card-txt my-0">
                                  Bed: {total_bedrooms}
                                </p>
                              </div>
                              <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
                                <LuBath className="bedroom-icon" />
                                <p className="latest-card-txt my-0">
                                  Bath: {total_bedrooms}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            <div className="main-content-container">
              <div className="results-header">
                <div className="results-summary">
                  <p>Showing 1 - 10 of {propertiesArray.length} results</p>
                </div>
                {isMobile && (
                  <div
                    className="mobile-filter-options"
                    onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                  >
                    <CiFilter
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#9D7B40",
                      }}
                    />
                    <p>Filter Options</p>
                  </div>
                )}
                <div className="sort-label-container">
                  <p className="sort">Sort by: </p>
                  <Form className="default-input">
                    <Form.Select className="select-input">
                      <option>Default</option>
                      <option value={"buy"}>Buy</option>
                      <option value={"rent"}>Rent</option>
                    </Form.Select>
                  </Form>
                </div>
              </div>
              <div className="propertises-container">
                {
                  propertiesArray && pagination ? 
                  (
                    <>
                      {propertiesArray.map((propertise, index) => {
                      return (
                        <Card
                          key={index}
                          cardStyles={cardStyles}
                          propertise={propertise}
                          propType={propType}
                        />
                      );
                    })}
                    </>
                  ) :
                  (
                    <PulseLoader
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        // height: "100vh",
                      }}
                      margin={5}
                    />
                  )
                }
                
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      );
}

export default Shop;
