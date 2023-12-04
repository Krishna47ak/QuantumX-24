import { backDropText } from '@/utils/contants'
import Link from 'next/link'
import EventCard from './EventCard'
import { circuitPremierLeagueDescImg, quantumHacksDescImg, botsRoyaleDescImg } from '@/utils/event-images'
import { dataScienceDescImg, guidedRoboticsDescImg, humanoidRoboticsDescImg } from '@/utils/workshop-images'



const HomeEvents = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#fab600e6] to-black p-10" >
            <div id="events" className='absolute -top-[9vh] left-0' />
            <p className="text-3xl text-white text-center font-bold select-none" style={{ ...backDropText, fontSize: '2.5rem' }} >Events</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:px-28 mt-14' >
                <EventCard data={{ img: circuitPremierLeagueDescImg }} from="home" />
                <EventCard data={{ img: quantumHacksDescImg }} from="home" />
                <div className='sm:hidden lg:block' >
                    <EventCard data={{ img: botsRoyaleDescImg }} from="home" />
                </div>
            </div>
            <Link href="/events" className='flex justify-center mt-9 mb-20 scale-90 md:scale-100' >
                <div className="bg-[url('/btn-neon.png')] active:scale-95 bg-cover w-[19rem] h-[3.2rem] bg-no-repeat flex items-center justify-center text-white text-lg font-mono font-semibold duration-200 z-10 cursor-pointer select-none" >
                    Explore more
                </div>
            </Link>
            <p className="text-3xl text-white text-center font-bold select-none mt-6" style={{ ...backDropText, fontSize: '2.5rem' }} >Workshops</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:px-28 mt-16' >
                <EventCard data={{ img: humanoidRoboticsDescImg }} from="home" />
                <EventCard data={{ img: dataScienceDescImg }} from="home" />
                <div className='sm:hidden lg:block' >
                    <EventCard data={{ img: guidedRoboticsDescImg }} from="home" />
                </div>
            </div>
            <Link href="/workshops" className='flex justify-center mt-9 mb-20 scale-90 md:scale-100' >
                <div className="bg-[url('/btn-neon.png')] active:scale-95 bg-cover w-[19rem] h-[3.2rem] bg-no-repeat flex items-center justify-center text-white text-lg font-mono font-semibold duration-200 z-10 cursor-pointer select-none" >
                    Explore more
                </div>
            </Link>
        </div >
    )
}

export default HomeEvents