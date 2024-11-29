
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
// import Property from "../property-details/property.component"
import Properties from "../property/property.component";
const Buy = () => {
    return (
        <>
            <Routes>
                <Route index element={<Shop/>}/>
                <Route path="property/*" element={<Properties/>} />
            </Routes>
        </>
    );
}

export default Buy;