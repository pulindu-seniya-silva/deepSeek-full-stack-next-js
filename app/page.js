'use client'
import Image from "next/image";
import { useState} from "react";
import { assets } from "../assets/assets";

export default function Home() {

  const [expand, setExpand] = useState(false)
  const [message, setMessages] = useState([])
  const [isLoading, setIsloading] = useState(false)

  return (
    <div>
      <div className="flex h-screen">
        {/* --sidebar-- */}
        <div className = "flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className = "md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <Image onClick={()=> (expand ? setExpand(false) : setExpand(true))}
            className="rotate-180" src={assets.menu_icon} alt=""/>
            <Image className="opacity-70" src={assets.chat_icon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
