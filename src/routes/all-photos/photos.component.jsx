import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { IoChevronForward, IoLocationOutline, IoSearchOutline, IoArrowBack, IoArrowForward } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShare } from "react-icons/md";
import { Carousel, CarouselItem } from "react-bootstrap";
import { PageContext } from "../../contexts/page.context";
import { PulseLoader } from "react-spinners";
import './photos.styles.css';

const Photos = () => {
    const {propertyObj} = useContext(PageContext);
    const {id} = useParams();
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [property, setProperty] = useState(null);
    // const {
    //     property_name,
    //     address,
    //     images
    // } = property;

    useEffect(() => {
        const fetchProperty = async () => {
            try {
              const property = await fetch(
                `https://app.xpacy.com/property/fetch-property/${id}`,
                { method: "GET" }
              );
              const response = await property.json();
              setProperty(response.property);
            } catch (error) {
              console.error("Error:", error);
            }
          }
        fetchProperty();
    }, []);

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
        {
            property ?
            (
                <>
                    <div className="property-title-container d-flex flex-column align-items-start">
                        <div className="property-title d-flex flex-column">
                            <div className="property-header-navigation">
                                <Link to={'/'} className="header-nav-text">Home</Link> 
                                <span><IoChevronForward/></span>
                                <Link to={'/buy'} className="header-nav-text">Buy</Link>
                                <span><IoChevronForward/></span>
                                <Link to={`/buy/property/${id}`} className="header-nav-text">Property Details</Link>
                                <span><IoChevronForward/></span>
                                <span className="header-nav-text" style={{color:  "#007BFF"}}>Photos</span>
                            </div>
                            <Link to={`/buy/property/${id}`} className="property-back-navigation header-nav-text d-flex  align-items-center w-100">
                                <IoArrowBack style={{width: '24px', height: '24px'}}/> <span className="header-nav-text">Back</span>
                            </Link>
                        </div>
                        <div className="property-info-container d-flex flex-column align-items-start ">
                            <h1 className="property-heading m-0">
                                {property?.property_name}
                            </h1>
                            <div className="property-cta">
                                <div className="d-flex align-items-center py-1">
                                    <IoLocationOutline style={{width: "24px", height: "24px"}}/>
                                    <h5 className="location-text">
                                        {property?.address}
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
                        property?.images.length > 0 &&
                        (
                            <>
                                {
                                    isMobile ? 
                                    (
                                        <div className="mobile-photos-container">
                                            <img src={`https://app.xpacy.com/src/upload/properties/${property?.images[0]}`} alt="" />
                                            <img src={`https://app.xpacy.com/src/upload/properties/${property?.images[1]}`} alt="" />
                                            <img src={`https://app.xpacy.com/src/upload/properties/${property?.images[1]}`} alt="" />
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
                                                    slide={true}
                                                    interval={null}
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
                                                            src={`https://app.xpacy.com/src/upload/properties/${property?.images[0]}`}
                                                            alt="Second slide"
                                                        />
                                                    </CarouselItem>
                                                    <CarouselItem className="view-photos-carousel">
                                                        <img
                                                            className="d-block w-100"
                                                            src={`https://app.xpacy.com/src/upload/properties/${property?.images[1]}`}
                                                            alt="Hero"
                                                        />
                                                    </CarouselItem>
                                                    <CarouselItem className="view-photos-carousel">
                                                        <img
                                                            className="d-block w-100"
                                                            src={`https://app.xpacy.com/src/upload/properties/${property?.images[2]}`}
                                                            alt="Second slide"
                                                            />
                                                    </CarouselItem>
                                                </Carousel>
                                                <div className="other-photos d-flex ">
                                                    <img
                                                        className={index == 0 ? 'active-carousel' : ''}
                                                        src={`https://app.xpacy.com/src/upload/properties/${property?.images[0]}`}
                                                        alt="Second slide"
                                                    />
                                                    <img
                                                        className={index == 1 ? 'active-carousel' : ''}
                                                        src={`https://app.xpacy.com/src/upload/properties/${property?.images[1]}`}
                                                        alt="Hero"
                                                    />
                                                    <img
                                                        className={index == 2 ? 'active-carousel' : ''}
                                                        src={`https://app.xpacy.com/src/upload/properties/${property?.images[2]}`}
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
                </>
            ):
            (
                <PulseLoader style={{display: 'flex', justifyContent: 'center' ,alignItems: 'center', alignSelf: 'stretch', height: '100vh'}} margin={5}/>
            )
        }
        </>
    )
}

export default Photos;