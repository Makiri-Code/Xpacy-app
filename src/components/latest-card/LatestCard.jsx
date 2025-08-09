import { IoLocationOutline } from "react-icons/io5";
import { ReactComponent as Naira } from "../../assets/mdi_naira.svg";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
function LatestCard({ property }) {
  const {
    images,
    property_name,
    city,
    state,
    property_price,
    total_bedrooms,
    property_type,
  } = property;
  return (
    <div className="latest-card-container d-flex">
      <img
        src={
          images[0] === undefined
            ? "https://placehold.co/600x400"
            : `https://app.xpacy.com/src/upload/properties/${images[0]}`
        }
        alt=""
        className="latest-card-img"
      />
      <div className="latest-card-body d-flex flex-column align-items-start">
        <p className="latest-card-title my-0">{property_type}</p>
        <h1 className="latest-card-heading">{property_name}</h1>
        <div className="location-container d-flex justify-content-center align-items-center">
          <IoLocationOutline className="location" />
          <p className="latest-card-title my-0">
            {city}, {state}
          </p>
        </div>
        <div className="price-container d-flex justify-content-center align-items-center">
          <Naira className="naira" />
          <p className="latest-price my-1">{property_price.toLocaleString()}</p>
        </div>
        <div className="latest-card-divider" />
        <div className="latest-card-footer d-flex justify-content-between align-items-center">
          <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
            <TbBed className="bedroom-icon" />
            <p className="latest-card-txt my-0">Bed: {total_bedrooms}</p>
          </div>
          <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
            <LuBath className="bedroom-icon" />
            <p className="latest-card-txt my-0">Bath: {total_bedrooms}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCard;
