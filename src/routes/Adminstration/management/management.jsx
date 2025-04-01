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
import userImage from "../../../assets/user-profile-img.svg";
const Management = ({ isMobile }) => {
  const [profileImage, setProfileImage] = useState('')
  const [userProfile, setUserProfile] = useState(null);
  const [allProperties, setAllProperties] = useState(null);
  const [allServices, setAllServices] = useState(null);
  const [allServiceProviders, setAllServiceProviders] = useState(null);
  const [allOwners, setAllOwners] = useState(null);
  const [allAdmin, setAllAdmin] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [allInvoices, setAllInvoices] = useState(null);
  const [faqs, setFaqs] = useState(null);
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
      setProfileImage(response.admin?.display_picture ? `https://app.xpacy.com/src/upload/display_img/${response.admin.display_picture}` : userImage )
    };
    getAdminProfile();
  }, [userToken]);
  // Get all admin
  useEffect(() => {
    const getAllAdmin = async () => {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        "admin/fetch-admin",
        server
      );
      setAllAdmin(response.data);
    };
    getAllAdmin();
  }, [userToken]);
  // Get all properties
  useEffect(() => {
    const getAllProperties = async () => {
      const response = await fetchServer(
        "GET",
        {},
        userToken,
        "admin/fetch-all-propreties",
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
  // Get all Owners
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
  // Get Service providers
  useEffect(() => {
    const getAllServiceProviders = async () => {
    const response = await fetchServer("GET", {}, userToken, 'service-provider/get-all-service-providers', server);
    setAllServiceProviders(response.data);
    }
    getAllServiceProviders();
  }, []);
  // Get Invoices
  useEffect(() => {
    const getAllInvoices = async () => {
      const response = await fetchServer("GET", {}, userToken, 'invoice/fetch-invoices', server);
      setAllInvoices(response.data);
    } 
    getAllInvoices();
  }, []);
  // Get FAQs
  useEffect(() => {
    const getAllFaqs = async () => {
      const response = await fetchServer("GET", {}, userToken, 'faq/get-all-faqs', server);
      console.log(response);
      setFaqs(response.data);
    } 
    getAllFaqs();
  }, []);
  // If token is expired
  useEffect(() => {
    if (isTokenExpired(userToken)) {
      navigate("/admin/auth/log-in");
      toast.error("Session expired please log-in to continue");
    }
  }, [userToken]);
  console.log(userProfile)
  return (
    <>
      {userProfile && allProperties && allServices && allOwners && allAdmin && allInvoices && faqs ? (
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
                  profileImage={profileImage}
                />
              }
            />
            <Route
              path="notification"
              element={
                <Notification 
                  isMobile={isMobile} 
                  allNotifications={allNotifications}
                  profileImage={profileImage}
                />
              }
            />
            <Route
              path="properties"
              element={<Properties isMobile={isMobile} profileImage={profileImage} allProperties={allProperties} setAllProperties={setAllProperties}/>}
            />
            <Route path="services" element={<Services isMobile={isMobile} profileImage={profileImage} allServices={allServices} setAllServices={setAllServices}/>} />
            <Route
              path="users"
              element={
                <UsersComponent 
                  isMobile={isMobile} 
                  userProfile={userProfile}  
                  allUsers={allUsers} 
                  allOwners={allOwners}
                  allAdmin={allAdmin}
                  profileImage={profileImage}
                />
              }
            />
            <Route
              path="payments"
              element={<AdminPayments isMobile={isMobile} profileImage={profileImage} allInvoices={allInvoices}/>}
            />
            <Route path="settings" element={<Settings isMobile={isMobile} profileImage={profileImage} setProfileImage={setProfileImage} userProfile={userProfile}/>} />
            <Route path="faq" element={<FaqComponent isMobile={isMobile} profileImage={profileImage} faqs={faqs} setFaqs= {setFaqs}/>} />
          </Route>
          <Route
            path="properties-details/:id"
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
          <Route path="edit/:id" element={<EditProperty />} />
          <Route
            path="services-request-form/:id"
            element={<ServicesRequestForm />}
          />
          <Route
            path="assign-service-provider/:id"
            element={<AssignServiceProvider allServiceProviders={allServiceProviders} />}
          />
          <Route
            path="assign-service-request/:id"
            element={<AssignServiceRequest allServices={allServices}/>}
          />
          <Route
            path="service-provider-details/:id"
            element={<ServicesProviderDetails />}
          />
          <Route path="edit-provider/:id" element={<EditServiceProvider />} />
          <Route path="add-new-provider" element={<AddNewProvider />} />
          <Route path="user-details/:id" element={<UserDetails />} />
          <Route path="admin-details/:id" element={<AdminDetails />} />
          <Route path="issue-invoice/:id" element={<IssueInvoice />} />
          <Route path="invoice/:id" element={<Invoice />} />
          <Route path="service-request-list" element={<ServiceRequestList allServices={allServices} setAllServices={setAllServices} allServiceProviders={allServiceProviders} setAllServiceProviders={setAllServiceProviders} />} />
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
