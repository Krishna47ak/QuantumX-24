"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import { hardwareWorkshopsData, softwareWorkshopsData } from '@/utils/workshop-details'
import { search } from '@/utils/contants'


const Workshops = () => {
    const [hardwareSearchData, setHardwareSearchData] = useState(hardwareWorkshopsData)
    const [softwareSearchData, setSoftwareSearchData] = useState(softwareWorkshopsData)
    const [hardwareSearchText, setHardwareSearchText] = useState('')
    const [softwareSearchText, setSoftwareSearchText] = useState('')

    useEffect(() => {
        if (hardwareSearchText) {
            const filteredData = search(hardwareWorkshopsData, hardwareSearchText)
            setHardwareSearchData(filteredData)
        } else {
            setHardwareSearchData(hardwareWorkshopsData)
        }
    }, [hardwareSearchText])

    useEffect(() => {
        if (softwareSearchText) {
            const filteredData = search(softwareWorkshopsData, softwareSearchText)
            setSoftwareSearchData(filteredData)
        } else {
            setSoftwareSearchData(softwareWorkshopsData)
        }
    }, [softwareSearchText])

    return (
        <div className="bg-black">
            <div className="relative bg-[url('/events-bg.jpg')] bg-center bg-cover bg-fixed py-[9vh] bg-no-repeat flex flex-col justify-center items-center min-h-screen overflow-hidden" >
                <Image className='scale-90 md:scale-110' src="/workshops-heading.png" width={600} height={600} alt='events' />
                <div className='absolute bottom-[10%] animate-bounce' >
                    <Image src="/scrolldown-arrow.svg" width={200} height={200} alt='scroll' />
                </div>
            </div>
            <div className="bg-[url('/events-bg(2).png')] bg-bottom bg-cover bg-fixed py-10 md:py-20 min-h-screen" >
                <div className='flex justify-center' >
                    <Image className='scale-90 md:scale-110' src="/hardware-heading.png" width={500} height={500} alt='hardware' />
                </div>
                <div className='flex justify-center' >
                    <div className='flex mt-10 md:mt-20 bg-[#ed00e9b3] backdrop-blur-sm border-2 border-gray-400 p-3 w-[22rem] md:w-[40rem] rounded-xl' >
                        <Image src="/search.svg" width={20} height={20} alt='search' />
                        <div className='w-[0.05rem] mx-2 bg-gray-400' />
                        <input value={hardwareSearchText} onChange={(e) => setHardwareSearchText(e.target.value)} className='w-full bg-transparent text-white outline-none' placeholder='Search...' />
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {hardwareSearchData?.map((event) => (
                        <EventCard key={event?.desc} data={event} />
                    ))}
                </div>

                <div className='flex justify-center my-10 mt-20' >
                    <Image className='scale-90 md:scale-110' src="/software-heading.png" width={500} height={500} alt='hardware' />
                </div>
                <div className='flex justify-center' >
                    <div className='flex mt-10 md:mt-20 bg-[#ed00e9b3] backdrop-blur-sm border-2 border-gray-400 p-3 w-[22rem] md:w-[40rem] rounded-xl' >
                        <Image src="/search.svg" width={20} height={20} alt='search' />
                        <div className='w-[0.05rem] mx-2 bg-gray-400' />
                        <input value={softwareSearchText} onChange={(e) => setSoftwareSearchText(e.target.value)} className='w-full bg-transparent text-white outline-none' placeholder='Search...' />
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {softwareSearchData?.map((event) => (
                        <EventCard key={event?.desc} data={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workshops