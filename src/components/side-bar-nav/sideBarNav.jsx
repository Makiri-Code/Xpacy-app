import { useState, useEffect } from "react";
import { Outlet, Link, useNa, useNavigate } from "react-router-dom";
import sidebarLogo from "../../assets/sidebarLogo.png";
import { RiHome2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";
import { RiGift2Fill } from "react-icons/ri";
import { LuExternalLink } from "react-icons/lu";
import "./side-bar.styles.jsx";
import {
  SideBarNavContainer,
  DashboardContainer,
  NavLinks,
  NavLinkItem,
  ReferralCard,
  Elipse,
  ReferralCardContent,
  NavLinkContainer,
  SideBarContent,
  MobileSidebarNav,
  MobileSidebarLogoContainer,
} from "./side-bar.styles.jsx";

const SideBarNav = ({
  isMobile,
  showDashboardSidebar,
  setShowDashboardSidebar,
}) => {
  const navigate = useNavigate();
  const sideBarContent = [
    {
      link: "Go To Home Page",
      icon: RiHome2Line,
      to: "/",
      name: "homePage",
    },
    {
      link: "Dashboard",
      icon: RxDashboard,
      to: "/dashboard/user/",
      name: "dashboard",
    },
    {
      link: "Notification",
      icon: IoNotificationsOutline,
      to: "/dashboard/user/notification",
      name: "notification",
    },
    {
      link: "Saved Properties",
      icon: CiHeart,
      to: "/dashboard/user/saved-properties",
      name: "savedProperties",
    },
    {
      link: "Booked Services",
      icon: LuCalendarCheck,
      to: "/dashboard/user/book-services",
      name: "bookedServices",
    },
    {
      link: "Payments",
      icon: IoCardOutline,
      to: "/dashboard/user/payments",
      name: "payments",
    },
    {
      link: "Profile Settings",
      icon: RiUserSettingsLine,
      to: "/dashboard/user/profile-settings",
      name: "profile",
    },
    {
      link: "Help Support",
      icon: MdOutlineContactSupport,
      to: "/dashboard/user/support",
      name: "support",
    },
  ];
  const classNames = {
    homePage: "nav-link",
    dashboard: "nav-link",
    notification: "nav-link",
    savedProperties: "nav-link",
    bookedServices: "nav-link",
    payments: "nav-link",
    profile: "nav-link",
    support: "nav-link",
  };
  const [className, setClassName] = useState(classNames);
  return (
    <DashboardContainer>
      {isMobile ? (
        <MobileSidebarNav
        className= {showDashboardSidebar && 'hide-dropdown' }
        >
          <SideBarContent>
            <NavLinkContainer>
              <MobileSidebarLogoContainer>
                <img src={sidebarLogo} alt="X-pacy Logo" />
                {isMobile && (
                  <IoClose
                    style={{ width: "24px", height: "24px", color: "#fff" }}
                    onClick={() =>
                      setShowDashboardSidebar(!showDashboardSidebar)
                    }
                  />
                )}
              </MobileSidebarLogoContainer>
              <NavLinks>
                {sideBarContent.map((content) => {
                  return (
                    <div
                      className="nav-link"
                      key={content.link}
                      onClick={() => {
                        setShowDashboardSidebar(!showDashboardSidebar);
                        navigate(content.to);
                      }}
                    >
                      <content.icon
                        style={{ width: "24px", height: "24px", color: "#fff" }}
                      />{" "}
                      <NavLinkItem>{content.link}</NavLinkItem>{" "}
                    </div>
                  );
                })}
                {isMobile && (
                  <div
                    className="nav-link"
                    onClick={() => {
                      setShowDashboardSidebar(!showDashboardSidebar);
                      navigate("/dashboard/user/referral");
                    }}
                  >
                    <RiGift2Fill
                      style={{ width: "24px", height: "24px", color: "#fff" }}
                    />{" "}
                    <NavLinkItem>Referral</NavLinkItem>
                  </div>
                )}
              </NavLinks>
            </NavLinkContainer>
            {!isMobile && (
              <ReferralCard
                onClick={() => navigate("/dashboard/user/referral")}
              >
                <Elipse/>
                <ReferralCardContent>
                  <div className="referral-header">
                    <RiGift2Fill style={{ width: "42px", height: "42px" }} />
                    <LuExternalLink style={{ width: "42px", height: "42px" }} />
                  </div>
                  <div className="referral-body">
                    <h5>Refer Friends and Earn</h5>
                    <p>
                      Invite your friends to Xpacy and earn rewards for every
                      successful signup.{" "}
                    </p>
                  </div>
                </ReferralCardContent>
              </ReferralCard>
            )}
          </SideBarContent>
        </MobileSidebarNav>
      ) : (
        <SideBarNavContainer>
          <SideBarContent>
            <NavLinkContainer>
              <div className="side-bar-logo-container">
                <img src={sidebarLogo} alt="X-pacy Logo" />
              </div>
              <NavLinks>
                {sideBarContent.map((content) => {
                  return (
                    <div
                      className={className[content.name]}
                      key={content.link}
                      name={content.name}
                      onClick={() => {
                        setClassName({
                          ...classNames,
                          [content.name]: "nav-link active",
                        });
                        navigate(content.to);
                      }}
                    >
                      <content.icon
                        style={{ width: "24px", height: "24px", color: "#fff" }}
                      />{" "}
                      <NavLinkItem>{content.link}</NavLinkItem>{" "}
                    </div>
                  );
                })}
                {isMobile && (
                  <div
                    className="nav-link"
                    onClick={() => {
                      setShowDashboardSidebar(false);
                      navigate("/dashboard/user/referral");
                    }}
                  >
                    <RiGift2Fill
                      style={{ width: "24px", height: "24px", color: "#fff" }}
                    />
                    <NavLinkItem>Referral</NavLinkItem>
                  </div>
                )}
              </NavLinks>
            </NavLinkContainer>
            {!isMobile && (
              <ReferralCard
                onClick={() => navigate("/dashboard/user/referral")}
              >
                <Elipse />
                <ReferralCardContent>
                  <div className="referral-header">
                    <RiGift2Fill style={{ width: "42px", height: "42px" }} />
                    <LuExternalLink style={{ width: "42px", height: "42px" }} />
                  </div>
                  <div className="referral-body">
                    <h5>Refer Friends and Earn</h5>
                    <p>
                      Invite your friends to Xpacy and earn rewards for every
                      successful signup.{" "}
                    </p>
                  </div>
                </ReferralCardContent>
              </ReferralCard>
            )}
          </SideBarContent>
        </SideBarNavContainer>
      )}
      <Outlet />
    </DashboardContainer>
  );
};

export default SideBarNav;
