import { useState, useEffect, useRef } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft";
import Toolbar from "./Toolbar";
import styles from "./Editor.css";
import styled from "styled-components";
import BlogPostOutput from "../blog-post-output/BlogPostOutput";
import Button from "../button/button";

const EditorContainer = styled.div`
  width: 100%;
  border: 1px solid green;
  max-height: 200px;
  overflow-y: auto;
  padding: 1rem;
`;
const EditorWrapper = styled.div`
  border: 1px solid #333;
  background: #fff;
  padding: 1rem;
  & .custom-btn {
    width: 100%;
    margin-top: 16px;
  }
`;
const DraftEditor = ({ content, setContent }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  const toggleInLineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };
  const saveContentAsHtml = () => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    setContent(html);
  };
  // FOR INLINE STYLES
  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
    HIGHLIGHT: {
      backgroundColor: "#F7A5F7",
    },
    UPPERCASE: {
      textTransform: "uppercase",
    },
    LOWERCASE: {
      textTransform: "lowercase",
    },
    CODEBLOCK: {
      fontFamily: '"fira-code", "monospace"',
      fontSize: "inherit",
      background: "#ffeff0",
      fontStyle: "italic",
      lineHeight: 1.5,
      padding: "0.3rem 0.5rem",
      borderRadius: " 0.2rem",
    },
    SUPERSCRIPT: {
      verticalAlign: "super",
      fontSize: "80%",
    },
    SUBSCRIPT: {
      verticalAlign: "sub",
      fontSize: "80%",
    },
  };
  const editor = useRef(null);

  //   useEffect(() => {
  //    focusEditor();
  //   }, []);

  //   const focusEditor = () => {
  //     editor.current.focus();
  //   };

  return (
    <EditorWrapper>
      <Toolbar editorState={editorState} setEditorState={setEditorState} />
      <EditorContainer>
        <Editor
          ref={editor}
          placeholder="Write blog content here"
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          customStyleMap={styleMap}
          //   blockStyleFn={myBlockStyleFn}
          onChange={(editorState) => {
            const contentState = editorState.getCurrentContent();
            // console.log(convertToRaw(contentState));
            setEditorState(editorState);
            saveContentAsHtml();
          }}
        />
      </EditorContainer>
      {/* <Button
        type={"button"}
        buttonType={{ primaryBtn: true }}
        onClick={saveContentAsHtml}
      >
        Save as draft
      </Button> */}
    </EditorWrapper>
  );
};

export default DraftEditor;
