import EventCard from '@/components/EventCard'
import { eventsData } from '@/utils/contants'


const Events = () => {
    return (
        <div className="bg-[url('/event-bg.jpg')] bg-cover bg-fixed pt-[9vh] bg-no-repeat max-w-10 min-h-[150vh] overflow-hidden" >
            <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                {eventsData?.map((event) => (
                    <EventCard data={event} />
                ))}
            </div>
        </div>
    )
}

export default Events