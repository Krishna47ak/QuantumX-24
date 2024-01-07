"use client"
import { Context as DataContext } from '@/context/dataContext'
import { useContext, useEffect } from 'react'
import { eventsData } from '@/utils/event-details'
import Image from 'next/image'
import Link from 'next/link'
import Spinner from '@/components/Spinner'

const AdminEvents = () => {

    const { state: { events, loading }, fetchEvents } = useContext(DataContext)

    useEffect(() => {
        if (events?.length === 0 && !loading) {
            fetchEvents()
        }
    }, [events, loading])


    return (loading || !events) ? <Spinner /> : (
        <div className='bg-black text-white min-h-screen p-5 lg:p-10 lg:py-24' >
            <div className='mt-20 text-center mb-10 text-2xl md:text-3xl' >
                <p>Total registrations: {events?.length}</p>
            </div>
            <div className='flex items-center' >
                <div className='flex flex-wrap justify-center gap-5' >
                    {eventsData?.map((event) => {
                        const eventRegCount = events?.filter((reg) => reg?.eventName === event?.name)?.length
                        return (
                            <Link href={`/admin-qx/events/${event?.id}`} key={event?.id} className='bg-violet-800 flex flex-col justify-center items-center text-center w-[40vw] lg:w-[20vw] p-5 font-semibold rounded-xl hover:scale-105 duration-500 cursor-pointer' >
                                <p>{event?.name} <span className='text-yellow-400' >({eventRegCount ? eventRegCount : 0})</span></p>
                                <Image className='mt-2' src="/pink-arrow.png" width={20} height={20} alt='arrow' />
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='my-20 text-center md:text-xl' >
                <p className='text-2xl md:text-3xl' >Recent registrations :</p>
                <div className='flex flex-wrap mt-10 justify-center gap-5' >
                    {events?.slice(-6).reverse()?.map((event) => {
                        return (
                            <div key={event?._id} className='bg-blue-800 flex flex-col justify-center items-center text-center w-[40vw] lg:w-[20vw] p-5 font-semibold rounded-xl hover:scale-105 duration-500 cursor-pointer' >
                                <p>{event?.leader}</p>
                                <span className='text-base text-yellow-400' >({event?.eventName})</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminEvents