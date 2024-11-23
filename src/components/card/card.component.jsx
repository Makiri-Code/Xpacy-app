import { IoLocationOutline } from "react-icons/io5";
import {ReactComponent as NairaIcon}  from '../../assets/mdi_naira.svg'
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import './card.styles.css';
const Card = ({properties}) => {
    const {src, cardText, cardTitle, location, amount, beds, baths} = properties
    return (
        <div className="card-container d-flex flex-column align-items-start position-relative"  style={{width: "373px"}}>
                {/* Buttons */}
            <div className="card-btn position-relative position-absolute d-flex justify-content-between align-items-center" style={{width: "100%"}}>
                <button className="btn rounded-pill">Sale</button>
                <div className="heart-icon-container rounded-circle d-flex justify-content-center align-items-center">
                    <CiHeart className="heart-icon"/>
                </div>
            </div>
            <img src={src} alt="featured" className='card-img rounded-top' />
            <div className="card-body d-flex flex-column align-items-start">
                <div className='card-text'>{cardText}</div>
                <h5 className="card-title">{cardTitle}</h5>
                <div className="card-loc">
                    <IoLocationOutline className="loc-icon" />
                    <div className="card-text-location my-0">{location}</div>
                </div>
                <div className="card-price">
                    <NairaIcon className='naira-icon' />
                    <h4 className="price-text">{amount.toLocaleString()}</h4>
                </div>
                <div className="divider1"/>
                <div className="card-footer">
                    <div className="card-footer-item">
                        <TbBed className='card-footer-icon'/>
                        <div className="card-text">Bed: {beds}</div>
                    </div>
                    <div className="card-footer-item">
                            <LuBath className='card-footer-icon'/>
                            <div className="card-text">Baths: {baths}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;