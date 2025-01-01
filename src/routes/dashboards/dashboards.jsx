import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
const Dashboards = () => {
    const navigate = useNavigate()
    const {userProfile} = useContext(UserContext);
    
    return (
        <>
            <Outlet/>
        </>
    );
}

export default Dashboards;