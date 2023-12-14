"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import FilterDropdown from "@/components/FilterDropdown"
import { dropDownData } from "@/utils/contants"
import { eventsData } from "@/utils/event-details"
import FormInput from "@/components/FormInput"

const memberStruct = {
    name: '',
    email: '',
    phone: '',
    college: ''
}

const EventsRegister = ({ params }) => {
    const event = eventsData.find((event) => event.id === params.id)
    const [teamSize, setTeamSize] = useState(null)
    const [members, setMembers] = useState(Array(teamSize).fill(memberStruct));
    const [page, setPage] = useState(1)

    const [teamName, setTeamName] = useState("")
    const [discord, setDiscord] = useState("")
    const [formData, setFormData] = useState({
        transacImg: '',
        applicantId: '',
        leader: '',
        email: '',
        phone: '',
        college: '',
        usn: '',
        fee: event?.fee,
        event: event?.name,
        size: teamSize
    });

    const { transacImg, applicantId, leader, email, phone, college, usn } = formData

    const teamSizeData = event?.fixedSize ? [event?.fixedSize] : dropDownData.slice((event?.minSize - 1), (event?.maxSize))

    const handleTeamSizeChange = (size) => {
        setTeamSize(size);
        const newSize = parseInt(size) - 1

        setMembers((prevMembers) => {
            const newMembers = [...prevMembers];
            if (newSize > prevMembers.length) {
                newMembers.push(...Array(newSize - prevMembers.length).fill(memberStruct));
            } else if (newSize < prevMembers.length) {
                newMembers.splice(newSize);
            }
            return newMembers;
        });
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onMemberChange = (index, name, value) => {
        setMembers((prevMembers) => {
            const newMembers = JSON.parse(JSON.stringify(prevMembers));;
            newMembers[index][name] = value;
            return newMembers;
        })
    };

    const handleNext1 = () => {
        if (leader && email && phone && college && usn && teamSize) {
            if (teamSize != 1) {
                members?.map((member) => {
                    if (member.name && member.email && member.phone && member.college) {
                        setPage(2)
                    } else {
                        setPage(1)
                    }
                })
            } else {
                setPage(2)
            }
        } else {
            setPage(1)
        }
    }

    const handleNext2 = () => {
        setPage(3)
    }

    const onSubmit = () => {
        let data;

        if (event?.id === "QX_EV_12") {
            data = { teamName, transacImg, applicantId, leader, email, phone, college, usn, members }
        } else if (event?.id === "QX_EV_02" || event?.id === "QX_EV_03") {
            data = { discord, transacImg, applicantId, leader, email, phone, college, usn, members }
        } else {
            data = { transacImg, applicantId, leader, email, phone, college, usn, members }
        }
        console.log(data);
    }


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
                        {page === 1 ? (
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
                                    <FormInput inputName="email" name="Email" data={email} setdata={onChange} placeholder="Email ID" type="email" />
                                    <FormInput inputName="phone" name="Phone number" data={phone} setdata={onChange} placeholder="Phone number" type="tel" />
                                    <FormInput inputName="college" name="College name" data={college} setdata={onChange} placeholder="College name" />
                                    <FormInput inputName="usn" name="USN" data={usn} setdata={onChange} placeholder="USN" />
                                </div>
                                {/* {teamSize && teamSize != 1 && <div className="h-1 w-full my-5 rounded-full bg-gray-700" />} */}
                                <div>
                                    {teamSize > 1 && [...Array(teamSize - 1)].map((e, i) => (
                                        <div key={i} >
                                            <div className="h-1 w-full my-5 rounded-full bg-gray-700" />
                                            <FormInput inputName="name" name={`Team member ${i + 1}`} data={members[i].name} setdata={onMemberChange} placeholder="Full name" inputIndex={i} />
                                            <FormInput inputName="email" name="Email" data={members[i].email} setdata={onMemberChange} placeholder="Email" inputIndex={i} />
                                            <FormInput inputName="phone" name="Phone number" data={members[i].phone} setdata={onMemberChange} placeholder="Phone number" inputIndex={i} />
                                            <FormInput inputName="college" name="College name" data={members[i].college} setdata={onMemberChange} placeholder="College name" inputIndex={i} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : page === 2 ? (
                            <div className="text-white" >
                                <div className="mb-20" >
                                    <p className="mb-7" >Instruction to follow:</p>
                                    <div>
                                        💣 Copy this text <b>"Qx24-{event?.name}"</b> and paste it in the Purpose of payment input.
                                        <br />
                                        <br />
                                        💣 Any discrepancies in filling the form may lead to disqualification of the application without refund.
                                        <br />
                                        <br />
                                        💣 This is the about to be paid <b className="text-red-600" >"&#8377; {event?.fee}"</b>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                                <a href="https://forms.eduqfix.com/misce3/add" target="_blank"  >
                                    <p className="bg-blue-600 text-center px-5 p-3 rounded-xl select-none" >Pay now</p>
                                </a>
                            </div>
                        ) : page === 3 && (
                            <div className="text-white" >
                                <div>
                                    <FormInput inputName="transacImg" name="Transaction Image" data={transacImg} setdata={onChange} type="file" />
                                    <FormInput inputName="applicantId" name="Applicant Id" data={applicantId} setdata={onChange} placeholder="Applicant Id" />
                                </div>
                            </div>
                        )}
                        <div onClick={page === 1 ? handleNext1 : page === 2 ? handleNext2 : onSubmit} className="bg-[url('/btn-yellow.svg')] active:scale-95 bg-cover min-w-60 w-60 min-h-[3.1rem] mt-5 min-[1293px]:ml-auto bg-no-repeat flex items-center justify-center font-semibold duration-200 z-10 cursor-pointer select-none" >
                            <p className='text-white text-lg font-mono' >{page === 3 ? "Submit" : "Next"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsRegister