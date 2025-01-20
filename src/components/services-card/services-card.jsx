import { useEffect, useState } from 'react';
import Button from '../button/button';
import './services-card.styles.css';

const ServicesCard = ({imageSrc, iconSrc, cardName, hoverTitle, hoverText}) => {
    const cardStyle = {
        background: `url(${imageSrc}) lightgray 10% / cover no-repeat`,
    }
    const defaultPosition = {
        left: 'unset',
        right: 'unset'
    }
    const [position, setPosition] = useState(defaultPosition);
    const {left, right} = position;
    const [showHover, setShowHover] = useState(false);
    const [cardStyles, setCardStyles] = useState(cardStyle);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
       
    }, []);
    
    const handleMouseEnter = (e) => {
        if(isMobile){
            return
        }
        const name = e.target.getAttribute('name');
        if(name === cardName){
            if(name === 'property-sale'){
                setPosition({
                    ...position,
                    left: '0'
                })
            }
            if(name === 'space-planing'){
                setPosition({
                    ...position,
                    right: 0
                })
            }
            setShowHover(true);
            setCardStyles({
                ...cardStyle,
                // marginLeft: '0px',
                filter: 'unset'
            })
        }
    }

    const handleMouseLeave = (e) => {
        if(isMobile){
            return
        }
        const name = e.target.getAttribute('name');
        if(name === cardName){
            if(name === 'property-sale'){
                setPosition(defaultPosition);
            }
            if(name === 'space-planing'){
                setPosition(defaultPosition);
            }
            setShowHover(false);
            setCardStyles({
                ...cardStyle,
                // marginLeft: '-20px',
                filter: 'drop-shadow(5px 0px 40px #FFF)',

            });
        }
    }
    return (
        <div className="services-card-container" onMouseEnter={handleMouseEnter}  style={cardStyles} name={cardName}>
            {
                showHover && 
                (
                    <div className="hover-container" style={{left: left, right: right, zIndex: '10'}} onMouseLeave={handleMouseLeave} name={cardName} onClick={() => setShowHover(!showHover)}>
                        <h2>{hoverTitle}</h2>
                        <p>{hoverText}</p>
                    </div>
                )
            }
            <img src={iconSrc} alt="Naira bag" style={{width: "160px", height: "160px"}} className='services-card-icon'/>
            <div className="mobile-call-to-action">
                <h5>Property Sale</h5>
                <Button
                    buttonType={{primaryBtn: false}}
                    background={'#CDB385'}
                    textColor={'#333333'}
                    onClick={() => setShowHover(!showHover)}
                >Learn More</Button>
            </div>
        </div>
    );
};

export default ServicesCard;