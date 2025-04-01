import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { LogoContainer, BackNav } from "../properties/add-new-property/add-new-property.styles";
import { IoArrowBack } from "react-icons/io5";
import xpacyLogo from "../../../../assets/x-pacy-logo.svg";
import { 
    NavigationContainer,
    InvoiceContainer,
    InvoiceContent,
    HeaderContent,
    RecipentDetails,
    FooterContainer,
    FooterLogoContent,
    ButtonContainer,
} from "./issue-invoice.styles";
import { ReactComponent as Instagram } from '../../../../assets/invoice-socials/instagram.svg';
import { ReactComponent as Facebook } from '../../../../assets/invoice-socials/facebook.svg';
import { ReactComponent as Twitter } from '../../../../assets/invoice-socials/x.svg';
import { ReactComponent as Tiktok } from '../../../../assets/invoice-socials/tiktok.svg';
import invoiceStamp from '../../../../assets/invoice-socials/invoice-stamp.png';
import { NotificationTable } from "../notification/notification.styles";
import invoiceLogo from "../../../../assets/invoice-logo.png";
import Button from "../../../../components/button/button";
import { LuDownload } from "react-icons/lu";
import { InvoiceStatusContext } from "../../../../contexts/invoice.context";
import fetchServer from "../../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../../contexts/userContext";

// PrintableInvoice is a separate component that forwards its ref to the wrapping div
const PrintableInvoice = React.forwardRef(({ invoiceData, formatDate, invoiceStatus, navigate }, ref) => (
  <>
    <NavigationContainer>
      <LogoContainer>
        <BackNav onClick={() => navigate(-1)}>
          <IoArrowBack style={{ width: '24px', height: '24px' }} />
          <span>Back</span>
        </BackNav>
        <img src={xpacyLogo} alt="x-pacy logo" />
      </LogoContainer>
    </NavigationContainer>
    <InvoiceContent ref={ref}>
      <div className="header">
        <img
          src={invoiceLogo}
          alt="x-pacy logo"
          style={{ width: '180.422px', height: '123.422px', objectFit: 'cover' }}
        />
        <HeaderContent>
          <h1>INVOICE</h1>
          <div className="invoice-content">
            <div className="invoice-num">
              <p>Invoice Number:</p>
              <span>{invoiceData?.invoiceNumber}</span>
            </div>
            <div className="invoice-num">
              <p>Issued Date: </p>
              <span>{formatDate(invoiceData?.issuedDate)}</span>
            </div>
            <div className="invoice-num">
              <p>Due Date: </p>
              <span>{formatDate(invoiceData?.dueDate)}</span>
            </div>
          </div>
        </HeaderContent>
      </div>
      <div className="body">
        <RecipentDetails>
          <h3>Recipient's Details</h3>
          <div className="details">
            <p>{invoiceData?.user?.firstname} {invoiceData?.user?.lastname}</p>
            <p>{invoiceData?.user?.email}</p>
          </div>
        </RecipentDetails>
        <div className={invoiceData?.status}>
          <span className={invoiceData?.status}>
            {invoiceData?.status?.charAt(0).toUpperCase() +
              invoiceData?.status?.slice(1).toLowerCase()}
          </span>
        </div>
      </div>
      <NotificationTable>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th style={{ textAlign: 'right' }}>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData?.items?.map((item, index) => (
            <tr key={index}>
              <td style={{ width: '50%' }}>
                <span>{item.description}</span>
              </td>
              <td>
                <span>₦{Number(item.unitPrice).toLocaleString()}</span>
              </td>
              <td>{item.quantity}</td>
              <td style={{ fontWeight: '700', textAlign: 'right' }}>
                ₦{Number(item.total).toLocaleString()}
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ fontWeight: '700' }}>Sub-total</td>
            <td></td>
            <td></td>
            <td style={{ fontWeight: '700', textAlign: 'right' }}>
              ₦{Number(invoiceData?.subTotal).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: '700' }}>Tax (7.5%)</td>
            <td></td>
            <td></td>
            <td style={{ fontWeight: '700', textAlign: 'right' }}>
              ₦{invoiceData?.tax}
            </td>
          </tr>
          <tr style={{ backgroundColor: '#C7D9E5' }}>
            <td style={{ fontWeight: '700', fontSize: '1.125rem' }}>TOTAL</td>
            <td></td>
            <td></td>
            <td style={{ fontWeight: '700', textAlign: 'right' }}>
              ₦{Number(invoiceData?.total).toLocaleString()}
            </td>
          </tr>
          {invoiceStatus === 'incomplete' && (
            <>
              <tr>
                <td style={{ fontWeight: '700' }}>Amount paid</td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: '700', textAlign: 'right' }}>
                  ₦{Number(invoiceData.amountPaid).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: '700' }}>Amount outstanding</td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: '700', textAlign: 'right' }}>
                  ₦{Number(invoiceData.amountOutstanding).toLocaleString()}
                </td>
              </tr>
              <tr style={{ backgroundColor: '#EBE1CE' }}>
                <td style={{ fontWeight: '700', fontSize: '1.125rem' }}>OUTSTANDING TOTAL</td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: '700', textAlign: 'right' }}>
                  ₦{Number(invoiceData.total).toLocaleString()}
                </td>
              </tr>
            </>
          )}
        </tbody>
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
            <strong>Address: <span>Wills Court Mbora, Citec Estate, Jabi, FCT, Nigeria</span></strong>
            <strong>Email: <span>support@xpacy.com</span></strong>
            <strong>Phone: <span>000000000</span></strong>
          </div>
          <div className="social-icons">
            <Facebook />
            <Twitter />
            <Instagram />
            <Tiktok />
          </div>
        </div>
        <img src={invoiceStamp} alt="stamp" style={{ width: '216.625px', height: '216.563px' }} />
      </FooterLogoContent>
    </InvoiceContent>
  </>
));

const Invoice = () => {
  const { invoiceStatus } = useContext(InvoiceStatusContext);
  const { userToken, server } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoiceData, setInvoiceData] = useState(null);
  
  // Create a ref for the printable content
  const componentRef = useRef();

  useEffect(() => {
    const getInvoice = async () => {
      const response = await fetchServer("GET", {}, userToken, `invoice/fetch-invoice/${id}`, server);
      console.log(response);
      if (!response.error) {
        setInvoiceData(response.data);
      }
    };
    getInvoice();
  }, [id, userToken, server]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr)
      .toLocaleDateString('en-GB')
      .split("/")
      .map((part, index) => (index === 2 ? part.slice(-2) : part))
      .join("/");
  };

  const handleDownload = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `Invoice_${invoiceData?.invoiceNumber || "invoice"}`,
  });

  if (!invoiceData) return <div>Loading...</div>;

  return (
    <InvoiceContainer>
      <PrintableInvoice
        ref={componentRef}
        invoiceData={invoiceData}
        formatDate={formatDate}
        invoiceStatus={invoiceStatus}
        navigate={navigate}
      />
      <ButtonContainer>
        <Button buttonType={{ primaryBtn: false }} onClick={handleDownload}>
          <LuDownload style={{ width: '24px', height: '24px' }} /> Download Invoice
        </Button>
        <Button buttonType={{ primaryBtn: true }}> Send Invoice</Button>
      </ButtonContainer>
    </InvoiceContainer>
  );
};

export default Invoice;
