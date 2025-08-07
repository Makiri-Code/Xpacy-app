import { InsightCard, InsightCardBottom } from "./BlogPostCard.styles";
import { IoCloseSharp } from "react-icons/io5";
const BlogPostCard = ({
  title,
  category,
  date,
  time,
  imageSrc,
  isBlogSettings,
}) => {
  return (
    <InsightCard>
      <div className="insight-card-img">
        <img alt="insight1" src={imageSrc} />
      </div>
      <InsightCardBottom isBlogSettings={isBlogSettings}>
        <h5 className="insight-card-title mb-0">{title}</h5>
        <p className="insight-card-name mb-0">{category}</p>
        <span className="insight-card-bottom">
          {date} . {time} read
        </span>
      </InsightCardBottom>
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
    </InsightCard>
  );
};

export default BlogPostCard;
