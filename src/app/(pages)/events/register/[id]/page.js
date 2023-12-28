"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import FilterDropdown from "@/components/FilterDropdown"
import { dropDownData, weightDropDownData } from "@/utils/contants"
import { eventsData } from "@/utils/event-details"
import FormInput from "@/components/FormInput"
import Spinner from "@/components/Spinner"

const memberStruct = {
    name: '',
    email: '',
    phone: '',
    college: '',
    usn: ''
}

const EventsRegister = ({ params }) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false)
    const event = eventsData.find((event) => event.id === params.id)
    const [teamSize, setTeamSize] = useState(null)
    const [weightClass, setWeightClass] = useState(null)
    const [members, setMembers] = useState(Array(teamSize).fill(memberStruct));
    const [transacImg, setTransImg] = useState("");
    const [page, setPage] = useState(1)
    const [error, setError] = useState(false)
    const [applicantIdError, setApplicantIdError] = useState(false)
    const [imageSizeError, setImageSizeError] = useState(false)
    const [teamName, setTeamName] = useState("")
    const [discord, setDiscord] = useState("")
    const [formData, setFormData] = useState({
        applicantId: '',
        leader: '',
        email: '',
        phone: '',
        college: '',
        usn: '',
        fee: event?.fee,
        eventName: event?.name
    });

    const { applicantId, leader, email, phone, college, usn, fee, eventName } = formData

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

    const onChange = e => (
        setFormData({ ...formData, [e.target.name]: e.target.value }),
        setError(false)
    )


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
                        if (event?.id === "QX_EV_18") {
                            if (weightClass === null) {
                                setPage(1)
                                setError(true)
                            } else {
                                setPage(2)
                                setError(false)
                            }
                        }
                    } else {
                        setPage(1)
                        setError(true)
                    }
                })
            } else {
                setPage(2)
            }
        } else {
            setPage(1)
            setError(true)
        }
    }

    const handleNext2 = () => {
        setPage(3)
    }

    const registerEvent = async (body) => {
        setLoading(true)
        try {
            const res = await fetch(`${process.env.DOMAIN}/api/events`, {
                credentials: "include",
                method: "POST",
                body,
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json()
            if (data?.success) {
                router.push("/success")
            } else {
                router.push("/failed")
            }
        } catch (err) {
            console.error(err);
            router.push("/failed")
        }
    }

    const onSubmit = () => {
        let data;

        if (event?.fee === 0) {
            data = { leader, email, phone, college, usn, teamSize, members, fee, eventName }
        }
        else if (transacImg && !imageSizeError && applicantId) {
            if (event?.id === "QX_EV_12") {
                data = { teamName, transacImg, applicantId: applicantId.trim(), leader: leader.trim(), email: email.trim(), phone, college: college.trim(), usn: usn.trim(), teamSize, members, fee, eventName }
            } else if (event?.id === "QX_EV_18") {
                data = { weightClass, transacImg, applicantId: applicantId.trim(), leader: leader.trim(), email: email.trim(), phone, college: college.trim(), usn: usn.trim(), teamSize, members, fee, eventName }
            } else if (event?.id === "QX_EV_02" || event?.id === "QX_EV_03") {
                data = { discord, transacImg, applicantId: applicantId.trim(), leader: leader.trim(), email: email.trim(), phone, college: college.trim(), usn: usn.trim(), teamSize, members, fee, eventName }
            } else {
                data = { transacImg, applicantId: applicantId.trim(), leader: leader.trim(), email: email.trim(), phone, college: college.trim(), usn: usn.trim(), teamSize, members, fee, eventName }
            }
        }

        if (applicantId?.length < 14 && event?.fee != 0) {
            setApplicantIdError(true)
        } else if (data) {
            const body = JSON.stringify(data)
            registerEvent(body)
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageSizeInBytes = file.size;
            const imageSizeInKb = imageSizeInBytes / 1024;
            if (imageSizeInKb > 151) {
                setImageSizeError(true)
            } else {
                setImageSizeError(false)
                var reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => {
                    setTransImg(reader.result);
                };
            }
        }
    };

    useEffect(() => {
        if (event?.fixedSize) {
            handleTeamSizeChange(event?.fixedSize)
        }
    }, [])


    return loading ? <Spinner /> : (
        <div className='bg-black text-white min-h-screen p-7 pt-20 md:p-20 md:px-28' >
            <div>
                <p className="text-4xl text-center font-semibold mb-5 md:mb-14" >Register for <span className="font-bold text-violet-300" >{event?.name}</span></p>
                <div className="min-[1293px]:flex 2xl:justify-center" >
                    <div className="bg-gray-800 p-5 rounded-xl h-full" >
                        <div className='hidden min-[1293px]:block w-[18rem] min-w-[18rem] h-full mb-6' >
                            <Image className='w-full h-full rounded-2xl' src={event?.imgDesc} width={250} height={250} alt="Event" />
                        </div>
                        <div>
                            <p className="text-lg font-medium" >Amount : &#8377; {event?.fee === 0 ? "Free" : event?.fee} (per team)</p>
                            <p className="text-lg font-medium" >Team size : {event?.fixedSize ? event?.fixedSize : `${event?.minSize} - ${event?.maxSize}`}</p>
                            <p className="text-lg font-medium" >Start Date: {event?.date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-center min-[1293px]:justify-between min-[1293px]:ml-20 mt-5 md:mt-16 min-[1293px]:mt-0" >
                        <div className="bg-gray-500 mb-5 h-2.5 w-full rounded-full" >
                            <div className={`bg-green-500 h-2.5 self-start rounded-full`} style={{ width: `${(((event?.fee === 0 ? 3 : page) / 3) * 100).toFixed(2)}%` }} />
                        </div>
                        {error && <div className="bg-yellow-400 text-red-600 font-semibold mb-5 text-center rounded-xl w-full" >Enter all fields</div>}
                        {page === 1 ? (
                            <div>
                                <div className="flex space-x-5" >
                                    <FilterDropdown data={teamSizeData} name="Team size :" setFilterData={handleTeamSizeChange} filterData={teamSize} />
                                    {event?.id === "QX_EV_18" && (
                                        <FilterDropdown data={weightDropDownData} name="Weight class (KG) :" setFilterData={setWeightClass} filterData={weightClass} width="13.5rem" />
                                    )}
                                </div>
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
                                    <FormInput inputName="college" name={((event?.id != "QX_EV_08") && (event?.id != "QX_EV_09") && (event?.id != "QX_EV_10") && (event?.id != "QX_EV_11")) ? "College name" : "School name"} data={college} setdata={onChange} placeholder="College/School name" />
                                    <FormInput inputName="usn" name={((event?.id != "QX_EV_08") && (event?.id != "QX_EV_09") && (event?.id != "QX_EV_10") && (event?.id != "QX_EV_11")) ? "USN" : "Class & Section"} data={usn} setdata={onChange} placeholder={((event?.id != "QX_EV_08") && (event?.id != "QX_EV_09") && (event?.id != "QX_EV_10") && (event?.id != "QX_EV_11")) ? "USN" : "IX A"} />
                                </div>
                                {/* {teamSize && teamSize != 1 && <div className="h-1 w-full my-5 rounded-full bg-gray-700" />} */}
                                <div>
                                    {teamSize > 1 && [...Array(teamSize - 1)].map((e, i) => (
                                        <div key={i} >
                                            <div className="h-1 w-full my-5 rounded-full bg-gray-700" />
                                            <FormInput inputName="name" name={`Team member ${i + 1}`} data={members[i].name} setdata={onMemberChange} placeholder="Full name" inputIndex={i} />
                                            <FormInput inputName="email" name="Email" data={members[i].email} setdata={onMemberChange} placeholder="Email" inputIndex={i} />
                                            <FormInput inputName="phone" name="Phone number" data={members[i].phone} setdata={onMemberChange} placeholder="Phone number" inputIndex={i} />
                                            <FormInput inputName="college" name={((event?.id != "QX_EV_08") && (event?.id != "QX_EV_09") && (event?.id != "QX_EV_10") && (event?.id != "QX_EV_11")) ? "College name" : "School name"} data={members[i].college} setdata={onMemberChange} placeholder="College/School name" inputIndex={i} />
                                            <FormInput inputName="usn" name={((event?.id != "QX_EV_08") && (event?.id != "QX_EV_09") && (event?.id != "QX_EV_10") && (event?.id != "QX_EV_11")) ? "USN" : "Class & Section"} data={members[i].usn} setdata={onMemberChange} placeholder={((event?.id != "QX_EV_08") && (event?.id != "QX_EV_09") && (event?.id != "QX_EV_10") && (event?.id != "QX_EV_11")) ? "USN" : "IX A"} inputIndex={i} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : page === 2 ? (
                            <div className="text-white" >
                                <div className="mb-20" >
                                    <p className="mb-7" >Instruction to follow:</p>
                                    <div>
                                        💣 Copy this text <b>&quot;Qx24-{event?.name}&quot;</b> and paste it in the Purpose of payment input.
                                        <br />
                                        <br />
                                        💣 Any discrepancies in filling the form may lead to disqualification of the application without refund.
                                        <br />
                                        <br />
                                        💣 The amount to be paid is <b className="text-red-600" >&quot;&#8377; {event?.fee}&quot;</b>
                                        <br />
                                        <br />
                                        💣 After completing the payment, fill the payment details in the next step.
                                        <br />
                                    </div>
                                </div>
                                <a href="https://forms.eduqfix.com/misce3/add" target="_blank"  >
                                    <p className="bg-blue-600 text-center px-5 p-3 rounded-xl select-none" >Pay now</p>
                                </a>
                            </div>
                        ) : page === 3 && (
                            <div className="text-white overflow-hidden" >
                                <FormInput inputName="transacImg" name="Payment reciept image" setdata={handleImageChange} type="file" />
                                {imageSizeError && <div className="text-red-600 text-xs ml-2 sm:ml-[14rem] -mt-5 md:-mt-10 mb-7 font-semibold  rounded-xl w-full" >Image size should be less than 150KB</div>}
                                <FormInput inputName="applicantId" name="Applicant Id" data={applicantId} setdata={onChange} placeholder="Applicant Id" />
                                {applicantIdError && <div className="text-red-600 text-xs ml-2 sm:ml-[12rem] -mt-3 md:-mt-5 mb-7 font-semibold  rounded-xl w-full" >Invalid applicant Id</div>}
                            </div>
                        )}
                        <div onClick={page === 1 ? (event?.fee === 0 ? onSubmit : handleNext1) : page === 2 ? handleNext2 : onSubmit} className="bg-[url('/btn-yellow.svg')] active:scale-95 bg-cover min-w-60 w-60 min-h-[3.1rem] mt-5 min-[1293px]:ml-auto bg-no-repeat flex items-center justify-center font-semibold duration-200 z-10 cursor-pointer select-none" >
                            <p className='text-white text-lg font-mono' >{page === 3 ? "Submit" : (event?.fee === 0 ? "Submit" : "Next")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsRegister