import { IoClose } from "react-icons/io5";
import { Form } from "react-bootstrap";
import LatestSidebarCard from "./LatestSidebarCard";
import FilterSidebar from "../search-filter/FilterSidebar";

function ShopSidebar({
  isMobile,
  showMobileSidebar,
  setShowMobileSidebar,
  latestProperties,
  formFields,
  setFormFields,
  onSetSearchedProperties,
  setIsLoading,
}) {
  return (
    <>
      {/* Sidebar */}
      {isMobile ? (
        <>
          {showMobileSidebar && (
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
              <FilterSidebar
                formFields={formFields}
                onSetFormFields={setFormFields}
                onSetSearchedProperties={onSetSearchedProperties}
                setIsLoading={setIsLoading}
                setShowMobileSidebar={setShowMobileSidebar}
                isMobile={isMobile}
              />

              {/* Latest side bar */}
              <LatestSidebarCard latestProperties={latestProperties} />
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
          <FilterSidebar
            formFields={formFields}
            onSetFormFields={setFormFields}
            onSetSearchedProperties={onSetSearchedProperties}
            setIsLoading={setIsLoading}
          />
          {/* Latest side bar */}
          <LatestSidebarCard latestProperties={latestProperties} />
        </div>
      )}
    </>
  );
}

export default ShopSidebar;
