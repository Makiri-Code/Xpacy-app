import { createContext, useState } from "react";

export const InvoiceStatusContext = createContext({

    invoiceStatus: '',
    setInvoiceStatus: () => {},
});


export const InvoiceStatusProvider = ({children}) => {
    const [invoiceStatus, setInvoiceStatus] = useState('');
    const value = {
        invoiceStatus,
        setInvoiceStatus,
    }
    return(
        <InvoiceStatusContext.Provider value={value}>{children}</InvoiceStatusContext.Provider>
    )

}