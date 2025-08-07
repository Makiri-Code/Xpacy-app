import { useState, useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/footer.component";
import { IoClose } from "react-icons/io5";
import Button from "../../components/button/button";
import { ReactComponent as MobileNav } from "../../assets/nav.svg";
import { UserContext } from "../../contexts/userContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import isTokenExpired from "../../utils/token/handleUserToken";
import userImage from "../../assets/user-profile-img.svg";
import Cookies from "js-cookie";
import {
  LogoContainer,
  NavBtnsContainer,
  NavigationContainer,
  NavItem,
  NavItemLink,
  NavItemContainer,
  NavLogo,
  MobileNavContainer,
  NavTitle,
  MobileNavItemContainer,
  PageWrapper,
} from "./navigation.styles";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const NavProfile = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    border: 1px solid #c7d9e5;
  }
  &:hover .drop-down {
    opacity: 1;
    visibility: visible;
  }
  &:hover svg {
    transform: rotate(180deg);
  }
  & .user-profile-img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #333;
  }
  & p {
    margin: 0;
  }
`;
const NavProfileDropDown = styled.div`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  top: 103%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.2);
  & div {
    display: flex;
    gap: 8px;
    margin: 8px 0;
    padding: 10px 14px;
    cursor: pointer;
    &:hover {
      background-color: rgba(134, 135, 144, 0.2);
    }
    & > p {
      font-weight: 400;
      margin: 0;
    }
  }
`;
export default function Navigation() {
  const navigate = useNavigate();
  const { userProfile, setUserToken, userToken } = useContext(UserContext);
  const [showNav, setShowNav] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  //   Log out user
  const handleLogOut = () => {
    setUserToken(Cookies.remove("gt-jwt-br"));
    if (isTokenExpired(userToken)) {
      navigate("/auth/log-in");
    }
  };
  return (
    <>
      <NavigationContainer>
        <LogoComponent />
        {isMobile ? (
          <MobileNavigation onShowNav={setShowNav} showNav={showNav}>
            <MobileNavList onShowNav={setShowNav} loggedInUser={userProfile} />
          </MobileNavigation>
        ) : (
          <DesktopNavigation
            onLogOut={handleLogOut}
            onNavigate={navigate}
            userProfile={userProfile}
          >
            <DesktopNavList />
          </DesktopNavigation>
        )}
      </NavigationContainer>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </>
  );
}

const DesktopNavList = () => {
  return (
    <NavItemContainer>
      <NavLink
        to="/"
        name="home"
        className={({ isActive }) =>
          isActive ? " active-item" : "pending-item"
        }
      >
        Home
      </NavLink>
      <div className="dropdown-box">
        <span>Explore Properties</span>
        <IoMdArrowDropdown className="arrow-head" />
        <div className="dropdown-content">
          <NavItemLink to="/buy" name="buy">
            Buy
          </NavItemLink>
          <NavItemLink to="/rent" name="rent">
            Rent
          </NavItemLink>
          <NavItemLink to="/shortlet" name="shortlet">
            Shortlet
          </NavItemLink>
        </div>
      </div>
      <NavLink
        to="/admin"
        name="management"
        className={({ isActive }) =>
          isActive ? " active-item" : "pending-item"
        }
      >
        Management
      </NavLink>

      <NavLink
        to="/blog"
        name="blog"
        className={({ isActive }) =>
          isActive ? " active-item" : "pending-item"
        }
      >
        Blog
      </NavLink>

      <NavLink
        to="/contact"
        name="contact"
        className={({ isActive }) =>
          isActive ? " active-item" : "pending-item"
        }
      >
        Contact
      </NavLink>
    </NavItemContainer>
  );
};

const DesktopNavigation = ({ userProfile, children, onNavigate, onLogOut }) => {
  return (
    <>
      <NavItemContainer>{children}</NavItemContainer>
      {userProfile ? (
        <NavProfile>
          <div
            className="user-profile-img"
            style={{
              backgroundImage: userProfile.display_picture
                ? `url(https://app.xpacy.com/src/upload/display_img/${userProfile.display_picture})`
                : `url(${userImage})`,
              backgroundSize: "cover",
            }}
          />
          <p>{userProfile?.firstname}</p>
          <IoMdArrowDropdown />
          <NavProfileDropDown className="drop-down">
            <div onClick={() => onNavigate("dashboard/user")}>
              <p>
                <RxDashboard /> Dashboard
              </p>
            </div>
            <div onClick={onLogOut}>
              <p>
                <MdOutlineLogout /> Log Out
              </p>
            </div>
          </NavProfileDropDown>
        </NavProfile>
      ) : (
        <NavBtnsContainer>
          <Button
            buttonType={{ primaryBtn: false }}
            buttonPadding={"16px"}
            buttonHeight={"36px"}
            onClick={() => onNavigate("auth/log-in")}
          >
            Log In
          </Button>
          <Button
            buttonType={{ primaryBtn: true }}
            buttonPadding={"16px"}
            buttonHeight={"36px"}
            onClick={() => onNavigate("auth/sign-up")}
          >
            Sign Up
          </Button>
        </NavBtnsContainer>
      )}
    </>
  );
};

const MobileNavList = ({ loggedInUser, onShowNav }) => {
  return (
    <MobileNavItemContainer>
      <li>
        <NavLink to="/" onClick={() => onShowNav(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/buy" onClick={() => onShowNav(false)}>
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink to="/rent" onClick={() => onShowNav(false)}>
          Rent
        </NavLink>
      </li>
      <li>
        <NavLink to="/shortlet" onClick={() => onShowNav(false)}>
          Shortlet
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin" onClick={() => onShowNav(false)}>
          Management
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" onClick={() => onShowNav(false)}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={() => onShowNav(false)}>
          Contact
        </NavLink>
      </li>
      {loggedInUser ? (
        <>
          <li>
            <NavLink to="dashboard/user" onClick={() => onShowNav(false)}>
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="auth/log-in" onClick={() => onShowNav(false)}>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink to="auth/sign-up" onClick={() => onShowNav(false)}>
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </MobileNavItemContainer>
  );
};
const MobileNavigation = ({ onShowNav, showNav, children }) => {
  return (
    <>
      <MobileNavContainer showNav={showNav}>
        <NavTitle>Menu</NavTitle>
        {children}
      </MobileNavContainer>
      <>
        {showNav ? (
          <IoClose
            style={{ width: "24px", height: "24px" }}
            onClick={() => onShowNav(!showNav)}
          />
        ) : (
          <MobileNav
            style={{ width: "24px", height: "24px" }}
            onClick={() => onShowNav(!showNav)}
          />
        )}
      </>
    </>
  );
};

const LogoComponent = () => {
  const navigate = useNavigate();
  return (
    <LogoContainer onClick={() => navigate("/")}>
      <NavLogo />
    </LogoContainer>
  );
};
