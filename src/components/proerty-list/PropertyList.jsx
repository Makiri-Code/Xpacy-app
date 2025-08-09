import Card from "../card/card.component";
import { Form } from "react-bootstrap";
import { CiFilter } from "react-icons/ci";
import { PulseLoader } from "react-spinners";
function PropertyList({
  propertiesArray,
  pagination,
  isMobile,
  showMobileSidebar,
  setShowMobileSidebar,
  propHeadings,
}) {
  const { heading, subHeading } = propHeadings;
  const cardStyles = {
    cardWidth: "48%",
    showDivider: true,
    isMobile: isMobile,
  };
  return (
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
  );
}

export default PropertyList;
