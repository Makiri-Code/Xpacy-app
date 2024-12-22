import { createContext, useState } from "react";

export const UserContext = createContext({
    userdata: {},
    setUserdata: () => null,
    userToken: '',
    setUserToken: () => null
});

export const UserProvider = ({children}) => {
    const [userdata, setUserdata] = useState({});
    const [userToken, setUserToken] = useState('');
    const value = {
        userdata,
        setUserdata,
        userToken,
        setUserToken
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}