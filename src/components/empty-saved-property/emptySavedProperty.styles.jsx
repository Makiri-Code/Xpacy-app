import styled from "styled-components";
import {ReactComponent as Empty} from '../../assets/empty.svg';
export const EmptyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #E3ECF2;
    background: #FFF;
    gap: 8px;
    p{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.01rem;
        margin-bottom: 8px;
    }
    button {
        margin-bottom: 24px;
    }
`
export const EmptySvg = styled(Empty)`
    width: 150px;
    height: 150px;
`