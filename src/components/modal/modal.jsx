import './modal.css';

const ModalComponent = ({children, handleClick}) => {
    return (
         <div className='modal-container' onClick={handleClick}>
            {children}
        </div>
    )
};

export default ModalComponent;