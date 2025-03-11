import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export const FilterContainer = styled.div`
    align-self: stretch;    
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const NotificationTable = styled.table`
    align-self: stretch;
    th{
        height: 48px;
        padding: 0px var(--Spacing-m, 16px);
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.05rem */
        border-bottom: 1.5px solid #E3ECF2;
    }
    tr{
        border-bottom: 1px solid #E3ECF2;
    }
    td{
        height: 48px;
        padding: var(--Spacing-m, 16px);
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }
    a{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        border-bottom: 1.5px solid #333;
    }
    .typeData{
        display: flex;
        gap: 8px;
        align-items: center;
        height: max-content;
    }
    .payment{
        width: 32px;
        height: 32px;
        background-color: #C3E5C4;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .link{
        display: flex;
        align-items: flex-end;
        width: 100%;
    }
`
export const InputContainer = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    align-self: stretch;
    input[type=checkbox]{
        width: 24px;
        height: 24px;
    }
`
export const TableFooter = styled.tfoot`

    td{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        text-align: right;
        cursor: pointer;
    }

`
