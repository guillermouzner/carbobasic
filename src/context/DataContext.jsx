import React, { createContext, useState } from "react";

export const DataContex = createContext();

export const DataProvider = ({ children }) => {
    const [idiom, setIdiom] = useState("English");

    return (
        <DataContex.Provider value={{ idiom, setIdiom }}>
            {children}
        </DataContex.Provider>
    );
};
