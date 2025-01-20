import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import { PageContext } from "../../contexts/page.context";
const Buy = () => {
    const {propertiesArray} = useContext(PageContext);
    const buyPropHeadings = {
        heading: 'Properties For Sale',
        subHeading: 'Search for properties on sale'
    }
    return (
        <>
            <Routes>
                <Route index element={<Shop propHeadings={buyPropHeadings} page={'Buy'}/>}/>
                <Route path="property/*" element={<Properties Properties = {propertiesArray} />} />
            </Routes>
        </>
    );
}

export default Buy;