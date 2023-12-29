"use client"
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Context as DataContext } from '@/context/dataContext'
import { workshopsData } from '@/utils/workshop-details'
import AdminDropDown from '@/components/AdminDropDown'

const AdminWorkshopDetail = ({ params }) => {
    const router = useRouter()
    const workshop = workshopsData.find((event) => event.id === params.id)
    const { state: { workshops } } = useContext(DataContext)
    const eventReg = workshops?.filter((reg) => reg?.workshopName === workshop?.name)

    return (
        <div className='bg-black min-h-screen p-10 lg:p-20 pt-20' >
            <div className='flex items-center' >
                <div onClick={() => router.back()} className='bg-gray-900 inline-block rounded-full -ml-5 lg:-ml-14 mb-5 mt-1 cursor-pointer' >
                    <Image className='rotate-90' src="/dropdown.svg" width={50} height={50} alt='back' />
                </div>
                <div className='text-center text-white mb-2 mx-auto text-2xl' >
                    <p>Total registrations: {eventReg?.length}</p>
                </div>
            </div>
            <div className='lg:px-10' >
                {eventReg?.map((user) => (
                    <AdminDropDown key={user?._id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default AdminWorkshopDetail