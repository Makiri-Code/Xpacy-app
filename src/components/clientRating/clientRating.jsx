import { useEffect, useState } from 'react'
import './clientRating.css'
import { IoIosStarHalf } from "react-icons/io";
import {ReactComponent as FaStar} from '../../assets/homepage-assets/testimonial-section-images/star-Icons.svg';
import { IoStar, IoStarHalf } from 'react-icons/io5';

const ClientRating = ({Review, name, title, comment, rating})=>{
    const [ratingStars, setRatingStars] = useState([])
    useEffect(()=>{
        var initratingStars = []
        const rateNo = Number(rating);
        const rateFloorNo = Number(Math.floor(rateNo));
        for (var i=0; i<=rateFloorNo-1; i++){
            initratingStars = initratingStars.concat(1)
        }
        const rateDiff = rateNo-rateFloorNo
        // console.log(rateNo, rateFloorNo, rateDiff, initratingStars)
        if (rateDiff>0){
            initratingStars = initratingStars.concat(rateDiff)
        }
        setRatingStars(initratingStars)
    },[rating])
    return (
        <>
            <div className="testimonial">
                <img src={Review} alt="customer profile" className='reviews-image'/>
                <div className="reviews-text-container">
                    <p className='testimonial-txt'>{comment}</p>
                    <div className="testimonial-name">
                        <p>{name} <span className=''>{title}</span></p>
                    </div>
                    <div className="star-icon-container d-flex justify-content-center align-items-center">
                        <span className=''>{rating}</span>
                        <div className="">
                            {ratingStars.map((starRate,index)=>{
                                if (starRate===1){
                                    return (
                                        <IoStar key={index} className='star-icon'/>
                                    )
                                }else if (starRate === .5){
                                    return (
                                        <IoStarHalf key={index} className='star-icon'/>
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