"use client"
import { useState } from 'react'
import Image from 'next/image'

const EventCard = ({ data, from }) => {

    const [onCard, setOnCard] = useState(false)
    return (
        <div >
            <div onClick={() => setOnCard(true)} className={`flex justify-center ${from != "home" ? "w-[68vw]" : "scale-90 md:scale-100"  } md:w-[30vw] lg:w-[18.5vw] h-[460px] hover:scale-105 duration-700 bg-gradient-to-t rounded-xl from-[#2f165a] to-[#1e0e34] mb-10 cursor-pointer`} style={{ "filter": "drop-shadow(0 0 0.3rem #ff10f0)" }} >
                <Image className='rounded-xl w-full object-fill shadow-md shadow-indigo-600' src={data?.img} width={250} height={250} alt='logo' />
            </div>
            {onCard && from != "home" && (
                <div className='fixed flex justify-center items-center py-32 z-20 bg-[#0000001a] backdrop-blur-sm top-0 bottom-0 left-0 right-0' >
                    <div onMouseLeave={() => setOnCard(false)} className='relative flex space-x-5 bg-[#0f172ad9] backdrop-blur-md w-[80vw] h-[30rem] md:h-[35rem] mt-16 rounded-3xl px-5 md:px-10 py-16' >
                        <Image onClick={() => setOnCard(false)} className='absolute right-5 md:right-10 top-5 cursor-pointer' src="/close.svg" width={24} height={24} alt='close' />
                        <div className='hidden md:block w-[18rem] min-w-[18rem] h-full' >
                            <Image className='w-full h-full rounded-2xl' src={data?.imgDesc} width={250} height={250} alt="Event" />
                        </div>
                        <div className='flex flex-col justify-between py-1' >
                            <div>
                                <div className='text-white text-lg text-justify' >{data?.desc}</div>
                                <div className='bg-[#fafafa33] hidden min-[1418px]:flex justify-between items-end text-white p-5 mt-10 rounded-xl' >
                                    <div >
                                        <p className='text-lg font-medium text-slate-400 font-mono' >Start Date: 22.9.23</p>
                                        <div className='text-lg font-medium text-slate-400 mt-2 font-mono' >Team size : 1 - 4</div>
                                        <p className='text-xl font-medium text-[#fff523] mt-2 font-mono' >Fee: &#8377; 1000</p>
                                        <p className='text-xl font-medium text-[#fff523] mt-2 font-mono' >Prize pool: &#8377; 10000</p>
                                    </div>
                                    <div>
                                        <div className='flex items-center' >
                                            <Image src="/rule-book.svg" width={20} height={20} alt='location' />
                                            <a href='https://docs.google.com/document/d/1zyhg_LI_78JSy3HN1vhrrcDJG0Ga-M-Qmti_OOc-AxU/edit' target='_blank' className='ml-2 text-blue-600 text-xl font-medium font-mono underline cursor-pointer select-none' >Rule book</a>
                                        </div>
                                        <div className='flex items-center mt-2' >
                                            <Image src="/location.svg" width={20} height={20} alt='location' />
                                            <p className='ml-2 text-xl font-medium text-slate-400 font-mono' >Location: Basketball Quadrangle, NHCE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[url('/btn-yellow.svg')] active:scale-95 bg-cover w-60 h-[3.1rem] bg-no-repeat flex items-center justify-center font-semibold duration-200 z-10 cursor-pointer select-none" >
                                <p className='text-white text-lg font-mono' >Register</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventCard