import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";

const Rent = () => {
    const buyPropHeadings = {
        heading: 'Properties For Rent',
        subHeading: 'Search for properties on rent'
    }

    return (
        <>
        <Routes>
            <Route index element={<Shop propHeadings={buyPropHeadings} page={'Rent'} propType={'Rent'}/>}/>
            <Route path="property/*" element={<Properties/>} />
        </Routes>
    </>
    )
};

export default Rent; 