import { createContext, useState, useEffect } from "react";

export const PageContext = createContext({
    nigerianStates: [],
});

export const PageProvider = ({children}) => {
    const [nigerianStates, setNigerianStates] = useState([]);
    const value = {nigerianStates}
    useEffect(() => {
            const states = async () => {
                try {
                    const statesArray = await fetch('https://app.xpacy.com/location/fetch-states', {method: 'GET'})
                    const response = await statesArray.json();
                    setNigerianStates(response.state)
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            states()
    }, []);

    return(
        <PageContext.Provider value={value}>{children}</PageContext.Provider>
    );
}

