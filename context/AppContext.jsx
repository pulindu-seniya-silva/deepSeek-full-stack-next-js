"use client"
import { createContext, useContext, useEffect} from "react";
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
        
         fetchUsersChat();    

        } catch (error) {
            toast.error(errorToJSON.message)
        }
    }

    const fetchUsersChat = async () => {
        try {
            const token = await getToken();
            const{data} = await axios.post('/api/chat/get', {}, {headers:{
                Authorization: `Bearer ${token}`
            }})
            if(data.success){
                console.log(data.data);
                setChats(data.data)

                //if user has no chats
                if(data.data.length === 0) {
                    await createNewChat();
                    return fetchUsersChat();
                }else{
                    data.data.sort((a, b)=> new Date(b.updateAt) - new Date(a.updateAt));

                    //set recently updated chat as selected chat
                    setSelectedChat(data.data[0]);
                    console.log(data.data[0]);
                }
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(data.message)
        }
    }

    useEffect(()=>{
        if(user) {
            fetchUsersChat();
        }
    }, [user]) 
    const value = {
        user,
        chats,
        setChats,
        selectedChat,
        setSelectedChat,
        fetchUsersChat,
        createNewChat
    }
    return <AppContext.Provider value={value} >{children}</AppContext.Provider>
}