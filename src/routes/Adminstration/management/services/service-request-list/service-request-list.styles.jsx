import styled from "styled-components";


export const RequestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 0 7%;
    padding-bottom: 112.438px;
`
export const RequestContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: start;
`
export const Heading = styled.header`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    gap: 24px;
`
export const Header = styled.h2`
    align-self: stretch;
    color: var(--Base-Base-Black, #333);
    text-align: center;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 2.1rem */
`
export const Menu = styled.nav`
    display: flex;
    height: 40px;
    padding: var(--Spacing-xxs, 4px);
    align-items: center;
    gap: var(--Spacing-xxs, 4px);
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
`

export const MenuContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 6px 12px;
    gap: 4px;
    cursor: pointer;
    user-select: none;
    p{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.05rem */
    }
    &.active{
        background: #CDB385;
    }
`
export const RequestListContainer = styled.div`
    display: flex;
    // width: 1232px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    .header{
    }
`
export const SearchBox = styled.input`
    border-radius: 8px;
    border: 1px solid #C7D9E5;
    padding: 10px 10px 10px 32px;
    width: 306px;
    height: 48px;
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`