import { backDropText } from '@/utils/contants'
import Image from 'next/image'
import EventCard from './EventCard'
import hackathonImg from '../../public/hackathon.jpg'
import forthisImg from '../../public/forthis.png'

const Events = () => {
    return (
        <div className="bg-slate-950 p-10" >
            <p className="text-3xl text-white text-center font-bold select-none" style={{ ...backDropText, fontSize: '2.5rem' }} >Events</p>
            <div>
                <EventCard img={hackathonImg} title='Codathon' type='hackathon' description='Hexathon is a callout to all budding and passionate designers. If you have an eye for detail or want to express your creativity then this is the event for you!' fee={400} />
                <EventCard img={forthisImg} title='ForkThis' type='Competition' description='Fork This is an open source event which takes inspiration from Hacktoberfest. The event will commence with a comprehensive session dedicated to the basics of GIT (from scratch)   ' fee={300} />
                <EventCard img={hackathonImg} title='Codathon' type='hackathon' description='Hexathon is a callout to all budding and passionate designers. If you have an eye for detail or want to express your creativity then this is the event for you!' fee={100} />
            </div>
        </div>
    )
}

export default Events