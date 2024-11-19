import { FiMinusCircle } from "react-icons/fi";
import {ReactComponent as PlusIcon} from '../../assets/plus-circle.svg';
import './faq.styles.css';
import { useState } from "react";
const Faq = ({faq, showFaqs, heading, answer}) => {
    const [showFaq, setShowFaq] = useState(showFaqs)
    return (
        <div className="row faq">
            <div className="divider"></div>
            <div className="col d-flex justify-content-between">
                <h5 className='faq-heading'>{heading}</h5>
                {faq ? <FiMinusCircle className='minus-icon' onClick={() => (setShowFaq({...showFaq, faq: !faq}))}/> : <PlusIcon className='plus-icon' onClick={() => setShowFaq({...showFaq, faq: !faq})}/>}
            </div>
            <p 
            className = {faq ? 'show-faq': 'no-show-faq'
            }>
                {answer}
            </p>
        </div>
    );
}

export default Faq;