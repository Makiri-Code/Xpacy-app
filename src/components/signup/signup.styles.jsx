import { CarouselCaption } from "react-bootstrap";
import styled from "styled-components";
import {Form} from "react-bootstrap";
export const SignUpContainer = styled.div`
    display: flex;
    align-items: start;
    background: var(--Background-Color, #FCFEFF);
    height: max-content;
`
export const SignUpForm = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding: 64px 48px 0px 48px;
        gap: 20px;
        @media only screen and (max-width: 600px){
            width: 100%;
            padding: 24px;
        }
`
export const SignUpFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    button{
        width: 100%;
    }
`
export const SignUpName = styled.div`
    gap: 24px;
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    @media only screen and (max-width: 600px){
        flex-direction: column;
    
    }
`
export const SignUpPasswordField = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    #password-txt, .password-nomatch, password-match{
        margin: 0;
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 141.4%; /* 16.968px */
        letter-spacing: 0.12px;
    }

    .invalid{
        border: 1px solid #F44336;
    }
`
export const PasswordError = styled.p`
    margin: 0;
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 141.4%; /* 16.968px */
    letter-spacing: 0.12px;
    &.password-nomatch{
        color: var(--Error-Error, #F44336);
    }
    &.password-match{
        display: none;
    }
`
export const SignUpLocation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`
export const Label = styled.label`
    color: var(--Neutrals-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
`

export const Select = styled(Form.Select)`
    height: 48px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
}
`
export const SignUpCarouselImg = styled.img`
    height: 917px;
    filter:unset;
    object-fit:unset;
    max-height: unset;
`
export const SignUpCarouselCaption = styled(CarouselCaption)`
    top: 1.25rem;
    right: unset; 
    bottom: unset;
    left: unset;
    padding-top: unset;
    padding-bottom: unset;
`
export const SignUpCarouselCaptionTxt = styled.h2`
    color: var(--Base-Base-White, #FFF);
    text-align: center;
    font-family: "Florencesans Exp";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /*33.6px */
`

// .signup-container{

//     .signup-form{

//         .signup-content{
//             /* padding: 24px; */
//             gap: 42px;
//             .signup-header{
//                 text-align: center;
//                 width: 100%;
//                 h1{
//                     color: var(--Primary-Primary, #203645);
//                     text-align: center;
//                     font-family: "Florencesans Exp";
//                     font-size: 36px;
//                     font-style: normal;
//                     font-weight: 700;
//                     line-height: 120%; /* 43.2px */
//                 }
//                 p{
//                     color: var(--Neutrals-Base-Black, #333);
//                     text-align: center;
//                     font-family: "Unitext Regular";
//                     font-size: 16px;
//                     font-style: normal;
//                     font-weight: 400;
//                     line-height: 150%; /* 24px */
//                     letter-spacing: 0.16px;
//                 }
//             }
//             main{
//                 a{
//                     color: var(--Primary-Primary, #203645);
//                     font-family: "Unitext Regular";
//                     font-size: 16px;
//                     font-style: normal;
//                     font-weight: 400;
//                     line-height: 150%; /* 24px */
//                     letter-spacing: 0.16px;
//                 }
//                 form{

//                     .signup-name{

//                     }
//                     .signup-password{

                        
//                     }
//                     .checkbox{
//                         .checkbox-container{
//                             display: flex;
//                             justify-content: center;
//                             align-items: center;
//                             gap: 5px;
//                             input[type='checkbox']{
//                                 width: 24px;
//                                 height: 24px;
//                             }
//                             
                            
//                         }
                        
//                     }
//                     button[type='submit']{
//                         margin-top: 24px;
//                         width: 100%;
//                         padding: 15px;
//                         border-radius: 8px;
//                         background: var(--Primary-Primary, #203645);
//                         color: var(--Base-Base-White, #FFF);
//                         font-family: "Unitext Regular";
//                         font-size: 16px;
//                         font-style: normal;
//                         font-weight: 400;
//                         line-height: 150%; /* 24px */
//                         letter-spacing: 0.16px;
//                     }
                    
//                 }
//                 p{
//                     margin: 24px 0px 0px 0px;
//                     a{
//                         font-weight: 700;
//                     }
//                 }

//             }
//         }
//     }
//     .signup-carousel{
//         width: 50%;
//         .carousel{
//             height: unset;
//             
//             }
//             .signup-carousel-img{

//             }
//         }
//         .carousel-caption-txt{

//     }
// }

// .signup-location{

//     label{
//         color: var(--Base-Base-Black, #333);
//         font-family: "Unitext Regular";
//         font-size: 14px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 120%; /* 16.8px */
//     }
//     select{

// }
// .invalid-signup-content{
//     position: absolute;
//     top: 40%;
//     left: 10%;
//     background-color: #FCFEFF;
//     padding: 40px;
//     border-radius: 8px;
//     text-align: center;
//     .close-email{
//         position: absolute;
//         top: 20px;
//         right: 15px;
//         cursor: pointer;
//     }
//     p{
//         color: var(--Error-Error, #F44336);
//     }
// }
// @media only screen and (max-width: 600px){
//     .signup-container{
//         .signup-form{
//
//             .signup-content{
//                 .signup-header{
//                     h1{
//                         font-size: 1.75rem;
//                     }
//                 }
//                 main{
//                     p{
//                         a{
//                             color: var(--Primary-Primary, #203645);
//                             font-family: "Unitext Regular";
//                             font-size: 16px;
//                             font-style: normal;
//                             font-weight: 700;
//                             line-height: 150%; /* 24px */
//                             letter-spacing: 0.16px;
//                         }
//                     }
//                     form{
//                         .signup-name{
//                         }
//                     }
//                 }
//             }
//         }
//         .signup-carousel{
//             display: none;
//         }
        
//     }
//     .invalid-signup-content{
//         width: 90%;
//         top: 30%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         padding: 30px;
//     }
// }