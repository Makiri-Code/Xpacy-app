import { Route, Routes } from "react-router-dom"
import Property from "../property-details/property.component"
import Photos from "../all-photos/photos.component";
import ApplicationForm from "../application-form/applicationForm";
import NotFound from "../not-found/not-found";
const Properties = ({ status}) => {

    return(
        <>
            <Routes>
                <Route index element={<Property status={status} />} />
                <Route path="property-photos" element={<Photos/>}/>
                
            </Routes>
        </>
    )
}

export default Properties;