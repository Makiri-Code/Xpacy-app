import styled from "styled-components";

export const BlogHeadingBox = styled.header`
    padding: 24px 0;
    margin: 0 auto;
    margin-top: 48px;
    width: 60%;
    & .header__box{
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        gap: 24px;
        color: #333;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: 0.01rem;
        font-family: "Unitext Regular";
        &-title{
            color: #477899;
            margin-bottom: 0;
        }
        &-heading{
            font-size: 1.75rem;
            font-weight: 700;
            font-family: "Florencesans Exp";
        }
        &-subheading{
            font-size: 1.125rem;
            font-weight: 700;
        }
        & .author-box {
            display: flex;
            gap: 8px;
            align-items: center;
            
            & .author-img{
                width: 36px;
                height: 36px;
                background-image: url();
                background-color: lightgray;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 50%;
            }
            & .author {
                font-size: 0.875rem;
                &-name{
                    display: block;
                    font-weight: 400;
                    color: #585858;
                }
                &-name:not(:last-child){
                    margin-bottom: 5px;
                    font-weight: 700;
                    color: #333;
                }
                &.bold{
                }
            }
        }
    }
    @media only screen and (max-width:600px){
        width: 100%;
        & .header__box{
            &-heading{
                font-size: 1.375rem;
                line-height: 141%;
            }
        }
    }
`

export const BlogCoverImg = styled.div`
    // padding: 24px 0;
    // height: 629px;
    margin-bottom: 24px;
    & img{
        border-radius: 8px;
        width: 100%;
        height: 100%
        object-fit: cover;
    }
`

export const BlogBody = styled.div`
    display: block;
    padding: 24px 0;
    width: 60%;
    margin: 0 auto;
    color: #333;
    margin-bottom: 24px;
    line-height: 150%;
    p{
        margin-bottom: 0;
    }
    @media only screen and (max-width:600px){
        width: 100%;
    }
`   

export const Divider = styled.div`
    border: 1.5px solid #DADADA;
    margin: 0 -100px;
    margin-bottom: 24px;
`