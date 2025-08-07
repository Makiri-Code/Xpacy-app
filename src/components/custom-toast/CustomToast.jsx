import styled from "styled-components";

   const ToastContainer = styled.div`
        display: flex;
        background-color: white;
        padding: 0px;
        border-radius: 0px 8px 8px 0px;
        color: #203645;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        max-width: 600px;
        font-family: "Unitext Regular";
    `;

    const Title = styled.p`
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0px;
        font-family: "Unitext Regular";
    `;

    const Description = styled.p`
        font-size: 1rem;
        color: #555;
        margin: 0px;
        font-style: italic;
        font-family: "Unitext Regular";
    `;
    const Content = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 8px;
    `
    const Block = styled.div`
        width: 10px;
        background-color: ${props => props.$error ? 'rgba(243, 68, 68, 0.93)' : 'rgba(68, 243, 68, 0.46)'};
    `

const CustomToast = ({title, message, type}) => {
    return (
        <ToastContainer>
            <Block $error={type === 'error'} />
            <Content>
                <Title>
                    {title} &nbsp;
                    {type === 'success' && <span>&#128512;</span>}
                    {type === 'error' && <span> &#128527;</span>}
                </Title>
                <Description>{message}</Description>
            </Content>
        </ToastContainer>
    );
};

export default CustomToast;