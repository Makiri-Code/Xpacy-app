import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";

const Search = () => {
    const buyPropHeadings = {
        heading: "We've got 67 results for you",
        subHeading: ''
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

export default Search; 