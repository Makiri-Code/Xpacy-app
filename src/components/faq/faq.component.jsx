import { FiMinusCircle } from "react-icons/fi";
import {ReactComponent as PlusIcon} from '../../assets/plus-circle.svg';
import './faq.styles.css';
import { useState } from "react";
const Faq = ({ heading, answer, showDivider}) => {
    const [showFaq, setShowFaq] = useState(false);
    const handleClick = () => {
        setShowFaq(!showFaq);
    }
    return (
        <div className="row faq">
            {
                showDivider && 
                (
                    <div className="faq-divider"/>
                )
            }
            <div className='col d-flex justify-content-between' onClick={handleClick}>
                <h5 className='faq-heading'>{heading}</h5>
                {showFaq ? (<FiMinusCircle className='plus-icon' onClick={handleClick}/>) : (<PlusIcon className='plus-icon' onClick={handleClick}/>)}
            </div>
            {
                showFaq && 
                (
                    <p className="faq-p">
                        {answer}
                    </p>
                )
            }
        </div>
    );
}

export default Faq;