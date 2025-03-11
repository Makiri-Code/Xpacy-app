import { useNavigate } from "react-router-dom";
import { LogoContainer, BackNav,  } from "../properties/add-new-property/add-new-property.styles";
import { IoArrowBack } from "react-icons/io5";
import xpacyLogo from "../../../../assets/x-pacy-logo.svg";
import { 
    NavigationContainer,
    InvoiceContainer,
    InvoiceContent,
    HeaderContent,
    RecipentDetails,
    TableInput,
    FooterContainer,
    FooterLogoContent,
    ButtonContainer,

 } from "./issue-invoice.styles";
import {ReactComponent as Instagram} from '../../../../assets/invoice-socials/instagram.svg';
import {ReactComponent as Facebook} from '../../../../assets/invoice-socials/facebook.svg';
import {ReactComponent as Twitter} from '../../../../assets/invoice-socials/x.svg';
import {ReactComponent as Tiktok} from '../../../../assets/invoice-socials/tiktok.svg';
import invoiceStamp from '../../../../assets/invoice-socials/invoice-stamp.png';
import { NotificationTable } from "../notification/notification.styles";
import { Select } from "../properties/properties.styles";
import invoiceLogo from "../../../../assets/invoice-logo.png";
import Button from "../../../../components/button/button";
import { LuDownload } from "react-icons/lu";
const IssueInvoice = () => {

    const navigate = useNavigate();

    return(
        <InvoiceContainer>
            <NavigationContainer>
                <LogoContainer>
                    <BackNav
                        onClick={() => {
                            navigate(-1)
                        }}
                    >
                        <IoArrowBack style={{width: '24px', height: '24px'}}/>
                        <span>Back</span>
                    </BackNav>
                    <img src={xpacyLogo} alt="x-pacy logo" />
                </LogoContainer>
            </NavigationContainer>
            <InvoiceContent>
                <div className="header">
                    <img src={invoiceLogo} alt="x-pacy logo" style={{width: '180.422px', height: '123.422px', objectFit: 'cover'}} />
                    <HeaderContent>
                        <h1>INVOICE</h1>
                        <div className="invoice-content">
                            <div className="invoice-num">
                                <p>Invoice Number:</p>
                                <span>000871</span>
                            </div>
                            <div className="invoice-num">
                                <p>Issued Date:</p>
                                <input type="date" placeholder="Enter date" title="choose date"/>
                            </div>
                            <div className="invoice-num">
                                <p>Due Date:</p>
                                <input type="date" placeholder="Enter date" title="choose date"/>
                            </div>
                        </div>
                    </HeaderContent>
                </div>
                <div className="body">
                    <RecipentDetails>
                        <h3>Recipient's Details</h3>
                        <div className="details">
                            <div>
                                <p>Recipient's name</p>
                            </div>
                            <div>
                                <p>Recipient's address</p>
                            </div>
                            <div>
                                <p>Recipient's email</p>
                            </div>
                            <div>
                                <p>Recipient's phone number</p>
                            </div>
                        </div>
                    </RecipentDetails>
                    <Select>
                        <option value="">Select Status</option>
                        <option value="paid">Paid</option>
                        <option value="unpaid">Unpaid</option>
                        <option value="incomplete">Incomplete</option>

                    </Select>
                </div>
                <NotificationTable>
                    <thead>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total Amount</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{width: '50%'}}>
                                <TableInput type="text" placeholder="Enter description"/>
                            </td>
                            <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                <span>₦</span> <TableInput type="num" placeholder="Enter price"/>
                            </td>
                            <td> <TableInput type="num" placeholder="Enter qty" /></td>
                            <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                <span>₦</span> <TableInput type="num" placeholder="Enter amount"/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: '700'}}>Sub-total</td>
                            <td></td>
                            <td></td>
                            <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                <span>₦</span> <TableInput type="num" placeholder="Enter sub-total"/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: '700'}}>Tax (7.5%)</td>
                            <td></td>
                            <td></td>
                            <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                <span>₦</span> <TableInput type="num" placeholder="Enter tax"/>
                            </td>
                        </tr>
                        <tr style={{backgroundColor: '#C7D9E5'}}>
                            <td style={{fontWeight: '700', fontSize: '1.125rem'}}>TOTAL</td>
                            <td></td>
                            <td></td>
                            <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                <span>₦</span> <TableInput type="num" placeholder="Enter total" style={{backgroundColor: '#C7D9E5'}}/>
                            </td>
                        </tr>
                    </tbody>
                    {/* <TableFooter>
                        <tr>
                            <td colSpan={6}><Link>Clear all notification</Link></td>
                        </tr>
                    </TableFooter> */}
                </NotificationTable>
                <FooterContainer>
                    <div className="right-content">
                        <p>Payment Information</p>
                        <div>
                            <strong>Account Number:<span> 0000000000</span></strong>
                            <strong>Account Name:<span> Xpacy Limited</span></strong>
                            <strong>Bank Name:<span> Polaris Bank</span></strong>
                        </div>
                    </div>
                    <div className="left-content">
                        <p>Terms & Conditions</p>
                        <div>
                            <span>Payments made into Xpacy account cannot be refunded.</span>
                        </div>
                    </div>
                </FooterContainer>
                <FooterLogoContent>
                    <div className="right-content">
                        <div>
                            <strong>Address: <span>Wills Court Mbora, Citec Estate,
                            Jabi, FCT, Nigeria</span></strong>
                            <strong>Email: <span>support@xpacy.com</span></strong>
                            <strong>Phone: <span>000000000</span></strong>
                        </div>
                        <div className="social-icons">
                            <Facebook/>
                            <Twitter/>
                            <Instagram/>
                            <Tiktok/>
                        </div>
                    </div>
                    <img src={invoiceStamp} alt="stamp" style={{width: '216.625px', height: '216.563px'}}/>
                </FooterLogoContent>
            </InvoiceContent>
            <ButtonContainer>
                <Button buttonType={{primaryBtn: false}}> <LuDownload style={{width: '24px', height: '24px'}}/> Download Invoice</Button>
                <Button buttonType={{primaryBtn: true}}> Send Invoice</Button>
            </ButtonContainer>
        </InvoiceContainer>
    );
};

export default IssueInvoice;
