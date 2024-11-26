import { useRef, useState } from 'react';
import { Button, Carousel, CarouselItem, Form } from 'react-bootstrap';
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
import Review01 from '../../assets/homepage-assets/testimonial-section-images/review-img01.png';
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
import './home.styles.css';


const Home = () => {
    const featuredCard = useRef(null)
    const [showFaq, setShowFaq] = useState(false)
    const showFaqs = {
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
    }
    const {faq1, faq2} = showFaqs
    const featuredProperties = [
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': 1000000000,
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': 1000000000,
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': 1000000000,
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': 1000000000,
            'bedrooms':4,
            'bathrooms':5
        },
        {
            'src':"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'title':'Terrace',
            'heading':'Luxury 4-Bedroom Terrace Home with BQ',
            'location': 'Ikoyi, Lagos',
            'price': 1000000000,
            'bedrooms':4,
            'bathrooms':5
        },
    ]

    const faq = [

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

    const handleFeatureClick = (e)=>{
        const name = e.target.getAttribute('name')
        if (name && featuredCard.current){
            if (name==='fclickleft'){                
                featuredCard.current.scrollBy({
                    left: -397, 
                    behavior: 'smooth',
                })
            }else{
                featuredCard.current.scrollBy({
                    left: 397, 
                    behavior: 'smooth',
                })
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
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <div className="brow mb-3">
                            <h1 className='banner-main-heading'>Experience Ease, <br/> Find Your Dream Property</h1>
                             <h3 className='text-white fs-5 fw-normal text-center mb-5 banner-sub-heading'>Search, buy, or rent properties across Nigeria</h3>
                        </div>
                        <div className=' p-4 bg-light rounded mb-2 search-container'>
                            <Form className="align-search-container">
                                <div className="row">
                                    <Form.Select className='col mx-2 select'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2 select'>
                                        <option>Location</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2 select'>
                                        <option>Type</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2 select'>
                                        <option>Bedroom</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2 select'>
                                        <option>Min Price</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2 select'>
                                        <option>Max Price</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                </div>
                                <Button className='search-btn'> <IoIosSearch className='search-icon'/> Search</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Featured Section */}
            <div className="featured gap-5 text-center">
                <div className="brow">
                    <h1 className='lh-lg feature-main-heading'>Featured Properties</h1>
                    <h5 className='fw-normal fs-6 feature-sub-heading'>Discover Exceptional Spaces Curated Just for You</h5>
                </div>
                <div className="featured-container d-flex flex-nowrap position-relative">
                    <div className='featured-inner-container' ref={featuredCard} onClick={handleFeatureClick}>
                        {/* Horizontal Scroll Buttons */}
                        <div name='fclickleft' className="left-arrow d-flex justify-content-center align-items-center position-absolute">
                            <GoArrowLeft name='fclickleft' className='arrow-icon'/>
                        </div>                        
                        <div name='fclickright' className="right-arrow d-flex justify-content-center align-items-center position-absolute">
                            <GoArrowRight name='fclickright' className='arrow-icon'/>
                        </div>
                        {/* Featured Cards */}
                        {
                            featuredProperties.map((properties, id)=>{
                                return (                                
                                    <Card
                                        cardWidth='373px'
                                        propertise={properties}
                                    />                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="services">
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
            <div className="reviews">
                <div className="text-center">
                    <h1 className="col-12 heading">What Our Clients Are Saying</h1>
                    <h5 className="col-12 sub-heading">Hear firsthand from our customers who have experienced exceptional service with us</h5>
                </div>
               
                <div className="testimonial-card-container overflow-hidden">
                    <div className="row flex-nowrap testimonial-scroll p-5">
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
            {/* Frequently asked questions session */}
            {/* FAQ Container */}
                {/* FAQs */}
            <div className="faqs d-flex align-items-center flex-column">
                <div className="">
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
                        showFaqs={showFaqs}
                        heading={"How do I list my property?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                    <Faq 
                        faq={faq}
                        setShowFaq={setShowFaq}
                        showFaq={showFaq}
                        heading={"How do I book facility management services?"}
                        answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus."}
                    />
                </div>
                <div className="container"></div>
            </div>

            <div className='getintch'>
                <div className='gtintch-img-cover'>
                    <div className='gtintch-img-src1'><img alt='img1' src={Image1}/></div>
                    <div className='gtintch-img-src2'><img alt='img2' src={Image2}/></div>
                    <div className='gtintch-img-src3'><img alt='img3' src={Image3}/></div>                    
                </div>
                <div className='gtintch-text'>
                    <div className='gtintch-text-title'>Still have questions?</div>
                    <div className='gtintch-text-subtext'>Can't find the answer you're looking for? Please chat to our friendly team.</div>
                </div>
                <div className='gtintch-button'>
                    Get In Touch
                </div>
            </div>
            <div className='lmp'>
                <img className='lmp-img' alt='lmp' src={lmpimg}/>
                <div className='lmp-content'>
                    <div className='lmp-content-title'>Want to list your property?</div>
                    <div className='lmp-content-subtext'>At Xpacy, we manage your property listings from start to finish, ensuring you enjoy peace of mind while maximizing your returns.</div>
                    <div className='lmp-button'>List My Property</div>
                </div>
            </div>
            <div className='download'>
                <div className='download-content'>
                    <div className='download-content-title'>Take Xpacy with you Anywhere!</div>
                    <div className='download-content-subtext'>Downlaod our mobile app and enjoy seamless property mangement at a go.</div>
                    <div className='download-content-icondiv'></div>                    
                </div>
                <img className='download-img' alt='download-img' src={mobileimg}/>                
            </div>
            <div className='insight'>
                <div className='insight-cover'>
                    <div className='insight-content'>
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