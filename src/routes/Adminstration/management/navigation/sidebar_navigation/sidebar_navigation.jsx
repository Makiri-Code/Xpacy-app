import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PageContext } from "../../../../../contexts/page.context";
import sidebarLogo from "../../../../../assets/sidebarLogo.png";
import {
  IoCardOutline,
  IoClose,
  IoNotificationsOutline,
} from "react-icons/io5";
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
  OutletMargin,
} from "../../../../../components/side-bar-nav/side-bar.styles";
import { CiHeart } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { ReactComponent as PropertiesIcon } from "../../../../../assets/properties.-icon.svg";
import { ReactComponent as UsersIcon } from "../../../../../assets/users-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../../../../../assets/analytics.svg";
import { PiGearSix } from "react-icons/pi";
import { RiHome2Line, RiUserSettingsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { RiGift2Fill } from "react-icons/ri";
import { LuExternalLink } from "react-icons/lu";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { TbCalendarCheck } from "react-icons/tb";
import { FaBlog } from "react-icons/fa";
const AdminSideBar = ({ isMobile }) => {
  const { showDashboardSidebar, setShowDashboardSidebar } =
    useContext(PageContext);
  const classNames = {
    dashboard: "nav-link",
    notification: "nav-link",
    properties: "nav-link",
    services: "nav-link",
    users: "nav-link",
    payments: "nav-link",
    settings: "nav-link",
    analytics: "nav-link",
    faqs: "nav-link",
    blog: "nav-link",
    bookings: "nav-link",
  };
  const [className, setClassName] = useState(classNames);
  const navigate = useNavigate();
  const sideBarContent = [
    {
      link: "Dashboard",
      icon: RxDashboard,
      to: "/dashboard/admin",
      name: "dashboard",
    },
    {
      link: "Notification",
      icon: IoNotificationsOutline,
      to: "/dashboard/admin/notification",
      name: "notification",
    },
    {
      link: "Properties",
      icon: BiBuildings,
      to: "/dashboard/admin/properties",
      name: "properties",
    },
    {
      link: "Bookings",
      icon: TbCalendarCheck,
      to: "/dashboard/admin/bookings",
      name: "bookings",
    },
    {
      link: "Services",
      icon: RiUserSettingsLine,
      to: "/dashboard/admin/services",
      name: "services",
    },
    {
      link: "Users",
      icon: UsersIcon,
      to: "/dashboard/admin/users",
      name: "users",
    },
    {
      link: "Payments",
      icon: IoCardOutline,
      to: "/dashboard/admin/payments",
      name: "payments",
    },
    {
      link: "Reports & Analytics",
      icon: AnalyticsIcon,
      to: "",
      name: "analytics",
    },
    {
      link: "Blog Settings",
      icon: FaBlog,
      to: "blog-settings",
      name: "blog",
    },
    {
      link: "Settings",
      icon: PiGearSix,
      to: "/dashboard/admin/settings",
      name: "settings",
    },
    {
      link: "FAQs",
      icon: LuMessageCircleQuestion,
      to: "/dashboard/admin/faq",
      name: "faqs",
    },
  ];

  return (
    <DashboardContainer>
      {isMobile ? (
        <MobileSidebarNav className={showDashboardSidebar && "hide-dropdown"}>
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
                        style={{
                          width: "24px",
                          height: "24px",
                          color: `${
                            className[content.name] === "nav-link active"
                              ? "#CDB385"
                              : "#fff"
                          }`,
                        }}
                      />{" "}
                      <NavLinkItem>{content.link}</NavLinkItem>{" "}
                    </div>
                  );
                })}
                {/* {isMobile && (
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
                )} */}
              </NavLinks>
            </NavLinkContainer>
          </SideBarContent>
        </SideBarNavContainer>
      )}
      <OutletMargin>
        <Outlet />
      </OutletMargin>
    </DashboardContainer>
  );
};

export default AdminSideBar;
