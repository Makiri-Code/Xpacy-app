import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { useParams } from "react-router-dom";
function HeaderNav() {
  const page = useParams();
  return (
    <div className="header-navigation">
      <Link to={"/"} className="header-nav-text">
        Home
      </Link>
      <span>
        <IoChevronForward />
      </span>
      <span className="header-nav-text" style={{ color: "#007BFF" }}>
        {"page"}
      </span>
    </div>
  );
}

export default HeaderNav;
