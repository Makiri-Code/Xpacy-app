import { Route, Routes } from "react-router-dom"
import OwnerSideBar from "./navigation/sidebar_navigation/owner-sidebar_navigation";
import Dashboard from "./dashboard/owner-dashboard";
import Notification from "./notification/notification";
import Properties from "./properties/properties";
import PropertyListing from "./properties/property-listing/property-listing";
import NotFound from "../../not-found/not-found";
import ServiceRequest from "./services/service-request/service-request";
import Services from "./services/services";
import ServiceRequestDetails from "./services/service-request details/service-request-details";
import ReschduleServiceRequest from "./services/reschdule-service-request/reschdule-service-request";
import OwnerPayments from "./payment/payment.component";
import Invoice from "./invoice/invoice";
import ProfileSettingsOwner from "./profile-settings/profileSettings";
import HelpAndSupport from "./help-support/help";
import Referral from "./referral/referral";

const OwnerDashboard = ({isMobile}) => {

    return(
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<OwnerSideBar isMobile={isMobile}/>}>
                <Route index element={<Dashboard isMobile={isMobile}/>} />
                <Route path="notification" element={<Notification isMobile={isMobile}/>} />
                <Route path="properties" element={<Properties isMobile={isMobile}/>} />
                <Route path="services" element={<Services isMobile={isMobile}/>} />
                <Route path="payments" element={<OwnerPayments isMobile={isMobile}/>} />
                <Route path="profile-settings" element={<ProfileSettingsOwner isMobile={isMobile}/>} />
                <Route path="support" element={<HelpAndSupport isMobile={isMobile}/>} />
                <Route path="referral" element={<Referral isMobile={isMobile}/>} />
            </Route>
            <Route path="new-property-listing" element={<PropertyListing isMobile={isMobile}/>} />
            <Route path="new-service-request" element={<ServiceRequest isMobile={isMobile}/>} />
            <Route path="service-request-details" element={<ServiceRequestDetails isMobile={isMobile}/>} />
            <Route path="reshedule-service-request" element={<ReschduleServiceRequest isMobile={isMobile}/>} />
            <Route path="invoice" element={<Invoice isMobile={isMobile}/>} />

        </Routes>
    );
};

export default OwnerDashboard;