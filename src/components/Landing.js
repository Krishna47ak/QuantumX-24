"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { backDropText } from '@/utils/contants'


const Landing = () => {
    return (
        <div id="home" className='p-10 flex items-center justify-center min-h-screen overflow-hidden' >
            <div className='flex flex-col justify-center items-center' >
                <motion.div
                    animate={{ y: [50, 0, 50] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className='w-[300px] md:w-[500px] logo'
                >
                    <Image src="/logo-white.png" width={500} height={500} alt='logo' />
                </motion.div>
                <p className='w-72 mt-16 font-bold text-center' style={backDropText} >Second Techno-Management Fest In NHCE</p>
            </div>
            {/* <div className='relative hidden bg-black h-[37rem] w-[37rem] p-5 rounded-full bg-opacity-60 lg:flex flex-col items-center' >
                <p className='text-xl z-10 text-white font-semibold text-center mt-[27%] landingText' >
                    New Horizon College of Engineering, Bangalore presents QuantumX-22, a 3-day tech fest and the second one to ever be hosted in the NHCE campus, from 25th-27th January. Over the duration of three days, the fest offers students from all around Bangalore a series of events, from a 24 hour hackathon to a drone race, from hacker series to robo wars. Along with those, a bunch of workshops and guest talks awaits the minds eager to gain knowledge.
                </p>
                <button className='bg-gradient-to-t from-cyan-500 to-blue-500 py-2 font-semibold w-56 rounded-2xl hover:scale-105 duration-500 mt-20 z-10' >REGISTER NOW</button>
            </div> */}
        </div>
    )
}

export default Landing