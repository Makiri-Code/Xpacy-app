import styled from "styled-components"

const CustomWrapper = styled.div`
    font-size: 16px;
    line-height: 120%;
    font-family: "Unitext Regular";
    p{
        margin-bottom: 0;
    }
    &:not(p){
        margin-bottom: 0;
    }
`
const BlogPostOutput = ({htmlOutput}) => {

    return (
        <>
            {htmlOutput && (
                <CustomWrapper
                    dangerouslySetInnerHTML={{ __html: htmlOutput }}
                />
            )}
        </>
    );
}

export default BlogPostOutput;