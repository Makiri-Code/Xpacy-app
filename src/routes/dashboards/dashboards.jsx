import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
const Dashboards = () => {
    const navigate = useNavigate()
    const {userdata} = useContext(UserContext);
    useEffect(() => {
        if(!userdata){
            navigate('/auth/log-in');
        }
    }, [])
    return (
        <>
            <Outlet/>
        </>
    );
}

export default Dashboards;