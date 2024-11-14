import { useRef } from 'react';
import { Button, Carousel, CarouselItem, Form } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import {ReactComponent as NairaIcon}  from '../../assets/mdi_naira.svg'
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import './home.styles.css';
const Home = () => {
    const featuredCard = useRef(null)
    return (
        <>
<<<<<<< HEAD
            <Carousel className='position-relative' controls={false} wrap={true} indicators={false} interval={5000}>
=======
        {/* Hero Section */}
            <Carousel className='position-relative' controls={false} wrap={true} indicators={false}>
>>>>>>> 6badbae3fad5553cb14fd4277cb2cb48057e5428
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
<<<<<<< HEAD
            <section className='featured'>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <div className="brow mb-3">
                        <h1 className='feature-main-heading'>Featured Properties</h1>
                        <h3 className='feature-sub-heading'>Discover Exceptional Spaces Curated Just for You</h3>
                    </div>
                </div>
            </section>
=======
            {/* Featured Section */}
            <div className="container featured gap-5">
                <div className="row text-center">
                    <h1 className='lh-lg'>Featured Properties</h1>
                    <h5 className='fw-normal fs-6'>Discover Exceptional Spaces Curated Just for You</h5>
                </div>
                <div className="row overflow-x-auto flex-nowrap featured-card position-relative mt-5" ref={featuredCard}>
                    {/* Horizontal Scroll Buttons */}
                    <div className="control-btns d-flex justify-content-between align-items-center position-absolute">
                        <div className="left-arrow d-flex justify-content-center align-items-center">
                            <GoArrowLeft className='left-arrow-icon'/>
                        </div>
                        <div className="left-arrow d-flex justify-content-center align-items-center">
                            <GoArrowLeft className='left-arrow-icon'/>
                        </div>
                    </div>
                    {/* Featured Cards */}
                    <div className="col">
                        <div className="card p-0" style={{width: "373px"}}>
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured" className='img-fluid rounded-top' />
                        <div className="card-body">
                            <p className='card-text'>Terrace</p>
                            <h5 className="card-title">Luxury 4-Bedroom Terrace Home with BQ</h5>
                            <p className="card-text fs-6 fw-lighter d-flex align-items-end">
                                <IoLocationOutline className="location-icon" />
                                Ikoyi, Lagos
                            </p>
                            <h4 className="card-title d-flex align-items-end fw-bold price">
                                <NairaIcon className='naira-icon' />
                                 1,000,000,000
                            </h4>
                            <div className="divider"></div>
                            <div className="card-body d-flex justify-content-between align-items-center pt-3 p-0 pt-3">
                                <p className="card-text m-0">
                                    <TbBed className='card-footer-icon me-2 '/>
                                    Bed: 4
                                </p>
                                <p className="card-text m-0">
                                        <LuBath className='card-footer-icon me-2 '/>
                                    Baths: 5
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-0" style={{width: "373px"}}>
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured" className='img-fluid rounded-top' />
                            <div className="card-body">
                                <p className='card-text'>Terrace</p>
                                <h5 className="card-title">Luxury 4-Bedroom Terrace Home with BQ</h5>
                                <p className="card-text fs-6 fw-lighter d-flex align-items-end">
                                <IoLocationOutline className="location-icon" />
                                Ikoyi, Lagos
                                </p>
                                <h4 className="card-title d-flex align-items-end fw-bold price">
                                <NairaIcon className='naira-icon' />
                                 1,000,000,000
                                </h4>
                                <div className="divider"></div>
                                <div className="card-body d-flex justify-content-between align-items-center pt-3 p-0 pt-3">
                                    <p className="card-text m-0">
                                    <TbBed className='card-footer-icon me-2 '/>
                                    Bed: 4
                                    </p>
                                    <p className="card-text m-0">
                                        <LuBath className='card-footer-icon me-2 '/>
                                    Baths: 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-0" style={{width: "373px"}}>
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured" className='img-fluid rounded-top' />
                            <div className="card-body">
                                <p className='card-text'>Terrace</p>
                                <h5 className="card-title">Luxury 4-Bedroom Terrace Home with BQ</h5>
                                <p className="card-text fs-6 fw-lighter d-flex align-items-end">
                                <IoLocationOutline className="location-icon" />
                                Ikoyi, Lagos
                                </p>
                                <h4 className="card-title d-flex align-items-end fw-bold price">
                                <NairaIcon className='naira-icon' />
                                 1,000,000,000
                                </h4>
                                <div className="divider"></div>
                                <div className="card-body d-flex justify-content-between align-items-center pt-3 p-0 pt-3">
                                    <p className="card-text m-0">
                                    <TbBed className='card-footer-icon me-2 '/>
                                    Bed: 4
                                    </p>
                                    <p className="card-text m-0">
                                        <LuBath className='card-footer-icon me-2 '/>
                                    Baths: 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
>>>>>>> 6badbae3fad5553cb14fd4277cb2cb48057e5428
        </>
    );
};

export default Home; 