"use client"
import Image from 'next/image'
import Link from 'next/link'
import { sendEmail } from '@/helpers/mailer'

const regData = [
    {
        "leader": "Sinchana J",
        "email": "anandakrishna720@gmail.com",
        "eventName": "ROBO FOOTBALL"
    },
    {
        "leader": "Nihar R P",
        "email": "anandakrishna720@gmail.com",
        "eventName": "ROBO FOOTBALL"
    },
    {
        "leader": "ADITYA GONDA S",
        "email": "anandakrishna720@gmail.com",
        "eventName": "SPEED SPRINT"
    }
]

const Admin = () => {
    const send = async () => {
        for (let i = 0; i < regData.length; i++) {
            // console.log(regData[i]);
            await sendEmail({ email: regData[i].email, name: regData[i].leader, eventName: regData[i].eventName })
        }
    }
    return (
        <div className='bg-black text-center flex flex-col md:flex-row justify-center items-center text-white min-h-screen p-10 pt-24 md:p-20 overflow-hidden' >
            <Link href="/admin-qx/events" className='bg-purple-700 m-5 flex items-center justify-center text-2xl md:text-4xl font-medium w-[60vw] lg:w-[35vw] h-[30vh] p-10 px-20 hover:scale-105 duration-500 cursor-pointer select-none rounded-xl' >
                <p>EVENTS</p>
                <Image className='-rotate-90 ml-5' src="/pink-arrow.png" width={35} height={35} alt='arrow' />
            </Link>
            <Link href="/admin-qx/workshops" className='bg-purple-700 m-5 flex items-center justify-center text-2xl md:text-4xl font-medium w-[60vw] lg:w-[35vw] h-[30vh] p-10 px-20 hover:scale-105 duration-500 cursor-pointer select-none rounded-xl' >
                <p>WORKSHOPS</p>
                <Image className='-rotate-90 ml-5' src="/pink-arrow.png" width={35} height={35} alt='arrow' />
            </Link>
            <button onClick={send} className='text-black text-3xl bg-white rounded-xl' >Dont click testing</button>
        </div>
    )
}

export default Admin