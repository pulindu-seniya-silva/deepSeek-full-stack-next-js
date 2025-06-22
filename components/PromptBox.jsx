import React from 'react'
import assets from '../assets/assets.js'

const PromptBox = () => {

    return (
        <form className={`w-ful ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
            <textarea className='outline-none w-full resize-none overflow-hidden break-words bg-transparent'
            rows={2}
            placeholder='Message DeepSeek' required/>
            
            <div classname='flex items-center justify-between text-sm'>
                <div className='flex items-center gap-2'>
                    <p classname='flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
                        <Image className='h-5' src={assets.deepthink_icon} alt=''/>
                        DeepThink (R1)
                    </p>

                     <p className='flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition'>
                        <Image className='h-5' src={assets.search_icon} alt=''/>
                        Search (R1)
                    </p>
                </div>

                <div className='flex items-center gap-2'>
                    <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt=''/>
                    <button>
                        <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt=''/>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default PromptBox;