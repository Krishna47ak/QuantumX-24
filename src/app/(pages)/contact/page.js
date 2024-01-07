import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className="bg-black bg-[url('/contact-bg.jpg')] p-20 text-white md:text-xl text-center pt-32 min-h-screen" >
            <br />
            <br />

            <div className='grid lg:grid-cols-3' >
                <div>
                    <div>
                        <Image className='mx-auto' src="/sai-kiran.png" width={220} height={50} alt='sai kiran' />
                        <p>saivostro2001@gmail.com</p>
                        <p>+91 70222 67508</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Fest Lead</p>
                        <br />
                    </div>
                    <div className='lg:hidden' >
                        <Image className='mx-auto scale-125 sm:scale-110' src="/ananda-krishna.png" width={400} height={50} alt='sai kiran' />
                        <p>anandakrishna047@gmail.com</p>
                        <p>+91 63623 98767</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Tech Lead</p>
                        <br />
                    </div>
                    <div>
                        <Image className='mx-auto' src="/mahesh-babu.png" width={300} height={50} alt='mahesh babu' />
                        <p>maheshvejandla5@gmail.com</p>
                        <p>+91 97018 48618</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Finance Lead</p>
                        <br />
                    </div>
                    <div>
                        <Image className='mx-auto' src="/neha-darawan.png" width={300} height={50} alt='neha darawan' />
                        <p>dneha750@gmail.com</p>
                        <p>+91 96068 20633</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Workshops Lead</p>
                        <br />
                    </div>
                </div>
                <div className='hidden lg:flex justify-center items-center' >
                    <div>
                        <Image className='mx-auto' src="/ananda-krishna.png" width={400} height={50} alt='ananda krishna' />
                        <p>anandakrishna047@gmail.com</p>
                        <p>+91 63623 98767</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Tech Lead</p>
                        <br />
                    </div>
                </div>
                <div>
                    <div>
                        <Image className='mx-auto' src="/adhithya.png" width={300} height={50} alt='adhithya' />
                        <p>adhithyaadhibn@gmail.com</p>
                        <p>+91 79750 63417</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Creative Lead</p>
                        <br />
                    </div>
                    <div>
                        <Image className='mx-auto' src="/ankita-shetty.png" width={300} height={50} alt='sai kiran' />
                        <p>ankitashetti31@gmail.com</p>
                        <p>+91 99011 78017</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Hospitality Head</p>
                        <br />
                    </div>
                    <div>
                        <Image className='mx-auto' src="/abhijeeth-talari.png" width={300} height={50} alt='sai kiran' />
                        <p>abhijeethtalari@gmail.com</p>
                        <p>+91 86601 23179</p>
                        <p className='font-semibold text-purple-500 text-lg md:text-2xl' >Events Lead</p>
                        <br />
                    </div>
                </div>
            </div>

            <br />
            <br />
            <a href='mailto: quantumx-24@newhorizonindia.edu' target='_blank' >quantumx-24@newhorizonindia.edu</a>
            <br />
            <a href='https://instagram.com/quantumx.nhce?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' >quantumx.nhce</a>


        </div>
    )
}

export default Contact