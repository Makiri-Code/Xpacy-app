import { useRef, useState, useContext } from 'react';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import { MdFilterList } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from '../../../components/pagination/pagination';
import SortBy from '../../../components/sort-by/sortBy';
import DashboardFilter from '../../../components/dashboard-filter/dasboardFilter';
import { SlOptionsVertical } from 'react-icons/sl';
import { IoCardOutline, IoCheckmarkDoneSharp } from "react-icons/io5";
import { UserDashboardContainer, UserDashboardTopNav } from '../../../components/user-dashboard/user-dashboard.styles';
import './notification.styles.css';
import styled from 'styled-components';
import { CiHeart } from 'react-icons/ci';
import { PulseLoader } from 'react-spinners';
import EmptySavedProperty from '../../../components/empty-saved-property/emptySavedProperty';
import fetchServer from '../../../utils/serverutils/fetchServer';
import { UserContext } from '../../../contexts/userContext';

const Notification = ({profileImage, isMobile, showDashboardSidebar, setShowDashboardSidebar, notifications}) => {
    const [showDropdown, setShowDropDown] = useState(false);
    const [mark, setMark] = useState('false');
    const inputRef = useRef(null)
    const {userToken} = useContext(UserContext);
    
    const selectOptions = [
        {
            option: 'Default'
        },
        {
            option: 'Last 7 days'
        },
        {
            option: 'Last 30 days'
        },
        {
            option: 'Last 90 days'
        },
    ];

    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
    const convertDateToTimeAndDays = (dateStr) => {
        const givenDate = new Date(dateStr);
        const currentDate = new Date(); // User's current date

            // Convert both dates to UTC (ignoring time differences)
        const givenUTC = new Date(givenDate.getUTCFullYear(), givenDate.getUTCMonth(), givenDate.getUTCDate());
        const currentUTC = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate());

            // Calculate the difference in milliseconds and convert to days
        const differenceInDays = Math.round((currentUTC - givenUTC) / (1000 * 60 * 60 * 24));
        if(differenceInDays > 0){
            return `${differenceInDays} days ago`
        } else {
            const timeDifferenceMs = currentDate - givenDate;

            // Convert milliseconds to hours, minutes, and seconds
            const differenceInHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
            const differenceInMinutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
            if(differenceInHours > 0){
                return `${differenceInHours} hours ago`
            } else {
                return `${differenceInMinutes} mins ago`
            }
        }
    }
    const EmptyNotificationContainer = styled.div`
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    `
    const handleMark = async (id) => {
        try {
            const resp = await fetchServer(
              "PUT",
              {},
              userToken,
              `notification/mark-as-read/${id}`,
              "https://app.xpacy.com"
            );
          } catch (error) {
            console.error("Error:", error);
          }       
    }
    
    return (
        <>
            {
                notifications ? 
                (
                    <div className='notification-container'>
                        <DashboardTopNav profileImage={profileImage} dashboardRoute={'Notification'} isMobile={isMobile} setShowDashboardSidebar={setShowDashboardSidebar} notifications={notifications}/>
                        {
                            isMobile && (
                                    <UserDashboardTopNav>

                                    <h5>Notifications</h5>
                                    <SlOptionsVertical style={{width: '24px', height: '24px'}} onClick={() => {}}/>
                                </UserDashboardTopNav>
                            )
                        }
                        {
                            notifications.length > 0 ? 
                            (
                                <main className="notification-main-container">
                                    <section className="notification-section-container">
                                        <div className="filter-container">
                                            {
                                                isMobile ? 
                                                (
                                                    <div className='mobile-mark-all' >
                                                        <IoCheckmarkDoneSharp style={{width: '24px', height: '24px', color: '#9D7B40'}}/>
                                                        <h5>Mark as read</h5>
                                                    </div>
                                                ): 
                                                (
                                                    <>
                                                        <div className="mark-all-container">
                                                            <input type="checkbox" name="mark-all-read" id="" />
                                                            <span>Mark all as read</span>
                                                        </div>
                                                        <div className="mark-all-container">
                                                            <input type="checkbox" name="show-only-unread" id="" />
                                                            <span>Show only unread</span>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            <div className="sort-filter-container">
                                                <SortBy selectOptions={selectOptions} isMobile={isMobile}/>
                                                <DashboardFilter dropdownOptions={dropdownOptions}/>
                                            </div>
                                        </div>
                                        {
                                            isMobile ? 
                                            (
                                                <div className='mobile-datatable'>
                                                    <table>
                                                        <tbody>
                                                            {
                                                                notifications.filter((items) => items.notification_status === false).map((item, index)=> {
                                                                    const {message, date, notification_type} = item
                                                                    const time = new Date(date);
                                                                    const timeStr = time.toLocaleTimeString().toString().slice(0, 5) + " PM";
                                                                    return(
                                                                        <tr key={index} className='mobile-row'>
                                                                            <tr>
                                                                                <td >
                                                                                    <div className='table-icon'>
                                                                                        <span className={notification_type.toLowerCase()}>
                                                                                            {/* <LuCalendarCheck className='notification-type-icon' /> */}
                                                                                            {
                                                                                                notification_type === 'Properties' && (<CiHeart style={{width: '24px', height: '24px'}} className='notification-type-icon'/>)
                                                                                            }
                                                                                            {
                                                                                                notification_type === 'Payment' && (<IoCardOutline style={{width: '24px', height: '24px'}} className='notification-type-icon' />)
                                                                                            }
                                                                                            {
                                                                                                notification_type === 'Services' && (<LuCalendarCheck style={{width: '24px', height: '24px'}} className='notification-type-icon' />)
                                                                                            }
                                                                                        </span>
                                                                                    
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                <span>{notification_type}</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td>{message}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td>{convertDateToTimeAndDays(date)} at {timeStr}</td>
                                                                            </tr>
                                                                            {/* <td>{messages}</td>
                                                                            <td>{date}</td>
                                                                            <td>{time}</td>
                                                                            <td><RiDeleteBin6Line/></td> */}
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            ) : 
                                            (
                                                <div className="datatable">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Mark as read</th>
                                                                <th>Type</th>
                                                                <th>Messages</th>
                                                                <th>Date</th>
                                                                <th>Time</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                notifications.filter((items) => items.notification_status === false).map((item, index)=> {
                                                                    const {message, date, notification_type, id} = item;
                                                                    const time = new Date(date);
                                                                    const timeStr = time.toLocaleTimeString().toString().slice(0, 5) + " PM";
                                                                    return(
                                                                        <tr key={index}>
                                                                            <td><input type='checkbox' name='mark-as-read'  ref={inputRef} /></td>
                                                                            <td>
                                                                                <div className='table-icon'>
                                                                                    <span className={notification_type.toLowerCase()}>
                                                                                        {/* <LuCalendarCheck className='notification-type-icon' /> */}
                                                                                        {
                                                                                            notification_type === 'Properties' && (<CiHeart style={{width: '24px', height: '24px'}} />)
                                                                                        }
                                                                                        {
                                                                                            notification_type === 'Payment' && (<IoCardOutline style={{width: '24px', height: '24px'}} />)
                                                                                        }
                                                                                        {
                                                                                            notification_type === 'Services' && (<LuCalendarCheck style={{width: '24px', height: '24px'}} />)
                                                                                        }
                                                                                    </span> 
                                                                                    <span>
                                                                                        {notification_type}
                                                                                    </span>
                                                                                </div>
                                                                            </td>
                                                                            <td>{message}</td>
                                                                            <td>{convertDateToTimeAndDays(date)}</td>
                                                                            <td>{timeStr}</td>
                                                                            <td><RiDeleteBin6Line onClick={() => handleMark(id)} style={{width: '24px', height: '24px', cursor: 'pointer'}}/></td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan={6}>Clear all notification</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            )
                                        }
                                    </section>
                                    {/* <Pagination/> */}
                                </main>
                            ) : 
                            (
                                <EmptyNotificationContainer>
                                        <EmptySavedProperty
                                        message={"Oops!... You have no notifications yet."}
                                        btnTxt={"Explore New Properties"}
                                        link={"/buy"}
                                        />
                                </EmptyNotificationContainer>
                            )
                        }
                    </div>
                ) : 
                (
                    <PulseLoader
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "stretch",
                            height: "100vh",
                            width: '100%'
                        }}
                        margin={5}
                    />
                )
            }
        </>
    )
};

export default Notification;