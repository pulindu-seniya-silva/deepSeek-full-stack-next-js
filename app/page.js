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
      <div classname="flex h-screen">
        {/* --sidebar-- */}
        <div className = "flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className = "md:hidden absolute px-4 to0p-6 flex items-center justify-between w-full">
            <Image classsName="rotate-180" src={assets.menu_icon}/>
            <Image classsName="rotate-180" src={assets.menu_icon}/>
          </div>
        </div>
      </div>
    </div>
  );
}
