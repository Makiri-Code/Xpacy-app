import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your custom CSS
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/userContext';
import { PageProvider } from './contexts/page.context';
import { InvoiceStatusProvider } from './contexts/invoice.context';
// import 'bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageProvider>
        <UserProvider>
          <InvoiceStatusProvider>
            <App />
          </InvoiceStatusProvider>
        </UserProvider>
      </PageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
