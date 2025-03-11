import styled from "styled-components";

export const ServiceRequestFormContainer = styled.div`
    // width: 58%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
`
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    // width: 83%;
    align-self: stretch;
    .header{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            color: var(--Base-Base-Black, #333);
            text-align: center;
            font-family: "Florencesans Exp";
            font-size: 1.75rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 2.1rem */
        }
    }
    .sub-heading{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            color: var(--Neutrals-Neutrals900, #585858);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.5rem */
            letter-spacing: 0.01rem;
        }
    }
`
export const Link = styled.p`
    color: var(--Primary-Primary, #203645);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.05rem */
    border-bottom: 1px solid #203645;
`
export const Details = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    padding-top: 48px;
    border-top: 1px solid #C7D9E5;
    padding-bottom: 48px;
    border-bottom: 1px solid #C7D9E5;
    button{
        align-self: end;
    }
`

export const InputContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;

    p{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
    }
`
export const Input = styled.input`
    width: 78%;
    height: 48px;
    padding: 8px;
    border-radius: 8px;
    color: var(--Base-Base-Black, #333);
    border: 1px solid #C7D9E5;
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`
export const Inputs = styled.div`
    display: flex;
    width: 83%;
    flex-direction: column;
    gap: 12px;
    input{
        width: 95%;
        align-self: end;
    }
`
export const HistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: start;
    gap: 24px;
    .item{
        display: flex;
        gap: 16px;
        align-items: center;
        .box{
            width: 10px;
            height: 10px;
            background-color: #203645;
            border-radius: 50%;
        }
        p{
            color: var(--Base-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.5rem */
            letter-spacing: 0.01rem;
        }

    }
    .item:last-of-type > .box{
        background-color: #C7D9E5;
    }
`
export const Heading = styled.h3`
    color: var(--Base-Base-Black, #333);
    font-family: "Florencesans Exp";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.35rem */
`