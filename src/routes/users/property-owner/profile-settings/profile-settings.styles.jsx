import styled from "styled-components";

export const ProfileSettingsContainer = styled.div`
    width: 100%;
`
export const ProfileContainer = styled.main`
    width: 65%;
    margin: 24px auto;
    display: flex;
    /* padding: 0px 24px; */
    flex-direction: column;
    align-items: center;
    gap: 48px;
    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 0px 24px;
    }
`
export const ProfileInfo = styled.div`
    align-self: stretch;
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 48px;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`
export const ProfilePhotoTxt = styled.h3`
    margin: 0;
    color: var(--Base-Base-Black, #333);
    font-family: "Florencesans Exp";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
`
export const ProfileUploadSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    @media only screen and (max-width: 600px){
        flex-direction: column;
        align-items: start;
        gap: 32px;
    }
`
export const PhotoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const PhotoInfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    h5{
        color: var(--Base-Base-Black, #333);
        font-family: "Unitext Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        letter-spacing: 0.16px;
        margin-bottom: 6px;
    }
    p{
        color: var(--Neutrals-Neutrals900, #585858);
        font-family: "Unitext Regular";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 141.4%; /* 16.968px */
        letter-spacing: 0.12px;
    }
`
export const UploadControls = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`
export const UploadPictureLabel = styled.label`
    color: var(--Base-Base-White, #FFF);
    font-family: 'Unitext Regular';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
    cursor: pointer;
    display: flex;
    height: 48px;
    padding: var(--Spacing-ml, 24px);
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--Primary-Primary, #203645);
    &:hover{
        filter: brightness(70%);
    }
`
export const UploadInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
`

export const DeleteBtnContainer = styled.div`
    display: flex;
    width: 48px;
    height: 48px;
    padding: var(--Spacing-s, 8px);
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary100, #E3ECF2);
    cursor: pointer;
    &:hover{
        filter: brightness(70%);
    }
`
export const PersonalInfo = styled.div`
    align-self: stretch;
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 48px;
    border-radius: 8px;
    border: 1.5px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
`
export const PersonalInfoHeading = styled.h3`
    margin: 0;
    color: var(--Base-Base-Black, #333);
    font-family: "Florencesans Exp";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 21.6px */
`
export const PersonalFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`
export const NameInputs = styled.div`
    justify-content: space-between;
    align-self: stretch;
    display: flex;
    gap: 40px;
    @media only screen and (max-width: 600px){
        flex-direction: column;
        gap: 24px;
    }
`
export const SubmitControls = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-self: stretch;
    gap: 16px;
`
export const ResetButtonContainer = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: flex-end;
`
export const Divider = styled.div`
    align-self: stretch;
    border: 1px solid #DADADA;
`
export const TwoFactorContainer = styled.div`
    align-self: stretch;    
    display: flex;
    justify-content: space-between;
`
export const NotificationPrefrenceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`
export const NotificationPrefrenceHeading = styled.p`
    color: var(--Base-Base-Black, #333);
    font-family: "Unitext Regular";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    margin: 0;
`
export const NotificationsInputsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 259px;
    align-self: stretch;
    .radio-btns{
        display: flex;
        align-items: center;
        gap: var(--Spacing-s, 8px);
        label{
            color: var(--Base-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
            letter-spacing: 0.16px;
        }
    }
    @media only screen and (max-width: 600px){
        gap: unset;
        justify-content: space-between;
    }
`
export const NotificationsTypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    .radio-btns{
        display: flex;
        align-items: center;
        gap: var(--Spacing-s, 8px);
        label{
            color: var(--Base-Base-Black, #333);
            font-family: "Unitext Regular";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
            letter-spacing: 0.16px;
        }
    }
`
export const DeactivateModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid var(--Primary-Primary200, #C7D9E5);
    background: var(--Base-Base-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
`
export const DeactivateModalHeading = styled.div`
    display: flex;
    padding: var(--Spacing-ml, 24px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--Spacing-s, 8px);
    h5, p{
        color: var(--Error-Error, #F44336);
        font-family: "Unitext Regular";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 19.2px */
    }
    p{
        color: var(--Neutrals-Neutrals900, #585858);
        font-size: 14px;
        font-weight: 400;
    }
`
export const ModalCardFooter = styled.div`
    display: flex;
    height: 64px;
    padding: 0px var(--Spacing-ml, 24px) var(--Spacing-ml, 24px) var(--Spacing-ml, 24px);
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`
export const PaymentNotification = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 24px;
    button{
        align-self: flex-end;
    }
    &.pending{
      background-color: #FFF8BE;
    }
`