import { Link } from "react-router-dom";
import styled from "styled-components";

export const ResetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px){
        padding: 48px 24px;
    }
`
export const ResetPasswordContainer = styled.div`
    display: flex;
    width: 580px;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`
export const ResetPasswordContent = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 48px;
    align-self: stretch;
    @media only screen and (max-width: 600px){
       padding: 0px;
    }
`
export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    h1{
        margin: 0;
        color: var(--Primary-Primary, #203645);
        text-align: center;
        font-family: "Florencesans Exp";
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 33.6px */
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
            font-size: 1.375rem;        
        }
        p{
            font-size: 0.75rem;        
        }
    }
`
export const EmailContainer = styled.div`
    width: 100%;
    margin-bottom: 24px;
`
export const BackLink = styled(Link)`
    color: #333;
    display: flex;
    gap: 8px;
    .back-button{
        color: var(--Neutrals-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        span{
            color: var(--Primary-Primary, #203645);
            line-height: 120%;
            font-weight: 700;
        }
    }
`
export const SuccesModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh;
`
export const MessageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 539px;
    height: 301px;
    background: var(--Base-Base-White, #FFF);
    position: relative;
    .reset-close-icon{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 17px;
        right: 47px;
    }
`

export const MessageContent = styled.div`
    width: 400px;
    height: 170px;
    display: flex;
    gap: 48px;
    flex-direction: column;
    text-align: center;
    h1{
        color: var(--Primary-Primary, #203645);
        font-family: "Florencesans Exp";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 26.4px */
    }
    p{
        color: var(--Base-Base-Black, #333);
        text-align: center;
        font-family: "Unitext Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
    }
`
// .reset-password-container{

//     .reset-password-content{

//         header{

//         }
//         form{
//             button[type='submit']{
//                 margin-top: 48px;
//                 width: 100%;
//                 padding: 20px;
//                 border-radius: 8px;
//                 background: var(--Primary-Primary, #203645);
//                 color: var(--Base-Base-White, #FFF);
//                 font-family: "Unitext Regular";
//                 font-size: 16px;
//                 font-style: normal;
//                 font-weight: 400;
//                 line-height: 150%; /* 24px */
//                 letter-spacing: 0.16px;
//             }
           
//         }

//     }
// }


// .modal-success{

//     .message{

//         .message-content{
//             
//         }
//     }

// }