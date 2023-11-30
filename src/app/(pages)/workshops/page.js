import EventCard from '@/components/EventCard'
import { bestManagerImg } from '@/utils/event-images'


const Workshops = () => {
    return (
        <div className="bg-[url('/event_bg(3).jpg')] bg-cover bg-fixed pt-[9vh] bg-no-repeat  min-h-[150vh] overflow-hidden" >
            <div className='grid md:grid-cols-3 place-items-center md:gap-x-20 backdrop-blur- md:px-28 mt-20' >
                <EventCard data={{ img: bestManagerImg }} />
                <EventCard data={{ img: bestManagerImg }} />
                <EventCard data={{ img: bestManagerImg }} />
            </div>
        </div>
    )
}

export default Workshops