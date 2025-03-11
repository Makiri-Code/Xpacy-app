import styled from "styled-components"

export const InvoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 0 7%;
    padding-bottom: 112.438px;
`
export const NavigationContainer = styled.nav`
        width: 100%;
        height: 80px;
        display: flex;
        padding: 24px 0px;
        align-items: start;
        border-bottom: 1px solid #E3ECF2;
`
export const InvoiceContent = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
    align-self: stretch;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    
    .header{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }
    .body{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        .status, .paid, .unpaid, .incomplete{
            display: flex;
            padding: var(--Spacing-xxs, 4px) var(--Spacing-s, 8px);
            justify-content: center;
            align-items: center;
            gap: var(--Spacing-s, 8px);
            border-radius: var(--Radius-Round, 999px);
            background: var(--Success-Success100, #C3E5C4);
            span{
                /* XPACY- Real Estate & Facility Management - 1/Desktop/Body/Feature Accent */
                font-family: "Unitext Regular";
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: 120%; /* 1.8rem */
            }
            .paid{
                color: #357B38;
            }
            .unpaid{
                color: #F5F0E7;
            }
            .incomplete{
                color: #9D7B40;
            }
        }
        .unpaid{
            background: #F44336;
        }
        .incomplete{
            background: #FFF8BE;
        }
    }
`
export const HeaderContent = styled.div`
    display: flex;
    width: 312px;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
    h1{
        color: var(--Primary-Primary, #203645);
        font-family: "Florencesans Exp";
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 4.8rem */
    }
    .invoice-content{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 24px;
        align-self: stretch;
    }
    .invoice-num{
        display: flex;
        justify-content: space-between;
        width: 100%;
        p{
            color: var(--Base-Base-Black, #333);
            font-family: "Florencesans Exp";
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; 
        }
        span{
            color: var(--Base-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.5rem */
            letter-spacing: 0.01rem;
        }
        input{
            width: 120px;
            padding: 5px 16px;
            border-radius: 8px;
            border: 1px solid var(--Primary-Primary200, #C7D9E5);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
        }
    }
`

export const RecipentDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    h3{
        color: var(--Primary-Primary, #203645);
        font-family: "Florencesans Exp";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.35rem */
    }
    p{
        color: var(--Neutrals-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.5rem */
        letter-spacing: 0.01rem;
    }
    .details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
        div{
            border-radius: 8px;
            border: 1px solid var(--Primary-Primary200, #C7D9E5);
            height: 48px;
            padding: 5px 16px;
            display: flex;
            align-items: center;
            align-self: stretch;
            p{
                
                color: var(--Neutrals-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 1.5rem */
                letter-spacing: 0.01rem;
            }
        }
    }
`
export const TableInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    padding: 8px;
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.05rem */
`

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    .right-content, .left-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        p{
            color: var(--Primary-Primary, #203645);
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 120%; 
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            align-self: stretch;
            strong, span{
                color: var(--Base-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: 120%; /* 1.2rem */
            }
            span{
                font-weight: 400;
            }
        }
    }
    .left-content{
        width: 287px;
    }
`

export const FooterLogoContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    .right-content{
        display: flex;
        width: 338px;
        flex-direction: column;
        align-items: flex-start;
        align-self: flex-end;
        gap: 32px;
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            align-self: stretch;
            strong, span{
                color: var(--Base-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: 120%; /* 1.2rem */
            }
            span{
                font-weight: 400;
            }
        }
        .social-icons{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 24px;
        }
    }
    
`
export const ButtonContainer = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-self: stretch;
`
export const KycModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 449px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px 48px 48px 48px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    p{
        align-self: flex-start;
        color: #000;
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
    }
    .kyc-image{
        display: flex;
        width: 331px;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 8px;
        border: 4px dashed var(--Neutrals-Neutrals500, #A2A2A2);
        img{
            width: 100%;
            height: 168px;
            object-fit: cover;
        }
    }
`