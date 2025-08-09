import { Outlet } from "react-router-dom";
import ShopSidebar from "../../components/shop-side-bar/ShopSidebar";
import HeaderNav from "../../components/header-navigation/HeaderNav";
function AppLayout({
  isMobile,
  showMobileSidebar,
  setShowMobileSidebar,
  formFields,
  setFormFields,
  latestProperties,
  heading,
  subHeading,
}) {
  return (
    <div className="shop-container d-flex flex-column align-items-center align-self-stretch">
      <div className="header d-flex flex-column align-items-start">
        <HeaderNav />
        <div className="header-text-container">
          <h1 className="header-heading">{heading}</h1>
          <p className="header-text">{subHeading}</p>
        </div>
      </div>
      <div className="main-container">
        <ShopSidebar
          isMobile={isMobile}
          showMobileSidebar={showMobileSidebar}
          setShowMobileSidebar={setShowMobileSidebar}
          latestProperties={latestProperties}
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
