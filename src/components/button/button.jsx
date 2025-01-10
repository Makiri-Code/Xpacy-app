import './button.styles.css';

const Button = ({children, buttonType, type, onClick, background, textColor, buttonPadding, buttonHeight, ...otherProps}) => {
    const {primaryBtn} = buttonType
    let buttonColor = background ? background : '#FFF'
    let color = textColor ? textColor : '#203645'

    return(
        <>
            {
                primaryBtn ? 
                    (<button 
                    style={{background: '#203645', color: '#FFF', padding: buttonPadding, height: buttonHeight}} 
                    type={type} 
                    {...otherProps}
                    onClick={onClick} >
                        {children}
                    </button>) :
                    (<button 
                        style={{background: buttonColor, color:color , border: '1px solid #203645', padding: buttonPadding, height: buttonHeight}} type={type} 
                        onClick={onClick} 
                        {...otherProps}
                    >
                        {children}
                    </button>)
            }
        </>
    )
}

export default Button;