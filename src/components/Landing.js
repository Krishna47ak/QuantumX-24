import Script from 'next/script'


const Landing = () => {


    return (
        <div className='p-10 flex items-center justify-center min-h-screen overflow-hidden' >
            <div className='hidden lg:block relative scale-75 mr-16 md:scale-100' >
                <Script crossOrigin="anonymous" type="module" src="https://unpkg.com/@splinetool/viewer@0.9.508/build/spline-viewer.js" />
                <spline-viewer url="https://prod.spline.design/4kdW0RIIgFL93MqQ/scene.splinecode"></spline-viewer>
                <div className='absolute bottom-12 -right-5 text-purple-300 font-bold text-9xl logo z-50' >X</div>
                <div className="absolute text-center h-9 w-36 bg-[url('/BG6.gif')] rounded-2xl right-[1rem] bottom-[1.3rem] z-40" />
            </div>
        </div>
    )
}

export default Landing