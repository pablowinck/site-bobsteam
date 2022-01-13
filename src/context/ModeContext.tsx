import React, { createContext, useState } from 'react';

type ModeContextType = {
    mode: string;
    setMode: (value: string) => void;
};

const ModeContext = createContext({} as ModeContextType);

const ModeContextProvider: React.FC = ({ children }) => {
    const [mode, setMode] = useState('light');

    const value = {
        mode: mode,
        setMode: setMode
    };

    return (
        <ModeContext.Provider value={value}>{children}</ModeContext.Provider>
    );
};

export const useModeContext = () => {
    const context = React.useContext(ModeContext);

    if (!context) {
        throw new Error(
            'useModeContext must be used within a ModeContextProvider'
        );
    }

    return context;
};

export default ModeContextProvider;
