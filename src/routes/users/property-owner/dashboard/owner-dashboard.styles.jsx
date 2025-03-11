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
    gap: 48px;
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
export const PropertiesCard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 125px);
    grid-template-areas: 
    "one  one   one one one"
    "two  three four five six"
    ;
    row-gap: 16px;
    column-gap: 2%;
    .card1{
        grid-area: one;
        position: relative;
        padding: 21px 69% 29px 24px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Base-Base-White, #FFF);
        .services-card{
            display: flex;
            flex-direction: column;
            gap: 8px;
            justify-content: center;
            align-items: start;
            h3{
                color: var(--Base-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: 120%; /* 1.8rem */
                align-self: center;
            }
        }
        .circle1, .circle2{
            position: absolute;
            top: 22px;
            right: 64px;
            border-radius: 50%;
            width: 220px;
            height: 220px;
            background-color: #73A0BE;
        }
        .circle2{
            top: -11px;
            right: -72px;
            background-color: #477899;
        }
        .circle{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
        }
    }
    .card2, .card3, .card4, .card5, .card6, .card7{
        grid-area: two;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary100, #E3ECF2);
        background: var(--Base-Base-White, #FFF);
        /* Shadow 2 */
        box-shadow: 0px 46px 13px 0px rgba(0, 0, 0, 0.00), 0px 30px 12px 0px rgba(0, 0, 0, 0.01), 0px 17px 10px 0px rgba(0, 0, 0, 0.05), 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
        span{
            color: var(--Primary-Primary700, #477899);
            font-family: "Unitext Regular";
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.05rem */
        }
        p{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.35rem */
        }
    } 
    .card3{
        grid-area: three;
    }
    .card4{
        grid-area: four;
    }
        .card5{
        grid-area: five;
    }
    .card6{
        grid-area: six;
    }

`

export const ServiceRequestCard = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 125px);
    grid-template-areas: 
    "one  one   one"
    "two  three four"
    ;
    row-gap: 16px;
    column-gap: 4%;
    .card1{
        grid-area: one;
        position: relative;
        padding: 21px 69% 29px 24px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Base-Base-White, #FFF);
        .services-card{
            display: flex;
            flex-direction: column;
            gap: 8px;
            justify-content: center;
            align-items: start;
            h3{
                color: var(--Base-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: 120%; /* 1.8rem */
                align-self: center;
            }
        }
        .circle1, .circle2{
            position: absolute;
            top: 22px;
            right: 64px;
            border-radius: 50%;
            width: 220px;
            height: 220px;
            background-color: #73A0BE;
        }
        .circle2{
            top: -11px;
            right: -72px;
            background-color: #477899;
        }
        .circle{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
        }
    }
    .card2, .card3, .card4, .card5, .card6, .card7{
        grid-area: two;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary100, #E3ECF2);
        background: var(--Base-Base-White, #FFF);
        /* Shadow 2 */
        box-shadow: 0px 46px 13px 0px rgba(0, 0, 0, 0.00), 0px 30px 12px 0px rgba(0, 0, 0, 0.01), 0px 17px 10px 0px rgba(0, 0, 0, 0.05), 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
        span{
            color: var(--Primary-Primary700, #477899);
            font-family: "Unitext Regular";
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.05rem */
        }
        p{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.35rem */
        }
    } 
    .card3{
        grid-area: three;
    }
    .card4{
        grid-area: four;
    }

`
export const RevenueCard = styled.div`
    width: 64%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 125px);
    grid-template-areas: 
    "one  one "
    "two  three"
    ;
    row-gap: 16px;
    column-gap: 3%;
    .card1{
        grid-area: one;
        position: relative;
        padding: 21px 60% 29px 24px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Base-Base-White, #FFF);
        .services-card{
            display: flex;
            flex-direction: column;
            gap: 8px;
            justify-content: center;
            align-items: start;
            h3{
                color: var(--Base-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 1.5rem;
                font-style: normal;
                font-weight: 700;
                line-height: 120%; /* 1.8rem */
                align-self: center;
            }
        }
        .circle1, .circle2{
            position: absolute;
            top: 22px;
            right: 64px;
            border-radius: 50%;
            width: 220px;
            height: 220px;
            background-color: #73A0BE;
        }
        .circle2{
            top: -11px;
            right: -72px;
            background-color: #477899;
        }
        .circle{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
        }
    }
    .card2, .card3, .card4, .card5, .card6, .card7{
        grid-area: two;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary100, #E3ECF2);
        background: var(--Base-Base-White, #FFF);
        /* Shadow 2 */
        box-shadow: 0px 46px 13px 0px rgba(0, 0, 0, 0.00), 0px 30px 12px 0px rgba(0, 0, 0, 0.01), 0px 17px 10px 0px rgba(0, 0, 0, 0.05), 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
        span{
            color: var(--Primary-Primary700, #477899);
            font-family: "Unitext Regular";
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.05rem */
        }
        p{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.35rem */
        }
    } 
    .card3{
        grid-area: three;
    }

`
export const Upcoming = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 255px;
    height: 266px;
    border: 1px solid var(--Primary-Primary100, #E3ECF2);
    background: var(--Base-Base-White, #FFF);

    /* Shadow 2 */
    box-shadow: 0px 46px 13px 0px rgba(0, 0, 0, 0.00), 0px 30px 12px 0px rgba(0, 0, 0, 0.01), 0px 17px 10px 0px rgba(0, 0, 0, 0.05), 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
    div{
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // padding: 0px 24px;
        gap: 16px;
        p, h3{
            color: var(--Primary-Primary900, #2D4C61);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.2rem */
        }
        h3{
            color: var(--Base-Base-Black, #333);
            font-size: 1.5rem;
            font-weight: 700;
        }
        &.revenue{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #C3E5C4;
            border-radius: 50%;
            align-self: center;
            .icon1{
                width: 20px;
                height: 20px;
            }
        }
    }
`

export const IconContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    p{
        text-transform: uppercase;
        color: var(--Primary-Primary900, #2D4C61);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.2rem */
    }
`
export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #F5F0E7;
    border-radius: 50%;
    &.service-request{
        background-color: #E3ECF2;
    }
    &.revenue{
        background-color: #C3E5C4;
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
        .rented, .for-sale, .unpaid, .vacant, .for-sale, .in-progress, .pending, .completed, .incomplete, .paid, .active, .verified{
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
        .vacant, .pending, .overdue, .declined, .unpaid {
            color: #C4170B;
            background-color: #FBC0BC;
        }
        .for-sale, .upcoming, .for-sale{
            color: #477899;
            background-color: #C7D9E5;
        }
        .in-progress, .pending, .incomplete{
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
    .type, .service, .rent{
        width: 32px;
        height: 32px;
        background-color: #C3E5C4;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .service{
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