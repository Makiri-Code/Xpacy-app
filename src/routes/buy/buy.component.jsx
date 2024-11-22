
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Property from "../../routes/property/property.component"
const Buy = () => {
    return (
        <>
            <Routes>
                <Route index element={<Shop/>}/>
                <Route path=":property" element={<Property/>} />
            </Routes>
        </>
    );
}

export default Buy;