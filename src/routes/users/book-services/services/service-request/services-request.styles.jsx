import styled from "styled-components";
import { FormSelect } from "react-bootstrap";
export const BookServicesContainer = styled.div`
    display: flex;
    padding: 0px 7%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
`

export const NavigationContainer = styled.nav`
        width: 100%;
        height: 80px;
        display: flex;
        padding: 24px 104px;
        align-items: start;
        background: var(--Base-Base-White, #FFF);
        border-bottom: 1px solid #E3ECF2;
`
export const LogoContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
    im{
        width: 153.6px;
        height: 31.725px;
    }

`
export const BackNav = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
    }
    &:hover{
        text-decoration: underline;
    }
`

export const BookServicesContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    width: 67%;
`
export const BookServicesForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    // width: 62.4%;
    margin-bottom: 120px;
    align-self: stretch;
`
export const Heading = styled.h2`
    color: var(--Base-Base-Black, #333);
    text-align: center;
    font-family: "Florencesans Exp";
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 2.1rem */
`
export const Names = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    padding: 16px 0px;
    align-self: stretch;
`

export const SelectOptionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: stretch;
    gap: 24px;
`
export const SelectOption = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    gap: 8px;
    .custom-select{
        position: relative;
        height: 48px;
        width: 100%;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Background-Color, #FCFEFF);
        color: var(--Neutrals-Neutrals900, #585858);
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            position: absolute;
            top: 0;
            right: 9px;
            width: 8%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            box-sizing: border-box;
        }
    }
`
export const Label = styled.label`
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.01rem;
`
export const Select = styled(FormSelect)`
        height: 48px;
        width: 100%;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.5rem */
        letter-spacing: 0.01rem;
        option{
            color: var(--Neutrals-Neutrals900, #585858);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.5rem */
            letter-spacing: 0.01rem;
        }
`
export const DropdownIconContainer = styled.div`
    position: relative;
    .calender{
    top: 0;
    right: 0;
    position: absolute;
     }
    
`
export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: start;
    gap: 6px;
    span{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 141.4%; /* 1.0605rem */
        letter-spacing: 0.0075rem;
    }
    textarea{
        align-self: stretch;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #C7D9E5;
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.01rem;
    }
`

export const BookServicesModal = styled.div`
    display: flex;
    width: 488px;
    padding: 40px 64px;
    top: 50%;
    left: 50%;
    transform: translate(80%, 80%);
    flex-direction: column;
    border-radius: 8px;
    background: var(--Base-Base-White, #FFF);
    h3, p{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.35rem */
    }
    p{
        color: var(--Neutrals-Neutrals700, #7D7D7D);
        font-size: 0.875rem;
        font-weight: 400;
        margin-bottom: 48px;
    }
    .book-service-btn{
        align-self: flex-start;
    }
`
export const AttachmentContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    div{
        position: relative;
        .attachment-icon {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;    
            height: 100%;
            cursor: pointer;
        }
        input[type=file]{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            box-sizing: border-box;
        }
    }

`

