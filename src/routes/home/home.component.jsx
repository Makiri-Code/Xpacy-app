import { useRef, useState } from 'react';
import { Button, Carousel, CarouselItem, Form } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import {ReactComponent as FaStar} from '../../assets/homepage-assets/testimonial-section-images/star-Icons.svg';
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
import './home.styles.css';


const Home = () => {
    const showFaqs = {
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
    }
    const featuredCard = useRef(null);
    const [showFaq, setShowFaq] = useState(showFaqs);
    const {faq1, faq2} = showFaqs

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
            {/* Filter section */}
            <div className="container position-absolute bottom-0 start-50 translate-middle-x">
                <div className="row">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <div className="row mb-5">
                            <h1 className='main-heading text-white lh-sm fw-bold fs-1 text-center mb-4'>Experience Ease, <br/> Find Your Dream Property</h1>
                             <h3 className='sub-heading text-white fs-5 fw-normal text-center mb-5'>Search, buy, or rent properties across Nigeria</h3>
                        </div>
                        <div className='container row p-4 bg-light rounded mb-2'>
                            <Form className="col d-flex justify-content-between">
                                <div className="row">
                                    <Form.Select className='col mx-2'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='col mx-2'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                </div>
                                <Button className='search-btn'> <IoIosSearch className='search-icon'/>Search</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured Section */}
            <div className="container featured">
                {/* Featured Card Text */}
                <div className="row text-center">
                    <h1 className='col-12 heading'>Featured Properties</h1>
                    <h5 className='col-12 sub-heading'>Discover Exceptional Spaces Curated Just for You</h5>
                </div>
                <div className="row overflow-x-hidden flex-nowrap position-relative mt-1 p-3" ref={featuredCard}>
                        {/* Horizontal Scroll Buttons */}
                    <div className="left-arrow d-flex justify-content-center align-items-center position-absolute">
                        <GoArrowLeft className='arrow-icon'/>
                    </div>
                    <div className="right-arrow d-flex justify-content-center align-items-center position-absolute">
                        <GoArrowRight className='arrow-icon'/>
                    </div>
                    {/* Featured Cards */}
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            {/* Services section */}
            <div className="container services">
                <div className="row text-center">
                    <h1 className='col-12 heading'>Our Services</h1>
                    <h5 className='col-12 sub-heading'>Tailored Property Services to Meet Your Unique Needs</h5>
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
            <div className="container reviews">
                <div className="row text-center">
                    <h1 className="col-12 heading">What Our Clients Are Saying</h1>
                    <h5 className="col-12 sub-heading">Hear firsthand from our customers who have experienced exceptional service with us</h5>
                </div>
                {/* Testimonial Card Container */}
                <div className="testimonial-card-container overflow-hidden">
                    <div className="row flex-nowrap testimonial-scroll p-5">
                        <div className="row testimonial">
                            <div className="col customer-card-container">
                                <img src={Review01} alt="customer profile" className='rounded customer-img'/>
                            </div>
                            <div className="col">
                                <div className="row testimonial-txt">
                                    <p className='col'>“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”</p>
                                </div>
                                <div className="row my-4">
                                    <p>Deola Alade, <span className='fw-lighter'>Property owner</span></p>
                                </div>
                                <div className="row px-0 justify-content-center align-items-center">
                                    <p className='col-2 my-0'>5.0</p>
                                    <div className="col-10">
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonial">
                            <div className="col customer-card-container">
                                <img src={Review01} alt="customer profile" className='rounded customer-img'/>
                            </div>
                            <div className="col">
                                <div className="row testimonial-txt">
                                    <p>“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”</p>
                                </div>
                                <div className="row my-4">
                                    <p>Deola Alade, <span className='fw-lighter'>Property owner</span></p>
                                </div>
                                <div className="row g-0 justify-content-center align-items-center">
                                    <p className='col-2 my-0'>5.0</p>
                                    <div className="col-10">
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row testimonial">
                            <div className="col customer-card-container">
                                <img src={Review01} alt="customer profile" className='rounded customer-img'/>
                            </div>
                            <div className="col">
                                <div className="row testimonial-txt">
                                    <p>“Listing my property with Xpacy was the best decision I made. Their team handled everything, from photos to tenant management, giving me peace of mind and steady income!”</p>
                                </div>
                                <div className="row my-4">
                                    <p>Deola Alade, <span className='fw-lighter'>Property owner</span></p>
                                </div>
                                <div className="row g-0 justify-content-center align-items-center">
                                    <p className='col-2 my-0'>5.0</p>
                                    <div className="col-10">
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                        <FaStar className='star-icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Frequently asked questions session */}
            <div className="faqs d-flex align-items-center flex-column">
            {/* FAQ Container */}
                <div className="container">
                    <div className="row">
                        <h1 className='heading'>Frequently asked questions</h1>
                    </div>
                    <div className="row">
                        <h5 className='sub-heading'>
                        Everything you need to know about the Xpacy.
                        </h5>
                    </div>
                </div>
                {/* FAQs */}
                <div className="row justify-content-center align-items-center">
                    {/* <div className="row faq">
                        <div className="divider"></div>
                        <div className="col d-flex justify-content-between">
                            <h5 className='faq-heading'>How do I list my property ?</h5>
                            {faq1 ? <FiMinusCircle className='minus-icon' onClick={() => (setShowFaq({...showFaq, faq1: !faq1}))}/> : <PlusIcon className='plus-icon' onClick={() => setShowFaq({...showFaq, faq1: !faq1})}/>}
                        </div>
                        <p 
                        className = {
                        faq1 ? 'show-faq': 'no-show-faq'
                        }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus.
                        </p>
                    </div>
                    <div className="row faq">
                        <div className="divider"></div>
                        <div className="col d-flex justify-content-between align-items-center">
                            <h5 className='faq-heading'>How do I book facility management services ?</h5>
                            {faq2 ? <FiMinusCircle className='minus-icon' onClick={() => (setShowFaq({...showFaq, faq2: !faq2}))}/> : <PlusIcon className='plus-icon' onClick={() => setShowFaq({...showFaq, faq2: !faq2})}/>}
                        </div>
                        <p 
                        className = {
                        faq2 ? 'show-faq': 'no-show-faq'
                        }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus.
                        </p>
                    </div>
                    <div className="row faq">
                        <div className="divider"></div>
                        <div className="col d-flex justify-content-between align-items-center">
                            <h5 className='faq-heading'>Can I edit my property details?</h5>
                            {faq3 ? <FiMinusCircle className='minus-icon' onClick={() => (setShowFaq({...showFaq, faq3: !faq3}))}/> : <PlusIcon className='plus-icon' onClick={() => setShowFaq({...showFaq, faq3: !faq3})}/>}
                        </div>
                        <p 
                        className = {
                        faq3 ? 'show-faq': 'no-show-faq'
                        }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus.
                        </p>
                    </div>
                    <div className="row faq">
                        <div className="divider"></div>
                        <div className="col d-flex justify-content-between align-items-center">
                            <h5 className='faq-heading'>How do I receive updates on my properties ?</h5>
                            {faq4 ? <FiMinusCircle className='minus-icon' onClick={() => (setShowFaq({...showFaq, faq4: !faq4}))}/> : <PlusIcon className='plus-icon' onClick={() => setShowFaq({...showFaq, faq4: !faq4})}/>}
                        </div>
                        <p 
                        className = {
                        faq4 ? 'show-faq': 'no-show-faq'
                        }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus.
                        </p>
                    </div>
                    <div className="row faq">
                        <div className="divider"></div>
                        <div className="col d-flex justify-content-between align-items-center">
                            <h5 className='faq-heading'>What payment methods are supported?</h5>
                            {faq5 ? <FiMinusCircle className='minus-icon' onClick={() => (setShowFaq({...showFaq, faq5: !faq5}))}/> : <PlusIcon className='plus-icon' onClick={() => setShowFaq({...showFaq, faq5: !faq5})}/>}
                        </div>
                        <p 
                        className = {
                        faq5 ? 'show-faq': 'no-show-faq'
                        }>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam incidunt accusamus. Pariatur, ad id mollitia iure sit deserunt expedita nemo, repellat iusto consequatur ut, explicabo autem nisi debitis doloribus.
                        </p>
                    </div> */}
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
        </>
    );
};

export default Home; 