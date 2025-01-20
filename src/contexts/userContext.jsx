import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import fetchServer from "../utils/serverutils/fetchServer";
export const UserContext = createContext({
    userToken: '',
    server: '',
    userData: null,
    signupUser: null,
    setSignupUser: () => {},
    setUserData: () => {},
    userProfile: null,
    setUserProfile: () => {},
    setUserToken: () => {},
});

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    const [userProfile, setUserProfile] = useState(null);
    const [userToken, setUserToken] = useState(Cookies.get('gt-jwt-br'));
    const [signupUser, setSignupUser] = useState(null);
    const [server] = useState("https://app.xpacy.com");



    const value = { 
        setUserToken,
        userProfile,
        setUserProfile,
        userData,
        setUserData,
        server,
        signupUser,
        setSignupUser, 
        userToken
    }
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    )
}