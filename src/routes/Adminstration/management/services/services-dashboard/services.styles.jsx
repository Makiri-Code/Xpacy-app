import styled from "styled-components";

export const SummaryContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 109px;
    grid-template-areas: 
    "one one one"
    "two three four"
    ;
    row-gap: 16px;
    column-gap: 5%;
    margin-bottom: 48px;
    .card1{
        grid-area: one;
        position: relative;
        padding: 21px 72% 29px 24px;
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
    .card2, .card3, .card4{
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
    background-color: #FFF8BE;
    border-radius: 50%;
`
export const ServicesCardFooter = styled.div`
    align-self: center;    
    display: flex;
    gap: 8px;
    align-items: center;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: 'Unitext Regular';
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.8rem */
    }
    .stats{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 4px;
        border-radius: var(--Radius-Round, 999px);
        background: var(--Success-Success100, #C3E5C4);
        span{
            color: var(--Success-Success300, #357B38);
            font-family: "Unitext Regular";
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.05rem */
        }
    }
`

export const AnalyticsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.7fr 1fr;
    grid-template-rows: auto;
    column-gap: 24px;
`
export const ChartContainer = styled.div`
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary100, #E3ECF2);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    p, span{
        align-self: start;
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
    }
    span{
        font-weight: 400;
    }
`
export const OptionsContainer = styled.div`
    position: absolute;
    right: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 216px;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 10px 10px 0px rgba(32, 54, 69, 0.10);
    z-index: 100;
    .option-item{
        align-self: stretch;
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 16px 10px 16px 16px;
        cursor: pointer;
        border-bottom: 1px solid #C7D9E5;
        span{
            color: var(--Base-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.2rem */
        }
    }
    .option-item:last-of-type{
        border: none;
    }
`