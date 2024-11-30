import { Link } from "react-router-dom";
import { IoChevronForward, IoLocationOutline, IoSearchOutline, IoArrowBack, IoArrowForward } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShare } from "react-icons/md";
import { Carousel, CarouselItem } from "react-bootstrap";

import './photos.styles.css';

const Photos = () => {
    return (
        <>
            <div className="property-title-container d-flex flex-column align-items-start">
                <div className="property-title d-flex flex-column">
                    <div className="property-header-navigation">
                        <Link to={'/'} className="header-nav-text">Home</Link> 
                        <span><IoChevronForward/></span>
                        <Link to={'/buy'} className="header-nav-text">Buy</Link>
                        <span><IoChevronForward/></span>
                        <Link to={'/buy/property'} className="header-nav-text">Property Details</Link>
                        <span><IoChevronForward/></span>
                        <span className="header-nav-text" style={{color:  "#007BFF"}}>Photos</span>
                    </div>
                    <Link to={'/buy/property'} className="property-back-navigation header-nav-text d-flex  align-items-center w-100">
                        <IoArrowBack style={{width: '24px', height: '24px'}}/> <span className="header-nav-text">Back</span>
                    </Link>
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
            <div className="view-photos-container d-flex justify-content-center align-items-center">
                <div className="view-photos">
                    <Carousel 
                        controls={true} 
                        touch={true} 
                        prevIcon={
                            <div className="prevIcon-container d-flex justify-content-center align-items-center">
                                <IoArrowBack style={{width: '24px', height: '24px', color: '#333333'}}/> 
                            </div>
                        }
                        nextIcon={
                            <div className="prevIcon-container d-flex justify-content-center align-items-center">
                                <IoArrowForward style={{width: '24px', height: '24px', color: '#333333'}}/> 
                            </div>
                        }
                    >
                        <CarouselItem className="view-photos-carousel">
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Second slide"
                                />
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Photos;