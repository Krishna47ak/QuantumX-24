"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import { workshopsdata } from '@/utils/workshop-details'
import { search } from '@/utils/contants'


const Workshops = () => {
    const [searchData, setSearchData] = useState(workshopsdata)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText) {
            const filteredData = search(workshopsdata, searchText)
            setSearchData(filteredData)
        } else {
            setSearchData(workshopsdata)
        }
    }, [searchText])

    return (
        <div className="bg-black">
            <div className="bg-[url('/events-bg.jpg')] bg-center bg-cover bg-fixed py-[9vh] bg-no-repeat max-w-10 overflow-hidden" >
                <div className='flex flex-col justify-center items-center scale-75 md:scale-100 pb-44 min-h-screen' >
                    <Image src="/workshops-heading.png" width={600} height={600} alt='events' />
                    <div className='flex mt-10 bg-[#ed00e9b3] backdrop-blur-sm border-2 border-gray-400 p-3 w-[27rem] md:w-[30rem] rounded-xl' >
                        <Image src="/search.svg" width={20} height={20} alt='search' />
                        <div className='w-[0.05rem] mx-2 bg-gray-400' />
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className='w-full bg-transparent text-white outline-none' placeholder='Search...' />
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {searchData?.map((event) => (
                        <EventCard key={event?.desc} data={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workshops