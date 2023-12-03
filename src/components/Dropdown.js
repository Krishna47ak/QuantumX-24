"use client"
import Image from 'next/image'
import { useState } from 'react'

const Dropdown = ({ ques, ans }) => {
    const [onFAQ, setOnFAQ] = useState(false)

    return (
        <div className='text-white mb-3 md:mb-5 text-xs md:text-base' >
            <div onClick={() => setOnFAQ(!onFAQ)} className='flex justify-between border-2 border-white px-5 py-4 rounded-md select-none' >
                <p>{ques}</p>
                <Image className={`w-7 h-4 ml-2 duration-300 ${onFAQ ? '-rotate-180' : 'rotate-0'} `} src="/pink-arrow.png" width={35} height={1} alt='arrow' />
            </div>
            <div className={`p-5 ${onFAQ ? 'translate-y-0' : '-translate-y-full hidden'}`} >{ans}</div>
        </div>
    )
}

export default Dropdown