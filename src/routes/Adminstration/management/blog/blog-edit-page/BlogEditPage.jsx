import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  BackNav,
} from "../../properties/add-new-property/add-new-property.styles";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import xpacyLogo from "../../../../../assets/x-pacy-logo.svg";
import FormInput from "../../../../../components/form-input/formInput.component";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "../../../../../components/button/button";
import DraftEditor from "../../../../../components/editor/Editor";
import FileUploader from "../../../../../components/file-uploader/file-uploader";
import fetchServer from "../../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../../contexts/userContext";
import { Select, MenuItem } from "@mui/material";
const BlogEditContainer = styled.div`
  width: 100%;
  padding-bottom: 73px;
`;

const BlogEditForm = styled.form`
  margin: 0 auto;
  width: 80%;
  padding: 48px 7%;
  border: 1.5px solid #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const BlogImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 16px;
`;
const ImgContainer = styled.div`
  width: 250px;
  height: 150px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
const HeaderText = styled.div`
  color: var(--Base-Base-Black, #333);
  text-align: center;
  font-family: "Florencesans Exp";
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 2.1rem */
  margin: 24px;
`;
export const TwoFactorContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`;
const BlogEditPage = () => {
  const { userToken, server } = useContext(UserContext);
  const defaultFormFields = {
    title: "",
    category_id: null,
    isFeatured: false,
  };
  const [content, setContent] = useState("");

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [categories, setCategories] = useState([]);
  const { title, category_id, isFeatured } = formFields;

  const [imageFiles, setImageFiles] = useState([]);

  const navigate = useNavigate();
  const handleFileSelect = (acceptedFiles) => {
    setImageFiles((prevImg) => [...prevImg, ...acceptedFiles]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  useEffect(() => {
    setFormFields({
      ...formFields,
      images: imageFiles,
      content: content,
    });
  }, [content, imageFiles]);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        "blog/all-categories",
        server
      );
      console.log(response);
      setCategories(response.data);
    };
    fetchCategory();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formFields).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // Handle arrays separately (e.g. images)
        value.forEach((item) => {
          data.append(key, item); // Append each item in the array
        });
      } else if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });
    try {
      const response = await fetch(`${server}/blog/create-post`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: data,
      });
      const resp = await response.json();
      console.log(resp);
    } catch (error) {
      console.log("error creating blog post", error);
    }
  };

  return (
    <BlogEditContainer>
      <NavigationContainer>
        <LogoContainer>
          <BackNav
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoArrowBack style={{ width: "24px", height: "24px" }} />
            <span>Back</span>
          </BackNav>
          <img src={xpacyLogo} alt="x-pacy logo" />
        </LogoContainer>
      </NavigationContainer>
      <HeaderText>
        <h2>Create Blog Post</h2>
      </HeaderText>
      <BlogEditForm onSubmit={handleSubmit}>
        <div>
          <p>Select Blog Category</p>
          <Select
            required
            sx={{
              width: "100%",
              height: "2.8rem",
              borderRadius: "8px",
              fontFamily: "Unitext Regular",
              fontSize: "1rem",
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#DADADA",
              },
            }}
            value={category_id}
            onChange={(e) => {
              setFormFields({ ...formFields, category_id: e.target.value });
            }}
            displayEmpty
            aria-placeholder="Choose blog category"
          >
            {categories?.map((category) => (
              <MenuItem value={category.id} key={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <FormInput
          label={"Blog Title"}
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={handleChange}
          required
        />
        <BlogImages>
          <p>Blog Images</p>
          {/* <ImgContainer>
            <img
              src="https://plus.unsplash.com/premium_photo-1661775953246-410e3a33977c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""                 
            />
          </ImgContainer>
          <Button buttonType={{ primaryBtn: true }}>
            <FaCloudUploadAlt />
            Choose Image
          </Button> */}
          <FileUploader onFilesSelected={handleFileSelect} />
        </BlogImages>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <DraftEditor content={content} setContent={setContent} />
        <TwoFactorContainer>
          <p>Feature this post</p>
          <div class="form-switch">
            <input
              type="checkbox"
              class="form-check-input"
              name="featured"
              value={isFeatured}
              style={{ width: "40px", height: "25px" }}
              onChange={(e) =>
                setFormFields({ ...formFields, isFeatured: e.target.checked })
              }
            />
          </div>
        </TwoFactorContainer>
        <Button buttonType={{ primaryBtn: true }} type={"submit"}>
          Publish Post
        </Button>
      </BlogEditForm>
    </BlogEditContainer>
  );
};

export default BlogEditPage;
