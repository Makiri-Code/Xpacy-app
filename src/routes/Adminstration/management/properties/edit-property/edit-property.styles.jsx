import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { Form } from "react-router-dom";
import { FormSelect } from "react-bootstrap";
import {ReactComponent as NairaIcon} from '../../../../../assets/currency-icon.svg';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
export const PropertyDetails = styled.div`
    display: flex;
    width: 100%;
    gap: 18px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 73px;
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
    width: 56%;
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

export const PropertyFormContainer = styled.form`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
`
export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: stretch;
    align-items: center;
    h1{
        color: var(--Base-Base-Black, #333);
        text-align: center;
        font-family: "Florencesans Exp";
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 2.1rem */
    }
    p{
        color: var(--Base-Base-Black, #333);
        text-align: center;
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 1.5rem */
        letter-spacing: 0.01rem;
    }
`
export const ProgressBar = styled.div`
    display: flex;
    height: auto;
    padding: 17px 46px;
    align-items: flex-start;
    gap: 56px;
`

export const ProgressBarItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    display: flex;
    width: 80px;
    padding: 0px 6px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    span{
        color: var(--Base-Base-Black, #333);
        text-align: center;
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
        &.active, &.inactive, &.completed{
            width: 28px;
            height: 28px;
            color: #fff;
            border-radius: 50%;
            background-color: #203645;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &.inactive{
            background-color: #E3ECF2;
            color: #333333;

        }
    }
    div{
        position: absolute;
        width: 136%;
        border: 2px solid #E3ECF2;
        top: 15%;
        left: 50%;
        transform: translate(12%);
        z-index: -1;
        &.active{
            border: 2px solid #203645;

        }
    }

`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 10px;
    background: var(--Base-Base-White, #FFF);
    padding: 24px;
    align-self: stretch;
    h3{
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.35rem */
    }
`
export const SearchField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    label{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
    }
    .search{
        position: relative;
        align-self: stretch;
        width: 50%;
        input[type=search]{
            border-radius: 8px;
            border: 1px solid var(--Primary-Primary200, #C7D9E5);
            padding: 8px 8px 8px 28px;
            color: var(--Neutrals-Neutrals900, #585858);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%;
            width: 100%;
        }
    }
    span{
        color: red;
    }
`
export const SearchIcon = styled(CiSearch)`
    position: absolute;
    width: 20px;
    height: 20px;
    left: 5px;
    top: 25%;
`
export const FormContainer = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 24px;
    button{
        margin-top: 24px;
    }
`
export const NameContainer = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`
export const OwnerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-self: stretch;
`
export const NextBtn = styled.div`
    align-self: flex-end;
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.05rem */
    }
    &:hover{
        cursor: pointer;
        text-decoration: underline;
        
    }
`
export const SelectContainer = styled.div`
    width: 100%;
    label{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
        margin-bottom: 0.5rem;
    }
`
export const Option = styled(FormSelect)`
    height: 48px;
    padding: 5px 16px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.01rem;
`

export const Price = styled.div`
    position: relative;
    width: 100%;
    .form-group{
        input{
            padding: 5px 16px 5px 28px;
        }
    }
`
export const Currnecy = styled(NairaIcon)`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);
`
export const TextArea = styled.textarea`
    padding: 8px 16px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    height: 200px;
    min-height: 80px;
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.01rem;
`
export const AmenitiesContainer = styled.div`
    align=self: stretch;
    display: flex;
    flex-wrap: wrap;
    padding: 16px 17px;
    row-gap: 16px;
    column-gap: 16px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`
export const Item = styled.span`
    position: relative;
    padding: 8px 16px;
    border-radius: 8px;
    border: 1.5px solid var(--Neutrals-Neutrals200, #DADADA);
    color: var(--Neutrals-Neutrals900, #585858);
    text-align: center;
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: 0.01rem;
    cursor: pointer;
    &.selected{
        border: 1.5px solid #C7D9E5;
        background-color:   #E3ECF2;
        color: #585858;
    }
`
export const CloseIcon = styled(IoClose)`
    width: 32px;
    height: 32px;
    align-self: flex-end;
    cursor: pointer;
`
export const UploadContainer = styled.div`
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 8px;
    width: fit-content;
    border-radius: 8px;
    border: 1px solid var(--Base-Base-White, #FFF);
    background: var(--Primary-Primary, #203645);
    cursor: pointer;
    p{
        color: var(--Base-Base-White, #FFF);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
    }
`

export const MediaContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: start;
    span{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 141.4%;
        letter-spacing: 0.0075rem;
    }
`
export const Location = styled(Link)`
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.05rem */
    span{
        color: var(--Information-blue, #007BFF);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-underline-position: from-font;
    }
`

export const UploadModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    padding: 56px 84px 153px 85px;
    flex-direction: column;
    gap: 64px;
    background: var(--Base-Base-White, #FFF);
    width: 80%;
`
export const FinishBtn = styled.button`
    border: none;
    background-color: #fff;
    padding: unset;
    display: block;
    height: unset;
    color: var(--Information-blue, #007BFF);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    text-decoration-line: underline;
    text-decoration-style: solid;
    &:hover{
        filter: unset;
    }
`
export const PhotosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    .img-container{
        position: relative;
        width: 100%;
        height: auto;
        img{
            border-radius: 8px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`
export const DeleteBtn = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #E3ECF2;
`