import './modal.css';

const ModalComponent = ({children}) => {
    return (
        <div className='modal-container'>
            {children}
        </div>
    )
};

export default ModalComponent;