"use client"
import { useContext, useEffect } from 'react'
import { Context as DataContext } from '@/context/dataContext'
import { workshopsData } from '@/utils/workshop-details'
import Image from 'next/image'
import Link from 'next/link'
import Spinner from '@/components/Spinner'

const AdminWorkshops = () => {
    const { state: { workshops, loading }, fetchWorkshops } = useContext(DataContext)

    useEffect(() => {
        fetchWorkshops()
    }, [])


    return loading ? <Spinner /> : (
        <div className='bg-black text-white min-h-screen p-5 lg:p-10 lg:py-24' >
            <div className='mt-20 text-center mb-10 text-2xl' >
                <p>Total registrations: {workshops?.length}</p>
            </div>
            <div className='flex items-center' >
                <div className='flex flex-wrap justify-center gap-5' >
                    {workshopsData?.map((event) => {
                        const workshopRegCount = workshops?.filter((reg) => reg?.workshopName === event?.name)?.length
                        return (
                            <Link href={`/admin-qx/workshops/${event?.id}`} key={event?.id} className='bg-violet-800 flex flex-col justify-center items-center text-center w-[40vw] lg:w-[20vw] p-5 font-semibold rounded-xl hover:scale-105 duration-500 cursor-pointer' >
                                <p>{event?.name} <span className='text-yellow-400' >({workshopRegCount ? workshopRegCount : 0})</span></p>
                                <Image className='mt-2' src="/pink-arrow.png" width={20} height={20} alt='arrow' />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminWorkshops