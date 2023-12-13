"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import FilterDropdown from "@/components/FilterDropdown"
import { dropDownData } from "@/utils/contants"
import { eventsData } from "@/utils/event-details"
import FormInput from "@/components/FormInput"

const EventsRegister = ({ params }) => {
    const event = eventsData.find((event) => event.id === params.id)
    const [teamSize, setTeamSize] = useState(null)
    const [memberNames, setMemberNames] = useState(Array(teamSize).fill(""));

    const [teamName, setTeamName] = useState("")
    const [discord, setDiscord] = useState("")
    const [formData, setFormData] = useState({
        transacImg: '',
        transacId: '',
        leader: '',
        email: '',
        phone: '',
        college: '',
        usn: '',
        fee: event?.fee,
        event: event?.name,
        size: teamSize
    });

    const { transacImg, leader, email, phone, college, usn } = formData

    const teamSizeData = event?.fixedSize ? [event?.fixedSize] : dropDownData.slice((event?.minSize - 1), (event?.maxSize))

    const handleTeamSizeChange = (size) => {
        setTeamSize(size);
        const newSize = parseInt(size) - 1

        setMemberNames((prevNames) => {
            const newNames = [...prevNames];
            if (newSize > prevNames.length) {
                newNames.push(...Array(newSize - prevNames.length).fill(''));
            } else if (newSize < prevNames.length) {
                newNames.splice(newSize);
            }
            return newNames;
        });
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onMemberChange = (index, value) => {
        setMemberNames((prevNames) => {
            const newNames = [...prevNames];
            newNames[index] = value;
            return newNames;
        })
    };

    useEffect(() => {
        if (event?.fixedSize) {
            handleTeamSizeChange(event?.fixedSize)
        }
    }, [])


    return (
        <div className='bg-black text-white min-h-screen p-7 pt-20 md:p-20 md:px-28' >
            <div>
                <p className="text-4xl text-center font-semibold mb-5 md:mb-14" >Register for <span className="font-bold text-violet-300" >{event?.name}</span></p>
                <div className="min-[1293px]:flex 2xl:justify-center" >
                    <div className="bg-gray-800 p-5 rounded-xl h-full" >
                        <div className='hidden min-[1293px]:block w-[18rem] min-w-[18rem] h-full mb-6' >
                            <Image className='w-full h-full rounded-2xl' src={event?.imgDesc} width={250} height={250} alt="Event" />
                        </div>
                        <div>
                            <p className="text-lg font-medium" >Amount : &#8377; {event?.fee} (per team)</p>
                            <p className="text-lg font-medium" >Team size : {event?.fixedSize ? event?.fixedSize : `${event?.minSize} - ${event?.maxSize}`}</p>
                            <p className="text-lg font-medium" >Start Date: {event?.date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-center min-[1293px]:justify-between min-[1293px]:ml-20 mt-5 md:mt-16 min-[1293px]:mt-0" >
                        <div>
                            <FilterDropdown data={teamSizeData} name="Team size :" setFilterData={handleTeamSizeChange} filterData={teamSize} />
                            <div className="mt-5 md:mt-10" >
                                {event?.id === "QX_EV_12" && (
                                    <FormInput name="Team name" data={teamName} setdata={e => setTeamName(e.target.value)} placeholder="Team name" />
                                )}
                                {(event?.id === "QX_EV_02" || event?.id === "QX_EV_03") && (
                                    <FormInput name="Discord id" data={discord} setdata={e => setDiscord(e.target.value)} placeholder="Discord id" />
                                )}
                                <FormInput inputName="leader" name="Team leader name" data={leader} setdata={onChange} placeholder="Full name" />
                                <FormInput inputName="college" name="College name" data={college} setdata={onChange} placeholder="College name" />
                                <FormInput inputName="phone" name="Phone number" data={phone} setdata={onChange} placeholder="Phone number" type="tel" />
                                <FormInput inputName="email" name="Email" data={email} setdata={onChange} placeholder="Email ID" type="email" />
                                <FormInput inputName="usn" name="USN" data={usn} setdata={onChange} placeholder="USN" />
                            </div>
                            {teamSize && teamSize != 1 && <div className="h-1 w-full my-5 rounded-full bg-gray-700" />}
                            <div>
                                {teamSize > 1 && [...Array(teamSize - 1)].map((e, i) => <FormInput key={i} name={`Team member ${i + 1}`} data={memberNames[i]} setdata={onMemberChange} placeholder="Full name" inputIndex={i} />
                                )}
                            </div>
                        </div>
                        <div className="bg-[url('/btn-yellow.svg')] active:scale-95 bg-cover min-w-60 w-60 min-h-[3.1rem] mt-5 min-[1293px]:ml-auto bg-no-repeat flex items-center justify-center font-semibold duration-200 z-10 cursor-pointer select-none" >
                            <p className='text-white text-lg font-mono' >Next</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsRegister