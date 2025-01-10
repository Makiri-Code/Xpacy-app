import './modal.css';

const ModalComponent = ({children}) => {
    return (
        <div className='invalid-email-container'>
            {children}
        </div>
    )
};

export default ModalComponent;