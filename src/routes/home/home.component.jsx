import { useRef, useState } from 'react';
import {Carousel, CarouselItem, Form } from 'react-bootstrap';
import Button from '../../components/button/button';
import { IoIosSearch} from "react-icons/io";
// import {ReactComponent as NairaIcon} from '.'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
// import {ReactComponent as FaStar} from '../../assets/homepage-assets/testimonial-section-images/star-Icons.svg';
import Services01 from '../../assets/homepage-assets/services-section-images/service-1.png';
import Services02 from '../../assets/homepage-assets/services-section-images/service-2.png';
import Services03 from '../../assets/homepage-assets/services-section-images/service-3.png';
import Services04 from '../../assets/homepage-assets/services-section-images/service-4.png';
import Services05 from '../../assets/homepage-assets/services-section-images/service-5.png';
import Icon01 from '../../assets/homepage-assets/services-section-images/icon-1.svg';
import Icon02 from '../../assets/homepage-assets/services-section-images/icon-2.svg';
import Icon03 from '../../assets/homepage-assets/services-section-images/icon-3.svg';
import Icon04 from '../../assets/homepage-assets/services-section-images/icon-4.svg';
import Icon05 from '../../assets/homepage-assets/services-section-images/icon-5.svg';
import Faq from '../../components/faq/faq.component';
import Card from '../../components/card/card.component';
import ClientRating from '../../components/clientRating/clientRating';
import Image1 from '../../assets/homepage-assets/getintouch-section-images/image1.png'
import Image2 from '../../assets/homepage-assets/getintouch-section-images/image2.png'
import Image3 from '../../assets/homepage-assets/getintouch-section-images/image3.png'
import lmpimg from '../../assets/homepage-assets/listproperty-section-images/listproperty-image.png'
import mobileimg from '../../assets/homepage-assets/download-section-images/mobile-img.png'
import { FaApple } from "react-icons/fa";
import FaPlayStore from '../../assets/homepage-assets/download-section-images/play-store.png'
import insightimg1 from '../../assets/homepage-assets/insights-section-images/insight-image1.png'
import insightimg2 from '../../assets/homepage-assets/insights-section-images/insight-image2.png'
import insightimg3 from '../../assets/homepage-assets/insights-section-images/insight-image3.png'
import {ReactComponent as GooglePlay} from '../../assets/homepage-assets/play-store.svg';
import {ReactComponent as GooglePlayText} from '../../assets/homepage-assets/google-play.svg';
import {ReactComponent as ApplePlay} from '../../assets/homepage-assets/apple-store.svg';

import './home.styles.css';
import Reviews from '../../components/reviews/reviews';
import GetInTouch from '../../components/get-in-touch/getInTouch';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Home = () => {
    AOS.init();
    const featuredCard = useRef(null);
    const cardStyles = {
        cardWidth: '373px',
        showDivider: true
    }
    const featuredProperties = [
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "1,000,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "9,000,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "5,000,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "600,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "800,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Abuja, Lagos',
            'price': "600,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Lekki, Lagos',
            'price': "900,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "600,000,000",
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': "600,000,000",
            'bedrooms':4,
            'bathrooms':5
        }
    ]
    
    const handleFeatureClick = (e)=>{
        const name = e.target.getAttribute('name')
        console.log(name)
        if (name && featuredCard.current){
            console.log(featuredCard)
            if (name==='fclickright'){                
                featuredCard.current.scrollBy(397, 0 )
            }else{
                featuredCard.current.scrollBy(-397, 0)
            }
        }
    }

    return (
        <>
        {/* Hero Section */}
            <Carousel className='position-relative' controls={false} wrap={true} indicators={false}>
                <CarouselItem>
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero"
                    classNme = "d-block w-100"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img src="https://images.unsplash.com/photo-1633119713175-c53c29479984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero"
                    classNme = "d-block w-100"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero"
                    classNme = "d-block w-100"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero"
                    classNme = "d-block w-100"
                    />
                </CarouselItem>
            </Carousel>
            <div className="banner-content-container">
                <div className="arow">
                    <div className="filter-heading d-flex flex-column justify-content-center align-items-center">
                        <div className="headings " data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-easing="linear" data-aos-duration="1500">
                            <h1 className='banner-main-heading'>Experience Ease, <br/> Find Your Dream Property</h1>
                             <h3 className='banner-sub-heading'>Search, buy, or rent properties across Nigeria</h3>
                        </div>
                        <div className=' search-container' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="linear" data-aos-duration="1000">
                            <Form className="align-search-container">
                                <div className="home-select-option">
                                    <Form.Select className='select'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select'>
                                        <option>Location</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select'>
                                        <option>Type</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select'>
                                        <option>Bedroom</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select'>
                                        <option>Min Price</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select'>
                                        <option>Max Price</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                </div>
                                <Button buttonType={{primaryBtn: true}} className='search-btn'> <IoIosSearch className='search-icon'/> Search</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Featured Section */}
            <div className="featured">
                <div className="brow">
                    <h1 className='feature-main-heading' data-aos="slide-down"  data-aos-easing="linear" data-aos-duration="1000">Featured Properties</h1>
                    <h5 className='feature-sub-heading' data-aos="slide-up"  data-aos-easing="linear" data-aos-duration="1000">Discover Exceptional Spaces Curated Just for You</h5>
                </div>
                <div className="featured-scroll d-flex align-self-stretch position-relative" data-aos="slide-up"  data-aos-easing="ease-in" data-aos-duration="1000">
                    <div className="featured-container d-flex flex-nowrap " ref={featuredCard}>
                        {/* Horizontal Scroll Buttons */}
                        <div className="horizontal-scroll-btn" onClick={handleFeatureClick}>
                            <div name='fclickleft' className="left-arrow d-flex justify-content-center align-items-center position-absolute">
                                <GoArrowLeft name='fclickleft' className='arrow-icon'/>
                            </div>                        
                            <div name='fclickright' className="right-arrow d-flex justify-content-center align-items-center position-absolute">
                                <GoArrowRight name='fclickright' className='arrow-icon'/>
                            </div>
                        </div>
                        <div className='featured-inner-container' >
                            {/* Featured Cards */}
                            {
                                featuredProperties.map((properties, id)=>{
                                    return (                                
                                        <Card
                                            cardStyles={cardStyles}
                                            propertise={properties}
                                        />                    
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="services"  data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                <div className="text-center">
                    <h1 className='heading'>Our Services</h1>
                    <h5 className='sub-heading'>Tailored Property Services to Meet Your Unique Needs</h5>
                    <div className="row services-img-container mx-0 flex-nowrap overflow-x-hidden">
                            <div className="col">
                                <div className="hover-container">
                                </div>
                                <img src={Services01} alt="services" className='services-img position-relative rounded'/>
                                <img src={Icon01} alt="Naira bag" style={{width: "160px", height: "160px"}} className='position-absolute top-50 start-50 translate-middle object-fit-contain'/>
                            </div>
                            <div className="col">
                                <div className="hover-container">
                                
                                </div>
                                <img src={Services02} alt="services" className='services-img position-relative rounded'/>
                                <img src={Icon02} alt="Service icon" style={{width: "160px", height: "160px"}} className='position-absolute top-50 start-50 translate-middle object-fit-contain'/>
                            </div>
                            <div className="col">
                                <div className="hover-container">
                                
                                </div>
                                <img src={Services03} alt="services" className='services-img position-relative rounded'/>
                                <img src={Icon03} alt="Services icon" style={{width: "160px", height: "160px"}} className='position-absolute top-50 start-50 translate-middle object-fit-contain'/>
                            </div>
                            <div className="col">
                                <div className="hover-container">
                                
                                </div>
                                <img src={Services04} alt="services" className='services-img position-relative rounded'/>
                                <img src={Icon04} alt="Services Icon" style={{width: "160px", height: "160px"}} className='position-absolute top-50 start-50 translate-middle object-fit-contain'/>
                            </div>
                            <div className="col">
                                <div className="hover-container">
                                
                                </div>
                                <img src={Services05} alt="services" className='services-img position-relative rounded'/>
                                <img src={Icon05} alt="Services icon" style={{width: "160px", height: "160px"}} className='position-absolute top-50 start-50 translate-middle object-fit-contain'/>
                            </div>
                    </div>
                </div>
            </div>
            {/* Testimonial Section */}
            <Reviews
                scrollWidth={'100%'}
            />
            {/* Frequently asked questions session */}
            {/* FAQ Container */}
                {/* FAQs */}
            <div className="faqs d-flex align-items-center flex-column">
                <div data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                    <div>
                        <h1 className='heading'>Frequently asked questions</h1>
                    </div>
                    <div>
                        <h5 className='sub-heading'>
                        Everything you need to know about the Xpacy.
                        </h5>
                    </div>
                </div>
                <div className=" faq-scroll justify-content-center align-items-center">
                    
                    <Faq 
                        showDivider={false}
                        heading={"How do I list my property?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                    <Faq 
                        showDivider = {true}
                        heading={"How do I book facility management services?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                    <Faq 
                        showDivider = {true}
                        heading={"How do I book facility management services?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                    <Faq 
                        showDivider = {true}
                        heading={"How do I book facility management services?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                    <Faq 
                        showDivider = {true}
                        heading={"How do I book facility management services?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                    <Faq 
                        showDivider = {true}
                        heading={"How do I book facility management services?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                </div>
                <GetInTouch
                    Image1={Image1}
                    Image2={Image2}
                    Image3={Image3}
                    heading={'Still have questions?'}
                    message={"Can't find answers you're looking for? Please chat to our friendly team"}
                    buttonText={'Get In Touch'}
                />
            </div>
            <div className='lmp'>
                <img className='lmp-img' alt='lmp' src={lmpimg} data-aos="flip-left"  data-aos-easing="ease-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"/>
                <div className='lmp-content' data-aos="flip-right"  data-aos-easing="ease-in" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                    <div className='lmp-content-title'>Want to list your property ?</div>
                    <div className='lmp-content-subtext'>At Xpacy, we manage your property listings from start to finish, ensuring you enjoy peace of mind while maximizing your returns.</div>
                    <div className='lmp-button'>List My Property</div>
                </div>
            </div>
            <div className='download'>
                <div className='download-content' data-aos="fade-right"  data-aos-easing="ease-in" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                    <h3 className='download-content-title'>Take Xpacy with you Anywhere!</h3>
                    <p className='download-content-subtext'>Downlaod our mobile app and enjoy seamless property mangement at a go.</p>
                    <div className='download-content-icondiv'>
                        <button className="play-store">
                            <GooglePlay/>
                            <div className='d-flex flex-column align-items-start'>
                                <span>GET IT ON</span>
                                <GooglePlayText/>
                            </div>
                        </button>
                        <button className="play-store">
                            <ApplePlay/>
                            <div className='d-flex flex-column align-items-start'>
                                <span>Download on the</span>
                                <p>App Store</p>
                            </div>
                        </button>
                    </div>                    
                </div>
                <img className='download-img' alt='download-img' src={mobileimg} data-aos="fade-up"  data-aos-easing="ease-in" data-aos-duration="1500" data-aos-anchor-placement="top-bottom"/>                
            </div>
            {/* Blog section */}
            <div className='insight'>
                <div className='insight-cover'>
                    <div className='insight-content' data-aos="fade-down"  data-aos-easing="ease-in" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                        <div className='insight-content-title'>Xpacy Insights</div>
                        <div className='insight-content-subtext'>Expert Advice, Tips and Trends to Make the Most of Your Property Journey</div>
                    </div>
                    <div className='insight-card-view'>
                        <div className='insight-card'>
                            <img className='insight-card-img' alt='insight1' src={insightimg1}/>
                            <div className='insight-card-title'>Top Tips for First-Time Property Owners: Maximize Your Investment with Ease</div>
                            <div className='insight-bottom'>
                                <div className='insight-card-name'>Property Investement</div>
                                <div className='insight-card-bottom'>1st Oct, 2024 . 11 min read</div>
                            </div>
                        </div>
                        <div className='insight-card'>
                            <img className='insight-card-img' alt='insight2' src={insightimg2}/>
                            <div className='insight-card-title'>Top Tips for First-Time Property Owners: Maximize Your Investment with Ease</div>
                            <div className='insight-bottom'>
                                <div className='insight-card-name'>Property Sale</div>
                                <div className='insight-card-bottom'>14th Oct, 2024 . 8 min read</div>
                            </div>
                        </div>
                        <div className='insight-card'>
                            <img className='insight-card-img' alt='insight3' src={insightimg3}/>
                            <div className='insight-card-title'>Top Tips for First-Time Property Owners: Maximize Your Investment with Ease</div>
                            <div className='insight-bottom'>
                                <div className='insight-card-name'>Facility Management</div>
                                <div className='insight-card-bottom'>30 Oct, 2024 . 10 min read</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home; 