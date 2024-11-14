
import { Button, Carousel, CarouselItem, Form } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import './home.styles.css';
const Home = () => {
    return (
        <>
            <Carousel className='position-relative' controls={false} wrap={true} indicators={false} interval={5000}>
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
            <section className='featured'>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <div className="brow mb-3">
                        <h1 className='feature-main-heading'>Featured Properties</h1>
                        <h3 className='feature-sub-heading'>Discover Exceptional Spaces Curated Just for You</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home; 