import { IoChevronForward } from "react-icons/io5";
import {Form} from 'react-bootstrap';
import LatestImage from '../../assets/shop-page-assets/latest-img.jpeg'
import { IoLocationOutline } from "react-icons/io5";
import {ReactComponent as Naira} from '../../assets/mdi_naira.svg'
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import Card from '../card/card.component'
import './shop.styles.css';
import { Link } from "react-router-dom";

const Shop = () => {
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
            src: LatestImage,
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: LatestImage,
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: LatestImage,
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        },
        {
            src: LatestImage,
            title: 'Duplex',
            heading: '4-Bedroom Semi-detached Duplex with BQ',
            location: 'Ikoyi, Lagos',
            price: '1,000,000', 
            bedrooms: 4,
            bathrooms: 4,
        }
    ]
    return(
        <>
            <div className="shop-container d-flex flex-column align-items-center align-self-stretch">
                <div className="header d-flex flex-column align-items-start">
                    <div className="header-navigation">
                     <Link to={'/'} className="header-nav-text">Home</Link> <span><IoChevronForward/></span> <span className="header-nav-text" style={{color:  "#007BFF"}}>Buy</span>
                    </div>
                    <div className="header-text-container">
                        <h1 className="header-heading">Properties For Sale</h1>
                        <p className="header-text">Search for properties on sale</p>
                    </div>
                </div>
                <div className="main-container d-flex justify-content-center align-items-start ">
                    {/* Sidebar */}
                    <div className="sidebar-container d-flex flex-column align-items-start">
                        {/* Fileter sidebar */}
                        <div className="filter-options d-flex flex-column align-items-start">
                            <h1 className="sidebar-header">Filter Options</h1>
                            <div className="input d-flex flex-column align-items-center">
                                <Form className="d-flex flex-column select-form">
                                    <Form.Select className='select-option'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select-option'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select-option'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select-option'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select-option'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                    <Form.Select className='select-option'>
                                        <option>Purpose</option>
                                        <option value={"buy"}>Buy</option>
                                        <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                </Form>
                                <div className="filter-btn-container d-flex flex-column align-items-start">
                                    <button className="filter-btn d-flex justify-content-center align-items-center">Apply Filter</button>
                                    <button className="filter-btn-white d-flex justify-content-center align-items-center">Clear Filter</button>
                                </div>
                            </div>
                        </div>
                        {/* Latest side bar */}
                        <div className="latest-propertises d-flex flex-column">
                            <h1 className="latest-propertises-header">Latest Propertises</h1>
                            {/* Latest Sidebar Card */}
                            <div className="latest-propertises-card d-flex flex-column">
                                {
                                    latestPropertises.map((propertises) => {
                                        const {src, title, heading, location, price, bedrooms, bathrooms} = propertises
                                        return(
                                            <div className="latest-card-container d-flex">
                                                <img src={src} alt="" className="latest-card-img"/>
                                                <div className="latest-card-body d-flex flex-column align-items-start">
                                                    <p className="latest-card-title my-0">{title}</p>
                                                    <h1 className="latest-card-heading">{heading}</h1>
                                                    <div className="location-container d-flex justify-content-center align-items-center">
                                                        <IoLocationOutline className="location"/>
                                                        <p className="latest-card-title my-0">{location}</p>
                                                    </div>
                                                    <div className="price-container d-flex justify-content-center align-items-center">
                                                        <Naira className="naira"/>
                                                        <p className="latest-price my-1">{price}</p>
                                                    </div>
                                                    <div className="latest-card-divider"/>
                                                    <div className="latest-card-footer d-flex justify-content-between align-items-center">
                                                        <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
                                                            <TbBed className="bedroom-icon"/>
                                                            <p className="latest-card-txt my-0">Bed: {bedrooms}</p>
                                                        </div>
                                                        <div className="latest-card-footer-content d-flex justify-content-center align-items-center">
                                                            <LuBath className="bedroom-icon"/>
                                                            <p className="latest-card-txt my-0">Bath: {bathrooms}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="main-content-container d-flex flex-column align-items-start">
                        <div className="results-header d-flex justify-content-center align-items-center">
                            <div className="reults-summary">
                                <p>Showing 1 - 10 of 67 results</p>
                            </div>
                            <div className="sort-label-container d-flex justify-content-center align-items-center">
                                <p className="sort">Sort by: </p>
                                <Form className="default-input">
                                    <Form.Select className="select-input">
                                    <option>Default</option>
                                    <option value={"buy"}>Buy</option>
                                    <option value={"rent"}>Rent</option>
                                    </Form.Select>
                                </Form>
                            </div>
                        </div>
                        <div className="propertises-container d-flex align-items-start flex-wrap">
                        {
                                    latestPropertises.map((propertise) => {
                                        
                                        return(
                                            <Link to='property'>
                                                <Card
                                                    cardWith = {"415px"}
                                                    propertise = {propertise}

                                                />
                                            </Link>
                                        )
                                    })
                                }  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Shop;