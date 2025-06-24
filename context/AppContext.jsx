"use client"
import { createContext, useContext} from "react";
import { useUser } from "@clerk/nextjs";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({children}) => {
    const {user} = useUser()

    const value = {
        user
    }
    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}