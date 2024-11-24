import { Link } from 'react-router-dom';
import { IoChevronForward, IoLocationOutline, IoSearchOutline   } from "react-icons/io5";
import { FaRegSquareFull, FaCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuBath } from "react-icons/lu";
import { TbBed } from "react-icons/tb";
import { ReactComponent as ToiletIcon} from '../../assets/Toilets-icon.svg'
import { MdOutlineShare, MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import image01 from '../../assets/property-details/property-image-01.png';
import './property.styles.css';
const Property = () => {

    return(
       <>
            {/* Property Title and info */}
            <div className="property-title-container d-flex flex-column align-items-start">
                <div className="property-title">
                    <div className="header-navigation">
                        <Link to={'/'} className="header-nav-text">Home</Link> 
                            <span><IoChevronForward/></span>
                            <Link to={'/buy'} className="header-nav-text">Buy</Link>
                            <span><IoChevronForward/></span>
                            <span className="header-nav-text" style={{color:  "#007BFF"}}>Property Details</span>
                    </div>
                </div>
                <div className="property-info-container d-flex flex-column align-items-start ">
                    <h1 className="property-heading m-0">
                        Luxury 4-Bedroom Terrace Home with BQ
                    </h1>
                    <div className="d-flex justify-content-between align-items-start align-self-strech w-100">
                        <div className="d-flex align-items-center py-1">
                            <IoLocationOutline style={{width: "24px", height: "24px"}}/>
                            <h5 className="location-text">
                                12, Osborne Road, Ikoyi, Lagos
                            </h5>

                        </div>
                        <div className="actions-container d-flex">
                            <button className="d-flex justify-content-center align-items-center px-2 py-1 rounded">
                                <IoSearchOutline className='actions-icon'/>
                                Search properties
                            </button>
                            <button className="d-flex justify-content-center align-items-center px-2 py-1 rounded">
                                <CiHeart className='actions-icon'/>
                                Save
                            </button>
                            <button className="d-flex justify-content-center align-items-center px-2 py-1 rounded">
                                <MdOutlineShare className='actions-icon'/>
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Property Photos */}
            <div className="property-photos d-flex align-self-strech">
                <div className="property-img-container" >
                    <img src={image01} alt="" style={{width: '914px', height: '615px'}}/>
                </div>
                <div className="property-other-images d-flex flex-column align-items-start position-relative">
                    <button className="d-flex justify-content-center align-items-center position-absolute">
                        <MdOutlinePhotoSizeSelectActual style={{width: '16px', height: '16px'}}/>
                        View All Photos
                    </button>
                    <img src={image01} alt=""/>
                    <img src={image01} alt=""/>
                    <img src={image01} alt=""/>
                </div>
            </div>
            <div className="property-details d-flex flex-column align-items-center">
                <div className="property-main-content d-flex align-items-start">
                    <div className="left-panel d-flex flex-column align-items-start">
                        <div className="property-specs d-flex flex-column align-self-stretch">
                            <h2 className="property-details-heading">Specification</h2>
                            <div className="specs-container d-flex justify-content-between align-items-center align-self-stretch">
                                <div className="specs d-flex flex-column align-items-center">
                                    <div className="specs-details d-flex align-items-center">
                                        <TbBed style={{width: '24px', height: '24px', color: '#203645'}}/>
                                        <p className="spec-icon-text">Bedrooms</p>
                                    </div>
                                    <p className="specs-text">4</p>
                                </div>
                                <div className="specs d-flex flex-column align-items-center">
                                    <div className="specs-details d-flex align-items-center">
                                        <LuBath style={{width: '24px', height: '24px', color: '#203645'}}/>
                                        <p className="spec-icon-text">Bedrooms</p>
                                    </div>
                                    <p className="specs-text">4</p>
                                </div>
                                <div className="specs d-flex flex-column align-items-center">
                                    <div className="specs-details d-flex align-items-center">
                                        <ToiletIcon style={{width: '24px', height: '24px', color: '#203645'}}/>
                                        <p className="spec-icon-text">Toilet</p>
                                    </div>
                                    <p className="specs-text">5</p>
                                </div>
                                <div className="specs d-flex flex-column align-items-center">
                                    <div className="specs-details d-flex align-items-center">
                                        <FaRegSquareFull style={{width: '24px', height: '24px'}}/>
                                        <p className="spec-icon-text">Square Area</p>
                                    </div>
                                    <p className="specs-text">250sqm&sup2;</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider"/>
                        <div className="property-description d-flex flex-column align-items-start align-self-stretch">
                            <h2 className="property-details-heading m-0">Description</h2>
                            <p className="property-details-text m-0">
                                Experience modern living in this exquisite luxury semi-detached terrace, complete with a spacious Boys' Quarters (BQ) in the heart of Ikoyi, Lagos. 
                                This beautifully designed home offers a blend of elegance and comfort, featuring large living areas, premium finishes, and ample natural light. With multiple bedrooms, en-suite bathrooms, and a well-appointed kitchen, it's perfect for families seeking style and convenience. Enjoy the privacy of your own outdoor space, perfect for relaxation or entertainment, all within a secure and serene environment.
                            </p>
                        </div>
                        <div className="divider"/>
                        <div className="property-features d-flex flex-column align-items-start align-self-stretch">
                            <h2 className="property-details-heading m-0">Property Features</h2>
                            <div className="features d-flex align-items-start">
                                <div className="left-features d-flex flex-column align-items-start">
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Location</p>
                                        <p className="features-text m-0">Ikoyi Lagos</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Status</p>
                                        <p className="features-text m-0">Available</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Type</p>
                                        <p className="features-text m-0">Terrace</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Size</p>
                                        <p className="features-text m-0">250sqm&sup2;</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">land Size</p>
                                        <p className="features-text m-0">1,250sqm&sup2;</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Parking Area</p>
                                        <p className="features-text m-0">Fit 3 cars</p>
                                    </div>
                                </div>
                                <div className="left-features d-flex flex-column align-items-start">
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Tech</p>
                                        <p className="features-text m-0">Smart Home</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Outdoor</p>
                                        <p className="features-text m-0">Garden Area</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Kitchen</p>
                                        <p className="features-text m-0">Fully-fitted</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Bathrooms</p>
                                        <p className="features-text m-0">Fully-fitted</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Recreation</p>
                                        <p className="features-text m-0">Swimming pool</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center align-items-stretch w-100">
                                        <p className="features-text m-0">Fittness</p>
                                        <p className="features-text m-0">Fully-equiped gym</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider"/>
                        <div className="amenities d-flex flex-column align-items-start align-self-stretch">
                            <h2 className="property-details-heading m-0">Amenities</h2>
                            <div className="amenities-container d-flex justify-content-between align-items-center align-self-strech w-100">
                                <div className="amenities-items d-flex flex-column align-items-start">
                                    <div className="amenities-item d-flex align-items-center align-slef-strech">
                                        <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                        <p className='amenities-txt m-0'>Washing Machine</p>
                                    </div>
                                    <div className="amenities-item d-flex align-items-center align-slef-strech">
                                        <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                        <p className='amenities-txt m-0'>24-Hour Power</p>
                                    </div>
                                </div>
                                <div className="amenities-items d-flex flex-column align-items-start">
                                    <div className="amenities-item d-flex align-items-center align-slef-strech">
                                        <FaCheck style={{width: '24px', height: '24px', color: '#333333'}}/>
                                        <p className='amenities-txt m-0'>Heat Extractor</p>
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
                                </div>
                            </div>
                        </div>
                        <div className="divider"/>
                    </div>
                    <div className="right-panel"></div>
                </div>
            </div>
       </>
    );
}

export default Property; 