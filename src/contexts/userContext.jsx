import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import fetchServer from "../utils/serverutils/fetchServer";
export const UserContext = createContext({
    userToken: '',
    server: '',
    userData: {},
    setUserData: () => {},
    userProfile: {},
    setUserProfile: () => {},
    setUserToken: () => {},
});

export const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    const [userProfile, setUserProfile] = useState({});
    const [userToken, setUserToken] = useState(Cookies.get('gt-jwt-br'));
    const [server] = useState("https://app.xpacy.com");



    const value = {
        userToken,
        setUserToken,
        userProfile,
        setUserProfile,
        userData,
        setUserData,
        server
    }
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    )
}