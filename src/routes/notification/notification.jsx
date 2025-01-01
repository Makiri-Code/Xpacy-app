import { useState } from 'react';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import { MdFilterList } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagination from '../../components/pagination/pagination';
import SortBy from '../../components/sort-by/sortBy';
import './notification.styles.css';

const Notification = () => {
    const [showDropdown, setShowDropDown] = useState(false);
    const notifications = [
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
        {
            type: 'Services',
            messages: 'Your plumbing service is confirmed for Sept 25 at 10 AM',
            date: '2 days ago',
            time: '12:30pm'
        },
    ]
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
    ]
    return (
        <div className="notification-container">
            <DashboardTopNav dashboardRoute={'Notification'}/>
            <main className="notification-main-container">
                <section className="notification-section-container">
                    <div className="filter-container">
                        <div className="mark-all-container">
                            <input type="checkbox" name="mark-all-read" id="" />
                            <span>Mark all as read</span>
                        </div>
                        <div className="mark-all-container">
                            <input type="checkbox" name="show-only-unread" id="" />
                            <span>Show only unread</span>
                        </div>
                        <div className="sort-filter-container">
                            <SortBy selectOptions={selectOptions}/>
                            <div className="filter-icon-container" onMouseEnter={()=> setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
                                <MdFilterList style={{width: '24px', height: '24px'}} />
                                {
                                    showDropdown && (
                                        <div className="dropdown-hover">
                                            <span>General</span>
                                            <span>Services</span>
                                            <span>Properties</span>
                                            <span>Payments</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
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
                                    notifications.map((item, index)=> {
                                        const {messages, date, time, type} = item
                                        return(
                                            <tr key={index}>
                                                <td><input type='checkbox' name='mark-as-read'/></td>
                                                <td><div className='table-icon'><span className={type.toLowerCase()}><LuCalendarCheck className='notification-type-icon' /></span> <span>{type}</span></div></td>
                                                <td>{messages}</td>
                                                <td>{date}</td>
                                                <td>{time}</td>
                                                <td><RiDeleteBin6Line/></td>
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
                </section>
                <Pagination/>
            </main>
        </div>
    )
};

export default Notification;