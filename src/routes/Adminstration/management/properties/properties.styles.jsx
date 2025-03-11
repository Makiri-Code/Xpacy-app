import styled from "styled-components";
import { Form } from "react-bootstrap";
export const HeaderContainer = styled.div`
 align-self: stretch;
 display: flex;
 justify-content: flex-end;
 gap: 8px;
`
export const Select = styled(Form.Select)`
    width: 145px;
    height: 48px;
    color: var(--Neutrals-Neutrals900, #585858);
    font-family: "Unitext Regular";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.01rem;
`
export const SummaryContainer = styled.div`
    display: grid;
    grid-template-columns: 30% 36% 32%;
    column-gap: 8px;
    width: 100%;
    .card{
        height: 327px;
        border-radius: 8px;
        border: 1px solid var(--Primary-Primary100, #E3ECF2);
        background: var(--Base-Base-White, #FFF);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    }
    .first-card{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 24px 0px 24px 24px;
    }
        header{
            display: inline-flex;
            flex-direction: column;
            gap: 4px;
        }

    .stats{
        display: flex;
        align-self: center;
        gap: 8px;
        span{
            font-weight: 700;
            font-size: 1.5rem;
        }
    }
    .second-card, .third-card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span{
            font-weight: 700;
            font-size: 0.875rem;
        }
        strong{
            font-family: "Unitext Regular";
            color: #333;
            font-size: 1.125rem;
        }
        header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
        .third-card{
            padding: 24px;
        }
        .total-rent-container, .total-sale-container{
            widht: 100%;
            height: 189px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            border-radius: 8px;s
            border: 1px solid var(--Primary-Primary100, #E3ECF2);
            background: var(--Base-Base-White, #FFF);
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
        }
        .total-sale-container{
            height: 122px;
        }
`
export const Upstats = styled.div`
    display: flex;
    border-radius: var(--Radius-Round, 999px);
    background: var(--Success-Success100, #C3E5C4);
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 3px;
    p{
        color: var(--Success-Success300, #357B38);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.05rem */
    }
    &.down-trend{
        background: #FBC0BC;
        p{
            color: #C4170B;
        }
    }
`
export const ChartContainer = styled.div`
    width: 100%;
    height: auto;
`
export const CardHeader = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    .building-icon, .services-icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F5F0E7;
    }
    span{
        font-weight: 700;
        font-size: 1rem;
    }
    .services-icon{
        width: 32px;
        height: 32px;
        gap: 4px;
        background-color: #E3ECF2;
    }
`
export const TotalRentCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .vacant-card{
        padding: 4px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 8px;
        justify-content: space-between;
        border-right: 1px solid #C7D9E5;
        p{
            color: var(--Neutrals-Neutrals900, #585858);
            font-family: "Unitext Regular";
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; 
        }
        span{
            color: var(--Neutrals-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 1.35rem */
        }
        &:nth-of-type(3){
            p{
                text-align: center;
            }
            border: none;
        }
    }
`

export const PropertyTableList = styled.table`
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
    td{
        height: 48px;
        padding: var(--Spacing-m, 16px);
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.05rem */
        .rented, .vacant, .for-sale, .in-progress, .pending, .completed, .paid{
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
        .vacant, .pending, .overdue {
            color: #C4170B;
            background-color: #FBC0BC;
        }
        .for-sale, .upcoming{
            color: #477899;
            background-color: #C7D9E5;
        }
        .in-progress{
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
    .type{
        width: 32px;
        height: 32px;
        background-color: #C3E5C4;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    strong{
        font-family: inherit;
    }
        div{
            font: inherit;
        }
`

export const DropdownOption = styled.div`
    position: absolute;
    right: 24px;
    // width: 225px;
    // height: 192px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    padding: 0px 17px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 10px 10px 0px rgba(32, 54, 69, 0.10);
`
export const DropdownContent = styled.div`
    height: 64px;
    border-bottom: 1px solid #C7D9E5;
    display: flex;
    gap: 8px;
    align-items: center;
    align-self: stretch;
    cursor: pointer;
    span{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.2rem */
        cursor: pointer;
    }
    &.last{
        border-bottom: none;
    }
`
export const DeleteModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    p{
        color: var(--Error-Error, #F44336);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 1.2rem */
    }
    .btn-container {
        align-self: stretch;
        display: flex;
        justify-content: space-between;
    }
`