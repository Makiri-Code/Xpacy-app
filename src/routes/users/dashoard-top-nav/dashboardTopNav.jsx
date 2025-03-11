import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { ReactComponent as LogOutIcon } from "../../../assets/log-out-icon.svg";
import userImage from "../../../assets/user-profile-img.svg";
import fetchServer from "../../../utils/serverutils/fetchServer";
import { PageContext } from "../../../contexts/page.context";
import {UserContext} from "../../../contexts/userContext";
import isTokenExpired from "../../../utils/token/handleUserToken";
import Cookies from "js-cookie";
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

 } from "./dashboard-top-nav.styles";

const DashboardTopNav = ({ dashboardRoute, isMobile, setShowDashboardSidebar, showDashboardSidebar, profileImage, notifications}) => {
    const {setSearchedPagination, setSearchedProperties} = useContext(PageContext);
    const {userToken, setUserToken, setLoggedInUser} = useContext(UserContext);
    const navigate = useNavigate();

  const dropDown = [
    {
      link: "Notification",
      icon: GoBell,
      to: "/dashboard/user/notification",
    },
    {
      link: "Profile Settings",
      icon: RiUserSettingsLine,
      to: "/dashboard/user/profile-settings",
    },
  ];
  const [showDropdown, setShowDropdown] = useState(false);

  const defaultFormField = {
    search: "",
  };

  const [formfield, setFormField] = useState(defaultFormField);
  const { search } = formfield;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({
      ...formfield,
      [name]: value,
    });
  };

  const handleKeyPress = async (e) => {
    if(e.key === 'Enter'){
        const response = await fetchServer('GET', {}, '', `property/fetch-properties?search=${search}`, 'https://app.xpacy.com');
        setSearchedProperties(response.properties);;
        setSearchedPagination(response.pagination);
        console.log(response);
        navigate('/search');
    }
  };
  // Log out
  const logOut = () => {
    setUserToken(Cookies.remove('gt-jwt-br'));
    setLoggedInUser(null);
    if (isTokenExpired(userToken)) {
      navigate('/auth/log-in');
    } else {
      console.log('Welcome back! Token is valid.');
    }
  }
  // Log-out user
  return (
    <>
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
                <DashboardSearchContainer>
                  <DashboardSearch
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search properties eg type, location"
                    value={search}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                  />
                  <SearchIcon/>
                </DashboardSearchContainer>
                <DashboardNavBtn to={'/admin/book-services'}>Book a service</DashboardNavBtn>
              </>
            )
          }
          <NotificationProfileContainer>
            <NotificationIcon>
              <GoBell className="bell-icon" onClick={() => navigate('/dashboard/user/notification')} />
              {notifications && <span>{notifications.filter((item) => item.notification_status === false).length}</span>}
            </NotificationIcon>
            <DashboardImgContainer
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <ProfileImg
                src={profileImage}
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
                <DropdownLink className="log-out" onClick={logOut}>
                  {" "}
                  <LogOutIcon style={{width: '20px', height: '20px'}}  /> Log out{" "}
                </DropdownLink>
              </DashboardDropdown>
            </DashboardImgContainer>
          </NotificationProfileContainer>
        </DashboardNavItems>
      </DashboardTopNavContainer>

    </>
  );
};

export default DashboardTopNav;
