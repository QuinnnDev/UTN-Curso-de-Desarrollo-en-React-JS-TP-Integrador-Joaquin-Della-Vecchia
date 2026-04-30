import { createContext, useState } from "react";


const WindowStateContext = createContext();

const WindowStateContextProvider = ({ children }) => {

    const [windowState, setWindowState] = useState('home');
    const provider_value = {windowState, setWindowState};

    return (
        <WindowStateContext.Provider value={provider_value}>
            {children}
        </WindowStateContext.Provider>
    )
}

export {WindowStateContext, WindowStateContextProvider}