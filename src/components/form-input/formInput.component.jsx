import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import './form-input.styles.css';

const FormInput = ({label, ...otherProps}) => {
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
                    className='form-input' 
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
                    {...otherProps}
                />
            }
        </div>
    )
}

export default FormInput; 