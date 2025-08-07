import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/x-pacy-logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 92px;
  width: 100%;
  display: flex;
  padding: 22px 7%;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--Base-Base-White);
  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.1) inset;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    padding: 24px;
  }
`;
export const PageWrapper = styled.div`
  padding-top: 92px;
  overflow: hidden;
`;
export const LogoContainer = styled.div`
  padding: 8px;
  gap: 10px;
  @media only screen and (max-width: 600px) {
    padding: unset;
  }
`;

export const NavLogo = styled(Logo)`
  width: 158px;
  height: 32px;
`;
export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  & a {
    color: var(--Primary-Primary);
    font-family: "Florencesans Exp";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
    padding: 10px;
    transition: all 0.3s ease-in-out;
    &.active-item {
      border-bottom: 2px solid #203645;
    }

    &:hover {
      border-bottom: 1.5px solid #203645;
      transform: translateY(-5px);
    }
  }

  & .dropdown-box {
    color: var(--Primary-Primary);
    font-family: "Florencesans Exp";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
    padding: 10px;
    position: relative;
    font-size: 16px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:hover > .arrow-head {
      transform: rotate(180deg);
    }

    & > .dropdown-content {
      opacity: 0;
      visibility: hidden;
      // text-align: center;
      display: flex;
      position: absolute;
      top: 45px;
      right: 0;
      padding: 12px 0;
      background-color: #fff;
      // width: 210px;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    }
    &:hover > .dropdown-content {
      opacity: 1;
      visibility: visible;
    }
  }
  @media only screen and (max-width: 600px) {
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.2rem */
    border-bottom: 1px solid #e3ecf2;
    align-self: stretch;
    text-align: center;
    &:nth-child(6) {
      margin-bottom: 62px;
    }
    &:nth-child(7) {
      color: #9d7b40;
      font-weight: 700;
    }
    &:nth-last-child(1) {
      color: #203645;
      font-weight: 700;
    }
  }
`;
export const NavItemLink = styled(Link)`
  color: var(--Primary-Primary);
  font-family: "Unitext Regular" !important;
  font-size: 18px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 21.6px */
  padding: 12px 16px !important;

  &:hover {
    border-bottom: unset !important;
    transform: unset !important;
    background-color: rgb(222, 242, 255);
  }
`;
export const NavItem = styled(NavLink)``;
export const NavBtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const MobileNavContainer = styled.div`
  transition: transform 0.3s ease-in;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  position: absolute;
  top: 78px;
  left: 0;
  height: 80vh;
  overflow-y: auto;
  width: 100%;
  background: #fff;
  transform: ${({ showNav }) =>
    showNav ? "translateY(0%)" : "translateY(-150%)"};
  transition: ${({ showNav }) =>
    showNav ? "transform 0.5s ease-in" : "transform 0.3s ease-in"};
`;
export const NavTitle = styled.h3`
  color: var(--Base-Base-Black, #333);
  text-align: center;
  font-family: "Florencesans Exp";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;
export const MobileNavItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Primary-Primary200, #c7d9e5);
  padding: 0;
  margin: 0;
  list-style: none;
  & li {
    a {
      color: #333;
      display: block;
      width: 100%;
    }
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.2rem */
    border-bottom: 1px solid #e3ecf2;
    align-self: stretch;
    text-align: center;
    padding: 8px;
    &:nth-child(6) {
      margin-bottom: 62px;
    }
    &:nth-child(7) a {
      color: #9d7b40;
      font-weight: 700;
    }
    &:nth-last-child(1) a {
      color: #203645;
      font-weight: 700;
    }
  }
`;
// .auth-nav{
//     display: flex;
//     width: 673px;
//     justify-content: center;
//     align-items: center;
//     padding-top: 64px;
//     margin: 0px 0px 24px 0px;
// }

// .active{
//     border-bottom: 2px solid var(--Primary-Primary);
// }
// .nav-btns-container {
//     gap: 20px;
// }

// .nav-btns-container, .nav-btns {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 8px;
//     background: var(--Base-Base-White);
//     height: 36px;
//     padding: var(--Spacing-m) 0px;
//     color: var(--Base-Base-Black);
//     font-family: 'Unitext Regular';
//     font-size: 14px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: 120%; /* 16.8px */
// }
// .nav-btns {
//     padding: var(--Spacing-m);
// }
// .nav-btns:nth-of-type(1){
//     border: solid black 1.5px;
// }
// .nav-btns:nth-of-type(2) {
//     background: var(--Primary-Primary);
//     color: var(--Base-Base-White)
// }
// .mobile-nav, .mobile-nav-container{

// }
// @media only screen and (max-width: 600px){
//
//
//     .nav-item-container{
//         display: none;
//     }
//     .nav-btns-container{
//         display: none;
//     }
//     .mobile-nav{
//         display: block;
//     }
//     .mobile-nav-container{
//
//         h3{
//             color: var(--Base-Base-Black, #333);
//             text-align: center;
//             font-family: "Florencesans Exp";
//             font-size: 1.125rem;
//             font-style: normal;
//             font-weight: 400;
//             line-height: 120%; /* 1.35rem */
//         }
//         .mobile-nav-item-container{

//         }

//         .mobile-nav-item-container .nav-item {
//
//         }
//         .nav-item
//     }
//     .show-nav{
//         transform: translateY(0%);
//         transition: transform 0.3s ease-in;
//     }
// }
