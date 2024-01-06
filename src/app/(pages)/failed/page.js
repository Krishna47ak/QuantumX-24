import Link from 'next/link'
import React from 'react'

const Failed = () => {
    return (
        <div className='bg-red-500 min-h-screen flex flex-col justify-center items-centerc text-center' >
        <p className='text-5xl font-semibold' >Registration failed</p>
        <p className='text-xl font-semibold mb-5' >please try again</p>
        <Link href="/" className='text-blue-600 text-lg sm:text-xl font-medium font-mono underline cursor-pointer select-none' ><span>Click here</span> to go to home screen</Link>
    </div>
    )
}

export default Failed