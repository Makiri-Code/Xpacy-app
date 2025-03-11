import styled from "styled-components";

export const HelpAndSupportContainer = styled.div`
    width: 100%;
`
export const SupportContainer = styled.main`
    width: 65%;
    margin: 24px auto;
    display: flex;
    /* padding: 0px 24px; */
    flex-direction: column;
    align-items: center;
    gap: 48px;
    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 24px;
        margin: 0px;
    }
`

export const SupportFormContainer = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
    align-self: stretch;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`

export const SupportFormHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    h5{
        margin: 0;
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
    }
    p{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
    }
`

export const SupportForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`
export const PersonalName = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    gap: 24px;
    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`
export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 16px;
`
export const Label = styled.label`
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.05rem */
`
export const TextArea = styled.textarea`
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    align-self: stretch;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`
export const FaqContainer = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
    align-self: stretch;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`
export const SupportModalContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    padding: 40px 48px 64px 48px;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    h3,p{
        align-self: flex-start;
    }
    h3{
        margin: 0;
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 21.6px */
    }
    p{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
    }
`
// .support-container{

//     .form-container{

//         .form-header{

//         }
//         form{

//             .personal-info-name{

//             }
//             .text-area{

//                 label, textarea{

//                 }
//                 textarea{
//                     font-size: 1rem;
//                     align-self: stretch;
//                     padding: 8px 12px;
//                     border-radius: 8px;
//                     border: 1px solid var(--Primary-Primary200, #C7D9E5);
//                     background: var(--Base-Base-White, #FFF);

//                 }
//             }
//         }
//         .support-modal-content{

//         }
//     }
//     .help-faq-container{

//     }
// }

// @media only screen and (max-width: 600px){
//     .support-container{

//         .form-container{
//             form{
//                 .personal-info-name{
//                     flex-direction: column;
//                 }
//             }
//         }
//     }
// }