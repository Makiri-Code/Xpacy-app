import { useEffect, useState } from 'react'
import { IoIosStarHalf } from "react-icons/io";
import {ReactComponent as FaStar} from '../../assets/homepage-assets/testimonial-section-images/star-Icons.svg';
import { IoStar, IoStarHalf } from 'react-icons/io5';
import { motion } from 'framer-motion';
import './clientRating.css'

const ClientRating = ({image, name, title, comment, rating, index})=>{
    const [ratingStars, setRatingStars] = useState([])
    useEffect(()=>{
        var initratingStars = []
        const rateNo = Number(rating);
        const rateFloorNo = Number(Math.floor(rateNo));
        for (var i=0; i<=rateFloorNo-1; i++){
            initratingStars = initratingStars.concat(1)
        }
        const rateDiff = rateNo-rateFloorNo
        if (rateDiff > 0){
            initratingStars = initratingStars.concat(rateDiff)
        }
        setRatingStars(initratingStars)
    },[rating]);

    return (
        <>
            <motion.div 
                className="testimonial"
                animate={{ x: ["10%", "-250%"] }} // Moves the track to the left infinitely
                transition={{
                repeat: Infinity, // Infinite loop
                duration: 20, // Adjust speed (lower = faster)
                ease: "linear", // Smooth scrolling
                }}
            >
                <img src={image} alt="customer profile" className='reviews-image'/>
                <div className="reviews-text-container">
                    <p className='testimonial-txt'>{comment}</p>
                    <div className="testimonial-name">
                        <p className='client-name'>{name} <span className='client-title'>{title}</span></p>
                    </div>
                    <div className="star-icon-container d-flex justify-content-center align-items-center">
                        <span className=''>{rating}</span>
                        <div className="">
                            {ratingStars.map((starRate, index) => {
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
            </motion.div>
        </>
    )
}

export default ClientRating