import { useEffect, useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ManagementDashboard from "./dashboard/management_dashboard";
import NotFound from "../../not-found/not-found";
import AdminSideBar from "./navigation/sidebar_navigation/sidebar_navigation";
import Notification from "./notification/notification";
import Properties from "./properties/properties";
import AddNewProperty from "./properties/add-new-property/add-new-property";
import EditProperty from "./properties/edit-property/edit-property";
import Services from "./services/services-dashboard/services";
import ServicesRequestForm from "./services/service-request-form/service-request-form";
import AssignServiceProvider from "./services/assign-service-provider/assign-service-provider";
import UsersComponent from "./users/users.component";
import UserDetails from "./user-details/user-details.component";
import IssueInvoice from "./invoice/issue-invoice.component";
import AdminDetails from "./admin-details/admin-details";
import AdminPayments from "./payment/payment.component";
import Invoice from "./invoice/invoice";
import Settings from "./settings/settings.component";
import FaqComponent from "./FAQs/faq.component";
import PropertyDetailsComponent from "./properties/property-details/property-details";
import ServiceRequestList from "./services/service-request-list/service-request-list";
import AssignServiceRequest from "./services/assign-service-request/assign-service-request";
import ServicesProviderDetails from "./services/service-provider-details copy/service-provider-details";
import EditServiceProvider from "./services/edit-sevice-provider/edit-provider-details";
import AddNewProvider from "./services/add-new-provider/add-new-provider";
import fetchServer from "../../../utils/serverutils/fetchServer";
import { PageContext } from "../../../contexts/page.context";
import { UserContext } from "../../../contexts/userContext";
import isTokenExpired from "../../../utils/token/handleUserToken";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
const Management = ({ isMobile }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [allProperties, setAllProperties] = useState(null);
  const [allServices, setAllServices] = useState(null);
  const [allOwners, setAllOwners] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [allNotifications, setAllNotifications] = useState(null);
  const navigate = useNavigate();
  const {} = useContext(PageContext);
  const { userToken, server } = useContext(UserContext);
  // Get admin profile
  useEffect(() => {
    const getAdminProfile = async () => {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        "admin/fetch-admin-profile",
        server
      );
      setUserProfile(response.admin);
    };
    getAdminProfile();
  }, [userToken]);
  // Get all properties
  useEffect(() => {
    const getAllProperties = async () => {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        "property/fetch-properties",
        server
      );
      setAllProperties(response);
    };
    getAllProperties();
  }, [userToken]);
  // Get all services
  useEffect(() => {
    const getAllServices = async () => {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        "service/fetch-services",
        server
      );
      setAllServices(response.data);
    };
    getAllServices();
  }, [userToken]);
//    Get all Owners
    useEffect(() => {
        const getAllOwners = async () => {
        const response = await fetchServer(
            "GET",
            {},
            userToken,
            "admin/property-owner/fetch-propertowners",
            server
        );
        setAllOwners(response.data);
        };
        getAllOwners();
    }, [userToken]);
    // Get all users
    useEffect(() => {
        const getAllUsers = async () => {
        const response = await fetchServer(
            "GET",
            {},
            userToken,
            "admin/users/fetch-users",
            server
        );
        setAllUsers(response.data);
        };
        getAllUsers();
    },  [userToken]);
    // Get all notifications
    useEffect(() => {
        const getAllNotifications = async () => {
        const response = await fetchServer(
            "GET",
            {},
            userToken,
            "notification/fetch-notifications",
            server
        );
        setAllNotifications(response.data);
        };
        getAllNotifications();
    },  [userToken]);
// If token is expired
  useEffect(() => {
    if (isTokenExpired(userToken)) {
      navigate("/admin/auth/log-in");
      toast.error("Session expired please log-in to continue");
    }
  }, [userToken]);

  return (
    <>
      {userProfile && allProperties && allServices && allOwners ? (
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<AdminSideBar isMobile={isMobile} />}>
            <Route
              index
              element={
                <ManagementDashboard
                  isMobile={isMobile}
                  userProfile={userProfile}
                  allProperties={allProperties}
                  allServices={allServices}
                  allOwners={allOwners}
                  allUsers={allUsers}
                  allNotifications={allNotifications}
                />
              }
            />
            <Route
              path="notification"
              element={<Notification isMobile={isMobile} />}
            />
            <Route
              path="properties"
              element={<Properties isMobile={isMobile} />}
            />
            <Route path="services" element={<Services isMobile={isMobile} />} />
            <Route
              path="users"
              element={
                <UsersComponent isMobile={isMobile} userProfile={userProfile} />
              }
            />
            <Route
              path="payments"
              element={<AdminPayments isMobile={isMobile} />}
            />
            <Route path="settings" element={<Settings isMobile={isMobile} />} />
            <Route path="faq" element={<FaqComponent isMobile={isMobile} />} />
          </Route>
          <Route
            path="properties-details"
            element={<PropertyDetailsComponent />}
          />
          <Route 
            path="add-new-property" 
            element={
                <AddNewProperty 
                    allOwners={allOwners}
                />
            } 
            />
          <Route path="edit" element={<EditProperty />} />
          <Route
            path="services-request-form"
            element={<ServicesRequestForm />}
          />
          <Route
            path="assign-service-provider"
            element={<AssignServiceProvider />}
          />
          <Route
            path="assign-service-request"
            element={<AssignServiceRequest />}
          />
          <Route
            path="service-provider-details"
            element={<ServicesProviderDetails />}
          />
          <Route path="edit-provider" element={<EditServiceProvider />} />
          <Route path="add-new-provider" element={<AddNewProvider />} />
          <Route path="user-details" element={<UserDetails />} />
          <Route path="admin-details" element={<AdminDetails />} />
          <Route path="issue-invoice" element={<IssueInvoice />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="service-request-list" element={<ServiceRequestList />} />
        </Routes>
      ) : (
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
      )}
    </>
  );
};

export default Management;
