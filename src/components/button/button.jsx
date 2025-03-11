import './button.styles.css';
import { useRef, useState } from 'react';
const Button = ({children, buttonType, type, onClick, background, textColor, buttonPadding, buttonHeight, disabled, ...otherProps}) => {
    const {primaryBtn} = buttonType
    let buttonColor = background ? background : '#FFF'
    let color = textColor ? textColor : '#203645'
    const btnRef = useRef(null);
    if(disabled){
        btnRef.current.disabled = disabled
    }
    return(
        <>
            {
                primaryBtn ? 
                    (<button 
                        ref={btnRef}
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