import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ManagementDashboardContainer, ManagementDashboardContent, NotificationTable } from "../dashboard/management_dashboard.styles"
import TopNav from "../navigation/topnav/top-nav"
import { HeaderContainer } from "../properties/properties.styles"
import { Form } from "react-bootstrap"
import { Select } from "../properties/properties.styles"
import Button from "../../../../components/button/button"
import { FiUpload } from "react-icons/fi"
import { Container } from "../dashboard/management_dashboard.styles"
import { SummaryPayments, Icon, ServicesCardFooter,  } from "./payment.styles";
import { IconContainer } from "../services/services-dashboard/services.styles";
import {ReactComponent as RecievePayments} from "../../../../assets/recieve-money.svg";
import { IoArrowUp } from "react-icons/io5"
import CustomBarChart from "../../../../components/services-barchart/custom-barchart"
import { FilterItem, FilterContainer } from "../notification/notification.styles"
import SortBy from "../../../../components/sort-by/sortBy"
import DashboardFilter from "../../../../components/dashboard-filter/dasboardFilter"
import {ReactComponent as MoneyBag} from "../../../../assets/money-bag.svg";
import { InvoiceStatusContext } from "../../../../contexts/invoice.context"
import { CgCalendarDates } from "react-icons/cg"

const AdminPayments = ({isMobile, allInvoices, profileImage}) => {
    const navigate = useNavigate();
    console.log(allInvoices)
    const {setInvoiceStatus} = useContext(InvoiceStatusContext)
    const dropdownOptions = ['General', 'Services', 'Properties', 'Payments'];
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
    const dataSet = [
        {
            invoice_no: '45678',
            type: 'Rent',
            description: 'Rent for 2 bedroom flat, Ikoyi, Lagos',
            issued_date: '15/09/24',
            due_date: '19/09/24',
            payment_amount: '4,500,000',
            payment_status: 'Paid',
        },
        {
            invoice_no: '45678',
            type: 'Rent',
            description: 'Rent for 2 bedroom flat, Ikoyi, Lagos',
            issued_date: '15/09/24',
            due_date: '19/09/24',
            payment_amount: '4,500,000',
            payment_status: 'Unpaid',
        },
        {
            invoice_no: '45678',
            type: 'Rent',
            description: 'Rent for 2 bedroom flat, Ikoyi, Lagos',
            issued_date: '15/09/24',
            due_date: '19/09/24',
            payment_amount: '4,500,000',
            payment_status: 'Incomplete',
        },
    ];
    // Format date 
    const formatDate = (dateStr) => {
        const formattedDate = new Date(dateStr)
                                    .toLocaleDateString('en-GB')
                                    .split("/")
                                    .map((part, index) => (index === 2 ? part.slice(-2) : part) )
                                    .join("/")
        return formattedDate;
    }

    return(
        <ManagementDashboardContainer>
            <TopNav dashboardRoute={'Payments'} isMobile={isMobile} profileImage={profileImage} />
            <ManagementDashboardContent>
                <HeaderContainer>
                    <Form>
                        <Select>
                            <option>Last 7 days</option>
                            <option>Last month</option>
                            <option>Last 90 days</option>
                            <option>Last 6 months</option>
                            <option>Last year</option>
                        </Select>
                    </Form>
                    <Button
                        buttonType={{primaryBtn: true}} 
                    >
                        <FiUpload style={{width: '24px', height: '24px'}} />
                        Export Report
                    </Button>
                </HeaderContainer>
                <Container>
                    <p>Summary</p>
                    <SummaryPayments>
                        <div className="card1">
                            <div className="services-card">
                                <IconContainer>
                                    <Icon>
                                        <RecievePayments style={{width: '20px', height: '20px'}}/>
                                    </Icon>
                                    <p>TOTAL REVENUE</p>
                                </IconContainer>
                                <ServicesCardFooter>
                                    <span className="title">₦ 4,500,000,000</span>
                                    <div className="stats">
                                        <IoArrowUp style={{width: '16px', height: '16px', color: '#357B38'}}/>
                                        <span className="up">1.0%</span>
                                    </div>
                                </ServicesCardFooter>
                            </div>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                        </div>
                        <div className="card2">
                            <span>Rent</span>
                            <ServicesCardFooter>
                                <p className="title">₦ 4,500,000,000</p>
                                <div className="stats down-stats">
                                    <IoArrowUp style={{width: '16px', height: '16px', color: '#C4170B'}}/>
                                    <span className="down">1.6%</span>
                                </div>
                            </ServicesCardFooter>
                        </div>
                        <div className="card3">
                            <span>Property Purchases</span>
                            <ServicesCardFooter>
                                <p className="title">₦ 4,050,000,000</p>
                                <div className="stats">
                                    <IoArrowUp style={{width: '16px', height: '16px', color: ' #357B38'}}/>
                                    <span className="up">2.1%</span>
                                </div>
                            </ServicesCardFooter>
                        </div>
                        <div className="card4">
                            <span>Facility Management Services</span>
                            <ServicesCardFooter>
                                <p className="title">₦ 50,000,000</p>
                                <div className="stats">
                                    <IoArrowUp style={{width: '16px', height: '16px', color: ' #357B38'}}/>
                                    <span className="up">1.1%</span>
                                </div>
                            </ServicesCardFooter>
                        </div>
                        <div className="card5">
                            <span>Overdue Payments</span>
                            <ServicesCardFooter>
                                <p className="title">₦ 40,000,000</p>
                                <div className="stats">
                                    <IoArrowUp style={{width: '16px', height: '16px', color: ' #357B38'}}/>
                                    <span className="up">2.4%</span>
                                </div>
                            </ServicesCardFooter>
                        </div>
                        <div className="card6">
                            <span>Overdue Payments</span>
                            <ServicesCardFooter>
                                <p className="title">₦ 4,500,000,000</p>
                                <div className="stats down-stats">
                                    <IoArrowUp style={{width: '16px', height: '16px', color: '#C4170B'}}/>
                                    <span className="down">1.8%</span>
                                </div>
                            </ServicesCardFooter>
                        </div>
                        <div className="card7">
                            <span>Expenditure</span>
                            <ServicesCardFooter>
                                <p className="title">₦ 10,000,000</p>
                                <div className="stats">
                                    <IoArrowUp style={{width: '16px', height: '16px', color: ' #357B38'}}/>
                                    <span className="up">2.3%</span>
                                </div>
                            </ServicesCardFooter>
                        </div>
                    </SummaryPayments>
                </Container>
                {/* Metrics */}
                <Container>
                    <p>Revenue Metrics</p>
                    <CustomBarChart/>
                </Container>
                {/* Invoice List Table */}
                <Container>
                <FilterContainer>
                    <p>Invoice Lists</p>
                    <FilterItem>
                        <SortBy selectOptions={selectOptions}/>
                        <DashboardFilter dropdownOptions={dropdownOptions}/>
                    </FilterItem>
                </FilterContainer>
                <NotificationTable>
                        <thead>
                            <th>Invoice No</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Issued Date</th>
                            <th>Due Date</th>
                            <th>Payment Amount</th>
                            <th>Payment Status</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {
                                allInvoices.map((tableData, index) => {
                                    // const {invoice_no, type, description, issued_date, due_date, payment_amount, payment_status } = tableData
                                    
                                    return (
                                        <tr key={index}>
                                            <td><strong>{tableData.invoiceNumber}</strong></td>
                                            <td className='typeData'>
                                               {
                                                tableData.invoice_reason === 'rent' && (
                                                    <>
                                                         <div className={tableData.invoice_reason .toLocaleLowerCase()}><MoneyBag style={{width: '20px', height: '20px'}}/></div>
                                                         {tableData.invoice_reason.charAt(0).toUpperCase() + tableData.invoice_reason.slice(1).toLocaleLowerCase()}
                                                    </>
                                                )
                                               }
                                               {
                                                tableData.invoice_reason === 'services' && (
                                                    <>
                                                         <div className={tableData.invoice_reason .toLocaleLowerCase()}><CgCalendarDates style={{width: '20px', height: '20px'}}/></div>
                                                         {tableData.invoice_reason.charAt(0).toUpperCase() + tableData.invoice_reason.slice(1).toLocaleLowerCase()}
                                                    </>
                                                )
                                               }
                                            </td>
                                            <td>{tableData.invoice_reason.charAt(0).toUpperCase() + tableData.invoice_reason.slice(1).toLocaleLowerCase()}</td>
                                            <td>{formatDate(tableData.issuedDate)}</td>
                                            <td>{formatDate(tableData.dueDate)}</td>
                                            <td style={{fontWeight: 700}}>₦{Number(tableData.amountOutstanding).toLocaleString()}</td>
                                            <td><div className={tableData.status}>{tableData.status.charAt(0).toUpperCase() + tableData.status.slice(1).toLocaleLowerCase()}</div></td>
                                            <td style={{textDecoration: 'underline'}} onClick={() => {
                                                setInvoiceStatus(tableData.status);
                                                navigate(`/dashboard/admin/invoice/${tableData.id}`);
                                            }} >
                                                <Link >View</Link></td>
                                        </tr>
                                    )
                                } )
                            }
                            
                        </tbody>
                    </NotificationTable>
                </Container>
            </ManagementDashboardContent>
        </ManagementDashboardContainer>
    )
}

export default AdminPayments; 