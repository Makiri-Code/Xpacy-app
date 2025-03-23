import { Link } from "react-router-dom";
import SortBy from "../../../../components/sort-by/sortBy";
import { RiDeleteBin6Line } from "react-icons/ri";
import { 
    ManagementDashboardContainer,
    Container,
    ManagementDashboardContent,
 } from "../dashboard/management_dashboard.styles";
 import {ReactComponent as MoneyBag} from '../../../../assets/money-bag.svg';
 import { BiBuildings } from "react-icons/bi";
 import { LuCalendar } from "react-icons/lu";
import TopNav from "../navigation/topnav/top-nav";
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter";
import { 
    FilterContainer,
    FilterItem,
    SearchBox,
    SearchIcon,
    SearchBoxContainer,
    NotificationTable,
    InputContainer,
    TableFooter,
 } from "./notification.styles";
 import { Pagination } from '@mui/material';
 
const Notification = ({isMobile, allNotifications, profileImage}) => {
    const selectOptions = [
        {
          option: "Default",
        },
        {
          option: "Newest",
        },
        {
          option: "Oldest",
        },
      ];
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Notifications'} isMobile={isMobile} profileImage={profileImage} />
           <ManagementDashboardContent>
                <Container>
                    <FilterContainer>
                        <FilterItem>
                            <input type="checkbox" />
                            <span>Mark all as read</span>
                        </FilterItem>
                        <FilterItem>
                            <input type="checkbox" />
                            <span>Show only unread</span>
                        </FilterItem>
                        <FilterItem>
                            <SearchBoxContainer>
                                <SearchBox type="search" placeholder = "Search notifications"  />
                                <SearchIcon/>
                            </SearchBoxContainer>
                            <SortBy selectOptions={selectOptions}/>
                            <DashboardFilter dropdownOptions={dropdownOptions}/>
                        </FilterItem>
                    </FilterContainer>
                    <NotificationTable>
                        <thead>
                            <th>Mark as read</th>
                            <th>Type</th>
                            <th>Message</th>
                            <th>Date/Time</th>
                            <th>Action Button</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {
                                allNotifications?.map((notification) => {
                                    const date = new Date(notification.date);
                                    
                                    return(
                                        <tr>
                                            <td>
                                                <InputContainer>
                                                    <input type="checkbox" name="" id="" />
                                                </InputContainer>
                                            </td>
                                            <td className='typeData'>
                                                <div className='payment'>
                                                    {notification.notification_type === 'Properties' && <BiBuildings style={{width: '20px', height: '20px'}}/>}
                                                    {notification.notification_type === 'Payments' && <MoneyBag style={{width: '20px', height: '20px'}}/>}
                                                    {notification.notification_type === 'Services' && <LuCalendar style={{width: '20px', height: '20px'}}/>}

                                                </div>
                                                {notification.notification_type}
                                            </td>
                                            <td>{notification.message}</td>
                                            <td>{date.toLocaleDateString('en-GB')}, {date.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit', hour12: true})}</td>
                                            <td><Link>Send Reminder</Link></td>
                                            <td><RiDeleteBin6Line style={{width: '24px', height: '24px' }} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        {
                            allNotifications.length > 0 && 
                            (
                                <TableFooter>
                                    <tr>
                                        <td colSpan={6}><Link>Clear all notification</Link></td>
                                    </tr>
                                </TableFooter>
                            )
                        }
                    </NotificationTable>
                </Container>
           </ManagementDashboardContent>
        </ManagementDashboardContainer>

    );
};

export default Notification;