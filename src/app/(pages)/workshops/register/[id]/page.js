"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { workshopsData } from "@/utils/workshop-details"
import FormInput from "@/components/FormInput"
import Spinner from "@/components/Spinner"

const WorkshopsRegister = ({ params }) => {
    const router = useRouter();

    const workshop = workshopsData.find((workshop) => workshop.id === params.id)
    const [page, setPage] = useState(1)
    const [imageSizeError, setImageSizeError] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const [transacImg, setTransImg] = useState("");
    const [formData, setFormData] = useState({
        applicantId: '',
        name: '',
        email: '',
        phone: '',
        college: '',
        usn: '',
        fee: workshop?.fee,
        workshopName: workshop?.name
    });

    const { applicantId, name, email, phone, college, usn, fee, workshopName } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleNext1 = () => {
        if (name && email && phone && college && usn) {
            setPage(2)
        } else {
            setPage(1)
            setError(1)
        }
    }

    const handleNext2 = () => {
        setPage(3)
    }

    const registerWorkshop = async (body) => {
        setLoading(true)
        try {
            const res = await fetch(`https://www.quantumxfest.com/api/workshops`, {
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

        if (workshop?.fee === 0) {
            data = { name, email, phone, college, usn, fee, workshopName }
        }
        else if (transacImg && !imageSizeError && applicantId) {
            data = { transacImg, applicantId, name, email, phone, college, usn, fee, workshopName }
        }

        if (data) {
            const body = JSON.stringify(data)
            registerWorkshop(body)
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageSizeInBytes = file.size;
            const imageSizeInKb = imageSizeInBytes / 1024;
            if (imageSizeInKb > 201) {
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



    return loading ? <Spinner /> : (
        <div className='bg-black text-white min-h-screen p-7 pt-20 md:p-20 md:px-28' >
            <div>
                <p className="text-4xl text-center font-semibold mb-5 md:mb-14" >Register for <span className="font-bold text-violet-300" >{workshop?.name}</span></p>
                <div className="min-[1293px]:flex 2xl:justify-center" >
                    <div className="bg-gray-800 p-5 rounded-xl h-full" >
                        <div className='hidden min-[1293px]:block w-[18rem] min-w-[18rem] h-full mb-6' >
                            <Image className='w-full h-full rounded-2xl' src={workshop?.imgDesc} width={250} height={250} alt="Event" />
                        </div>
                        <div>
                            <p className="text-lg font-medium" >Amount : &#8377; {workshop?.fee} (per team)</p>
                            <p className="text-lg font-medium" >Team size : {workshop?.fixedSize ? workshop?.fixedSize : `${workshop?.minSize} - ${workshop?.maxSize}`}</p>
                            <p className="text-lg font-medium" >Start Date: {workshop?.date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:items-center min-[1293px]:justify-between min-[1293px]:ml-20 mt-5 md:mt-16 min-[1293px]:mt-0" >
                        <div className="bg-gray-500 mb-5 h-2.5 w-full rounded-full" >
                            <div className={`bg-green-500 h-2.5 self-start rounded-full`} style={{ width: `${(((workshop?.fee === 0 ? 3 : page) / 3) * 100).toFixed(2)}%` }} />
                        </div>
                        {error && <div className="bg-yellow-400 text-red-600 font-semibold mb-5 text-center rounded-xl w-full" >Enter all fields</div>}
                        {page === 1 ? (
                            <div>
                                <div className="mt-5 md:mt-10" >
                                    {workshop?.id === "QX_EV_12" && (
                                        <FormInput name="Team name" data={teamName} setdata={e => setTeamName(e.target.value)} placeholder="Team name" />
                                    )}
                                    {(workshop?.id === "QX_EV_02" || workshop?.id === "QX_EV_03") && (
                                        <FormInput name="Discord id" data={discord} setdata={e => setDiscord(e.target.value)} placeholder="Discord id" />
                                    )}
                                    <FormInput inputName="name" name="Name" data={name} setdata={onChange} placeholder="Full name" />
                                    <FormInput inputName="email" name="Email" data={email} setdata={onChange} placeholder="Email ID" type="email" />
                                    <FormInput inputName="phone" name="Phone number" data={phone} setdata={onChange} placeholder="Phone number" type="tel" />
                                    <FormInput inputName="college" name="College name" data={college} setdata={onChange} placeholder="College name" />
                                    <FormInput inputName="usn" name="USN" data={usn} setdata={onChange} placeholder="USN" />
                                </div>
                            </div>
                        ) : page === 2 ? (
                            <div className="text-white" >
                                <div className="mb-20" >
                                    <p className="mb-7" >Instruction to follow:</p>
                                    <div>
                                        💣 Copy this text <b>&quot;Qx24-{workshop?.name}&quot;</b> and paste it in the Purpose of payment input.
                                        <br />
                                        <br />
                                        💣 Any discrepancies in filling the form may lead to disqualification of the application without refund.
                                        <br />
                                        <br />
                                        💣 The amount to be paid is <b className="text-red-600" >&quot;&#8377; {workshop?.fee}&quot;</b>
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
                                {imageSizeError && <div className="text-red-600 text-xs ml-2 sm:ml-[14rem] -mt-5 md:-mt-10 mb-7 font-semibold  rounded-xl w-full" >Image size should be less than 200KB</div>}
                                <FormInput inputName="applicantId" name="Applicant Id" data={applicantId} setdata={onChange} placeholder="Applicant Id" />
                            </div>
                        )}
                        <div onClick={page === 1 ? (workshop?.fee === 0 ? onSubmit : handleNext1) : page === 2 ? handleNext2 : onSubmit} className="bg-[url('/btn-yellow.svg')] active:scale-95 bg-cover min-w-60 w-60 min-h-[3.1rem] mt-5 min-[1293px]:ml-auto bg-no-repeat flex items-center justify-center font-semibold duration-200 z-10 cursor-pointer select-none" >
                            <p className='text-white text-lg font-mono' >{page === 3 ? "Submit" : (workshop?.fee === 0 ? "Submit" : "Next")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkshopsRegister