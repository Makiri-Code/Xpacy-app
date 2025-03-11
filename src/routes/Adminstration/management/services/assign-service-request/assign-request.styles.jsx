import styled from "styled-components";

export const AssignContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 48px;
    h1{
        align-self: stretch;
        color: var(--Base-Base-Black, #333);
        text-align: center;
        font-family: "Florencesans Exp";
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 2.1rem */
    }
`

export const AssignContent = styled.div`
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`
export const SearchBox = styled.div`
    align-self: stretch;
    position: relative;
    .search-icon{
        width: 20px;
        height: 20px;
        position: absolute;
        top: 8px;
        left: 10px;
        color:rgb(88, 88, 88);
    }
    input{
        height: 24px;
        width: 30%;
        border-radius: 8px;
        padding: 16px 8px 16px 32px;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.2rem */
    }
`
export const AssignLink = styled.p`
        color: var(--Primary-Primary, #203645);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.05rem */
        text-decoration: underline;
`