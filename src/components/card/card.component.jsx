import { IoLocationOutline } from "react-icons/io5";
import {ReactComponent as NairaIcon}  from '../../assets/mdi_naira.svg'
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

import './card.styles.css';
const Card = () => {
    return (
        <div className="col position-relative card-container">
            <div className="card" style={{width: "320px"}}>
                {/* Buttons */}
                <div className="card-btn position-relative position-absolute d-flex justify-content-between align-items-center" style={{width: "100%"}}>
                    <button className="btn rounded-pill">Sale</button>
                    <div className="heart-icon-container rounded-circle d-flex justify-content-center align-items-center">
                        <CiHeart className="heart-icon"/>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured" className='img-fluid rounded-top' />
                <div className="card-body">
                    <p className='card-text'>Terrace</p>
                    <h5 className="card-title">Luxury 4-Bedroom Terrace Home with BQ</h5>
                    <p className="card-text fw-lighter d-flex align-items-end">
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
    )
}

export default Card;