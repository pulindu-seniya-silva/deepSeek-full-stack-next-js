"use client"
import { createContext, useContext} from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({children}) => {
    const {user} = useUser()
    const {getToken} = useAuth()

    const [chats, setChats] = useState([]);
    const [selectedChat, selectedSetChat] = useState(null);

    const createNewChat = async () => {
        try {
            if(!user) return null;
            const token = await getToken();

            await axios.post('/api/chat/create', {}, {headers:{
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            toast.error(errorToJSON.message)
        }
    }

    const fetchUsersChat = async () => {
        try {
            const token = await getToken();
        } catch (error) {
            
        }
    }

    const value = {
        user
    }
    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}