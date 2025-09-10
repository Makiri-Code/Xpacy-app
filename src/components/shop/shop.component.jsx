import { useState, useRef } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { CiFilter } from "react-icons/ci";
import Card from "../card/card.component";
import Pagination from "../pagination/pagination";
import ShopSidebar from "../shop-side-bar/ShopSidebar";
import { useScrollTop } from "../scroll-top/useScrollTop";
import { useFetchResult } from "../useFetchResult/useFetchResult";
import LoadingCardState from "../loading-card-state/LoadingCardState";
import "./shop.styles.css";

const Shop = ({
  page,
  propType,
  propertiesArray,
  pagination,
  dispatch,
  dispatchType,
  isMobile,
  formFields,
  setFormFields,
  onSetSearchedProperties,
  propertyType,
  heading,
  subHeading,
  isLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const url = useRef(null);
  const [searchParams] = useSearchParams();
  const purpose = searchParams.get("purpose");
  const type = searchParams.get("type");
  const location = searchParams.get("location");
  const minBedrooms = searchParams.get("minBedRooms");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  if (purpose) {
    url.current = `https://app.xpacy.com/property/fetch-properties?purpose=${purpose}&type=${type}&location=${location}&minBedrooms=${minBedrooms}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=${currentPage}`;
  }
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const latestProperties = propertiesArray?.toSpliced(6);
  useFetchResult(
    currentPage,
    dispatch,
    propertyType,
    dispatchType,
    url.current
  );
  useScrollTop(currentPage);
  const cardStyles = {
    cardWidth: "48%",
    showDivider: true,
    isMobile,
  };
  return (
    <div className="shop-container d-flex flex-column align-items-center align-self-stretch">
      <div className="header d-flex flex-column align-items-start">
        <div className="header-navigation">
          <Link to={"/"} className="header-nav-text">
            Home
          </Link>
          <span>
            <IoChevronForward />
          </span>
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
        <ShopSidebar
          isMobile={isMobile}
          showMobileSidebar={showMobileSidebar}
          setShowMobileSidebar={setShowMobileSidebar}
          latestProperties={latestProperties}
          formFields={formFields}
          setFormFields={setFormFields}
          onSetSearchedProperties={onSetSearchedProperties}
        />
        <div className="main-content-container">
          <div className="results-header">
            <div className="results-summary">
              <p>Showing 1 - 10 of {pagination?.total} results</p>
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
            {isLoading ? (
              <>
                {Array.from({ length: 4 }, (_, i) => (
                  <LoadingCardState
                    key={i}
                    cardWidth={isMobile ? "313px" : "48%"}
                  />
                ))}
              </>
            ) : (
              <>
                {propertiesArray?.map((propertise, index) => {
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
            )}
          </div>
        </div>
      </div>
      <Pagination
        totalPages={pagination?.totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Shop;
