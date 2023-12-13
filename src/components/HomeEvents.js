import Image from 'next/image'
import Link from 'next/link'
import EventCard from './EventCard'
import { circuitPremierLeagueDescImg, quantumHacksDescImg, botsRoyaleDescImg } from '@/utils/event-images'
import { dataScienceDescImg, guidedRoboticsDescImg, humanoidRoboticsDescImg } from '@/utils/workshop-images'



const HomeEvents = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#831c84] to-black p-10" >
            <div id="events" className='absolute -top-[9vh] left-0' />
            <Image className='mx-auto' src="/events-heading.png" width={270} height={270} alt='events' />
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
            <Image className='mx-auto' src="/workshops-heading.png" width={400} height={400} alt='events' />
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