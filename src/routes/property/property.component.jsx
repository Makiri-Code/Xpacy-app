import { useParams } from "react-router-dom";

const Property = () => {
    const {property} = useParams();
    console.log(property)
    return(
        <h1>This is the Property page</h1>
    );
}

export default Property; 