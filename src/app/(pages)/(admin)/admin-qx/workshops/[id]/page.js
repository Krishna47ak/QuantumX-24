"use client"
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Context as DataContext } from '@/context/dataContext'
import { workshopsData } from '@/utils/workshop-details'
import AdminDropDown from '@/components/AdminDropDown'
import { searchUser } from '@/utils/contants'

const AdminWorkshopDetail = ({ params }) => {
    const router = useRouter()
    const workshop = workshopsData.find((event) => event.id === params.id)
    const { state: { workshops }, verifyWorkshop } = useContext(DataContext)
    const eventReg = workshops?.filter((reg) => reg?.workshopName === workshop?.name)

    const [searchData, setSearchData] = useState(eventReg)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText) {
            const filteredData = searchUser(eventReg, searchText)
            setSearchData(filteredData)
        } else {
            setSearchData(eventReg)
        }
    }, [searchText, workshops])

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
            <div className='flex justify-center' >
                <div className='flex mb-10 md:mb-10 bg-[#ed00e9b3] backdrop-blur-sm border-2 border-gray-400 p-3 w-[22rem] md:w-[40rem] rounded-xl' >
                    <Image src="/search.svg" width={20} height={20} alt='search' />
                    <div className='w-[0.05rem] mx-2 bg-gray-400' />
                    <input autoComplete='off' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='w-full bg-transparent text-white outline-none' placeholder='Name, Phone, Usn, Applicant Id......' />
                </div>
            </div>
            <div className='lg:px-10' >
                {searchData?.map((user) => (
                    <AdminDropDown key={user?._id} user={user} verify={verifyWorkshop} />
                ))}
            </div>
        </div>
    )
}

export default AdminWorkshopDetail