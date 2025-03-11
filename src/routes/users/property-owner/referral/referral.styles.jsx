import styled from "styled-components";

export const ReferralMainContainer = styled.div`
    width: 100%;
`
export const ReferralContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 48px;
    margin: 0 auto;
    @media only screen and (max-width: 600px){
        padding: 24px;
    }
`
export const ReferralHeader = styled.div`
    align-self: stretch;
    h3{
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.65rem */
    }
    p{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.5rem */
        letter-spacing: 0.01rem;
    }
`

export const ReferralMainContent = styled.main`
    display: flex;
    align-items: flex-start;
    gap: 48px;
    align-self: stretch;
    @media only screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`

export const ReferralCodeContainer = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`

export const ReferralCode = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    p{
        margin: 0;
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
    }
    .copy-referral{
        display: flex;
        height: 48px;
        padding: 5px 16px;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Primary-Primary100, #E3ECF2);
        span{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 0.8rem;
            text-align: center;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.5rem */
            letter-spacing: 0.01rem;
        }
    }
    .referral-divider{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .divider{
            align-self: center;
        }
    }
    .share-link-text{
        padding: 10px;
        align-self: center;
    }
    .share-link-icons{
        display: flex;
        padding: 8px 16px;
        align-items: center;
        gap: 32px;
    }
`
export const ReferralPoints = styled.div`
    display: flex;
    width: 347px;
    height: 121px;
    padding: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    h3{
        margin-top: 11px;
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.8rem */
    }
`
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    width: 60%;
    gap: 48px;
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`
export const ReferralUsers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: 24px;
`
export const ReferralUsersContent = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`
export const ReferralUserHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    h5{
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.65rem */
    }
`

export const ReferralTable = styled.table`
    align-self: stretch;
    border-radius: 8px;
    background: var(--Base-Base-White, #FFF);
    tr{
        border-bottom: 2px solid var(--Primary-Primary100, #E3ECF2);
        th, td{
            height: 48px;
            padding: 0px var(--Spacing-m, 16px);
            color: var(--Neutrals-Neutrals900, #585858);
            font-family: "Unitext Regular";
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.05rem */
        }
        .rank{
            font-weight: 700;
        }
        td{
            font-weight: 400;
        }
        .success, .pending, .faarrowup, .faarrowdown{
            padding: 2px 4px;
            color: #357B38;
            border-radius: var(--Radius-Round, 999px);
            background: var(--Success-Success100, #C3E5C4);
            font-weight: 700;
        }
        .pending, .faarrowdown{
            background-color: #FBC0BC;
            color: #C4170B;
        }
        @media only screen and (max-width: 600px){
            border: none;
        }
    }
    .mobile-row{
        border-top: 2px solid #e3ecf2;
    }                            
`

export const CopiedText = styled.span`
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #E3ECF2;
    border: 1px solid rgb(50, 94, 124);
    color: #585858;
    padding: 16px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 8px;
    margin-bottom: 10px;
`
// .referral-container{

//     .referral-tittle{

//     }
//     .referral-content{

//         .left-container{

//             .referral-code-container{

//                 .referral-code{

//             .referral-points{

//             }
//         }
//         .right-container{

//             .referral-users{

//                 .referral-users-content{

//                     table{
//                         
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// .copied-text{

    
// }   

// @media only screen and (max-width: 600px){
//     .referral-container{
//         .referral-content{

//             .right-container{
//                 .referral-users{
//                     .referral-users-content{
//                         table{
//                             
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }