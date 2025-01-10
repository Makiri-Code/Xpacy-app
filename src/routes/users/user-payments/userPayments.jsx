import { Link } from 'react-router-dom';
import DashboardTopNav from '../dashoard-top-nav/dashboardTopNav';
import { IoCardOutline } from "react-icons/io5";
import {ReactComponent as MoneyBag} from '../../../assets/money-bag.svg';
import { LuCalendarCheck } from "react-icons/lu";
import './user-payment.styles.css';
import SortBy from '../../../components/sort-by/sortBy';
import DashboardFilter from '../../../components/dashboard-filter/dasboardFilter';

const UserPayments = () => {
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
    const invoiceTableData = [
        {
            invoiceNo: 45678,
            type: 'Rent',
            description: 'Rent for 2 bedroom flat, Ikoyi, Lagos',
            issuedDate: '15/09/24',
            dueDate: '19/09/24',
            paidAmount: '₦4,500,000',
            paymentStatus: 'paid'
        },
        {
            invoiceNo: 45679,
            type: 'Services',
            description: 'Plumbing service for 2 bedroom flat, Ikoyi, Lagos',
            issuedDate: '15/09/24',
            dueDate: '19/09/24',
            paidAmount: '₦500,000',
            paymentStatus: 'unpaid'
        },
        {
            invoiceNo: 45679,
            type: 'Services',
            description: 'Plumbing service for 2 bedroom flat, Ikoyi, Lagos',
            issuedDate: '15/09/24',
            dueDate: '19/09/24',
            paidAmount: '₦500,000',
            paymentStatus: 'incomplete'
        },
    ]
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments']
    return (
        <div className="notification-container">
            <DashboardTopNav dashboardRoute={'Payments'}/>
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
                        <div className="invoice-filter">
                        <SortBy selectOptions={selectOptions}/>
                        <DashboardFilter dropdownOptions={dropdownOptions}/>
                        </div>
                    </div>
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
                                invoiceTableData.map((data) => {
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
                </section>
            </main>
        </div>
    );
}

export default UserPayments;