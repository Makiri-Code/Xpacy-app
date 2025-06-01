import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate} from "react-router-dom"
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
import fetchServer from "../../../utils/serverutils/fetchServer";
import { UserContext } from "../../../contexts/userContext";
import isTokenExpired from "../../../utils/token/handleUserToken";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
const OwnerDashboard = ({isMobile}) => {

    const navigate = useNavigate();
    const {userToken, server} = useContext(UserContext);
    const [ownerProfile, setOwnerProfile] = useState(null);
    const [ownerProperties, setOwnerProperties] = useState(null);
    const [ownerServiceList, setOwnerServiceList] = useState(null);
    const [ownerNotifications, setOwnerNotifications] = useState(null);
    const [profileImage, setProfileImage] = useState('');
// Fetch Property owner profile
    useEffect(() => {
        const getOwnerProfile = async () => {
            const response = await fetchServer("GET", {}, userToken, 'property-owner/fetch-profile', server);
            setOwnerProfile(response.owner);
            setProfileImage(response?.owner?.display_picture);
        }
        getOwnerProfile();
    }, [userToken]);
// Fetch owner properties
    useEffect(() => {
        const getOwnerProperties = async () => {
            const response = await fetchServer("GET", {}, userToken, 'property-owner/fetch-properties', server);
            setOwnerProperties(response.properties);
        }
        getOwnerProperties();
    }, [userToken])
// Fetch owner services list
    useEffect(() => {
        const getOwnerServicesList = async () => {
            const response = await fetchServer("GET", {}, userToken, 'property-owner/fetch-services', server);
            setOwnerServiceList(response.data);
            console.log(response);
        }
        getOwnerServicesList();
    }, [userToken])
// Fetch notifications 
    useEffect(() => {
        const getOwnerNotification = async () => {
            const response = await fetchServer("GET", {}, userToken, 'notification/fetch-notifications', server);
            setOwnerNotifications(response.data);
        }
        getOwnerNotification()
    }, [userToken]);
// Fetch invoice
    // useEffect(() => {
    //     const getInvoiceList = async () => {
    //         const response = await fetchServer("GET", {}, userToken, 'invoice/fetch-invoices', server);
    //         console.log(response);
    //     }
    //     getInvoiceList();
    // }, [userToken])
// reroute to login with expired token
    useEffect(() => {
    if (isTokenExpired(userToken)) {
        navigate("/owner/auth/log-in");
        toast.error("Session expired please log-in to continue");
    }
}, [userToken]);
    return(
        <>
            {
                ownerProfile && ownerProperties && ownerServiceList && ownerNotifications ?
                (
                    <Routes>
                        <Route path="*" element={<NotFound/>} />
                            <Route 
                                path="/" 
                                element={
                                    <OwnerSideBar 
                                        isMobile={isMobile} 
                                        ownerProfile={ownerProfile}
                                    />
                                }>
                                <Route 
                                    index 
                                    element={
                                    <Dashboard 
                                        isMobile={isMobile}
                                        ownerProfile={ownerProfile}
                                        ownerProperties={ownerProperties}
                                        ownerServiceList={ownerServiceList}
                                        ownerNotifications={ownerNotifications}
                                        profileImage={profileImage}
                                    />
                                    } />
                                <Route 
                                    path="notification" 
                                    element={
                                    <Notification 
                                        isMobile={isMobile}
                                        ownerNotifications={ownerNotifications}
                                        profileImage={profileImage}
                                    />
                                    } />
                                <Route 
                                    path="properties" 
                                    element={
                                    <Properties 
                                        isMobile={isMobile}
                                        ownerProperties={ownerProperties}
                                        profileImage={profileImage}
                                    />} />
                                <Route 
                                    path="services" 
                                    element={
                                    <Services 
                                        isMobile={isMobile}
                                        ownerServiceList={ownerServiceList}
                                        profileImage={profileImage}
                                    />} />
                                <Route 
                                    path="payments" 
                                    element={
                                    <OwnerPayments 
                                        isMobile={isMobile}
                                        profileImage={profileImage}
                                        />} />
                                <Route 
                                    path="profile-settings" 
                                    element={
                                    <ProfileSettingsOwner 
                                        isMobile={isMobile}
                                        profileImage={profileImage}
                                        setProfileImage={setProfileImage}
                                        ownerProfile={ownerProfile}
                                        setOwnerProfile={setOwnerProfile}
                                        />} />
                                <Route 
                                    path="support" 
                                    element={
                                    <HelpAndSupport 
                                        isMobile={isMobile}
                                        profileImage={profileImage}
                                    />} />
                                <Route path="referral" element={<Referral isMobile={isMobile}/>} />
                            </Route> 
                        <Route path="new-property-listing" element={<PropertyListing isMobile={isMobile}/>} />
                        <Route path="new-service-request" element={<ServiceRequest isMobile={isMobile}/>} />
                        <Route path="service-request-details" element={<ServiceRequestDetails isMobile={isMobile}/>} />
                        <Route path="reshedule-service-request" element={<ReschduleServiceRequest isMobile={isMobile}/>} />
                        <Route path="invoice" element={<Invoice isMobile={isMobile}/>} />
            
                    </Routes>
                    ) :
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
            }
        </>
    );
};

export default OwnerDashboard;