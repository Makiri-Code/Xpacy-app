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
import Bookings from "./bookings/Bokings";
import BlogManagement from "./blog/blog-management/BlogManagement";
import BlogEditPage from "./blog/blog-edit-page/BlogEditPage";
const Management = ({ isMobile }) => {
  const [profileImage, setProfileImage] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [allProperties, setAllProperties] = useState(null);
  const [propertiesPagination, setPropertiesPagination] = useState(null);
  const [allServices, setAllServices] = useState(null);
  const [allServiceProviders, setAllServiceProviders] = useState(null);
  const [allOwners, setAllOwners] = useState(null);
  const [allAdmin, setAllAdmin] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [allInvoices, setAllInvoices] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [allNotifications, setAllNotifications] = useState(null);
  const [allBookings, setAllBookings] = useState(null);
  const navigate = useNavigate();
  const { userToken, server, homePageBanners, setHomePageBanners } =
    useContext(UserContext);

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
      setProfileImage(
        response.admin?.display_picture
          ? `https://app.xpacy.com/src/upload/display_img/${response.admin.display_picture}`
          : userImage
      );
    };
    getAdminProfile();
  }, [userToken]);

  // Get multiple admin-related data in parallel
  useEffect(() => {
    if (!userToken) return;

    const getAdminData = async () => {
      try {
        const [
          allAdmins,
          allProperties,
          allServices,
          allOwners,
          allUsers,
          allNotifications,
          allServiceProviders,
          allInvoices,
          allFaqs,
          allBookings,
        ] = await Promise.all([
          fetchServer("GET", {}, userToken, "admin/fetch-admin", server),
          fetchServer(
            "GET",
            {},
            userToken,
            "admin/fetch-all-propreties",
            server
          ),
          fetchServer("GET", {}, userToken, "service/fetch-services", server),
          fetchServer(
            "GET",
            {},
            userToken,
            "admin/property-owner/fetch-propertowners",
            server
          ),
          fetchServer("GET", {}, userToken, "admin/users/fetch-users", server),
          fetchServer(
            "GET",
            {},
            userToken,
            "notification/fetch-notifications",
            server
          ),
          fetchServer(
            "GET",
            {},
            userToken,
            "service-provider/get-all-service-providers",
            server
          ),
          fetchServer("GET", {}, userToken, "invoice/fetch-invoices", server),
          fetchServer("GET", {}, userToken, "faq/get-all-faqs", server),
          fetchServer("GET", {}, userToken, "admin/fetch-bookings", server),
        ]);

        setAllAdmin(allAdmins.data);

        setAllProperties(allProperties.properties);
        setPropertiesPagination(allProperties.pagination);

        setAllServices(allServices.data);
        setAllOwners(allOwners.data);
        setAllUsers(allUsers.data);
        setAllNotifications(allNotifications.data);
        setAllServiceProviders(allServiceProviders.data);
        setAllInvoices(allInvoices.data);
        setFaqs(allFaqs.data);
        setAllBookings(allBookings);
      } catch (error) {
        console.error("Error fetching admin dashboard data:", error);
      }
    };

    getAdminData();
  }, [userToken]);
  // Get all banners

  // If token is expired
  useEffect(() => {
    if (isTokenExpired(userToken)) {
      navigate("/admin/auth/log-in");
      toast.error("Session expired please log-in to continue");
    }
  }, [userToken]);

  return (
    <>
      {userProfile &&
      allProperties &&
      allServices &&
      allOwners &&
      allAdmin &&
      allInvoices &&
      faqs &&
      allBookings ? (
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
                  propertiesPagination={propertiesPagination}
                  allBookings={allBookings}
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
              element={
                <Properties
                  isMobile={isMobile}
                  profileImage={profileImage}
                  allProperties={allProperties}
                  setAllProperties={setAllProperties}
                  propertiesPagination={propertiesPagination}
                />
              }
            />
            <Route
              path="bookings"
              element={
                <Bookings
                  isMobile={isMobile}
                  profileImage={profileImage}
                  allBookings={allBookings}
                />
              }
            />
            <Route
              path="blog-settings"
              element={
                <BlogManagement
                  isMobile={isMobile}
                  profileImage={profileImage}
                  allBookings={allBookings}
                />
              }
            />
            <Route
              path="services"
              element={
                <Services
                  isMobile={isMobile}
                  profileImage={profileImage}
                  allServices={allServices}
                  setAllServices={setAllServices}
                />
              }
            />
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
              element={
                <AdminPayments
                  isMobile={isMobile}
                  profileImage={profileImage}
                  allInvoices={allInvoices}
                />
              }
            />
            <Route
              path="settings"
              element={
                <Settings
                  isMobile={isMobile}
                  profileImage={profileImage}
                  homePageBanners={homePageBanners}
                  setHomePageBanners={setHomePageBanners}
                  setProfileImage={setProfileImage}
                  userProfile={userProfile}
                />
              }
            />
            <Route
              path="faq"
              element={
                <FaqComponent
                  isMobile={isMobile}
                  profileImage={profileImage}
                  faqs={faqs}
                  setFaqs={setFaqs}
                />
              }
            />
          </Route>
          <Route
            path="properties-details/:id"
            element={<PropertyDetailsComponent />}
          />
          <Route path="edit-blog/:id" element={<BlogEditPage />} />
          <Route path="blog" element={<BlogEditPage />} />
          <Route
            path="add-new-property"
            element={<AddNewProperty allOwners={allOwners} />}
          />
          <Route
            path="edit/:id"
            element={<EditProperty allOwners={allOwners} />}
          />
          <Route
            path="services-request-form/:id"
            element={<ServicesRequestForm />}
          />
          <Route
            path="assign-service-provider/:id"
            element={
              <AssignServiceProvider
                allServiceProviders={allServiceProviders}
              />
            }
          />
          <Route
            path="assign-service-request/:id"
            element={<AssignServiceRequest allServices={allServices} />}
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
          <Route
            path="service-request-list"
            element={
              <ServiceRequestList
                allServices={allServices}
                setAllServices={setAllServices}
                allServiceProviders={allServiceProviders}
                setAllServiceProviders={setAllServiceProviders}
              />
            }
          />
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
