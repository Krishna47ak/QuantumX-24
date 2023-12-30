"use client"
import { useState } from "react"
import Image from "next/image"

const FilterDropdown = ({ data, setFilterData, filterData, name, width, style }) => {
    const [onFilter, setOnFilter] = useState(false)

    const onFilterSelect = (list) => {
        setOnFilter(false)
        setFilterData(list)
    }

    return (
        <div style={{ width }} className="relative w-40" >
            <div onClick={() => setOnFilter(!onFilter)} style={{ width }} className={`flex items-center justify-between shadow-lg border w-40 py-2 px-2 rounded-lg select-none ${style}`} >
                <div className="flex w-full" >{name} <p className="mx-auto font-bold" >{filterData}</p></div>
                <Image src="/dropdown.svg" width={30} height={10} alt="dropdown" />
            </div>
            <ul className={`${onFilter ? 'list-item' : 'hidden'} absolute divide-y-2 divide-[#00000033] bg-gray-800 w-full shadow-xl border border-[#00000033] rounded-b-lg text-center px-2 py-1 z-20`} >
                {data?.map((value) => (
                    <li key={value} onClick={() => onFilterSelect(value)} className="py-1 cursor-pointer hover:bg-gray-950 rounded-sm" >{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default FilterDropdown