import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogInModalContainer = styled.div`
    position: absolute;
    display: block;
    width: 60%;
    height: 100%;
    padding: 64px 30px;
    overflow-y: scroll;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 8px;

`

export const CloseIcon = styled.div`
    display: inline-block;
    position: absolute;
    top: 8px;
    right: 24px;
    width: 36px;
    height: 36px;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s;
    margin: 0 auto;
    &:hover {
        background-color: rgba(255, 255, 255, 0);
        transform: scale(1.07);
    }
`

export const LogInForm = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const LogoContainer = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    & .nav-logo{
        width: 158px;
        height: 32px;
    }
`


export const LoginContent = styled.div`
    display: block;
    font-size: 16px;

  & .form-txt{
    margin-bottom: 0;
  }
`

export const LoginHeader = styled.div`
    color: #203645;
    text-align: center;
    font-family: 'Florencesans Exp', sans-serif;
    margin-bottom: 24px;
    
    & h2{
        font-size: 26px;
        font-weight: 700;
        line-height: 120%;
        margin-bottom: 16px;
    }
    & p{
        font-family: "Unitext Regular";
        font-size: 16px;
        font-wright: 700;
        letter-spacing: 0.16px;
        line-height: 150%;
        margin: 0;
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 24px;
    margin-bottom: 24px;
    button {
        width: 100%;
    }
`
export const CheckboxForgotPasswordContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    .checkbox-container{
        display: flex;
        align-items: center;
        gap: 8px;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        font-family; "Unitext Regular";
         input[type ='checkbox'] {
            width: 24px;
            height: 24px;
        }
    }
`
export const AnchorTag = styled(Link)`
    color: #203465;
    font-family: "Unitext Regular";
    font-weight: 700;
    letter-spacing: 0.16px;
`