import styled from "styled-components";

export const UserDashboardContainer = styled.div`
  width: 100%;
`;
export const UserDashboardMain = styled.div`
  display: flex;
  min-width: 82%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex-shrink: 0;
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100%;
  }
`;
export const ProfileName = styled.h2`
  color: var(--Primary-Primary, #203645);
  font-family: "Florencesans Exp";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 2.7rem */
`;

export const ContentLayout = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
  align-self: stretch;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const PropertyServicesContainer = styled.div`
  display: flex;
  width: 64%;
  /* width: 724px; */
  flex-direction: column;
  align-items: flex-end;
  gap: 48px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const PropertySection = styled.div`
  display: flex;
  width: 100%;
  padding: 17px 24px;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  border-radius: 8px;
  border: 1.5px solid var(--Primary-Primary200, #c7d9e5);
  @media only screen and (max-width: 600px) {
    border: unset;
    padding: 4px 0px;
    overflow-x: scroll;
    scrollbar-width: none;
  }
`;
export const PropertySectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  h3 {
    margin: 0;
    color: var(--Base-Base-Black, #333);
    font-family: "Florencesans Exp";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.35rem */
  }
  a {
    display: flex;
    height: 28px;
    padding: var(--Spacing-s, 8px);
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: underline;
    color: var(--Primary-Primary, #203645);
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.05rem */
  }
  @media only screen and (max-width) {
    overflow-x: hidden;
    min-width: max-content;
    padding-bottom: 17px;
    h3 {
      font-size: 1.75rem;
      line-height: 133.3%;
    }
  }
`;
export const PropertyList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  @media only screen and (max-width: 600px) {
    min-width: max-content;
  }
`;
export const ServicesSection = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  border: 1.5px solid var(--Primary-Primary200, #c7d9e5);
  background: var(--Base-Base-White, #fff);
`;
export const BookedTable = styled.table`
  width: 100%;
  th,
  td {
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    // padding: 0px 32px;
    height: 48px;
    border-bottom: 2px solid var(--Primary-Primary100, #e3ecf2);
  }
  td {
    color: var(--Base-Base-Black, #333);
    font-weight: 400;
    .upcoming,
    .in-progress,
    .completed,
    .pending {
      font-family: "Unitext Regular";
      font-size: 14px;
      height: 24px;
      padding: 4px;
      border-radius: 999px;
      font-weight: 700;
      color: var(--Error-Error300, #c4170b);
      background: #fbc0bc;
    }
    .in-progress {
      padding: 4px 0.5px;
      color: #9d7b40;
      background: #fff8be;
    }
    .completed {
      color: #357b38;
      background-color: #c3e5c4;
    }
  }
  @media only screen and (max-width: 600px) {
    tr {
      border: 1px solid #e3ecf2;
      td {
        border-bottom: none;
      }
    }
  }
`;
export const NotificationsPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 48px;
  @media only screen and (max-width: 600px) {
    align-self: stretch;
  }
`;
export const NotificationSection = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  border: 1.5px solid var(--Primary-Primary200, #c7d9e5);
  background: var(--Base-Base-White, #fff);
`;
export const NotificationList = styled.div`
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Primary-Primary100, #e3ecf2);
  background: var(--Base-Base-White, #fff);
`;
export const NotificationIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;
export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  .notification-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    p {
      color: var(--Base-Base-Black, #333);
      font-family: "Unitext Regular";
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 120%; /* 1.05rem */
    }
    span {
      color: var(--Primary-Primary700, #477899);
      font-family: "Unitext Regular";
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 141.4%; /* 1.0605rem */
      letter-spacing: 0.0075rem;
    }
    .unpaid,
    .paid {
      padding: 4px 8px;
      border-radius: 999px;
      background: #fbc0bc;
      color: #c4170b;
      font-family: "Unitext Regular";
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 1.05rem */
    }
    .paid {
      background: #c3e5c4;
      color: #357b38;
    }
  }
  p {
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 141.4%; /* 1.0605rem */
    letter-spacing: 0.0075rem;
  }
`;
export const PaymentSection = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  border-radius: 8px;
  border: 1.5px solid var(--Primary-Primary200, #c7d9e5);
  background: var(--Base-Base-White, #fff);
`;
export const UserDashboardTopNav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  h5 {
    color: var(--Base-Base-Black, #333);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 1.35rem */
    margin: 0px;
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    h5 {
      color: var(--Base-Base-Black, #333);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 1.35rem */
      margin: 0px;
    }
  }
`;

export const MenuOption = styled.div`
  width: 175px;
  height: 128px;
  border-radius: 8px;
  position: absolute;
  top: 130px;
  right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border: 1.5px solid var(--Primary-Primary200, #c7d9e5);
  background: var(--Base-Base-White, #fff);
  box-shadow: 0px 10px 10px 0px rgba(32, 54, 69, 0.1);
`;

export const MenuOptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 20px;
`;
export const MenuItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  span {
    color: var(--Base-Base-Black, #333);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.05rem */
  }
`;
export const Divider = styled.div`
  align-self: stretch;
  border: 1px solid #c7d9e5;
`;

export const MobileBookServiceTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0px;
  border-top: 1.5px solid #e3ebf2;
  & .upcoming,
  .in-progress,
  .completed,
  .pending {
    font-family: "Unitext Regular";
    font-size: 14px;
    height: 24px;
    padding: 4px;
    border-radius: 999px;
    font-weight: 700;
    color: var(--Error-Error300, #c4170b);
    background: #fbc0bc;
  }
  & .in-progress {
    padding: 4px 0.5px;
    color: #9d7b40;
    background: #fff8be;
  }
  & .completed {
    color: #357b38;
    background-color: #c3e5c4;
  }
  & span,
  p {
    color: #333;
    font-family: "Unitext Regular";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.05rem */
    margin: 0;
    &.property-s {
      color: #7d7d7d;
    }
  }
  & .space {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
  }
`;
export const MobileBookServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
