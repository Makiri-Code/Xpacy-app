import styled from "styled-components";

export const HeaderContainer = styled.div`
 align-self: stretch;
 display: flex;
 justify-content: space-between;
 gap: 8px;
 h2{
    color: var(--Base-Base-Black, #333);
    font-family: "Florencesans Exp";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.35rem */
 }
`
export const AddAndDeleteContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const FaqModal = styled.div`
    width: 58%;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    padding: 48px 64px 64px 64px;
    border-radius: 8px;
    background: var(--Background-Color, #FCFEFF);
    .faq-modal-form{
        display: flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        border-radius: 8px;
        border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
        background: var(--Base-Base-White, #FFF);
        h3{
            color: var(--Base-Base-Black, #333);
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 400;
            line-height: 120%; /* 1.35rem */
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            align-self: stretch;
            label, textarea{
                color: var(--Base-Base-Black, #333);
                font-family: "Unitext Regular";
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; /* 1.05rem */
            }
            textarea{
                height: 80px;
                min-height: 80px;
                padding: var(--Spacing-s, 8px) var(--Spacing-sm, 12px);
                align-self: stretch;
                border-radius: var(--Radius-m, 10px);
                border: 1px solid var(--Primary-Primary200, #C7D9E5);
                background: rgba(236, 236, 236, 0.50);
            }
        }
    }
    
`