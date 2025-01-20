import { useState, useRef } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import './form-input.styles.css';

const FormInput = ({label, ...otherProps}) => {
    const inputRef = useRef(null)
    const {type} = otherProps
    const [showPassword, setShowPassword] = useState(false)
    const handleClick = () => {
        setShowPassword(!showPassword)
    }
    return(
        <div className='form-group'>
            <label className='form-label'>{label}</label>
            {
                (type === "password") ? 
                <div className="password-input">
                    <input 
                    ref={inputRef}
                    className='form-input' 
                    onInput={() => {
                        if(!inputRef.current.checkValidity()){
                            inputRef.current.classList.add('invalid');
                        }else {
                            inputRef.current.classList.remove('invalid');
                        }
                    }}
                    {...otherProps}
                    type={
                        showPassword ? 'text' : type
                    }
                    />
                    {
                        showPassword ? <IoEyeOutline className="eye-icon" onClick={handleClick}/> : <IoEyeOffOutline className="eye-icon" onClick={handleClick}/>
                    }
                </div> : 
                <input 
                    className='form-input' 
                    ref={inputRef}
                    onInput={() => {
                        if(!inputRef.current.checkValidity()){
                            inputRef.current.classList.add('invalid');
                        }else {
                            inputRef.current.classList.remove('invalid');
                        }
                    }}
                    {...otherProps}
                />
            }
        </div>
    )
}

export default FormInput; 