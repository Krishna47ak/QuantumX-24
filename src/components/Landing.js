"use client"
import { useEffect, useState } from 'react'
import useScrollBlock from '@/hooks/useScrollBlock'
import Image from 'next/image'

const Landing = () => {
    const [onVideo, setOnVideo] = useState(false)

    const [blockScroll, allowScroll] = useScrollBlock()

    useEffect(() => {
        if (onVideo) {
            blockScroll()
        } else {
            allowScroll()
        }
    }, [onVideo])

    return (
        <div className="bg-[url('/home-bg.jpg')] bg-[center_top_0px] bg-cover bg-fixed flex justify-center items-end p-10 min-h-screen overflow-hidden" >
            {/* <div className='hidden lg:block relative scale-75 mr-16 md:scale-100' >
                <div className="absolute text-center h-9 w-36 bg-[url('/BG6.gif')] rounded-2xl right-[1rem] bottom-[1.3rem] z-40" />
            </div> */}
            {onVideo && (
                <div className="fixed flex justify-center items-center pt-[7vh] md:pt-[9vh] z-20 bg-[#0000004d] backdrop-blur-sm top-0 bottom-0 left-0 right-0" >
                    <Image onClick={() => setOnVideo(false)} className='absolute lg:hidden right-5 md:right-9 top-20 cursor-pointer' src="/close.svg" width={24} height={24} alt='close' />
                    <div onMouseLeave={() => setOnVideo(false)}  >
                        <iframe className='w-[22rem] h-[15rem] sm:w-[35rem] sm:h-[20rem] md:w-[43rem] md:h-[24rem] lg:w-[55rem] lg:h-[31rem] xl:w-[65rem] xl:h-[36rem] rounded-xl' src="https://www.youtube.com/embed/TGf3dkrQLXE?si=P6YQ1xPP-cDh7UoO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            )}
            <div onClick={() => setOnVideo(true)} className='relative bg-black rounded-full mb-14 lg:mb-5 cursor-pointer' >
                <Image src="/play.png" width={70} height={70} alt='play' />
                <div className='absolute top-[16%] left-[16%] bg-[#fab600e6] rounded-full w-12 h-12 animate-ping' />
            </div>
        </div>
    )
}

export default Landing