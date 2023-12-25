"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Admin = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async function () {
            const res = await fetch(`https://www.quantumxfest.com/api/events`)
            const data = await res.json()
            setEvents(data?.events)
        })()
    }, [])


    return (
        <div className='bg-black text-center text-white min-h-screen p-10 pt-24 md:p-20 overflow-hidden' >
            <div>
                {events?.map((event) => (
                    <div key={event?._id} className='bg-gray-800 p-5 mb-5 rounded-xl' >
                        <div className='mb-2' >
                            <p className='mb-1' >Name:  {event?.leader}</p>
                            <p className='mb-1' >Email: {event?.email}</p>
                            <p className='mb-1' >Phone: {event?.phone}</p>
                            <p className='mb-1' >College: {event?.college}</p>
                            <p className='mb-1' >USN: {event?.usn}</p>
                            <p className='mb-1' >Fee: {event?.fee}</p>
                            <p className='mb-1' >Event name: {event?.eventName}</p>
                        </div>
                        {event?.members?.map((member) => (
                            <div key={member?._id} className='mb-3' >
                                <p className='mb-1' >Member name: {member?.name}</p>
                                <p className='mb-1' >Member email:{member?.email}</p>
                                <p className='mb-1' >Member phone number: {member?.phone}</p>
                                <p className='mb-1' >Member collge: {member?.college}</p>
                            </div>
                        ))}
                        {event?.transacImg && (
                            <div>
                                <div className='flex flex-col justify-center items-center mb-1' >
                                    <p>Tranaction Image:</p>
                                    <Image className="w-[35rem]"  src={event?.transacImg} width={200} height={50} alt='tranac' />
                                </div>
                                <p>Applicant Id: {event?.applicantId}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin