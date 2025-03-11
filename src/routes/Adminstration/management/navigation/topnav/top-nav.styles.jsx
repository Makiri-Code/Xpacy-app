import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardTopNavContainer = styled.nav`
    position: sticky;
    top: 0;
    height: 80px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E3ECF2;
    z-index: 100;
    background-color: #fff;
`
export const DashboardTitle = styled.div`
    h2{
        margin: 0;
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.65rem */
    }
`
export const DashboardNavItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const DashboardSearchContainer = styled.div`
    position: relative;
`
export const DashboardSearch = styled.input`
    height: 34px;
    min-width:260px;
    padding: 8px 2px 8px 34px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary, #203645);
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.2rem */
`
export const SearchIcon = styled(IoIosSearch)`
    position: absolute;
    top: 3px;
    left: 8px;
    width: 24px;
    height: 24px;
`
export const DashboardNavBtn = styled(Link)`
    text-decoration: none;
    height: 36px;
    padding: 16px;
    border-radius: 8px;
    background: var(--Primary-Primary, #203645);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Base-Base-White, #FFF);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.2rem */
    &.service-request{
        background: #fff;
        color: #203645;
        border: 1px solid #203645;
    }
`
export const NotificationProfileContainer = styled.div`
    height: 36px;
    display: flex;
    gap: 7px;
    padding-left: 10px;
    border-left: 1px solid #203645;
    justify-content: center;
    align-items: center;
`
export const NotificationIcon = styled.div`
    position: relative;
    cursor: pointer;
    .bell-icon{
        width: 24px;
        height: 24px;
    }
    span{
        position: absolute;
        left: 9px;
        top: -5px;
        width: 16px;
        height: 16px;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #F44336;
        color: var(--Primary-Primary, #203645);
        font-family: "Unitext Regular";
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 141.4%; /* 1.0605rem */
        letter-spacing: 0.0075rem;
    }
`
export const DashboardImgContainer = styled.div`
    position: relative;
    display: flex;
    height: 36px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Neutrals-Base-White, #FFF);
`
export const ProfileImg = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
`
export const DashboardDropdown = styled.div`
    display: ${({showDropdown}) => ( showDropdown ? 'block' : 'none')};
    position: absolute;
    top: 37px;
    right: -20px;
    width: 208px;
    padding: 0px 16px ;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 10px 10px 0px rgba(32, 54, 69, 0.10);
`
export const DropdownLink = styled(Link)`
    display: flex;
    gap: 16px;
    padding: 20px 0px 20px 0px;
    border-bottom: 1px solid #C7D9E5;
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.2rem */
    &.log-out{
        border-bottom: none;
    }
`
