import styled from "styled-components";
import { FormSelect } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";


export const DropdownOption = styled.div`
    position: absolute;
    right: 24px;
    // width: 225px;
    // height: 192px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    padding: 0px 17px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 10px 10px 0px rgba(32, 54, 69, 0.10);
`
export const FilterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-left: 16px;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
    }
    input[type=checkbox]{
        width: 24px;
        height: 24px;
    }
`
export const SearchBoxContainer = styled.div`
    position: relative;
    
`
export const SearchBox = styled.input`
    border-radius: 8px;
    border: 1px solid #C7D9E5;
    padding: 16px 10px 16px 36px;
    height: 48px;
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
`
export const SearchIcon = styled(IoSearchOutline)`
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    left: 10px;
`
export const DropdownContent = styled.div`
    height: 64px;
    border-bottom: 1px solid #C7D9E5;
    display: flex;
    gap: 8px;
    align-items: center;
    align-self: stretch;
    cursor: pointer;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.2rem */
        cursor: pointer;
    }
    &.last{
        border-bottom: none;
    }
`
export const HeaderContainer = styled.div`
 align-self: stretch;
 display: flex;
 justify-content: flex-end;
 gap: 8px;
`
export const Select = styled(FormSelect)`
    width: 145px;
    height: 48px;
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.01rem;
`

export const DeleteModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    p{
        color: var(--Error-Error, #F44336);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
    }
    .btn-container {
        align-self: stretch;
        display: flex;
        justify-content: space-between;
    }
`