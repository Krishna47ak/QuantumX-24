"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import EventCard from '@/components/EventCard'
import { eventsData } from '@/utils/event-details'
import { search } from '@/utils/contants'


const Events = () => {
    const [searchData, setSearchData] = useState(eventsData)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText) {
            const filteredData = search(eventsData, searchText)
            setSearchData(filteredData)
        } else {
            setSearchData(eventsData)
        }
    }, [searchText])



    return (
        <div className="bg-black">
            <div className="bg-[url('/events-bg.jpg')] bg-center bg-cover bg-fixed py-[9vh] bg-no-repeat flex flex-col justify-center items-center min-h-screen overflow-hidden" >
                <Image className='scale-75 md:scale-100' src="/events-heading.png" width={600} height={600} alt='events' />
            </div>
            <div className="bg-[url('/events-bg(2).png')] bg-bottom bg-cover bg-fixed min-h-screen" >
                <div className='flex justify-center' >
                    <div className='flex mt-10 md:mt-20 bg-[#ed00e9b3] backdrop-blur-sm border-2 border-gray-400 p-3 w-[27rem] md:w-[40rem] rounded-xl' >
                        <Image src="/search.svg" width={20} height={20} alt='search' />
                        <div className='w-[0.05rem] mx-2 bg-gray-400' />
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className='w-full bg-transparent text-white outline-none' placeholder='Search...' />
                    </div>
                </div>
                <div className='relative grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {searchData?.map((event) => (
                        <EventCard key={event?.id} data={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Events