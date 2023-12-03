import EventCard from '@/components/EventCard'
import { eventsData } from '@/utils/contants'


const Events = () => {
    return (
        <>
            <div className="bg-[url('/mobile-events-bg.png')] md:bg-[url('/events-bg(1).png')] bg-cover bg-fixed bg-[center_top_0px] min-h-screen" >

            </div>
            <div className="bg-[url('/events-bg(2).jpg')] bg-cover bg-fixed bg-center pt-[9vh] bg-no-repeat max-w-10 min-h-[150vh] overflow-hidden" >
                <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {eventsData?.map((event) => (
                        <EventCard key={event?.desc} data={event} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Events