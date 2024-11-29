import { Route, Routes } from "react-router-dom"
import Property from "../property-details/property.component"
import Photos from "../all-photos/photos.component";

const Properties = () => {
    return(
        <>
            <Routes>
                <Route index element={<Property/>} />
                <Route path=":property-photos" element={<Photos/>}/>
            </Routes>
        </>
    )
}

export default Properties;