import styled from "styled-components"

export const SummaryUsers = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "one one   one  one  one"
    "two three four five six"
    ;
    row-gap: 16px;
    column-gap: 3%;
    .card1{
        grid-area: one;
        position: relative;
        padding: 21px 74% 29px 24px;
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
    .card2, .card3, .card4, .card5, .card6{
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

export const UsersAnalyticsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
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
export const AddOwnerModalContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 539px;
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 64px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    

`
export const AddOwnerModalForm = styled.form`
    display: flex;
    width: 411px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 24px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    /* shadow-sm */
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    p, h1{
        align-self: flex-start;
        color: #000;
        font-family: "Unitext Regular";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
    }
    p{
        font-size: 0.875rem;
        font-weight: 400;
        margin-bottom: 24px;
    }
    button{
        align-self: flex-end;
        margin-top: 24px;
    }
`
export const PropertyModalContainer= styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 64px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    background: var(--Base-Base-White, #FFF);
    
    .property-modal-content{
        display: flex;
        width: 320px;
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
        padding: 24px;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Base-Base-White, #FFF);
        p, span{
            color: var(--Base-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.2rem */
        }
        span{
            font-size: 0.875rem;
            font-weight: 400;
        }   
        .btn-container {
            margin-top: 24px;
            align-self: stretch;
            display: flex;
            justify-content: space-between;
        }
    }
`
