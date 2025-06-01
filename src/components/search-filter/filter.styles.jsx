import styled from "styled-components";
import { Form } from "react-bootstrap";
import Button from "../button/button";
import { IoIosSearch } from "react-icons/io";


export const Select = styled(Form.Select)`
    // width: 153px;
    height: 48px;
    margin: 0px;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: "Unitext Regular";
    color: var(--Neutrals-Neutrals900);
    @media only screen and (max-width: 600px){
        width: 47%;
        height: 48px;
        margin: 0px;
        padding: 8px 16px;
        border-radius: 8px;
        font-family: "Unitext Regular";
        font-size: 1rem;
        color: var(--Neutrals-Neutrals900);
    }
`

export const SelectOptionContainer = styled.div`
    display: flex;
    gap: 16px;
    width: 85%;
`
export const SelectLocation = styled(Form.Select)`
    font-family: "Unitext Regular";
    max-height: 300px;
`
export const SearchButton = styled(Button)`
    font-family: "Unitext Regular";
    justify-content: center;
    align-items: center;
    background: var(--Primary-Primary);
    width: 130px;
    height: 48px;
    font-weight: bold;
    border-radius: 8px;
`

export const SearchIcon = styled(IoIosSearch)`
    width: 24px;
    height: 24px;
`
export const MobileSearchContainer = styled.div`
        width: 100%;
        padding: 24px;
        align-self: stretch;
        display: flex;
        border-radius: 8px;
        background-color: #FCFCFC;
        align-items: center;
        margin-bottom: 26px;
    @media only screen and (max-width: 600px){

    }
`

export const MobileSearchForm = styled(Form)`
    display: flex;
    gap: 26px;
    align-self: stretch;
    justify-content: center;
    flex-wrap: wrap;
`

export const MobileOptionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-self: stretch;
`

export const BannerContent = styled.div`
    width: 100%;
    margin-bottom: -7%;
`

export const FilterHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 112px;
`

export const BannerSubHeading = styled.h3`
    color: var(--Base-Base-White, #FFF);
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.65rem */
    @media only screen and (max-width){
        font-size: 1.125rem;
    }
`
export const SearchContainer = styled.div`
    padding: 24px;
    align-self: stretch;
    display: flex;
    border-radius: 8px;
    background-color: #FCFCFC;
    align-items: center;
    @media only screen and (max-width: 600px){
        display: none;
    }
`

export const FormContainer = styled(Form)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const BannerContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 7%;
    @media only screen and (max-width: 600px){
        width: 100%;
        position: absolute;
        top: 305px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const HeadingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media only screen and (max-width: 600px){
        gap: 24px;
        padding: 48px 24px;
    }
`