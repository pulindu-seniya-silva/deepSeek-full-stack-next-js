'use client'
import Image from "next/image";
import { useState} from "react";
import { assets } from "../assets/assets";
import Sidebar from "../components/Sidebar"
import PromptBox from "../components/PromptBox";
import Message from "../components/Message"

export default function Home() {

  const [expand, setExpand] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const {selectedChat} = useAppContext()
  const containerRef = useRef(null)

  useEffect(()=>{
    if(selectedChat){
      setMessages(selectedChat.messages)
    }
  },[selectedChat])

   useEffect(()=>{
    if(containerRef.current){
      containerRef.current.scrollTo ({
        top: containerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  },[messages])
  
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand}/>
        <div className = "flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className = "md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={()=> (expand ? setExpand(false) : setExpand(true))}
            className="rotate-180" src={assets.menu_icon} alt=""/>
            <Image className="opacity-70" src={assets.chat_icon} alt=""/>
          </div>

          {message.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-16"/>
                <p className="text-2xl font-medium">Hi, I'm DeepSeek.</p>
              </div>
              <p className="text-sm mt-2">How can I help you today?</p>
            </>
          ):
          (
          <div ref={containerRef}>
            <p className="fixed top-8 border-transparent hover:border-gray-500/50 py-1 px-2 rounded-lg font-semibold mb-6">{selectedChat.name}</p>
            {messages.map((msg, index)=>(
                <Message key={index} role={msg.role} content={msg.content}/>
            ))}
            
          </div>
        )
        }     
        <PromptBox isLoading={isLoading} setIsLoading={setIsloading}/>
        <p className="text-xs absolute bottom-1 text-gray-500">AI-generated, for reference only</p>   

        </div>
      </div>
    </div>
  );
}
