import { createContext, useState, useEffect } from "react";

export const PageContext = createContext({
    propertiesArray: [],
    setPropertiesArray: () => {},
    propertyObj: {},
    setPropertyObj: () => {},
    pagination: {}
});

export const PageProvider = ({children}) => {
    const [propertiesArray, setPropertiesArray] = useState([]);
    const [propertyObj, setPropertyObj] = useState({});
    const [pagination, setPagination] = useState({});

    const value = {propertiesArray, pagination, propertyObj, setPropertyObj, setPropertiesArray};

    useEffect(() => {
            const getProperties = async () => {
                try {
                    const properties = await fetch('https://app.xpacy.com/property/fetch-properties', {method: 'GET'})
                    const response = await properties.json();
                    setPropertiesArray(response.properties);
                    setPagination(response.pagination);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            getProperties();
    }, []);

    return(
        <PageContext.Provider value={value}>{children}</PageContext.Provider>
    );
}

