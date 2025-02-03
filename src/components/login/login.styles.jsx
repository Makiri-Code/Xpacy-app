import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogInContainer = styled.div`
    align-self: stretch;
    display: flex;
    align-items: start;
    background: var(--Background-Color, #FCFEFF);
    @media only screen and (max-width: 600px){
        width: 100%;
        margin: 0 auto;
        padding: 100px 0px;
    }
`
export const LogInForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: 64px 0px 0px 0px;
    @media only screen and (max-width: 600px){
        width: 100%;
        margin: 0 auto;
        align-items: center;  
        padding: 48px 24px;
    }
`
export const LoginLogoContainer = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 24px;
    gap: 42px;
    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 8px;
    }
`
export const LogInHeader = styled.header`
    h1{
        color: var(--Primary-Primary, #203645);
        text-align: center;
        font-family: "Florencesans Exp";
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 43.2px */
    }
    p{
        color: var(--Neutrals-Base-Black, #333);
        text-align: center;
        font-family: "Unitext Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
    }
    @media only screen and (max-width: 600px){
        h1{
            font-size: 1.75rem;
        }
    }
`
export const MainContent = styled.main`
    align-self: stretch;
    p{
        margin: 24px 0px 0px 0px;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    button{
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        gap: 24px;
    }
`

export const CheckboxForgotPasswordContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    align-self: stretch;
    .checkbox-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        input[type='checkbox']{
            width: 24px;
            height: 24px;
        }
        label{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
            letter-spacing: 0.16px
        }
    }
    @media only screen and (max-width: 600px){
        .checkbox-container{
            gap: 8px;
            input[type='checkbox']{
                width: 20px;
                height: 20px;
            }
    }
`
export const AnchorTag = styled(Link)`
    color: var(--Primary-Primary, #203645);
    font-family: "Unitext Regular";
    font-size: 16px;
    font-style: normal;
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 400};
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
`
export const LoginCarouselContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 600px){
        display: none;
    }
`
export const LoginCarouselImg = styled.img`
    height: 715px;
    filter: brightness(65%);
`
export const CarouselCaptionTxt = styled.h2`
    margin: 0;
    color: var(--Base-Base-White, #FFF);
    text-align: center;
    font-family: "Florencesans Exp";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 33.6px */
`
export const ErroModal = styled.div`
    position: absolute;
    top: 40%;
    left: 10%;
    background-color: #FCFEFF;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    .close-email{
        position: absolute;
        top: 20px;
        right: 15px;
        cursor: pointer;
    }
    p{
        text-align: center;
        font-family: "Unitext Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;    
        color: var(--Error-Error, #F44336);
    }
    @media only screen and (max-width: 600px){
        width: 90%;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
    }
`