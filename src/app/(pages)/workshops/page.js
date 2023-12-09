import EventCard from '@/components/EventCard'
import { workshopsdata } from '@/utils/workshop-details'


const Workshops = () => {
    return (
        <div className="bg-black">
            <div className="bg-[url('/mobile-workshops-bg.png')] md:bg-[url('/workshops-bg.png')] bg-center bg-cover bg-fixed min-h-screen p-5 pt-20" >

            </div>
            <div className="bg-[url('/events-bg.jpg')] bg-center bg-cover bg-fixed py-[9vh] bg-no-repeat max-w-10 overflow-hidden" >
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 place-items-center md:gap-x-20 md:gap-y-5 md:px-16 lg:px-28 mt-10 md:mt-20' >
                    {workshopsdata?.map((event) => (
                        <EventCard key={event?.desc} data={event} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workshops