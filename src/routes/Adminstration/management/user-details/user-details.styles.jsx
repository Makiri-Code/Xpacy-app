import styled from "styled-components";

export const SubHeading = styled.div`
    align-self: stretch;
    color: var(--Base-Base-Black, #333);
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    padding-bottom: 48px;
    border-bottom: 1px solid #C7D9E5;
`

export const ProfilePhoto = styled.img`
    align-self: center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;

`
export const HeaderContainer = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .header{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            color: var(--Base-Base-Black, #333);
            text-align: center;
            font-family: "Florencesans Exp";
            font-size: 1.75rem;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 2.1rem */
        }
    }
    .sub-heading{
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            color: var(--Neutrals-Neutrals900, #585858);
            font-family: "Unitext Regular";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 1.5rem */
            letter-spacing: 0.01rem;
        }
    }
`
export const Table = styled.table`
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
        .in-progress, .sold{
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
    .payment{
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
    a{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        border-bottom: 1.5px solid #333;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    width: 80%;
    margin-bottom: 48px;
`