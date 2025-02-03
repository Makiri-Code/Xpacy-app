import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "../../components/shop/shop.component";
import Properties from "../property/property.component";
import { PageContext } from "../../contexts/page.context";

const Search = () => {
    const {searchedProperties, searchedPagination} = useContext(PageContext);
    console.log(searchedProperties)
    const buyPropHeadings = {
        heading: `We've got ${searchedProperties.length} results for you`,
        subHeading: ''
    }

    return (
        <>
            <Routes>
                <Route index element={<Shop propHeadings={buyPropHeadings} page={'Rent'} propType={'Rent'} propertiesArray = {searchedProperties} pagination={searchedPagination}/>} />
                <Route path="property/*" element={<Properties/>} />
            </Routes>
        </>
    )
};

export default Search; 