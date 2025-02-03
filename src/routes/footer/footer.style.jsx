import styled from "styled-components";
export const FooterContainer = styled.footer`
    width: 100%;
    padding-bottom:25px;
    background: var(--Primary-Primary);
    padding-top: 120px;
    gap: 32px;
    color: white;
    @media only screen and (max-width: 600px){
        padding: 48px 24px;
    }
`
export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95.88%;
    height: 300.69px;
    margin: auto;
    border-bottom: solid rgba(245, 245, 245,0.8) .2px ;
    @media only screen and (max-width: 600px){
        flex-wrap: wrap;
        height: auto;
    }
`

export const FooterInfo = styled.div`
    width: 338px;
    height: 300.69px;
    display: block;
    justify-content: space-between;
    gap: 32px;
`
export const FooterInfoTop = styled.div`
    width: 294px;
    height: 101.48px;
    gap: 8px;
`
export const FooterLogo = styled.img`
    width: 158px;
    height: 32px;
`
export const FooterInfoTitle = styled.h2`
    font-size: 21px;
    line-height: 21.6px;
    font-weight: bold;
    font-family: "Florencesans Exp";
    font-weight: 400;
    margin: 20px 0px;
`
export const ContactInfo = styled.div`
    width: 338px;
    height: 112px;
`
export const ContactText = styled.h5`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1%;
    font-family: "Unitext Regular";
    margin: 8px 0px;
`
export const Company = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    .footer-company-title{
        font-family: 'Florencesans Exp';
        font-weight: 400;
        font-size: 18px;
        line-height: 21.6px;
        color: rgb(233, 229, 229);
    }
    .footer-company-links{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        a{
            font-size: 16px;
            font-weight: 700;
            font-family: "Unitext Regular";
            line-height: 19.2px;
            cursor: pointer;
            color: #fff;
        }
    }
`
export const Newsletter = styled.div`
    margin: 16px 0px;
    font-family: "Unitext Regular";
    font-weight: 700;
    input{
        letter-spacing: 1%;    
        width: 306px;
        height: 55px;
        padding: 17px 16px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 19.8px;
        border: solid var(---Neutrals-Neutrals200) 1px;
        
    }
    button{
        width: 100%;
        margin: 16px 0px;

    }
`

export const Copywright = styled.h2`
    font-family: 'Unitext Regular';
    font-weight: 400;
    font-size: 12px;
    line-height: 16.97px;
    letter-spacing: 1%;
    color: white;
    width:fit-content;
    margin: auto;
    margin-top: 25px;
`
// .footer{    

// }
// .footer-content{

// }
// .footer-info{

// }
// .footer-logo-info{

// }
// .footer-info-title{

// }
// .footer-contact-info{

// }
// .footer-info-text{

// }


// .footer-company-newsletter{
//     
//     div{
//         width: 306px;
//         height: 48px;
//         background: var(--Secondary-Secondary500);
//         padding: var(--Spacing-m);
//         border-radius: 8px;
//         color: black;
//         text-align: center;
//         font-size: 16px;
//         line-height: 19.2px;
//         cursor: pointer;
//     }
// }
// .footer-copyright{

// }

// @media only screen and (max-width: 600px){
//     .footer{
//        
//     }
//     .footer-content{

//     }
// }