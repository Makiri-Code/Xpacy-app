import { useNavigate } from 'react-router-dom';
import './get-in-touch.style.css';
const GetInTouch = ({Image1, Image2, Image3, margin, width, heading, message, buttonText, handleClick}) => {
    const navigate = useNavigate ();
    
    return (
        <div className='getintch' style={{margin: margin, width: width}} data-aos="fade-up"  
        data-aos-easing="ease-in">
            <div className='gtintch-img-cover'>
                <div className='gtintch-img-src1'><img alt='img1' src={Image1}/></div>
                <div className='gtintch-img-src2'><img alt='img2' src={Image2}/></div>
                <div className='gtintch-img-src3'><img alt='img3' src={Image3}/></div>                    
            </div>
            <div className='gtintch-text'>
                <div className='gtintch-text-title'>{heading}</div>
                <div className='gtintch-text-subtext'>{message}</div>
            </div>
            <div className='gtintch-button' onClick={() => navigate('/contact')}>
                {buttonText}
            </div>  
        </div>
    );
}

export default GetInTouch;