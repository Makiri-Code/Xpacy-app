import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { ReactComponent as LogOutIcon } from "../../../../../assets/log-out-icon.svg";
import userImage from "../../../../../assets/user-profile-img.svg"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { 
    DashboardTopNavContainer,
    DashboardTitle,
    DashboardNavItems,
    DashboardSearch,
    SearchIcon,
    DashboardNavBtn,
    DashboardSearchContainer,
    ProfileImg,
    DropdownLink,
    NotificationProfileContainer,
    NotificationIcon,
    DashboardImgContainer,
    DashboardDropdown,
  
   } from "./top-nav.styles";
import { PageContext } from "../../../../../contexts/page.context";
import { UserContext } from "../../../../../contexts/userContext";
const TopNav = ({dashboardRoute, isMobile, userProfile}) => {
        const {setSearchedPagination, setSearchedProperties, setShowDashboardSidebar, showDashboardSidebar, } = useContext(PageContext);
        const {notifications} = useContext(UserContext);
        const navigate = useNavigate();
        const [showDropdown, setShowDropdown] = useState(false);
        const dropDown = [
            {
              link: "Notification",
              icon: GoBell,
              to: "/dashboard/management/notification",
            },
            {
              link: "Settings",
              icon: RiUserSettingsLine,
              to: "/dashboard/management/settings",
            },
          ];
    return(
        <DashboardTopNavContainer>
            <DashboardTitle>
            {
                isMobile ? <HiOutlineMenuAlt4 style={{width: '24px', height: '24px'}} onClick={() => 
                {
                    setShowDashboardSidebar(!showDashboardSidebar) 
                } 
                }/> : <h2>{dashboardRoute}</h2>
            }
            </DashboardTitle>
            <DashboardNavItems>
            {
                !isMobile && (
                <>
                    
                    <DashboardNavBtn to={'/dashboard/admin/service-request-list'} className="service-request">Manage Service Request</DashboardNavBtn>
                    <DashboardNavBtn to={'/dashboard/admin/add-new-property'}>Add New Property</DashboardNavBtn>
                </>
                )
            }
            <NotificationProfileContainer>
                <NotificationIcon>
                    <GoBell className="bell-icon" onClick={() => navigate('')} />
                    {
                        notifications && (
                            <>
                                {notifications.length > 0 && <span>{notifications.filter((item) => item.notification_status === false).length}</span>}
                            </>
                        )
                    }
                </NotificationIcon>
                <DashboardImgContainer
                onClick={() => setShowDropdown(!showDropdown)}
                >
                    <ProfileImg
                        src={userImage}
                        // {!userProfile.display_picture ? userImage : userProfile.display_picture}
                        alt="profile picture"
                        style={{ width: "24px", height: "24px" }}
                    />
                    {showDropdown ? <RiArrowDropUpLine style={{ width: "24px", height: "24px" }} /> : <RiArrowDropDownLine style={{ width: "24px", height: "24px" }} />}
                    <DashboardDropdown
                        showDropdown = {showDropdown}
                    >
                        {dropDown.map((link) => {
                        return (
                            <DropdownLink key={link.link} to={link.to}>
                            {" "}
                            <link.icon style={{width: '20px', height: '20px'}} /> {link.link}{" "}
                            </DropdownLink>
                        );
                        })}
                        
                        <DropdownLink className="log-out">
                            {" "}
                            <LogOutIcon style={{width: '20px', height: '20px'}} /> Log out{" "}
                        </DropdownLink>
                    </DashboardDropdown>
                </DashboardImgContainer>
            </NotificationProfileContainer>
            </DashboardNavItems>
        </DashboardTopNavContainer>
    )
}

export default TopNav