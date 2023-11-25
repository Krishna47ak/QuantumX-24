import { backDropText } from '@/utils/contants'
import EventCard from './EventCard'
import hackathonImg from '../../public/hackathon.jpg'
import forthisImg from '../../public/forthis.png'
import robowarImg from '../../public/robowar.jpg'

const Events = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#0c0a0f] to-slate-900 p-10" >
            <div id="events" className='absolute -top-[9vh] left-0' />
            <p className="text-3xl text-white text-center font-bold select-none" style={{ ...backDropText, fontSize: '2.5rem' }} >Events</p>
            <div>
                <EventCard img={hackathonImg} title='Codathon' type='hackathon' description='Hexathon is a callout to all budding and passionate designers. If you have an eye for detail or want to express your creativity then this is the event for you!' fee={400} />
                <EventCard img={forthisImg} title='ForkThis' type='competition' description='Fork This is an open source event which takes inspiration from Hacktoberfest. The event will commence with a comprehensive session dedicated to the basics of GIT (from scratch)   ' fee={300} />
                <EventCard img={robowarImg} title='Battle Bot' type='robo war' description="Battle bots is the time to concentrate on the hacking and slashing of the robots. Now it is time to rumble. It's the Grand Finale of war. Get ready to feel the chills and shivers down your spine and become a part of Robowars" fee={100} />
            </div>
        </div>
    )
}

export default Events