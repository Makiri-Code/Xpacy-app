import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";

const Buy = () => {
    const buyPropHeadings = {
        heading: 'Properties For Sale',
        subHeading: 'Search for properties on sale'
    }
    return (
        <>
            <Routes>
                <Route index element={<Shop propHeadings={buyPropHeadings} page={'Buy'}/>}/>
                <Route path="property/*" element={<Properties/>} />
            </Routes>
        </>
    );
}

export default Buy;