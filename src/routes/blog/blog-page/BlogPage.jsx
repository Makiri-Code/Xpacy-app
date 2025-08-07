import { Link, useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import {
  BlogFeaturedSection,
  InsightCardContainer,
  Heading,
} from "./BlogPage.stylex";
import { GoArrowUpRight } from "react-icons/go";
import BlogPostCard from "../blog-post-card/BlogPostCard";
import { IoCloseSharp } from "react-icons/io5";

const BlogPage = ({ isBlogSettings, editBlogRoute }) => {
  const navigate = useNavigate();
  const blogPosts = [
    {
      title:
        "Top Tips for First-Time Property Owners: Maximize Your Investment with Ease",
      category: "Property Investment",
      date: "2nd Oct, 2024",
      time: "11 min",
      imgSrc:
        "https://images.unsplash.com/photo-1729855637715-99192904aac5?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:
        "Understanding Facility Management: How to Keep Your Property in Peak Condition",
      category: "Facility Management",
      date: "2nd Nov, 2024",
      time: "6 min",
      imgSrc:
        "https://images.unsplash.com/photo-1694521787193-9293daeddbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmFjaWxpdHklMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    },
    {
      title:
        "Top Tips for First-Time Property Owners: Maximize Your Investment with Ease",
      category: "Property Investment",
      date: "1st Dec, 2024",
      time: "8 min",
      imgSrc:
        "https://images.unsplash.com/photo-1687075430355-ed8df51c1670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwaW52ZXN0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div
      className={
        isBlogSettings ? "blog-settings-container" : "contacts-container"
      }
    >
      {!isBlogSettings && (
        <div className="header d-flex flex-column align-items-start">
          <div className="header-navigation">
            <Link to={"/"} className="header-nav-text">
              Home
            </Link>{" "}
            <span>
              <IoChevronForward />
            </span>{" "}
            <span className="header-nav-text" style={{ color: "#007BFF" }}>
              Blog
            </span>
          </div>
          <div className="header-text-container">
            <h1 className="header-heading">Xpacy Insights</h1>
          </div>
        </div>
      )}
      <BlogFeaturedSection isBlogSettings={isBlogSettings}>
        <h3 className="featured__heading">Featured</h3>
        <div className="featured-box">
          <div className="featured-box__content">
            <div className="featured-box__image-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1661775953246-410e3a33977c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="featured__content">
              <div
                className="featured__content-title"
                onClick={() => navigate("post/2")}
              >
                <h5 className="featured__content-heading">
                  Maximizing Efficiency in Facility Management
                </h5>
                <GoArrowUpRight />
              </div>
              <p className="featured__content-txt">Facility Management</p>
              <p className="featured__content-txt grey mb-4">
                8th June, 2024. 10 min read
              </p>
              {isBlogSettings && (
                <>
                  <div className="card-footer-buttons">
                    <button onClick={() => {}}>View Details</button>
                    <div className="remove-btn" onClick={() => {}}>
                      <IoCloseSharp
                      //   style={{ width: iconWidth, height: iconHeight }}
                      />
                      <span>Remove</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="featured-box__content gap">
            <div className="featured-box__content-small mb-24">
              <div className="featured-box__image-1 mb-0 w-371">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <div className="featured__content small-content">
                <div className="featured__content-title">
                  <h5 className="featured__content-heading w-75">
                    Real Estate Trends For 2025
                  </h5>
                  <GoArrowUpRight className="featured-arrow" />
                </div>
                <div>
                  <p className="featured__content-txt">Real Estate</p>
                  <p className="featured__content-txt grey">
                    5th May, 2025. 10 min read
                  </p>
                </div>
              </div>
              {isBlogSettings && (
                <>
                  <div className="card-footer-buttons">
                    <button onClick={() => navigate(editBlogRoute)}>
                      View Details
                    </button>
                    <div className="remove-btn" onClick={() => {}}>
                      <IoCloseSharp
                      //   style={{ width: iconWidth, height: iconHeight }}
                      />
                      <span>Remove</span>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="featured-box__content-small">
              <div className="featured-box__image-1 mb-0 w-371">
                <img
                  src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbmV3YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <div className="featured__content small-content">
                <div className="featured__content-title">
                  <h5 className="featured__content-heading w-75">
                    Real Estate Trends For 2025
                  </h5>
                  <GoArrowUpRight className="featured-arrow" />
                </div>
                <div>
                  <p className="featured__content-txt">Sustainability</p>
                  <p className="featured__content-txt grey">
                    25th May, 2025. 5 min read
                  </p>
                </div>
              </div>
              {isBlogSettings && (
                <>
                  <div className="card-footer-buttons">
                    <button onClick={() => {}}>View Details</button>
                    <div className="remove-btn" onClick={() => {}}>
                      <IoCloseSharp
                      //   style={{ width: iconWidth, height: iconHeight }}
                      />
                      <span>Remove</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </BlogFeaturedSection>
      <Heading>All blog posts</Heading>
      <InsightCardContainer isBlogSettings={isBlogSettings}>
        {blogPosts.map(({ title, category, date, time, imgSrc }, index) => (
          <BlogPostCard
            imageSrc={imgSrc}
            title={title}
            category={category}
            date={date}
            time={time}
            key={index}
            isBlogSettings={isBlogSettings}
          />
        ))}
      </InsightCardContainer>
    </div>
  );
};

export default BlogPage;
