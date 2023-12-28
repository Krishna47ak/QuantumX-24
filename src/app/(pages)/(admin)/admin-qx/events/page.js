"use client"
import { Context as DataContext } from '@/context/dataContext'
import { eventsData } from '@/utils/event-details'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'

const AdminEvents = () => {

    const { state: { data }, fetchEvents } = useContext(DataContext)

    useEffect(() => {
        fetchEvents()
    }, [])


    return (
        <div className='bg-black text-white min-h-screen p-5 lg:p-10 py-24' >
            <div className='mt-20 text-center mb-10 text-2xl' >
                <p>Total registrations: {data?.length}</p>
            </div>
            <div className='flex items-center' >
                <div className='flex flex-wrap justify-center gap-5' >
                    {eventsData?.map((event) => {
                        const eventRegLength = data?.filter((reg) => reg?.eventName === event?.name)?.length
                        return (
                            <Link href={`/admin-qx/events/${event?.id}`} key={event?.id} className='bg-violet-800 flex flex-col justify-center items-center text-center w-[40vw] lg:w-[20vw] p-5 font-semibold rounded-xl hover:scale-105 duration-500 cursor-pointer' >
                                <p>{event?.name} ({eventRegLength ? eventRegLength : 0})</p>
                                <Image className='mt-2' src="/pink-arrow.png" width={20} height={20} alt='arrow' />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminEvents