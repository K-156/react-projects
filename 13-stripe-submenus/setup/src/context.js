import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSiderbarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSideBar = () => {
        setIsSidebarOpen(true);
    }

    const closeSideBar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider value={{
        isSubmenuOpen,isSiderbarOpen, openSubmenu, openSideBar, closeSubmenu, closeSideBar
    }}>
        {children}
    </AppContext.Provider>
} 

export const useGlobalContext = () => {
    return useContext(AppContext);
}
