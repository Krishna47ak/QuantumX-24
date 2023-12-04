import EventCard from '@/components/EventCard'
import { eventsData } from '@/utils/event-details'


const Events = () => {
    return (
        <div className="bg-[url('/events-bg(1).png')]">
            <div className="bg-[url('/mobile-events-bg.png')] md:bg-[url('/events-bg(1).png')] bg-[center_top_0px] bg-cover bg-fixed min-h-screen" >

            </div>
            <div className="bg-[url('/events-bg.jpg')] bg-center bg-cover bg-fixed pt-[9vh] bg-no-repeat max-w-10 min-h-[150vh] overflow-hidden" >
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {eventsData?.map((event) => (
                        <EventCard key={event?.id} data={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Events