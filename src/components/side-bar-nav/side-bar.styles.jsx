import { FaCircle } from "react-icons/fa";
import styled from "styled-components";

export const DashboardContainer = styled.nav`
  width: 100%;
  @media only screen and (max-width: 600px) {
    position: relative;
  }
`;
export const SideBarNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  // width: 251px;
  width: 20%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  padding: 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  background: var(--Primary-Primary900, #2d4c61);
`;
export const SideBarContent = styled.div`
  display: flex;
  height: 852px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  & img {
    width: 158px;
    height: 33.482px;
    flex-shrink: 0;
    color: #fff;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  .nav-link {
    cursor: pointer;
    display: flex;
    height: 48px;
    padding: 8px 15px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    text-decoration: none;
    border-radius: 8px;
  }
  .nav-link:hover {
    background-color: #477899;
  }
  .active {
    background-color: #477899;
  }
`;
export const NavLinkItem = styled.span`
  color: var(--Base-Base-White, #fff);
  font-family: "Unitext Regular";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.01rem;
`;
export const ReferralCard = styled.div`
  user-select: none;
  cursor: pointer;
  position: relative;
  width: 203px;
  min-width: 100%;
  height: 238px;
  border-radius: 8px;
  background: var(--Secondary-Secondary, #cdb385);
  overflow: hidden;
  z-index: 0;
`;
export const Elipse = styled(FaCircle)`
  position: absolute;
  bottom: -60%;
  right: -50%;
  color: #b6904e;
  width: 220px;
  height: 220px;
  z-index: -1;
`;
export const ReferralCardContent = styled.div`
  display: flex;
  padding: 16px;
  min-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  .referral-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .referral-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    h5 {
      color: var(--Base-Base-Black, #333);
      font-family: "Unitext Regular";
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 1.35rem */
      margin: 0;
    }
    p {
      color: var(--Base-Base-Black, #333);
      font-family: "Unitext Regular";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 1.5rem */
      letter-spacing: 0.01rem;
    }
  }
`;
export const MobileSidebarNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  z-index: 999;
  display: flex;
  transform: translateX(-150%);
  transition: transform ease-in 0.3s;
  width: 100%;
  height: auto;
  padding: 24px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  background: var(--Primary-Primary900, #2d4c61);

  &.hide-dropdown {
    transform: translateX(0%);
    transition: transform ease-in 0.3s;
  }
`;

export const MobileSidebarLogoContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OutletMargin = styled.div`
  margin-left: 20%;
  @media screen only and (max-width: 600px) {
    margin-left: unset;
  }
`;
