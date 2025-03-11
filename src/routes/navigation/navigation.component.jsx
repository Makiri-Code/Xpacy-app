import { useState, useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/footer.component";
import { IoClose } from "react-icons/io5";
import Button from "../../components/button/button";
import { ReactComponent as MobileNav } from "../../assets/nav.svg";
import { UserContext } from "../../contexts/userContext";
import {
  LogoContainer,
  NavBtnsContainer,
  NavigationContainer,
  NavItem,
  NavItemContainer,
  NavLogo,
  MobileNavContainer,
  NavTitle,
  MobileNavItemContainer,
  PageWrapper,
} from "./navigation.styles";

const Navigation = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const [showNav, setShowNav] = useState(false);
  const classNames = {
    home: false,
    buy: false,
    rent: false,
    management: false,
    blog: false,
    contact: false,
  };
  const [classname, setClassname] = useState(classNames);

  const { home, buy, rent, management, blog, contact } = classname;

  const clickHandler = (e) => {
    const name = e.target.name;
    setClassname({
      ...classNames,
      [name]: true,
    });
    console.log({ home });
    setShowNav(false);
  };
 const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
      }
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize)
      };
      
  }, []);
  
  return (
    <>
      <NavigationContainer>
        <LogoContainer onClick={() => navigate("/")}>
          <NavLogo />
        </LogoContainer>
        { isMobile ? (
          <>
            <MobileNavContainer
                showNav= {showNav}
            >
              <NavTitle>Menu</NavTitle>
              <MobileNavItemContainer>
                <NavItem
                  classname={classname.home}
                  onClick={clickHandler}
                  to="/"
                  name="home"
                >
                  Home
                </NavItem>
                <NavItem
                  classname={classname.buy}
                  onClick={clickHandler}
                  to="/buy"
                  name="buy"
                >
                  Buy
                </NavItem>
                <NavItem
                  classname={classname.rent}
                  onClick={clickHandler}
                  to="/rent"
                  name="rent"
                >
                  Rent
                </NavItem>
                <NavItem
                  classname={classname.management}
                  onClick={clickHandler}
                  to="/admin"
                  name="management"
                >
                  Management
                </NavItem>
                <NavItem
                  classname={classname.blog}
                  onClick={clickHandler}
                  to="/blog"
                  name="blog"
                >
                  Blog
                </NavItem>
                <NavItem
                  classname={classname.contact}
                  onClick={clickHandler}
                  to="/contact"
                  name="contact"
                >
                  Contact
                </NavItem>
                {
                  loggedInUser ?
                  (
                    <>
                      <NavItem to="'dashboard/user'">
                        Dashboard
                      </NavItem>
                      
                    </>
                  ) : 
                  (
                    <>
                      <NavItem to="auth/log-in">
                        Log In
                      </NavItem>
                      <NavItem to="auth/sign-up">
                        Sign Up
                      </NavItem>
                    </>
                  )
                }
              </MobileNavItemContainer>
            </MobileNavContainer>
            <>
              {showNav ? (
                <IoClose
                  style={{ width: "24px", height: "24px" }}
                  onClick={() => setShowNav(!showNav)}
                />
              ) : (
                <MobileNav
                  style={{ width: "24px", height: "24px" }}
                  onClick={() => setShowNav(!showNav)}
                />
              )}
            </>
          </>
        ) : (
          <>
            <NavItemContainer>
              <NavItem
                classname={classname.home}
                onClick={clickHandler}
                to="/"
                name="home"
              >
                Home
              </NavItem>

              <NavItem
                classname={classname.buy}
                onClick={clickHandler}
                to="/buy"
                name="buy"
              >
                Buy
              </NavItem>

              <NavItem
                classname={classname.rent}
                onClick={clickHandler}
                to="/rent"
                name="rent"
              >
                Rent
              </NavItem>

              <NavItem
                classname={classname.management}
                onClick={clickHandler}
                to="/admin"
                name="management"
              >
                Management
              </NavItem>

              <NavItem
                classname={classname.blog}
                onClick={clickHandler}
                to="/blog"
                name="blog"
              >
                Blog
              </NavItem>

              <NavItem
                classname={classname.contact}
                onClick={clickHandler}
                to="/contact"
                name="contact"
              >
                Contact
              </NavItem>
            </NavItemContainer>
            {loggedInUser ? (
              <Button
                buttonType={{ primaryBtn: true }}
                buttonPadding={"16px"}
                buttonHeight={"36px"}
                onClick={() => navigate('dashboard/user')}
              >
                Dashboard
              </Button>
            ) : (
              <NavBtnsContainer>
                <Button
                  
                  buttonType={{ primaryBtn: false }}
                  buttonPadding={"16px"}
                  buttonHeight={"36px"}
                  onClick={() => navigate("auth/log-in")}
                >
                  Log In
                </Button>
                <Button
                  buttonType={{ primaryBtn: true }}
                  buttonPadding={"16px"}
                  buttonHeight={"36px"}
                  onClick={() => navigate("auth/sign-up")}
                >
                  Sign Up
                </Button>
              </NavBtnsContainer>
            )}
          </>
        )}
      </NavigationContainer>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Navigation;
