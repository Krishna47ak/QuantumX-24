import EventCard from '@/components/EventCard'
import { workshopsdata } from '@/utils/contants'


const Workshops = () => {
    return (
        <>
            <div className="bg-[url('/workshops-bg.png')] bg-cover bg-center bg-fixed min-h-screen" >

            </div>
            <div className="bg-[url('/events-bg(2).jpg')] bg-cover bg-fixed pt-[9vh] bg-no-repeat max-w-10 min-h-[150vh] overflow-hidden" >
                <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {workshopsdata?.map((event) => (
                        <EventCard key={event?.desc} data={event} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Workshops