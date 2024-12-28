import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import fetchServer from "../utils/serverutils/fetchServer";
export const UserContext = createContext({
    userdata: {},
    setUserdata: () => null,
    userToken: '',
    server: '',
    userProfile: null,
    setUserToken: () => null,
    getUserProfile: () => null,
});

export const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});
    const [userProfile, setUserProfile] = useState(null)
    const [userToken, setUserToken] = useState(Cookies.get('gt-jwt-br'));
    const [server] = useState("https://app.xpacy.com");

    const getUserProfile = async()=>{
        try{
            const resp = await fetchServer('GET', {},  userToken, 'user/fetch-profile', server);
            setUserProfile(resp.user);
            
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserProfile();
    }, [userProfile])

    const value = {
        userdata,
        setUserdata,
        userToken,
        setUserToken,
        userProfile,
        getUserProfile,
        server
    }
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    )
}