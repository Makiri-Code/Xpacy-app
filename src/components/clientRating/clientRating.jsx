import { useEffect, useState } from 'react'
import './clientRating.css'
import {ReactComponent as FaStar} from '../../assets/homepage-assets/testimonial-section-images/star-Icons.svg';

const ClientRating = ({Review, name, title, comment, rating})=>{
    const [ratingStars, setRatingStars] = useState([])
    useEffect(()=>{
        var initratingStars = []
        const rateNo = Number(rating)
        const rateFloorNo = Number(Math.floor(rateNo))
        for (var i=0; i<=rateFloorNo-1; i++){
            initratingStars = initratingStars.concat(1)
        }
        const rateDiff = rateNo-rateFloorNo
        console.log(rateNo, rateFloorNo, rateDiff, initratingStars)
        if (rateDiff>0){
            initratingStars = initratingStars.concat(rateDiff)
        }
        setRatingStars(initratingStars)
    },[rating])
    return (
        <>
            <div className="row testimonial">
                <div className="col customer-card-container">
                    <img src={Review} alt="customer profile" className='rounded customer-img'/>
                </div>
                <div className="col">
                    <div className="row testimonial-txt">
                        <p className='col'>{comment}</p>
                    </div>
                    <div className="row my-4">
                        <p>{name} <span className='fw-lighter'>{title}</span></p>
                    </div>
                    <div className="row px-0 justify-content-center align-items-center">
                        <p className='col-2 my-0'>{rating}</p>
                        <div className="col-10">
                            {ratingStars.map((starRate,index)=>{
                                if (starRate===1){
                                    return (
                                        <FaStar key={index} className='star-icon'/>
                                    )
                                }
                            })}                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientRating