import { Link } from "react-router-dom";
import SortBy from "../../../../components/sort-by/sortBy";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from "../../../../components/pagination/pagination";
import { 
    ManagementDashboardContainer,
    Container,
    ManagementDashboardContent,
 } from "../dashboard/owner-dashboard.styles";
 import {ReactComponent as MoneyBag} from '../../../../assets/money-bag.svg';
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
const Notification = ({isMobile}) => {
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
            <TopNav dashboardRoute={'Notifications'} isMobile={isMobile} />
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
                            <th>Date</th>
                            <th>Time</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <InputContainer>
                                        <input type="checkbox" name="" id="" />
                                    </InputContainer>
                                </td>
                                <td className='typeData'>
                                    <div className='payment'><MoneyBag style={{width: '20px', height: '20px'}}/></div>
                                    Payment
                                </td>
                                <td>Rent overdue for 2-Bedroom Apartment, Lagos</td>
                                <td>19/09/24</td>
                                <td>12:00pm</td>
                                <td><RiDeleteBin6Line style={{width: '24px', height: '24px' }} /></td>
                            </tr>
                        </tbody>
                        <TableFooter>
                            <tr>
                                <td colSpan={6}><Link>Clear all notification</Link></td>
                            </tr>
                        </TableFooter>
                    </NotificationTable>
                    {/* <Pagination/> */}
                </Container>
           </ManagementDashboardContent>
        </ManagementDashboardContainer>

    );
};

export default Notification;