import styled from "styled-components";

export const ManagementDashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const ManagementDashboardContent = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
`
export const Heading = styled.h2`
    color: var(--Primary-Primary, #203645);
    font-family: "Florencesans Exp";
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin: 0;
`
export const Container = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    p{
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.35rem */
    }
    button{
        margin-top: 24px;
        align-self: flex-end;
    }
`
export const Header = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
        p{
        color: var(--Base-Base-Black, #333);
        font-family: "Florencesans Exp";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.35rem */
    }
    a{
        color: var(--Primary-Primary, #203645);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.05rem */
    }
`
export const QuickOverviewCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    .card{
        display: flex;
        min-width: 212px;
        padding: 24px 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border-radius: 8px;
        border : 1px solid var(--Primary-Primary100, #E3ECF2);
        background: var(--Base-Base-White, #FFF);
        box-shadow: 0px 46px 13px 0px rgba(0, 0, 0, 0.00), 0px 30px 12px 0px rgba(0, 0, 0, 0.01), 0px 17px 10px 0px rgba(0, 0, 0, 0.05), 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
        .building-icon{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #F5F0E7;
        }
        p{
            color: var(--Primary-Primary900, #2D4C61);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.2rem */
        }
        span{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.8rem */
        }
    }
    .card:nth-of-type(2) > .building-icon{
        background-color: #E3ECF2ed;
    }
    .card:nth-of-type(3) > .building-icon{ 
        background-color: #FBC0BC;
    }
    .card:nth-of-type(4) > .building-icon{ 
        background-color: #FFF27C;
    }
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
    td, p{
        height: 48px;
        padding: var(--Spacing-m, 16px);
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
        .rented, .sold, .unavailable, .available,  .unpaid, .vacant, .for-sale, .in-progress, .completed, .incomplete, .paid, .active, .verified{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #357B38;
            background-color: #C3E5C4;
            padding: 4px 8px;
            border-radius: 999px;
            font-family: "Unitext Regular";
            font-weight: 700;
            width: fit-content;
        }
        .vacant, .available, .pending, .overdue, .declined, .unpaid {
            color: #C4170B;
            background-color: #FBC0BC;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 8px;
            border-radius: 999px;
            font-family: "Unitext Regular";
            font-weight: 700;
            width: fit-content;
        }
        .for-sale, .upcoming, .sold{
            color: #477899;
            background-color: #C7D9E5;
        }
        .in-progress, .incomplete{
            color: #9D7B40;
            background-color: #FFF8BE;
        }
    }
    .typeData{
        display: flex;
        gap: 8px;
        align-items: center;
        height: max-content;
    }
    .type, .services, .rent{
        width: 32px;
        height: 32px;
        background-color: #C3E5C4;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .services{
        background-color: #E3ECF2;
    }
    strong{
        font-family: inherit;
    }
        div{
            font: inherit;
        }
    a{
        font-family: inherit;
        color: #333;
        font-weight: 700;
    }
`
// .userdashboard-container{

//     .userdashboard-content{

//         h2{

//         }

//             .quick-overview-card-container{

//         }
//     }
// }