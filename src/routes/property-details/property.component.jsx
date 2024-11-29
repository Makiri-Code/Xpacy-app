import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoChevronForward, IoLocationOutline, IoSearchOutline   } from "react-icons/io5";
import { FaRegSquareFull, FaCheck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { LuBath } from "react-icons/lu";
import { TbBed } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import {ReactComponent as Calender} from '../../assets/Calendar.svg'
import {ReactComponent as Naira} from '../../assets/mdi_naira.svg';
import { ReactComponent as ToiletIcon} from '../../assets/Toilets-icon.svg'
import { MdOutlineShare, MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import Review01 from '../../assets/homepage-assets/testimonial-section-images/review-img01.png';
import image01 from '../../assets/property-details/property-image-01.png';
import Card from '../../components/card/card.component';
import ClientRating from '../../components/clientRating/clientRating';
import './property.styles.css';
import Photos from '../all-photos/photos.component';
const Property = () => {
    const [selectedDate, setSelectedDate] = useState('Select tour date');
    const latestPropertises = [
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        }
    ]
    const clientRatings = [
        {
            Reviewer: Review01,
            comment: '“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”',
            name: 'Deola Alade',
            title:'Property owner',
            rating: 5
        },
        {
            Reviewer: Review01,
            comment: '“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”',
            name: 'Deola Alade',
            title:'Property owner',
            rating: 5
        },
        {
            Reviewer: Review01,
            comment: '“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”',
            name: 'Deola Alade',
            title:'Property owner',
            rating: 5
        },
    ]
    return(
       <>
            {/* <Routes>
                <Route path=':all-photos' element={<Photos/>} />
            </Routes> */}
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
                        <MdOutlinePhotoSizeSelectActual style={{width: '16px', height: '16px'}} />
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
                    <div className="right-panel d-flex flex-column justify-content-center align-items-center">
                        <div className="price d-flex justify-content-center align-items-center">
                            <div className="price-content">
                                <div className="d-flex justify-content-center align-items-center">
                                    <Naira style={{width: '26px', height: '26px'}}/>
                                    <h5 className='m-0'>1,000,000,000</h5>
                                </div>
                                <button className='d-flex justify-content-center align-items-center'>Get This Property</button>
                                <div className="virtual-tour d-flex align-items-center">
                                    <BiSearchAlt style={{width: '70px', height: '70px'}}/>
                                    <p>Take a <br/> virtual tour <br/> now!</p>
                                </div>
                            </div>
                        </div>
                        <div className="book-tour d-flex justify-content-center align-items-center">
                            <div className="book-tour-content d-flex justify-content-center flex-column align-items-center">
                                <h5>Book In-person Property Tour</h5>
                                <div className="tour-date-container d-flex justify-content-between align-items-center">
                                    <div className="calender-picker d-flex align-items-center">
                                        <div className="calender-container position-relative" style={{width: '15px', height:'16.667px'}}>
                                            <Calender className='calender position-absolute' style={{width: '100%', height:'100%'}}/>
                                            <input type='date' className='position-absolute' onChange={(e) => {
                                                console.log(e.target.value)
                                                setSelectedDate(e.target.value)
                                            }}/>
                                        </div>
                                        <p>{selectedDate}</p>
                                    </div>
                                    <IoIosArrowDown style={{width: '20px', height: '20px'}}/>
                            </div>
                            <button className='d-flex justify-content-center align-items-center'>Book Tour</button>
                            </div>
                        </div>
                        <div className="enquires d-flex justify-content-center align-items-center">
                            <div className="request-tour d-flex flex-column justify-content-center align-items-center">
                                <h5>For Enquires</h5>
                                <div className="call d-flex justify-content-center align-items-center">
                                    <MdOutlineLocalPhone style={{width: '16px', height: '16px'}}/>
                                    <span>Call +234 80 00000000 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map Section */}
            <div className="map d-flex flex-column align-items-center align-self-stretch">
                <div className="map-container">
                    <h2 className="property-details-heading m-0">Map</h2>

                </div>
            </div>
            {/* Reviews Section */}
            <div className="property-reviews d-flex flex-column align-items-center align-self-stretch">
                <div className="property-reviews-container overflow-x-hidden">
                    <h2 className="property-details-heading m-0">Reviews</h2>
                    <div className="testimonial-scroll">
                        {clientRatings.map((clientRating, index)=>{
                            const {Reviewer, comment, name, title, rating} = clientRating
                            return (
                                <ClientRating
                                    Review = {Reviewer}
                                    comment={comment}
                                    name={name}
                                    title={title}
                                    rating={rating}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* Related properties */}
            <div className="related d-flex flex-column align-items-center align-self-stretch">
                <div className="related-container">
                    <h2 className="property-details-heading m-0">You many also like these properties</h2>
                    <div className="related-cards">
                        {
                            latestPropertises.map((propertise) => {
                                return(
                                    <Card 
                                        propertise={propertise}
                                        cardWidth={'395px'}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
       </>
    );
}

export default Property; 