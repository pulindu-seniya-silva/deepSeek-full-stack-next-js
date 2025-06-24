import React from "react";

const Message = ({role, content}) => {
  return( 
    <div className='flex flex-col items-center w-full max-w-3xl text-sm'>
        <div className={`flex flex-col w-full mb-8 ${role === 'user' && 'items-end'}`}>
            <div className={`group relative flex max-w-2xl py-3 rounded-xl ${role === 'user' ? 'bg-[#414158] px-5' : 'gap-3'}`}>
                <div className={`opacity-0 group-hover:opacity-100 absolute ${role === 'user' ? '-left-16 top-2.5' : 'left-9 -bottom-6'} transition-all`}>
                    <div className='flex items-center gap-2 opacity-70'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Message;
