import { IoLocationOutline } from "react-icons/io5";
import {ReactComponent as Naira}  from '../../assets/mdi_naira.svg'
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import './card.styles.css';
const Card = ({propertise, cardWidth}) => {
    const {src, title, heading, location, price, bedrooms, bathrooms} = propertise
    return (
        <div className="propertise-card d-flex flex-column align-items-start" style={{minWidth: cardWidth}} >
            <div className="card-img-container position-relative">
                <img className="card-image" src={src} alt="house image"/>
                <div className="card-image-btns d-flex justify-content-between align-items-center position-absolute">
                    <button className="btn rounded-pill d-flex justify-content-center align-items-center">Sale</button>
                    <div className="heart-icon-container d-flex justify-content-center align-items-center">
                        <CiHeart className="heart-icon"/>
                    </div>
                </div>
            </div>
            <div className="card-body-container d-flex flex-column align-items-start align-self-stretch">
                <div className="card-header d-flex flex-column align-items-start align-self-stretch">
                    <p className="card-title">
                        {title}
                    </p>
                    <h1 className="card-heading">
                    {heading}
                    </h1>
                    <div className="location d-flex justify-content-center align-items-center">
                        <IoLocationOutline className="location-icon" />
                        <p className="location-text">
                            {location}
                        </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Naira className='price-icon' />
                        <h5 className="price-text m-0">
                            {price.toLocaleString()}
                        </h5>
                    </div>
                </div>
                <div className="card-divider"/>
                <div className="card-footer w-100 d-flex justify-content-between align-items-center">
                    <div className="card-footer-content d-flex align-items-center">
                        <TbBed className='card-footer-icon'/>
                        <p className="card-footer-text">
                            Bed: {bedrooms}
                        </p>
                    </div>
                    <div className="card-footer-content d-flex align-items-center">
                        <LuBath className='card-footer-icon'/>
                        <p className="card-footer-text">
                            Bath: {bathrooms}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;