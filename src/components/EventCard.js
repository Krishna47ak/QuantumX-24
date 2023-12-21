"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import useScrollBlock from '@/hooks/useScrollBlock'
import Link from 'next/link'

const EventCard = ({ data, from }) => {
    const pathname = usePathname()
    const [blockScroll, allowScroll] = useScrollBlock()

    const [onCard, setOnCard] = useState(false)

    useEffect(() => {
        if (onCard) {
            blockScroll()
        } else {
            allowScroll()
        }

        return () => {
            allowScroll()
        }

    }, [onCard])

    return (
        <div>
            <div onClick={() => (from != "home" && setOnCard(true))} className={`flex justify-center ${from != "home" ? "w-[68vw]" : "scale-90 md:scale-100"} min-[500px]:w-[52vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] xl:w-[18.5vw] h-[460px] md:hover:scale-105 duration-700 bg-gradient-to-t rounded-xl from-[#2f165a] to-[#1e0e34] mb-10 cursor-pointer`} style={{ "filter": "drop-shadow(0 0 0.3rem #ff10f0)" }} >
                <Image className='rounded-xl w-full object-fill shadow-md shadow-indigo-600' src={data?.img} width={250} height={250} alt='logo' />
            </div>
            {onCard && from != "home" && (
                <div className='fixed flex justify-center items-center py-32 z-20 bg-[#0000004d] top-0 bottom-0 left-0 right-0' >

                    <div onMouseLeave={() => setOnCard(false)} className='relative flex min-[1293px]:space-x-5 bg-[#0f172ad9] backdrop-blur-md w-[85vw] h-[30rem] md:h-[35rem] mt-16 rounded-3xl md:px-10 py-7 pt-10 md:py-12 lg:py-16' >
                        <Image onClick={() => setOnCard(false)} className='absolute right-5 md:right-9 top-2 md:top-5 cursor-pointer' src="/close.svg" width={24} height={24} alt='close' />
                        <div className='hidden min-[1293px]:block w-[18rem] min-w-[18rem] h-full' >
                            <Image className='w-full h-full rounded-2xl' src={data?.imgDesc} width={250} height={250} alt="Event" />
                        </div>
                        <div className='flex flex-col justify-between py-1 overflow-x-auto px-7 md:px-0' >
                            <div>
                                <div className='text-white sm:text-lg text-justify' >{data?.desc}</div>
                                <div className='bg-[#fafafa33] min-[853px]:flex justify-between items-end text-white p-5 mt-5 md:mt-10 rounded-xl' >
                                    <div >
                                        <p className='sm:text-lg font-medium text-slate-400 font-mono' >Start Date: {data?.date}</p>
                                        {((data?.id != "QX_EV_05") && (data?.id != "QX_EV_06") && (data?.id != "QX_EV_07")) && (
                                            <>
                                                {(data?.fixedSize || data?.minSize) && (
                                                    <div className='sm:text-lg font-medium text-slate-400 mt-2 font-mono' >Team size : {data?.fixedSize ? data?.fixedSize : `${data?.minSize} - ${data?.maxSize}`}</div>
                                                )}
                                                <p className='sm:text-xl font-medium text-[#fff523] mt-2 font-mono' >Fee: &#8377; {data?.fee}</p>
                                                {data?.prizePool && <p className='sm:text-xl font-medium text-[#fff523] mt-2 font-mono' >Prize pool: &#8377; {data?.prizePool}</p>}
                                            </>
                                        )}

                                    </div>
                                    <div>
                                        {data?.contact && <div className='flex items-start sm:items-center mt-2' >
                                            <Image className='mt-1' src="/contact.svg" width={20} height={20} alt='location' />
                                            <p className='ml-2 text-lg sm:text-xl font-medium text-slate-400 font-mono' >Contact: {data?.contact}</p>
                                        </div>}
                                        {data?.location && <div className='flex items-start sm:items-center mt-2' >
                                            <Image className='mt-1' src="/location.svg" width={20} height={20} alt='location' />
                                            <p className='ml-2 text-lg sm:text-xl font-medium text-slate-400 font-mono' >Location: {data?.location}</p>
                                        </div>}
                                        {((data?.id != "QX_EV_05") && (data?.id != "QX_EV_06") && (data?.id != "QX_EV_07")) && (
                                            <div className='flex items-center mt-2' >
                                                <Image src="/rule-book.svg" width={20} height={20} alt='location' />
                                                <a href={data?.ruleBook} target='_blank' className='ml-2 text-blue-600 text-lg sm:text-xl font-medium font-mono underline cursor-pointer select-none' >Rule book</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <Link href={`${pathname}/register/${data?.id}`} className="bg-[url('/btn-yellow.svg')] active:scale-95 bg-cover min-w-60 w-60 min-h-[3.1rem] mt-5 bg-no-repeat flex items-center justify-center font-semibold duration-200 z-10 cursor-pointer select-none" >
                                <p className='text-white text-lg font-mono' >Register</p>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventCard