import BlogPage from "../../../../blog/blog-page/BlogPage";
import {
  ManagementDashboardContainer,
  ManagementDashboardContent,
} from "../../dashboard/management_dashboard.styles";
import TopNav from "../../navigation/topnav/top-nav";
import Button from "../../../../../components/button/button";
import styled from "styled-components";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const CreateBlogBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;
const BlogManagement = ({ isMobile, profileImage }) => {
  const navigate = useNavigate();
  return (
    <ManagementDashboardContainer>
      <TopNav
        dashboardRoute={"Blog Settings"}
        isMobile={isMobile}
        profileImage={profileImage}
      />
      <ManagementDashboardContent style={{ gap: "unset" }}>
        <CreateBlogBtn>
          <Button
            buttonType={{ primaryBtn: true }}
            onClick={() => navigate("/dashboard/admin/blog")}
          >
            Create New Post
            <MdArrowOutward />
          </Button>
        </CreateBlogBtn>
        <BlogPage
          isBlogSettings={true}
          editBlogRoute={"/dashboard/admin/edit-blog/2"}
        />
      </ManagementDashboardContent>
    </ManagementDashboardContainer>
  );
};

export default BlogManagement;
