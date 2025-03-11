import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PageContext } from "../../../../../contexts/page.context";
import sidebarLogo from "../../../../../assets/sidebarLogo.png";
import { IoCardOutline, IoClose, IoNotificationsOutline } from "react-icons/io5";
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
 } from "./sidebar_navigation.styles";
import { CiHeart } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";
import { MdOutlineContactSupport } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { RiHome2Line, RiUserSettingsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { RiGift2Fill } from "react-icons/ri";
import { LuExternalLink } from "react-icons/lu";
import { LuMessageCircleQuestion } from "react-icons/lu";

const OwnerSideBar = ({isMobile}) => {
    const { showDashboardSidebar, setShowDashboardSidebar } =
    useContext(PageContext);
    const [active, setActive] = useState(false)
    const classNames = {
        dashboard: "nav-link",
        notification: "nav-link",
        properties: "nav-link",
        services: "nav-link",
        payments: "nav-link",
        settings: "nav-link",
        support: "nav-link",
    };
    const [className, setClassName] = useState(classNames);
    const navigate = useNavigate();
    const sideBarContent = [
      {
        link: "Dashboard",
        icon: RxDashboard,
        to: "/dashboard/owner",
        name: "dashboard",
      },
      {
        link: "Notification",
        icon: IoNotificationsOutline,
        to: "/dashboard/owner/notification",
        name: "notification",
      },
      {
        link: "My Properties",
        icon: BiBuildings,
        to: "/dashboard/owner/properties",
        name: "properties",
      },
      {
        link: "Services Request",
        icon: LuCalendarCheck,
        to: "/dashboard/owner/services",
        name: "services",
      },
      {
        link: "Payments",
        icon: IoCardOutline,
        to: "/dashboard/owner/payments",
        name: "payments",
      },
      {
        link: "Profile Settings",
        icon: RiUserSettingsLine,
        to: "/dashboard/owner/profile-settings",
        name: "settings",
      },
      {
        link: "Help/Support",
        icon: MdOutlineContactSupport,
        to: "/dashboard/owner/support",
        name: "support",
      },
    ];

    return(
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
                        setActive(false);
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
                      setActive(false);
                      navigate("");
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
                onClick={() => navigate("/dashboard/owner/referral")}
                
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
                        setActive(false);
                        navigate(content.to);
                      }}
                    >
                      <content.icon
                        style={{ width: "24px", height: "24px", color: `${className[content.name] === "nav-link active" ? '#CDB385' : '#fff'}` }}
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
                      navigate("");
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
              {!isMobile && 
                (
                  <ReferralCard
                    onClick={() => {
                      setActive(true)
                      navigate("/dashboard/owner/referral")
                    }}
                    active={active}
                  >
                    <Elipse active={active}/>
                    <ReferralCardContent>
                      <div className="referral-header">
                        <RiGift2Fill style={{ width: "42px", height: "42px", color: `${active ? '#FFFFFF' : '#333'}`}} />
                        <LuExternalLink style={{ width: "42px", height: "42px", color: `${active ? '#FFFFFF' : '#333'}` }} />
                      </div>
                      <div className="referral-body">
                        <h5 style={{color: `${active ? '#FFFFFF' : '#333'}`}}>Refer Friends and Earn</h5>
                        <p style={{color: `${active ? '#FFFFFF' : '#333'}`}}>
                          Invite your friends to Xpacy and earn rewards for every
                          successful signup.{" "}
                        </p>
                      </div>
                    </ReferralCardContent>
                  </ReferralCard>
                )
              }
          </SideBarContent>
        </SideBarNavContainer>
      )}
      <Outlet />
    </DashboardContainer>
    )
};

export default OwnerSideBar; 

