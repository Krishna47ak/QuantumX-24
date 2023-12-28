import Image from 'next/image'
import Link from 'next/link'

const Admin = () => {

    return (
        <div className='bg-black text-center flex flex-col md:flex-row justify-center items-center text-white min-h-screen p-10 pt-24 md:p-20 overflow-hidden' >
            <Link href="/admin-qx/events" className='bg-purple-700 m-5 flex items-center justify-center text-2xl md:text-4xl font-medium w-[60vw] lg:w-[35vw] h-[30vh] p-10 px-20 hover:scale-105 duration-500 cursor-pointer select-none rounded-xl' >
                <p>EVENTS</p>
                <Image className='-rotate-90 ml-5' src="/pink-arrow.png" width={35} height={35} alt='arrow' />
            </Link>
            <div className='bg-purple-700 m-5 flex items-center justify-center text-2xl md:text-4xl font-medium w-[60vw] lg:w-[35vw] h-[30vh] p-10 px-20 hover:scale-105 duration-500 cursor-pointer select-none rounded-xl' >
                <p>WORKSHOPS</p>
                <Image className='-rotate-90 ml-5' src="/pink-arrow.png" width={35} height={35} alt='arrow' />
            </div>
        </div>
    )
}

export default Admin