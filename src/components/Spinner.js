import Image from 'next/image'
import React from 'react'

const Spinner = () => {
    return (
        <div className='bg-black flex justify-center items-center min-h-screen' >
            <Image src="/spinner.svg" width={100} height={100} alt='loading' />
        </div>
    )
}

export default Spinner