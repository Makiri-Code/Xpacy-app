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
    cardWidth: "415px",
    showDivider: true,
    isMobile: isMobile,
  };
  const latestProperties = propertiesArray.toSpliced(6);
  return (
    <>
      {" "}
      {propertiesArray && pagination ? (
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
                            <option>Purpose</option>
                            <option value={"buy"}>Buy</option>
                            <option value={"rent"}>Rent</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                            <option>Purpose</option>
                            <option value={"buy"}>Buy</option>
                            <option value={"rent"}>Rent</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                            <option>Purpose</option>
                            <option value={"buy"}>Buy</option>
                            <option value={"rent"}>Rent</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                            <option>Purpose</option>
                            <option value={"buy"}>Buy</option>
                            <option value={"rent"}>Rent</option>
                          </Form.Select>
                          <Form.Select className="select-option">
                            <option>Purpose</option>
                            <option value={"buy"}>Buy</option>
                            <option value={"rent"}>Rent</option>
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
                        Latest Propertises
                      </h1>
                      {/* Latest Sidebar Card */}
                      <div className="latest-propertises-card d-flex flex-column">
                        {latestProperties.map((properties) => {
                          const {
                            images,
                            property_name,
                            property_status,
                            city,
                            state,
                            property_price,
                            total_bedrooms,
                            id,
                          } = properties;
                          return (
                            <div className="latest-card-container d-flex">
                              <img
                                    src={
                                    showPlacholderImg || images[0] == undefined
                                        ? "https://placehold.co/600x400"
                                        : images[0]
                                    }
                                    alt=""
                                    className="latest-card-img"
                                    onError={() => setShowPlaceHolderImg(!showPlacholderImg)}
                                />
                              <div className="latest-card-body d-flex flex-column align-items-start">
                                <p className="latest-card-title my-0">
                                  Terrace
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
                                    {property_price}
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
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
                      </Form.Select>
                      <Form.Select className="select-option">
                        <option>Purpose</option>
                        <option value={"buy"}>Buy</option>
                        <option value={"rent"}>Rent</option>
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
                    Latest Propertises
                  </h1>
                  {/* Latest Sidebar Card */}
                  <div className="latest-propertises-card d-flex flex-column">
                    {latestProperties.map((properties) => {
                      const {
                        images,
                        property_name,
                        property_status,
                        city,
                        state,
                        property_price,
                        total_bedrooms,
                        id,
                      } = properties;
                      return (
                        <div className="latest-card-container d-flex">
                          <img
                            src={
                              showPlacholderImg || images[0] == undefined
                                ? "https://placehold.co/600x400"
                                : images[0]
                            }
                            alt=""
                            className="latest-card-img"
                            onError={() => setShowPlaceHolderImg(!showPlacholderImg)}
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
                                {property_price}
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
                  <p>Showing 1 - 10 of {pagination.total} results</p>
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
                {propertiesArray.map((propertise) => {
                  return (
                    <Card
                      cardStyles={cardStyles}
                      propertise={propertise}
                      propType={propType}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <Pagination />
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

export default Shop;
