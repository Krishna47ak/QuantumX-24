import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-950 p-6 sm:p-10' >
            <div className='bg-gradient-to-r from-slate-900 to-purple-950 md:grid md:grid-cols-2 md:place-items-center md:divide-x-2 divide-slate-700 p-7 rounded-xl' >
                <div>
                    <Image src="/logo-white2.png" width={90} height={90} alt='logo' />
                    <p className='text-white mt-4' >The Third Techno - Management fest of New Horizon College of Engineering.</p>
                    <div className='inline-flex mt-3 p-2 px-3 rounded-xl space-x-5 bg-gray-800' >
                        <a href='https://instagram.com/quantumx.nhce?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' >
                            <Image className='hover:scale-105 cursor-pointer' src="/insta-icon.svg" width={24} height={24} alt='instagram' />
                        </a>
                        <a href='https://twitter.com/QuantumX_fest' target='_blank' >
                            <Image className='hover:scale-105 cursor-pointer' src="/twitter-icon.svg" width={24} height={24} alt='twitter' />
                        </a>
                        <a href='https://www.linkedin.com/company/quantumxfest' target='_blank' >
                            <Image className='hover:scale-105 cursor-pointer' src="/linkedin-icon.svg" width={24} height={24} alt='linkedin' />
                        </a>
                        <a href='https://youtube.com/@quantumx-nhce?si=dLrjAznRY12xBH0D' target='_blank' >
                            <Image className='hover:scale-105 cursor-pointer' src="/youtube-icon.svg" width={24} height={24} alt='youtube' />
                        </a>
                    </div>
                </div>
                <div className='md:pl-7 mt-5 md:mt-0' >
                    <p className='text-white text-3xl mb-4' >Contact Us</p>
                    <p className='text-slate-500 text-lg' >QuantumX - 2025</p>
                    {/* <p className='text-slate-500 text-lg' >quantumx-24@newhorizonindia.edu</p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer