import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import {ReactComponent as Naira}  from '../../assets/mdi_naira.svg'
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import './card.styles.css';
const Card = ({propertise,  cardStyles}) => {
    const {cardWidth, cardHeight, titleSize, headingSize, iconWidth, iconHeight, imgHeight, likeIconSize, bodyGap, bodyPadding, headerGap, showDivider, priceSize, showButtons} = cardStyles
    const {src, title, heading, location, price, bedrooms, bathrooms} = propertise
    return (
        <div className="propertise-card d-flex flex-column align-items-start" style={{width: cardWidth, height: cardHeight}} >
            <div className="card-img-container position-relative">
                <img className="card-image" src={src} alt="house image" style={{height: imgHeight}}/>
                <div className="card-image-btns d-flex justify-content-between align-items-center position-absolute">
                    <button className="btn rounded-pill d-flex justify-content-center align-items-center">Sale</button>
                    <div className="heart-icon-container d-flex justify-content-center align-items-center" style={{width: likeIconSize, height: likeIconSize}}>
                        <CiHeart className="heart-icon" />
                    </div>
                </div>
            </div>
            <div className="card-body-container d-flex flex-column align-items-start align-self-stretch" style={{gap: bodyGap, padding: bodyPadding}}>
                <div className="card-header d-flex flex-column align-items-start align-self-stretch" style={{gap: headerGap}}>
                    <p className="card-title" style={{fontSize: titleSize}}>
                        {title}
                    </p>
                    <h1 className="card-heading" style={{fontSize: headingSize}}>
                    {heading}
                    </h1>
                    <div className="location d-flex justify-content-center align-items-center">
                        <IoLocationOutline className="location-icon" style={{width: iconWidth, height: iconHeight}}/>
                        <p className="location-text" style={{fontSize: titleSize}}>
                            {location}
                        </p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Naira className='price-icon' style={{width: iconWidth, height: iconHeight}}/>
                        <h5 className="price-text m-0" style={{fontSize: priceSize}}>
                            {price}
                        </h5>
                    </div>
                </div>
                {
                    showDivider && <div className="card-divider"/>
                }
                <div className="card-footer w-100 d-flex justify-content-between align-items-center">
                    <div className="card-footer-content d-flex align-items-center">
                        <TbBed className='card-footer-icon' style={{width: iconWidth, height: iconHeight}}/>
                        <p className="card-footer-text" style={{fontSize: titleSize}}>
                            Bed: {bedrooms}
                        </p>
                    </div>
                    <div className="card-footer-content d-flex align-items-center">
                        <LuBath className='card-footer-icon' style={{width: iconWidth, height: iconHeight}}/>
                        <p className="card-footer-text" style={{fontSize: titleSize}}>
                            Bath: {bathrooms}
                        </p>
                    </div>
                </div>
                {
                    showButtons && 
                    (
                        <>
                            <div className="card-divider"/>
                            <div className="card-footer-buttons">
                                <Link>View Details</Link>
                                <div className="remove-btn">
                                    <IoCloseSharp style={{width: iconWidth, height: iconHeight}}/>
                                    <span>Remove</span>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Card;