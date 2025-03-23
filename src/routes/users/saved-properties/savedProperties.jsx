import { useContext } from "react";
import { Link } from "react-router-dom";
import DashboardTopNav from "../dashoard-top-nav/dashboardTopNav";
import SortBy from "../../../components/sort-by/sortBy";
import Pagination from "../../../components/pagination/pagination";
import Card from "../../../components/card/card.component";
import { PageContext } from "../../../contexts/page.context";
import { PulseLoader } from "react-spinners";
import { SlOptionsVertical } from "react-icons/sl";
import EmptySavedProperty from "../../../components/empty-saved-property/emptySavedProperty";
import "./saved-properties.styles.css";
import {
  UserDashboardContainer,
  UserDashboardTopNav,
} from "../../../components/user-dashboard/user-dashboard.styles";
import styled from "styled-components";

const SavedProperties = ({
  profileImage,
  savedPropertiesArray,
  setSavedPropertiesArray,
  isMobile,
  showDashboardSidebar,
  setShowDashboardSidebar,
  savedPropertiesPagination,
  notifications,
}) => {
  const selectOptions = [
    {
      option: "Default",
    },
    {
      option: "Newest",
    },
    {
      option: "Oldest",
    },
  ];
  console.log(savedPropertiesArray)
  const cardStytles = {
    cardWidth: "330px",
    cardHeight: "auto",
    titleSize: "14px",
    headingSize: "18px",
    priceSize: "24px",
    iconWidth: "24px",
    iconHeight: "24px",
    imgHeight: "280px",
    likeIconSize: "48px",
    bodyGap: "8px",
    headerGap: "8px",
    showDivider: false,
    showButtons: true,
    bodyPadding: "16px",
    
  };
  const EmptySavedPropertyContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  `;
  return (
    <>
      {savedPropertiesArray.length > 0 && notifications ? (
        <UserDashboardContainer>
          <DashboardTopNav
            dashboardRoute={"Saved Properties"}
            isMobile={isMobile}
            showDashboardSidebar={showDashboardSidebar}
            setShowDashboardSidebar={setShowDashboardSidebar}
            profileImage={profileImage}
            notifications={notifications}
          />
          {isMobile && (
            <UserDashboardTopNav>
              <h5>Saved Properties</h5>
              <SlOptionsVertical
                style={{ width: "24px", height: "24px" }}
                onClick={() => {}}
              />
            </UserDashboardTopNav>
          )}
          <div className="product-list-container">
            <div className="results-sort-container">
              <span className="result">
                Showing {savedPropertiesPagination.page} -{" "}
                {savedPropertiesPagination.total} of{" "}
                {savedPropertiesPagination.total} results{" "}
              </span>
              <SortBy selectOptions={selectOptions} />
            </div>
            <div className="product-card-list">
              <div className="product-card-container">
                {savedPropertiesArray?.map((property) => {
                  return (
                    <Card
                      propertise={property.propertySaved}
                      cardStyles={cardStytles}
                      savedProperty={true}
                      savedPropertyId={property.id}
                      setSavedPropertiesArray={setSavedPropertiesArray}
                      savedPropertiesPagination={savedPropertiesPagination}
                    />
                  );
                })}
                <Pagination />
              </div>
              <Link className="explore">Explore New Properties</Link>
            </div>
          </div>
        </UserDashboardContainer>
      ) : (
        <UserDashboardContainer>
          <DashboardTopNav
            dashboardRoute={"Saved Properties"}
            isMobile={isMobile}
            showDashboardSidebar={showDashboardSidebar}
            setShowDashboardSidebar={setShowDashboardSidebar}
            profileImage={profileImage}
          />
          {isMobile && (
            <UserDashboardTopNav>
              <h5>Saved Properties</h5>
              <SlOptionsVertical
                style={{ width: "24px", height: "24px" }}
                onClick={() => {}}
              />
            </UserDashboardTopNav>
          )}
          <EmptySavedPropertyContainer>
            <EmptySavedProperty
              message={"Oops!... You have no booked services yet."}
              btnTxt={"Explore New Properties"}
              link={"/buy"}
            />
          </EmptySavedPropertyContainer>
        </UserDashboardContainer>
      )}
    </>
  );
};

export default SavedProperties;
