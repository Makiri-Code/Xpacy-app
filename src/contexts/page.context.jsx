import { createContext, useState } from "react";

export const AuthPageContext = createContext({
    showAuthPage: false,
    setShowAuthPage: () => null
});

export const AuthPageProvider = ({children}) => {
    const [showAuthPage, setShowAuthPage] = useState(false);
    const value = {showAuthPage, setShowAuthPage}
    return(
        <AuthPageContext.Provider value={value}>{children}</AuthPageContext.Provider>
    );
}

