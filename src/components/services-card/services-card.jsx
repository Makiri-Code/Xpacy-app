import { useEffect, useState } from 'react';
import Button from '../button/button';
import './services-card.styles.css';

const ServicesCard = ({imageSrc, iconSrc, hoverDetails}) => {

    const [showHover, setShowHover] = useState({
        propertySale : false,
        propertyRental: false,
        propertyListing: false,
        facilityMgt: false,
        spacePlaning: false,
    });
    
    return (
        <>
            <>
                { 
                    showHover.propertySale ?
                    (
                        <div className="hover-container" onMouseLeave={() => setShowHover((prev) => ({...prev, propertySale: false}))} onClick={() => setShowHover((prev) => ({...prev, propertySale: false}))}>
                            <h2>{hoverDetails[0].title}</h2>
                            <p>{hoverDetails[0].body}</p>
                        </div>
                    ) : 
                    (
                        <div className="services-card-container card" onMouseEnter={() => setShowHover((prev) => ({...prev, propertySale: true}))}  style={{background: `url(${imageSrc[0]}) lightgray 10% / cover no-repeat`}}>
                            <img src={iconSrc[0]} alt="Naira bag" style={{width: "160px", height: "160px"}} className='services-card-icon'/>
                            <div className="mobile-call-to-action">
                                <h5>{hoverDetails[0].title}</h5>
                                <Button
                                    buttonType={{primaryBtn: false}}
                                    background={'#CDB385'}
                                    textColor={'#333333'}
                                    onClick={() => setShowHover((prev) => ({...prev, propertySale: true}))}
                                >Learn More</Button>
                            </div>
                            <div className="background"></div>
                        </div> 
                    )
                }
            </>
            <>
                { 
                    showHover.propertyRental ?
                    (
                        <div className="hover-container" onMouseLeave={() => setShowHover((prev) => ({...prev, propertyRental: false}))} onClick={() => setShowHover((prev) => ({...prev, propertyRental: false}))}>
                            <h2>{hoverDetails[1].title}</h2>
                            <p>{hoverDetails[1].body}</p>
                        </div>
                    ) : 
                    (
                        <div className="services-card-container card" onMouseEnter={() => setShowHover((prev) => ({...prev, propertyRental: true}))}  style={{background: `url(${imageSrc[1]}) lightgray 10% / cover no-repeat`}}>
                            <img src={iconSrc[1]} alt="Naira bag" style={{width: "160px", height: "160px"}} className='services-card-icon'/>
                            <div className="mobile-call-to-action">
                                <h5>{hoverDetails[1].title}</h5>
                                <Button
                                    buttonType={{primaryBtn: false}}
                                    background={'#CDB385'}
                                    textColor={'#333333'}
                                    onClick={() => setShowHover((prev) => ({...prev, propertyRental: true}))}
                                >Learn More</Button>
                            </div>
                            <div className="background"></div>
                        </div> 
                    )
                }
            </>
            <>
                { 
                    showHover.propertyListing ?
                    (
                        <div className="hover-container" onMouseLeave={() => setShowHover((prev) => ({...prev, propertyListing: false}))} onClick={() => setShowHover((prev) => ({...prev, propertyListing: false}))}>
                            <h2>{hoverDetails[2].title}</h2>
                            <p>{hoverDetails[2].body}</p>
                        </div>
                    ) : 
                    (
                        <div className="services-card-container card" onMouseEnter={() => setShowHover((prev) => ({...prev, propertyListing: true}))}  style={{background: `url(${imageSrc[2]}) lightgray 10% / cover no-repeat`}}>
                            <img src={iconSrc[2]} alt="Naira bag" style={{width: "160px", height: "160px"}} className='services-card-icon'/>
                            <div className="mobile-call-to-action">
                                <h5>{hoverDetails[2].title}</h5>
                                <Button
                                    buttonType={{primaryBtn: false}}
                                    background={'#CDB385'}
                                    textColor={'#333333'}
                                    onClick={() => setShowHover((prev) => ({...prev, propertyListing: true}))}
                                >Learn More</Button>
                            </div>
                            <div className="background"></div>
                        </div> 
                    )
                }
            </>
            <>
                { 
                showHover.facilityMgt ?
                    (
                        <div className="hover-container" onMouseLeave={() => setShowHover((prev) => ({...prev, facilityMgt: false}))} onClick={() => setShowHover((prev) => ({...prev, facilityMgt: false}))}>
                            <h2>{hoverDetails[3].title}</h2>
                            <p>{hoverDetails[3].body}</p>
                        </div>
                    ) : 
                    (
                        <div className="services-card-container card" onMouseEnter={() => setShowHover((prev) => ({...prev, facilityMgt: true}))}  style={{background: `url(${imageSrc[3]}) lightgray 10% / cover no-repeat`}}>
                            <img src={iconSrc[3]} alt="Naira bag" style={{width: "160px", height: "160px"}} className='services-card-icon'/>
                            <div className="mobile-call-to-action">
                                <h5>{hoverDetails[3].title}</h5>
                                <Button
                                    buttonType={{primaryBtn: false}}
                                    background={'#CDB385'}
                                    textColor={'#333333'}
                                    onClick={() => setShowHover((prev) => ({...prev, facilityMgt: true}))}
                                >Learn More</Button>
                            </div>
                            <div className="background"></div>
                        </div> 
                    )
                }
            </>
            <>
                { 
                    showHover.spacePlaning ?
                    (
                        <div className="hover-container" onMouseLeave={() => setShowHover((prev) => ({...prev, spacePlaning: false}))} onClick={() => setShowHover((prev) => ({...prev, spacePlaning: false}))}>
                            <h2>{hoverDetails[4].title}</h2>
                            <p>{hoverDetails[4].body}</p>
                        </div>
                    ) : 
                    (
                        <div className="services-card-container card" onMouseEnter={() => setShowHover((prev) => ({...prev, spacePlaning: true}))}  style={{background: `url(${imageSrc[4]}) lightgray 10% / cover no-repeat`}}>
                            <img src={iconSrc[4]} alt="Naira bag" style={{width: "160px", height: "160px"}} className='services-card-icon'/>
                            <div className="mobile-call-to-action">
                                <h5>{hoverDetails[4].title}</h5>
                                <Button
                                    buttonType={{primaryBtn: false}}
                                    background={'#CDB385'}
                                    textColor={'#333333'}
                                    onClick={() => setShowHover((prev) => ({...prev, spacePlaning: true}))}
                                >Learn More</Button>
                            </div>
                            <div className="background"></div>
                        </div> 
                    )
                }
            </>
        </>
    );
};

export default ServicesCard;