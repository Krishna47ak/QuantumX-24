import Image from 'next/image'

const EventCard = ({ img, title, type, description, fee }) => {
    return (
        <div className='flex justify-center sm:justify-normal bg-gradient-to-t p-5 mt-10 rounded-xl from-[#2f165a] to-[#1e0e34] ' style={{ "filter": "drop-shadow(0 0 0.3rem cyan)" }} >
            <Image className='rounded-xl min-w-[250px] shadow-md shadow-indigo-600' src={img} width={250} height={250} alt='logo' />
            <div className='hidden sm:block pl-10' >
                <p className='text-white text-5xl' >{title}</p>
                <p className='text-gray-600 text-2xl mt-2' >{type}</p>
                <p className='text-white mt-5 xl:w-[50rem]' >{description}</p>
                <p className='text-xl font-medium text-slate-400 mt-5 font-mono' >&#8377; {fee}</p>
                <button className='bg-gradient-to-t from-cyan-500 to-blue-500 py-2 font-semibold w-56 rounded-2xl hover:scale-105 duration-500 mt-5 z-10' >REGISTER</button>
            </div>
            <div className='bg-[#fafafa33] ml-auto hidden min-[1418px]:block text-white p-5 rounded-xl' >
                <div className='flex space-x-5' >
                    <Image src="/calendar.svg" width={20} height={20} alt='calendar' />
                    <div className='pt-3 min-w-fit' >
                        <p>Start Date:22/9/23</p>
                        <p>Final Date:23/9/23</p>
                    </div>
                </div>
                <div className='flex space-x-5' >
                    <Image src="/clock.svg" width={20} height={20} alt='calendar' />
                    <div className='pt-3 min-w-fit' >
                        <p>Start Time:1:00 pm</p>
                        <p>End Time:3:00 pm</p>
                    </div>
                </div>
                <div className='font-medium text-slate-400 mt-10 font-mono text-center' >
                    Team size : 1 - 4
                </div>
            </div>
        </div>
    )
}

export default EventCard