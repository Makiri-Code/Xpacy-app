import { useNavigate, useParams } from "react-router-dom";
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
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../../../contexts/userContext";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { PulseLoader } from "react-spinners";
import { toast } from "sonner";

const IssueInvoice = () => {
    const defaultFormFields = {
        recipientId: '',
        recipientType: '',
        issuedDate: '',
        dueDate: '',
        invoice_reason: '',
        status: '',
        tax: '',
        amountPaid: 0,
        items: [],
    }
    const {id} = useParams();
    const btnRef = useRef(null);
    const {server, userToken} = useContext(UserContext);
    const [userProfile, setUserProfile] = useState(null);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {issuedDate, dueDate, invoice_reason, tax, amountPaid, items, status} = formFields;
    const navigate = useNavigate();
    let item = []
    const [invoiceInfo, setInvoiceInfo] = useState({
        description: '',
        quantity: null,
        unitPrice: null,
    });
    const {description, quantity, unitPrice} = invoiceInfo;
    const handleInvoiceInfoChange = (e) => {
        const {name, value} = e.target;
       if(name === 'description'){
            setInvoiceInfo({
                ...invoiceInfo,
                [name] : value
            });
       } else if(name === 'unitPrice') {
            setInvoiceInfo({
                ...invoiceInfo,
                unitPrice: Number(value),
            });
        } else if (name === 'quantity') {
            setInvoiceInfo({
                ...invoiceInfo,
                quantity: Number(value),
            })
        }
        setForm()
        
    }
    const setForm = () => {
       
        setFormFields({
            ...formFields,
            recipientId: Number(id),
            recipientType: userProfile?.recipientType,
            tax:(unitPrice * quantity) * 0.075,
            items: item
        });
    }
    useEffect(() => {
        const getUserProfile = async () => {
        const response = await fetchServer('GET', {}, userToken, `admin/users/fetch-user/${id}`, server);
        console.log(response);
        setUserProfile(response);
        }
        getUserProfile();
    }, [])
    useEffect(() => {
        item = item.concat(invoiceInfo);
        setForm();
    }, [invoiceInfo])
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({
            ...formFields,
            [name] : value,
            
        });
    }
    const handleClick = async () => {
        btnRef.current.disabled = true;
        const response = await fetchServer('POST', formFields, userToken, 'invoice/create-invoice', server);
        console.log(response);
        if(response.success){
            toast.success(response.message)
        }
        if(!response.success){
            toast.error(response.message)
        }
        console.log(formFields);
        btnRef.current.disabled = false;
    }
    return(
        <>
            {
                userProfile ?
                (
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
                                        {/* <div className="invoice-num">
                                            <p>Invoice Number:</p>
                                            <span>000871</span>
                                        </div> */}
                                        <div className="invoice-num">
                                            <p>Issued Date:</p>
                                            <input type="date" placeholder="Enter date" title="choose date" name="issuedDate" value={issuedDate} onChange={handleChange}/>
                                        </div>
                                        <div className="invoice-num">
                                            <p>Due Date:</p>
                                            <input type="date" placeholder="Enter date" title="choose date" name="dueDate" value={dueDate} onChange={handleChange}/>
                                        </div>
                                    </div>
                                </HeaderContent>
                            </div>
                            <div className="body">
                                <RecipentDetails>
                                    <h3>Recipient's Details</h3>
                                    <div className="details">
                                        <div>
                                            <p>{userProfile.user.firstname} {userProfile.user.lastname}</p>
                                        </div>
                                        {
                                            userProfile.user.address &&
                                            <div>
                                                <p>{userProfile.user.address}</p>
                                            </div>
                                        }
                                        <div>
                                            <p>{userProfile.user.email}</p>
                                        </div>
                                        {
                                            userProfile.user.phone_number && 
                                            <div>
                                                <p>{userProfile.user.phone_number}</p>
                                            </div>
                                        }
                                    </div>
                                </RecipentDetails>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                                    <Select id="status" name="status" value={status} onChange={handleChange}>
                                        <option value="" disabled>Select Status</option>
                                        <option value="paid">Paid</option>
                                        <option value="unpaid">Unpaid</option>
                                        <option value="incomplete">Incomplete</option>

                                    </Select>
                                    <Select name="invoice_reason" value={invoice_reason} onChange={handleChange}>
                                        <option value=""disabled>Select Reason</option>
                                        <option value="rent">Rent</option>
                                        <option value="services">Services</option>
                                        <option value="others">Others</option>

                                    </Select>
                                </div>
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
                                            <TableInput type="text" placeholder="Enter description" name="description" value={description} onChange={handleInvoiceInfoChange}/>
                                        </td>
                                        <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                            <span>₦</span> <TableInput type="number" placeholder="Enter price" name="unitPrice" value={unitPrice} onChange={handleInvoiceInfoChange}/>
                                        </td>
                                        <td> <TableInput type="number" placeholder="Enter qty" name="quantity" value={quantity} onChange={handleInvoiceInfoChange}/></td>
                                        <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                            <span>₦</span> <TableInput type="number" placeholder="Enter amount" value={unitPrice * quantity} />
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
                                            <span>₦</span> <TableInput type="num" placeholder="Enter sub-total" value={unitPrice * quantity} onChange={handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: '700'}}>Tax (7.5%)</td>
                                        <td></td>
                                        <td></td>
                                        <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                            <span>₦</span> <TableInput type="num" placeholder="Enter tax" name="tax" value={unitPrice * quantity * 0.075}/>
                                        </td>
                                    </tr>
                                    <tr style={{backgroundColor: '#C7D9E5'}}>
                                        <td style={{fontWeight: '700', fontSize: '1.125rem'}}>TOTAL</td>
                                        <td></td>
                                        <td></td>
                                        <td style={{display: 'flex', height: '100%', alignItems: 'center', gap: '8px'}}>
                                            <span style={{fontWeight: '700', fontSize: '1.125rem'}}>₦</span> <TableInput type="num" placeholder="Enter total" style={{backgroundColor: '#C7D9E5',fontWeight: '700', fontSize: '1.125rem'}} value={(unitPrice * quantity) + unitPrice * quantity * 0.075}/>
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
                            <Button buttonType={{primaryBtn: true}} onClick={handleClick} btnRef={btnRef}> Send Invoice</Button>
                        </ButtonContainer>
                    </InvoiceContainer>
                ) :
                (
                    <PulseLoader
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        height: "100vh",
                        }}
                        margin={5}
                    />
                )
            }
        </>
    );
};

export default IssueInvoice;
