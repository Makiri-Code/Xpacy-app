import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { IoChevronForward, IoLocationOutline, IoSearchOutline, IoArrowBack, IoArrowForward } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShare } from "react-icons/md";
import { Carousel, CarouselItem } from "react-bootstrap";
import { PageContext } from "../../contexts/page.context";
import './photos.styles.css';

const Photos = () => {
    const {propertyObj} = useContext(PageContext);

    const {
        property_name,
        address,
        images
    } = propertyObj.property
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
       
    }, []);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
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
                        {property_name}
                    </h1>
                    <div className="property-cta">
                        <div className="d-flex align-items-center py-1">
                            <IoLocationOutline style={{width: "24px", height: "24px"}}/>
                            <h5 className="location-text">
                                {address}
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
            {
                isMobile ? 
                (
                    <div className="mobile-photos-container">
                        <img src={images[0]} alt="" />
                        <img src={images[1]} alt="" />
                        <img src={images[2]} alt="" />
                    </div>
                ) : 

                (
                    <div className="view-photos-container d-flex justify-content-center align-items-center">
                        <div className="view-photos">
                            <Carousel 
                                controls={true} 
                                touch={true}
                                onSelect={handleSelect}
                                activeIndex={index}
                                slide={false}
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
                                        src={images[0]}
                                        alt="Second slide"
                                    />
                                </CarouselItem>
                                <CarouselItem className="view-photos-carousel">
                                    <img
                                        className="d-block w-100"
                                        src={images[1]}
                                        alt="Hero"
                                    />
                                </CarouselItem>
                                <CarouselItem className="view-photos-carousel">
                                    <img
                                        className="d-block w-100"
                                        src={images[2]}
                                        alt="Second slide"
                                        />
                                </CarouselItem>
                            </Carousel>
                            <div className="other-photos d-flex ">
                                <img
                                    className={index == 0 ? 'active-carousel' : ''}
                                    src={images[0]}
                                    alt="Second slide"
                                />
                                <img
                                    className={index == 1 ? 'active-carousel' : ''}
                                    src={images[1]}
                                    alt="Hero"
                                />
                                <img
                                    className={index == 2 ? 'active-carousel' : ''}
                                    src={images[2]}
                                    alt="Second slide"
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Photos;