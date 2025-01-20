import { Route, Routes } from "react-router-dom"
import Property from "../property-details/property.component"
import Photos from "../all-photos/photos.component";
import ApplicationForm from "../application-form/applicationForm";
const Properties = ({properties}) => {
    return(
        <>
            <Routes>
                <Route index element={<Property properties={properties} />} />
                <Route path=":property-photos" element={<Photos/>}/>
                <Route path="application-form" element={<ApplicationForm/>} />
            </Routes>
        </>
    )
}

export default Properties;