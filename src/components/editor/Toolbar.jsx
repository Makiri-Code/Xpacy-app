import { 
    FaBold,
    FaItalic,
    FaUnderline,
    FaSuperscript,
    FaSubscript,
    FaQuoteRight,
    FaListOl,
    FaListUl,

 } from "react-icons/fa";
import { RichUtils } from "draft-js";
import styles from "./Editor.css";
import styled from "styled-components";

const CustomIconButton = styled.button`
    margin-right: 8px;
    font-size: 1rem;
    padding: 10px;
    border: none;
    background: #fff;
    cursor: pointer;
`
const ToolbarGrid = styled.div`
      display: flex;
    flex-wrap: wrap;
      flex-basis: 1fr 1fr;
`
const Toolbar = ({editorState, setEditorState}) => {

    const tools = [
        {
            label: "bold",
            style: "BOLD",
            icon: <FaBold/>,
            method: "inline",
        },
        {
            label: "italic",
            style: "ITALIC",
            icon: <FaItalic/>,
            method: "inline",
        },
        {
            label: "underline",
            style: "UNDERLINE",
            icon: <FaUnderline/>,
            method: "inline",
        },
        {
            label: "superscript",
            style: "SUPERSCRIPT",
            icon: <FaSuperscript/>,
            method: "inline",
        },
        {
            label: "subscript",
            style: "SUBSCRIPT",
            icon: <FaSubscript/>,
            method: "inline",
        },
        {
            label: "Blockquote",
            style: "blockQuote",
            icon: <FaQuoteRight/>,
            method: "block",
        },
        {
            label: "Unordered-List",
            style: "unorder-list-item",
            icon: <FaListUl/>,
            method: "block",
        },
        {
            label: "Ordered-List",
            style: "ordered-list-item",
            icon: <FaListOl/>,
            method: "block",
        },
        {
            label: "H1",
            style: "header-one",
            method: "block"
        },
        {
            label: "H2",
            style: "header-two",
            method: "block"
        },
        {
            label: "H3",
            style: "header-three",
            method: "block"
        },
        {
            label: "H4",
            style: "header-four",
            method: "block"
        },
        {
            label: "H5",
            style: "header-five",
            method: "block"
        },
    ];
     const applyStyle = (e, style, method) => {
        e.preventDefault();
        method === "block"
        ? setEditorState(RichUtils.toggleBlockType(editorState, style))
        : setEditorState(RichUtils.toggleInlineStyle(editorState, style));
     };
    const isActive = (style, method) => {
        if (method === "block") {
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        return blockType === style;
        } else {
        const currentStyle = editorState.getCurrentInlineStyle();
        return currentStyle.has(style);
        }
    };
    return (
            <ToolbarGrid>
                {tools.map((item, idx) => (
                    <CustomIconButton
                        style={{
                            color: isActive(item.style, item.method)
                            ? "rgba(0, 0, 0, 1)"
                            : "rgba(0, 0, 0, 0.3)",
                        }}
                        key={`${item.label}-${idx}`}
                        title={item.label}
                        onClick={(e) => applyStyle(e, item.style, item.method)}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                    {item.icon || item.label}
                    </CustomIconButton>
                ))}
            </ToolbarGrid>
    )
}

export default Toolbar;