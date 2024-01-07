import Link from 'next/link'

const Success = () => {
  return (
    <div className='bg-green-400 min-h-screen flex flex-col justify-center items-center text-center' >
        <p className='text-5xl font-semibold mb-5' >Registration successful</p>
        <Link href="/" className='text-blue-600 text-lg sm:text-xl font-medium font-mono underline cursor-pointer select-none' ><span>Click here</span> to go to home screen</Link>
    </div>
  )
}

export default Success