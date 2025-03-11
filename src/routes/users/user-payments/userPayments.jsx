import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import { IoCardOutline } from "react-icons/io5";
import {ReactComponent as MoneyBag} from '../../../assets/money-bag.svg';
import { LuCalendarCheck } from "react-icons/lu";
import SortBy from '../../../components/sort-by/sortBy';
import DashboardFilter from '../../../components/dashboard-filter/dasboardFilter';
import { SlOptionsVertical } from 'react-icons/sl';
import { MdFilterList } from 'react-icons/md';
import './user-payment.styles.css';
import EmptySavedProperty from '../../../components/empty-saved-property/emptySavedProperty';
import styled from 'styled-components';
import { UserDashboardTopNav } from '../../../components/user-dashboard/user-dashboard.styles';

const UserPayments = ({profileImage, isMobile, showDashboardSidebar, setShowDashboardSidebar, invoiceList, notifications }) => {
    const [showFilter, setShowFilter] = useState(false);
    const selectOptions = [
        {
            option: 'Default'
        },
        {
            option: 'Oldest to newest'
        },
        {
            option: 'Newest to oldest'
        },
    ];
    // const invoiceTableData = [
    //     {
    //         invoiceNo: 45678,
    //         type: 'Rent',
    //         description: 'Rent for 2 bedroom flat, Ikoyi, Lagos',
    //         issuedDate: '15/09/24',
    //         dueDate: '19/09/24',
    //         paidAmount: '₦4,500,000',
    //         paymentStatus: 'paid'
    //     },
    //     {
    //         invoiceNo: 45679,
    //         type: 'Services',
    //         description: 'Plumbing service for 2 bedroom flat, Ikoyi, Lagos',
    //         issuedDate: '15/09/24',
    //         dueDate: '19/09/24',
    //         paidAmount: '₦500,000',
    //         paymentStatus: 'unpaid'
    //     },
    //     {
    //         invoiceNo: 45679,
    //         type: 'Services',
    //         description: 'Plumbing service for 2 bedroom flat, Ikoyi, Lagos',
    //         issuedDate: '15/09/24',
    //         dueDate: '19/09/24',
    //         paidAmount: '₦500,000',
    //         paymentStatus: 'incomplete'
    //     },
    // ]
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments']
    const EmptySavedPropertyContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
`
    return (
        <div className="notification-container">
            <DashboardTopNav profileImage={profileImage} dashboardRoute={'Payments'} isMobile={isMobile} setShowDashboardSidebar={setShowDashboardSidebar} showDashboardSidebar={showDashboardSidebar} notifications={notifications} />
            {
                isMobile && (
                    <UserDashboardTopNav>
                        <h5>Payments</h5>
                        <SlOptionsVertical style={{width: '24px', height: '24px'}} onClick={() => {}}/>
                    </UserDashboardTopNav>
                )
            }
            <main className="payments-container">
                <section className="summary-section">
                    <h2>Summary</h2>
                    <div className="summary-content">
                        <div className="summary-card">
                            <div className="payment-card">
                                <div className="total-payment"> 
                                    <div className="total-payment-icon">
                                        <IoCardOutline style={{width: '24px', height: '24px'}}/>
                                    </div>
                                    <span>TOTAL PAYMENTS</span>
                                </div>
                                <h3>₦5,000,000</h3>
                            </div>
                            <div id='circle1'/>
                            <div id='circle2'/>
                        </div>
                        <div className="stats-container">
                            <div className="stats-card">
                                <p>Rent</p>
                                <h4>₦4,500,000</h4>
                            </div>
                            <div className="stats-card">
                                <p>Purchases</p>
                                <h4>₦0</h4>
                            </div>
                            <div className="stats-card">
                                <p>Services</p>
                                <h4>₦500,000</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="inovice-list-section">
                    <div className="invoice-header">
                        <h2>Invoice List</h2>
                        {
                            invoiceList?.length > 0 && (
                                <div className="payments-filter">
                                    <SortBy
                                        selectOptions={selectOptions}
                                        isMobile={isMobile}
                                    />
                                <div className="services-filter-content" onClick={() => setShowFilter(!showFilter)}>
                                        <MdFilterList style={{width: '24px', height: '24px'}} />
                                </div>
                                {
                                        showFilter && 
                                        (
                                            <div className="filter-dropdown">
                                                <p>Filter by:</p>
                                                <form>
                                                    <div className='filter-service'>
                                                        <label htmlFor="payment-status">Payment Status</label>
                                                        <select name="payment-status" id="payment-status">
                                                            <option value="">Select status</option>
                                                            <option value="paid">Paid</option>
                                                            <option value="unpaid">Unpaid</option>
                                                        </select>
                                                    </div>
                                                    <div className='filter-service'>
                                                        <label htmlFor="price-range">Price range</label>
                                                        <select name="price_range" id="price-range">
                                                            <option value="">Select price range</option>
                                                            {/* <option value="upcoming">Upcoming</option>
                                                            <option value="in_progress">In progress</option>
                                                            <option value="completed">Completed</option> */}
                                                        </select>
                                                    </div>
                                                    <div className='divider'/>
                                                    <div className="btn-container">
                                                        <input type="button" value="Clear" />
                                                        <input type="submit" value="Filter" />
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        )
                                }
                                </div>
                            
                            )
                        }
                    </div>
                    <>
                           {
                             invoiceList && (
                                <>
                                    {
                                    invoiceList?.length > 0 ?
                                    (
                                        <>
                                            {
                                            isMobile ? 
                                            (
                                                <table>
                                                    <tbody>
                                                        {
                                                            invoiceList.map((data) => {
                                                                const {invoiceNo, type, description, issuedDate, dueDate, paidAmount, paymentStatus} = data;
                                                                return(
                                                                    <tr className='mobile-payments-row'>
                                                                        <tr>
                                                                            <td><strong>Invoice No: </strong> {invoiceNo}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                {
                                                                                    type === 'Rent' ? 
                                                                                        (
                                                                                            <div className='mobile-rentcontainer'>
                                                                                                <div className="rent-container"><MoneyBag className='rent'/></div> 
                                                                                                <span>{type}</span>
                                                                                            </div>
                                                                                        ) : 
                                                                                        (
                                                                                            <div className="mobile-rentcontainer">
                                                                                                <div className="service-container"><LuCalendarCheck className='rent'/></div>
                                                                                                <span>{type}</span>
                                                                                            </div>
                                                                                        )
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                Payment Amount
                                                                            </td>
                                                                            <td>{paidAmount}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                               Issued Date
                                                                            </td>
                                                                            <td>{issuedDate}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                Due Date
                                                                            </td>
                                                                            <td>{dueDate}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><span className={paymentStatus}>{paymentStatus}</span></td>
                                                                            <td><Link>View</Link></td>
                                                                        </tr>
                                                                        {/* <td>
                                                                            {
                                                                                type === 'Rent' ? 
                                                                                    (<div className="rent-container"><MoneyBag className='rent'/></div>) : 
                                                                                    (<div className="service-container"><LuCalendarCheck className='rent'/></div>)
                                                                            }
                                                                            <span>{type}</span>
                                                                        </td>
                                                                        <td>{description}</td>
                                                                        <td>{issuedDate}</td>
                                                                        <td>{dueDate}</td>
                                                                        <td>{paidAmount}</td>
                                                                        <td><span className={paymentStatus}>{paymentStatus}</span></td>
                                                                        <td>
                                                                            <Link>View</Link>
                                                                        </td> */}
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            ) : 
                                            (
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Invoice No</th>
                                                            <th>Type</th>
                                                            <th>Description</th>
                                                            <th>Issued Date</th>
                                                            <th>Due Date</th>
                                                            <th>Payment Amount</th>
                                                            <th>Payment Status</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            invoiceList.map((data) => {
                                                                const {invoiceNo, type, description, issuedDate, dueDate, paidAmount, paymentStatus} = data;
                                                                return(
                                                                    <tr>
                                                                        <td>{invoiceNo}</td>
                                                                        <td>
                                                                            {
                                                                                type === 'Rent' ? 
                                                                                    (<div className="rent-container"><MoneyBag className='rent'/></div>) : 
                                                                                    (<div className="service-container"><LuCalendarCheck className='rent'/></div>)
                                                                            }
                                                                            <span>{type}</span>
                                                                        </td>
                                                                        <td>{description}</td>
                                                                        <td>{issuedDate}</td>
                                                                        <td>{dueDate}</td>
                                                                        <td>{paidAmount}</td>
                                                                        <td><span className={paymentStatus}>{paymentStatus}</span></td>
                                                                        <td>
                                                                            <Link>View</Link>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            )
                                        }
                                        </>
                                    ) :
                                    (
                                        <EmptySavedPropertyContainer>
                                            <EmptySavedProperty
                                            message={"Oops!... You have no invoice yet."}
                                            btnTxt={"Explore New Properties"}
                                            link={"/buy"}
                                            />
                                        </EmptySavedPropertyContainer>
                                    )
                                }
                                </>
                             )
                           }
                    </>
                </section>
            </main>
        </div>
    );
}

export default UserPayments;