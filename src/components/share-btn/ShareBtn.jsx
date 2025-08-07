import { useState } from "react";
import ModalComponent from "../modal/modal";
import Button from "../button/button";
import styles from './ShareBtn.module.css';
import { MdOutlineShare } from 'react-icons/md';
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";
const ShareBtn = ({id}) => {
    const [shareUrl] = useState(`https://xpacy.com/buy/property/${id}`);
    const [showModal, setShowModal] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(`https://xpacy.com/buy/property/${id}`);
        toast.success("Link Copied");
    }
    return (
        <>
            <button className="d-flex justify-content-center align-items-center px-2 py-1 rounded" onClick={() => setShowModal(true)}>
                <MdOutlineShare className='actions-icon'/>
                Share
            </button>
            {
                showModal && 
                   <ModalComponent handleClick={() => setShowModal(false)}>
                    <div className={styles.ShareModalContainer}>
                        <h3>Share</h3>
                        <div className={styles.ShareIconContainer}>
                            <a 
                                className={styles.ShareIcon} 
                                style={{backgroundColor: '#0d6efd', color: '#fff'}} 
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookF/>
                            </a>
                            <a 
                                className={styles.ShareIcon} 
                                style={{backgroundColor: '#25D366', color: '#fff'}} 
                                href={`https://api.whatsapp.com/send?text=checkout%20this%20on%20property%20on%20Xpacy.com%20${shareUrl}`} 
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaWhatsapp/>
                            </a>
                            <a 
                                className={styles.ShareIcon} 
                                style={{backgroundColor: '#657786 ', color: '#fff'}}
                                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=Checkout%20this%20on%20property%20on%20Xpacy.com`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaXTwitter/>
                            </a>
                            <a className={styles.ShareIcon} style={{backgroundColor: '#0077B5', color: '#fff'}}>
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div className={styles.CopyLinkTextContainer}>
                            <p>
                                {`https://xpacy.com/buy/property/${id}`}
                            </p>
                            <Button buttonType={{primaryBtn: false}} buttonHeight={'30px'} buttonPadding={'7px 18px'} background={'rgb(13 110 253)'} textColor={'#fff'} onClick={handleCopy} >
                                Copy
                            </Button>
                        </div>
                    </div>
                   </ModalComponent>
            }
        </>
    );
};

export default ShareBtn;