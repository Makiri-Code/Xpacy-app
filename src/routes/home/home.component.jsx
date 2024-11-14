import { useRef } from 'react';
import { Button, Carousel, CarouselItem, Form } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import './home.styles.css';
import Card from '../../components/card/card.component'
const Home = () => {
    const featuredCard = useRef(null)
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
                    <h1 className='lh-lg'>Featured Properties</h1>
                    <h5 className='fw-normal fs-6'>Discover Exceptional Spaces Curated Just for You</h5>
                </div>
                <div className="row overflow-x-hidden flex-nowrap featured-card position-relative mt-5" ref={featuredCard}>
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
            <div className="container services">
                <div className="row text-center">
                    <h1 className='lh-lg'>Our Services</h1>
                    <h5 className='fw-normal fs-6'>Tailored Property Services to Meet Your Unique Needs</h5>
                </div>
                <div className="row"></div>
            </div>
        </>
    );
};

export default Home; 