import { Route, Routes } from "react-router-dom";
import Property from "../property-details/property.component";
import Photos from "../all-photos/photos.component";
import ApplicationForm from "../application-form/applicationForm";
import NotFound from "../not-found/not-found";
import Shop from "../../components/shop/shop.component";
const Properties = ({ formFields, setFormFields, isMobile }) => {
  return (
    <>
      <Routes>
        <Route index element={<Property />} />
        <Route path="/property-photos/:id" element={<Photos />} />
      </Routes>
    </>
  );
};

export default Properties;
