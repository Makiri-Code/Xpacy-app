import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "../../components/button/button";
import { IoIosSearch } from "react-icons/io";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ServicesCard from "../../components/services-card/services-card";

export const CarouselContainer = styled(Carousel)`
    position: relative;
    width: 100%;
    overflow: hidden;
`
export const CarouselImage = styled.img`
    width: 100%;
    max-height: 100vh;
    object-fit: cover;
    filter: brightness(60%);
    @media only screen and (max-width: 600px){
        height: 431px;
    }
`

export const BannerContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 7%;
    @media only screen and (max-width: 600px){
        width: 100%;
        position: absolute;
        top: -100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const BannerContent = styled.div`
    width: 100%;
`

export const FilterHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 112px;
`

export const HeadingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media only screen and (max-width: 600px){
        gap: 24px;
        padding: 48px 24px;
    }
`
export const BannerHeading = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 3.6rem */
    @media only screen and (max-width: 600px){
        font-size: 2rem;
    }
`
export const BannerSubHeading = styled.h3`
    color: var(--Base-Base-White, #FFF);
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 1.65rem */
    @media only screen and (max-width){
        font-size: 1.125rem;
    }
`
export const SearchContainer = styled.div`
    padding: 24px;
    align-self: stretch;
    display: flex;
    border-radius: 8px;
    background-color: #FCFCFC;
    align-items: center;
    @media only screen and (max-width: 600px){
        display: none;
    }
`

export const FormContainer = styled(Form)`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const Select = styled(Form.Select)`
    // width: 153px;
    height: 48px;
    margin: 0px;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: "Unitext Regular";
    color: var(--Neutrals-Neutrals900);
    @media only screen and (max-width: 600px){
        width: 47%;
        height: 48px;
        margin: 0px;
        padding: 8px 16px;
        border-radius: 8px;
        font-family: "Unitext Regular";
        font-size: 1rem;
        color: var(--Neutrals-Neutrals900);
    }
`

export const SelectOptionContainer = styled.div`
    display: flex;
    gap: 16px;
    width: 85%;
`
export const SelectLocation = styled(Form.Select)`
    font-family: "Unitext Regular";
    max-height: 300px;
`
export const SearchButton = styled(Button)`
    font-family: "Unitext Regular";
    justify-content: center;
    align-items: center;
    background: var(--Primary-Primary);
    width: 130px;
    height: 48px;
    font-weight: bold;
    border-radius: 8px;
`

export const SearchIcon = styled(IoIosSearch)`
    width: 24px;
    height: 24px;
`
export const MobileSearchContainer = styled.div`
    display: none;
    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 24px;
        align-self: stretch;
        display: flex;
        border-radius: 8px;
        background-color: #FCFCFC;
        align-items: center;
        margin-bottom: 26px;
    }
`

export const MobileSearchForm = styled(Form)`
    display: flex;
    gap: 26px;
    align-self: stretch;
    justify-content: center;
    flex-wrap: wrap;
`

export const MobileOptionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-self: stretch;
`
export const Featured = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 120px 7%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 64px;
    @media only screen and (max-width: 600px){
        padding: 48px 24px;
        gap: 32px;
    }
`
export const Brow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: stretch;
    text-align: center;
    @media only screen and (max-width: 600px){
        // padding: 0px 24px;
    }
`
export const Heading = styled.h1`
    color: var(--Primary-Primary);
    font-size: 36px; 
    font-weight: 700;
    line-height: 43.2px;
    margin: 0;
    text-align: center;
    @media only screen and (max-width: 600px){
        font-size: 1.75rem;
        
    }
`
export const SubHeading = styled.h5`
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: center;
    margin: 0px;
    @media only screen and (max-width: 600px){
        font-size: 1rem;
        font-family: 'Unitext Regular';

    }
`
export const FeaturedScroll = styled.div`
    align-self: stretch;
    position: relative;
    display: flex;
    align-self: stretch;
`
export const FeaturedContainer = styled.div`
    width: 95vw;
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-width: none;
    display: flex;
    flex-wrap: no-wrap;
`
export const HorizontalScrollBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    width: 100%;
    @media only screen and (max-width: 600px){
        display: none;

    }
`
export const LeftArrowContainer = styled.div`
    background-color: var(--Base-Base-White);
    border: 1px solid var(--Base-Base-Black);
    border-radius: 50%;
    position: absolute;
    top: 43%;
    left: 0px;
    width: 45px;
    height: 45px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LeftArrowIcon = styled(GoArrowLeft)`
    width: 20px;
    height: 20px;
`
export const RightArrowContainer = styled.div`
    background-color: var(--Base-Base-White);
    border: 1px solid var(--Base-Base-Black);
    border-radius: 50%;
    position: absolute;
    top: 43%;
    right: 20px;
    width: 45px;
    height: 45px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RightArrowIcon = styled(GoArrowRight)`
    width: 20px;
    height: 20px;
`
export const FeaturedInnerContainer = styled.div`
    min-width: max-content;
    display: flex;
    gap: 24px;
    padding: 20px 10px;
    flex-wrap: nowrap;
`
export const ServicesContainer = styled.div`
    width: 100%;
    padding: 0px 7%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ServicesContent = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 64px;
`
export const ServicesImgContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 450px;
    .mobile-call-to-action{
        display: none;
    }
    .services-card-container:nth-of-type(1){
        left: 0px;
        top: 0;
        filter: drop-shadow(5px 0px 40px #FFF);
        padding: 0px;
    }
    .services-card-container:nth-of-type(2){
        left: 20%;
        top: 0;
        filter: drop-shadow(5px 0px 40px #FFF);
        padding: 0px;
    }
    .services-card-container:nth-of-type(3){
        left: 40%;
        top: 0;
        filter: drop-shadow(5px 0px 40px #FFF);
        padding: 0px;
    }
    .services-card-container:nth-of-type(4){
        left: 60%;
        top: 0;
        filter: drop-shadow(5px 0px 40px #FFF);
        padding: 0px;
    }
    .services-card-container:nth-of-type(5){
        filter: drop-shadow(5px 0px 40px #FFF);
        left: 80%;
        padding: 0px;
    }
    
    @media only screen and (max-width: 600px){
        position: unset;
        display: block;
        height: auto;
        margin-top: 48px;
        .services-img{
            width: auto;
        }
        .services-card-icon{
            top: 40%;
        }
        .mobile-call-to-action{
            width: 70%;
            display: flex;
            flex-direction: column;
            gap: 32px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 50%);
            h5{
                color: var(--Base-Base-White, #FFF);
                text-align: center;

                /* XPACY- Real Estate & Facility Management - 1/Mobile/Headings/Heading 4 */
                font-family: "Florencesans Exp";
                font-size: 1.125rem;
                font-style: normal;
                font-weight: 400;
                line-height: 120%; /* 1.35rem */
            }
        }
    }
        
`

export const Faqs = styled.div`
    background: linear-gradient(180deg, #E3ECF2 0%, #FCFCFC 100%);
    width: 100%;
    margin: auto;
    padding: 120px 7%;
    gap: 64px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FaqScroll = styled.div`
    width: 100%;
`
export const ListProperty = styled.div`
        width: 100%;
        margin:0 auto;
        display: flex;
        padding: 120px 7%;
        gap: 88px;
    @media only screen and (max-width: 600px){
        width: 100%;
        flex-wrap: wrap;
        gap: 32px;
        padding: 96px 0px;
    }
`
export const ListPropertyCardImg = styled.img`
    width: 50%;
    height: 459px;
    border-radius: 9.46px;
    object-fit: cover;
    @media only screen and (max-width: 600px){
        width: 100%;
        border-radius: unset;
    }
`
export const ListPropertyContent = styled.div`
    width: 448px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 32px;
    .lmp-content-title{
        font-family: "Florencesans Exp";
        font-weight: 700;
        font-size: 36px;
        line-height: 43.2px;
        color: var(--Primary-Primary);
            @media only screen and (max-width: 600px){
                font-size: 1.75rem;
            }
        }
    .lmp-content-subtext{
        font-family: "Unitext Regular";
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        @media only screen and (max-width: 600px){
            font-size: 0.875rem;
        }
    }
    .lmp-button{
    width: 167px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Unitext Regular";
    font-weight: 700;
    font-size: 16px;
    border-radius: 8px;
    line-height: 19.2px;
    color: var(--Base-Base-White);
    background: var(--Primary-Primary);
    cursor: pointer;
    }
    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 0 24px;
    }
`
export const DownloadApp = styled.div`
    width: 95.88%;
    /* height: 733px; */
    padding: 48px 120px;
    display: flex;
    margin: auto;
    gap: 88px;
    background: var(--Primary-Primary);
    /* margin-bottom: 120px; */
    color: var(--Base-Base-White);
    
    .download-content{
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 446px;
        align-items: center;
        gap: 32px;
        @media only screen and (max-width: 600px){
            width: 100%;
            order: 1;
        }    
        .download-content-title{
                margin: 0;
                font-family: "Florencesans Exp";
                font-weight: 700;
                font-size: 36px;
                line-height: 43.2px;
            @media only screen and (max-width: 600px){
                font-size: 1.75rem;
            } 
            }
            .download-content-subtext{
                color: #FFF;
                font-family: "Unitext Regular";
                font-weight: 400;
                font-size: 16px;
                line-height: 150%; /* 1.5rem */
                letter-spacing: 0.01rem;
            } 
    }
    @media only screen and (max-width: 600px){
        width: 100%;
        flex-wrap: wrap;
        padding: 48px 24px;
        gap: 32px;
    }
`
export const DownloadIconContainer = styled.div`
    display: flex;
    gap: 8px;
`
export const StoreBtn = styled.button`
        display: flex;
        /* width: 120px; */
        height: 40px;
        padding: 5px 10px 6.5px 8px;
        justify-content: center;
        align-items: center;
        gap: 7px;
        border-radius: 6px;
        border: 1px solid #000;
        background: #FFF;
        span, p{
            align-self: stretch;
            color: #000;
            font-family: "Unitext Regular";
            font-size: 0.7rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        p{
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 100%; /* 1.125rem */
            letter-spacing: -0.02938rem;
        }
`
export const DownloadImg = styled.img`
    width: 328.5px;
    height: 637px;
    object-fit: cover;
    @media only screen and (max-width: 600px){
        width: 100%;
        order: 0;
    }
`
export const Insight = styled.div`
    width: 100%;
    padding: 0px 7%;
    background: linear-gradient(180deg, #E3ECF2 0%, #FCFCFC 100%);
    .insight-cover{
        width: 100%;
        padding-top: 120px;
        @media only screen and (max-width: 600px){
            padding-top: 48px;
        }
        .insight-content{
            display: flex;
            flex-direction: column;
            width: 768px;
            margin: auto;
            gap:16px;
            justify-content: space-between;
            text-align: center;
            @media only screen and (max-width: 600px){
                width: 100%;
            }
            .insight-content-title{
                font-family: "Florencesans Exp";
                font-weight: 700;
                font-size: 36px;
                line-height: 43.2px;
                @media only screen and (max-width: 600px){
                   font-size: 1.75rem;;
                }
            }
            .insight-content-subtext{
                font-family: "Unitext Regular";
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 1%;
                @media only screen and (max-width: 600px){
                   font-size: 1rem;
                   
                }
            }
        }

    }
`

export const InsightCardContainer = styled.div`
    width: 100%;
    margin: 50px auto;
    display: flex;
    gap: 24px;
    @media only screen and (max-width: 600px){
        flex-wrap: wrap;
        gap: 48px;
    }
`
export const InsightCard = styled.div`
    text-align: center;
    overflow: hidden;
    .insight-card-img{
        width: 377px;
        height: 267px;
        border-radius: 8px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        position: relative;
    }
    .insight-card-img:hover{
        transform: scale(1.1);
        object-fit: cover;
    }
    .insight-card-title{
        padding: 10px;
        font-family: "Unitext Regular";
        font-size: 18px;
        line-height: 21.6px;
        font-weight: 700;
        text-align: left;
    }
    .insight-card-title:hover{
        cursor: pointer;
        color: rgba(248, 67, 67, 0.801);
    }
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`
export const InsightCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 70px;
    justify-content: space-between;
    text-align: left;
    .insight-card-name{
        font-family: 'Unitext Regular';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        color: var(--Primary-Primary);
    }
    .insight-card-bottom{
        font-family: 'Unitext Regular';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        color: var(--Neutrals-Neutrals900);
    }
`

// :root{
//     --Background-Color: #FCFCFC;
//     --Primary-Primary: #203645;
//     --Base-Base-White: #FFF;
//     --Base-Base-Black: #333;
//     --Neutrals-Neutrals200: #DADADA;
//     --Neutrals-Neutrals900: #585858;
//     --Secondary-Secondary500: #C2A269;
//     --negative-margin: -10px;
//     --Spacing-xl: 48px;
//     --Spacing-m: 16px;
//     --Spacing-l: 32px;
// }


// @media only screen and (max-width: 600px){
//     .services-img-container > .services-card-container:nth-of-type(1){
//         filter: drop-shadow(5px 0px 40px #FFF);
//     }
//     .services-img-container > .services-card-container:nth-of-type(2) {
//         margin-left: unset;
//         z-index: unset;
//         filter: drop-shadow(5px 0px 40px #FFF);
//         padding: 0px;
//     }
//     .services-img-container > .services-card-container:nth-of-type(3) {
//         margin-left: unset;
//         z-index: unset;
//         filter: drop-shadow(5px 0px 40px #FFF);
//         padding: 0px;
//     }
//     .services-img-container > .services-card-container:nth-of-type(4) {
//         margin-left: unset;
//         z-index: unset;
//         filter: drop-shadow(5px 0px 40px #FFF);
//         padding: 0px;
//     }
//     .services-img-container > .services-card-container:nth-of-type(5) {
//         margin-left: unset;
//         z-index: unset;
//         filter: drop-shadow(5px 0px 40px #FFF);
//         padding: 0px;
//     }
