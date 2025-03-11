import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardTopNav from "../dashoard-top-nav/dashboardTopNav";
import SortBy from "../../../components/sort-by/sortBy";
import { MdFilterList } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { ReactComponent as Calender } from "../../../assets/reschedule.svg";
import { ReactComponent as Cancel } from "../../../assets/cancel.svg";
import { ReactComponent as View } from "../../../assets/menu.svg";
import { ReactComponent as Settings } from "../../../assets/profile-settings.svg";
import { LuCalendarCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "../../../components/button/button";
import "./book-services.styles.css";
import { SlOptionsVertical } from "react-icons/sl";
import ModalComponent from "../../../components/modal/modal";
import { UserDashboardTopNav, UserDashboardContainer } from "../../../components/user-dashboard/user-dashboard.styles";
import EmptySavedProperty from "../../../components/empty-saved-property/emptySavedProperty";
import styled from "styled-components";

const BookServices = ({
  profileImage,
  isMobile,
  showDashboardSidebar,
  setShowDashboardSidebar,
  bookedServices,
  notifications,
}) => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCancelRequest, setShowCancelRequest] = useState(false);
  const selectOptions = [
    {
      option: "Default",
    },
    {
      option: "Last 7 days",
    },
    {
      option: "Last 30 days",
    },
    {
      option: "Last 90 days",
    },
  ];

  const handleCancelClick = () => {
    setShowCancelRequest(!showCancelRequest);
    setShowMenu(!showMenu);
  };

  const convertDateToTimeAndDays = (dateStr) => {
    const givenDate = new Date(dateStr);
    const currentDate = new Date(); // User's current date

    // Convert both dates to UTC (ignoring time differences)
    const givenUTC = new Date(
      givenDate.getUTCFullYear(),
      givenDate.getUTCMonth(),
      givenDate.getUTCDate()
    );
    const currentUTC = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate()
    );

    // Calculate the difference in milliseconds and convert to days
    const differenceInDays = Math.round(
      (currentUTC - givenUTC) / (1000 * 60 * 60 * 24)
    );
    if (differenceInDays > 0) {
      return `${differenceInDays} days ago`;
    } else {
      const timeDifferenceMs = currentDate - givenDate;

      // Convert milliseconds to hours, minutes, and seconds
      const differenceInHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
      const differenceInMinutes = Math.floor(
        (timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
      );
      if (differenceInHours > 0) {
        return `${differenceInHours} hours ago`;
      } else {
        return `${differenceInMinutes} mins ago`;
      }
    }
  };
  const EmptySavedPropertyContainer = styled.div`
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
  `
  return (
    <UserDashboardContainer>
      <DashboardTopNav
        profileImage={profileImage}
        dashboardRoute={"Booked Services"}
        isMobile={isMobile}
        showDashboardSidebar={showDashboardSidebar}
        setShowDashboardSidebar={setShowDashboardSidebar}
        notifications={notifications}
      />
      {isMobile && (
        <UserDashboardTopNav>
          <h5>Booked Services</h5>
          <SlOptionsVertical
            style={{ width: "24px", height: "24px" }}
            onClick={() => {}}
          />
        </UserDashboardTopNav>
      )}
      {bookedServices.length > 0 ? (
        <main id="book-services">
          <div className="content-container">
            <header>
              <h1>Service Overview</h1>
              <div className="services-filter">
                <SortBy selectOptions={selectOptions} isMobile={isMobile} />
                <div
                  className="services-filter-content"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <MdFilterList style={{ width: "24px", height: "24px" }} />
                </div>
                {showFilter && (
                  <div className="filter-dropdown">
                    <p>Filter by:</p>
                    <form>
                      <div className="filter-service">
                        <label htmlFor="service">Service</label>
                        <select name="service" id="">
                          <option value="">Select service</option>
                          <option value="cleaning">Cleaning</option>
                          <option value="waste_management">
                            Waste Management
                          </option>
                          <option value="electrical">Electrical</option>
                        </select>
                      </div>
                      <div className="filter-service">
                        <label htmlFor="service-status">Service Status</label>
                        <select name="service_status" id="">
                          <option value="">Select service status</option>
                          <option value="upcoming">Upcoming</option>
                          <option value="in_progress">In progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </div>
                      <div className="divider" />
                      <div className="btn-container">
                        <input type="button" value="Clear" />
                        <input type="submit" value="Filter" />
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </header>
            {isMobile ? (
              <table>
                <tbody>
                  {bookedServices.map((service, index) => {
                    const {
                      service_type,
                      address,
                      scheduled_date,
                      service_status,
                    } = service;
                    return (
                      <tr key={index}>
                        <tr className="mobile-table-row">
                          <td>{scheduled_date}</td>
                          <td>
                            <SlOptions
                              style={{
                                width: "20px",
                                height: "20px",
                                cursor: "pointer",
                              }}
                              onClick={() => setShowMenu(!showMenu)}
                            />
                          </td>
                        </tr>
                        <tr className="mobile-table-row">
                          <td>{service_type}</td>
                          <td>
                            <span className={service_status.toLowerCase()}>
                              {service_status}
                            </span>
                          </td>
                        </tr>
                        <tr className="mobile-table-row">
                          <td>Property</td>
                          <td>{address}</td>
                        </tr>
                      </tr>
                    );
                  })}
                  {showMenu && (
                    <div className="service-request-menu">
                      <ul>
                        <li>
                          <Calender /> Reschdule
                        </li>
                        <li onClick={handleCancelClick}>
                          <Cancel /> Cancel request
                        </li>
                        <li>
                          <View /> View details
                        </li>
                        <li>
                          <Settings /> Submit new request
                        </li>
                      </ul>
                    </div>
                  )}
                  {showCancelRequest && (
                    <ModalComponent>
                      <div className="cancel-request-modal">
                        <h2>
                          Are you sure you want to cancel your service request?
                        </h2>
                        <div className="modal-btn-container">
                          <Button
                            buttonType={{ primaryBtn: false }}
                            background={"#FBC0BC"}
                            textColor={"#333333"}
                            buttonHeight={"28px"}
                            buttonPadding={"6px 16px"}
                          >
                            Yes, cancel
                          </Button>
                          <Button
                            buttonType={{ primaryBtn: true }}
                            buttonHeight={"28px"}
                            buttonPadding={"6px 16px"}
                            onClick={() =>
                              setShowCancelRequest(!showCancelRequest)
                            }
                          >
                            No, undo
                          </Button>
                        </div>
                      </div>
                    </ModalComponent>
                  )}
                </tbody>
              </table>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Service Type</th>
                    <th>Property Address</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {bookedServices.map((service, index) => {
                    const {
                      service_type,
                      address,
                      scheduled_date,
                      service_status,
                    } = service;
                    return (
                      <tr>
                        <td>{service_type}</td>
                        <td>{address}</td>
                        <td>{scheduled_date}</td>
                        <td>
                          <span className={service_status.toLowerCase()}>
                            {service_status}
                          </span>
                        </td>
                        <td>
                          <SlOptions
                            style={{
                              width: "20px",
                              height: "20px",
                              cursor: "pointer",
                            }}
                            onClick={() => setShowMenu(!showMenu)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                  {showMenu && (
                    <div className="service-request-menu">
                      <ul>
                        <li>
                          <Calender /> Reschdule
                        </li>
                        <li onClick={handleCancelClick}>
                          <Cancel /> Cancel request
                        </li>
                        <li>
                          <View /> View details
                        </li>
                        <li>
                          <Settings /> Submit new request
                        </li>
                      </ul>
                    </div>
                  )}
                  {showCancelRequest && (
                    <ModalComponent>
                      <div className="cancel-request-modal">
                        <h2>
                          Are you sure you want to cancel your service request?
                        </h2>
                        <div className="modal-btn-container">
                          <Button
                            buttonType={{ primaryBtn: false }}
                            background={"#FBC0BC"}
                            textColor={"#333333"}
                            buttonHeight={"28px"}
                            buttonPadding={"6px 16px"}
                          >
                            Yes, cancel
                          </Button>
                          <Button
                            buttonType={{ primaryBtn: true }}
                            buttonHeight={"28px"}
                            buttonPadding={"6px 16px"}
                            onClick={() =>
                              setShowCancelRequest(!showCancelRequest)
                            }
                          >
                            No, undo
                          </Button>
                        </div>
                      </div>
                    </ModalComponent>
                  )}
                </tbody>
              </table>
            )}
          </div>
          {!isMobile && (
            <div className="sidebar-container">
              <section className="notification-section">
                <h3>Recent Notification</h3>
                {notifications
                  .filter(
                    (filterItem) => filterItem.notification_type === "Services"
                  )
                  .map((item) => {
                    const { notification_type, date, message } = item;
                    return (
                      <div className="notification-card">
                        <div className="calender">
                          <LuCalendarCheck
                            style={{ width: "24px", height: "24px" }}
                          />
                          <span>{convertDateToTimeAndDays(date)}</span>
                        </div>
                        <p>{notification_type}</p>
                        <span>{message}</span>
                      </div>
                    );
                  })}
                <Link to={"/dashboard/user/notification"}>View all</Link>
              </section>
              <section className="cta">
                <div className="cta-content">
                  <p>Want to request a service?</p>
                  <Button
                    buttonType={{ primaryBtn: true }}
                    onClick={() => navigate("/admin/book-services")}
                  >
                    Book Now
                  </Button>
                </div>
              </section>
            </div>
          )}
        </main>
      ) : (
            <EmptySavedPropertyContainer>
                <EmptySavedProperty
                message={"Oops!... You have no booked services yet."}
                btnTxt={"Explore New Properties"}
                link={"/buy"}
                />
            </EmptySavedPropertyContainer>
      )}
    </UserDashboardContainer>
  );
};

export default BookServices;
