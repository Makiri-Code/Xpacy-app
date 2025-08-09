import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { ReactComponent as Naira } from "../../assets/mdi_naira.svg";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Card from "../card/card.component";
import Pagination from "../pagination/pagination";
import { PulseLoader } from "react-spinners";
import "./shop.styles.css";
import ShopSidebar from "../shop-side-bar/ShopSidebar";

const Shop = ({
  propHeadings,
  page,
  propType,
  propertiesArray,
  pagination,
  currentPage,
  setCurrentPage,
  isMobile,
  formFields,
  setFormFields,
  onSetSearchedProperties,
  setIsLoading,
}) => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const latestProperties = propertiesArray?.toSpliced(6);

  const { heading, subHeading } = propHeadings;
  const cardStyles = {
    cardWidth: "48%",
    showDivider: true,
    isMobile: isMobile,
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
          setIsLoading={setIsLoading}
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
            {propertiesArray && pagination ? (
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
            ) : (
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
