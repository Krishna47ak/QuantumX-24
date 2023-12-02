import { backDropText } from '@/utils/contants'
import Link from 'next/link'
import EventCard from './EventCard'
import { byteBrawlDescImg, bestManagerDescImg, forumDescImg } from '@/utils/event-images'



const HomeEvents = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#0c0a0f] to-slate-900 p-10" >
            <div id="events" className='absolute -top-[9vh] left-0' />
            <p className="text-3xl text-white text-center font-bold select-none" style={{ ...backDropText, fontSize: '2.5rem' }} >Events</p>
            <div className='grid md:grid-cols-3 place-items-center md:gap-x-20 md:px-28 mt-14' >
                <EventCard data={{ img: byteBrawlDescImg }} from="home" />
                <EventCard data={{ img: bestManagerDescImg }} from="home" />
                <EventCard data={{ img: forumDescImg }} from="home" />
            </div>
            <Link href="/events" className='flex justify-center mt-12 mb-20 scale-90 md:scale-100' >
                <div className="bg-[url('/btn-neon.png')] active:scale-95 bg-cover w-[19rem] h-[3.2rem] bg-no-repeat flex items-center justify-center text-white text-lg font-mono font-semibold duration-200 z-10 cursor-pointer select-none" >
                    Explore more
                </div>
            </Link>
            <p className="text-3xl text-white text-center font-bold select-none mt-6" style={{ ...backDropText, fontSize: '2.5rem' }} >Workshops</p>
            <div className='grid md:grid-cols-3 place-items-center md:gap-x-20 md:px-28 mt-16' >
                <EventCard data={{ img: byteBrawlDescImg }} from="home" />
                <EventCard data={{ img: bestManagerDescImg }} from="home" />
                <EventCard data={{ img: forumDescImg }} from="home" />
            </div>
            <Link href="/workshops" className='flex justify-center mt-12 mb-20 scale-90 md:scale-100' >
                <div className="bg-[url('/btn-neon.png')] active:scale-95 bg-cover w-[19rem] h-[3.2rem] bg-no-repeat flex items-center justify-center text-white text-lg font-mono font-semibold duration-200 z-10 cursor-pointer select-none" >
                    Explore more
                </div>
            </Link>
        </div >
    )
}

export default HomeEvents