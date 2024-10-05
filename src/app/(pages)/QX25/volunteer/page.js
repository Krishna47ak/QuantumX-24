"use client"

import FormInput2 from '@/components/FormInput2';
import Spinner from '@/components/Spinner';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const volunteerValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    department: Yup.string().required('Department is required'),
    semester: Yup.string().required('Semester is required'),
    section: Yup.string().required('Section is required'),
    role: Yup.string().required('Role is required'),
    usn: Yup.string().matches(/^1NH(21|22|23|24).*/, 'Enter a valid USN').required('USN is required'),
    email: Yup.string().email().required('Email is required'),
    phone: Yup.string().required('Phone number is required').length(10, 'Phone number must be exactly 10 digits').matches(/^\d+$/, 'Phone number must be numeric')
});

const volunteerInitialValues = {
    name: '',
    department: '',
    semester: '',
    role: '',
    section: '',
    usn: '',
    email: '',
    phone: ''
}

const depts = ["CE", "CSE", "AIML", "ISE", "ECE", "EEE", "ME", "CIV", "DS", "APPLIED SCIENCES"]
const sems = ["I", "III", "V", "VII"]
const roles = ["Team Lead", "Event/Workshop Coordinator", "Technical/Web Team", "Graphical Design/Poster Making", "Video Editing", "Social Media Management", "Content Team", "Emcee/Commentator", "Photography/Videography", "Volunteers"]

const VolunteerReg = () => {

    const [loading, setLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)


    const volunteerFormik = useFormik({
        initialValues: volunteerInitialValues,
        validationSchema: volunteerValidationSchema,
        onSubmit: async (values) => {

            const body = JSON.stringify(values)

            try {
                setLoading(true)
                const res = await fetch(`${process.env.DOMAIN}/api/volunteer`, {
                    credentials: "include",
                    method: "POST",
                    body,
                    headers: { 'Content-Type': 'application/json' }
                });
                const data = await res.json()
                if (data?.success) {
                    setIsSubmitted(true)
                    volunteerFormik.resetForm()
                } else {
                    throw new Error('Register failed!!');
                }
                setLoading(false)
            } catch (err) {
                setLoading(false)
                console.error(err);
            }
        },
    });

    return (
        <div className="bg-[url('/volunteer-bg.png')] bg-center bg-cover bg-fixed flex items-center justify-center min-h-screen overflow-hidden" >
            {isSubmitted ? (
                <div className='flex justify-center items-center text-white min-h-screen p-5 sm:p-20' >
                    <div className='bg-green-700 p-5 sm:p-20 text-center bg-opacity-70 rounded-xl' >
                        <p className='text-2xl sm:text-4xl font-semibold mb-5' >You have registered successfully!!</p>
                        <a href='https://chat.whatsapp.com/HpioA4Nm58p73kOgBrTZFb' target='_blank'>Join our <span className='text-blue-600 font-medium' >WhatsApp group</span> for further updates</a>
                    </div>

                </div>
            ) : loading ? (
                <div className='flex justify-center w-full bg-black' >
                    <Spinner />
                </div>
            ) : (
                <form className='bg-black w-[100%] bg-opacity-80 pt-28 px-5 sm:px-20 md:px-36 lg:px-60 xl:px-80 p-14 pb-16 text-white' onSubmit={volunteerFormik.handleSubmit} >
                    <div className='mb-20' >
                        <p className='font-bold text-4xl' >Join the Force Behind QuantumX-25!</p>
                        <p className='font-medium text-lg text-justify my-5' >
                            Are you ready to be part of something epic? QuantumX-25 is back and bigger than ever for its 3rd edition, and we need passionate, creative, and driven minds to help us make history! This national-level techno-management fest is set to push boundaries and bring together innovators from across the country. Whether you&apos;re a problem-solver, a tech enthusiast, or someone who thrives on managing large-scale events, there&apos;s a place for you on our team
                        </p>
                        <p className='font-bold text-2xl' >Don&apos;t miss the chance to:</p>
                        <p className='font-medium text-md mt-5' >&#x2022; Build unforgettable experiences</p>
                        <p className='font-medium text-md mt-3' >&#x2022; Network with top professionals and fellow students</p>
                        <p className='font-medium text-md mt-3' >&#x2022; Take your skills to the next level</p>
                        <p className='font-semibold text-lg text-justify my-5' >Join the QuantumX-25 crew and make your mark on a fest that’s redefining what’s possible!</p>
                        <p className='font-bold text-3xl text-center mt-20' >Volunteer Now - Be Part of the Revolution</p>
                    </div>
                    <FormInput2 name="Name" value={volunteerFormik.values.name} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} touched={volunteerFormik.touched.name} error={volunteerFormik.errors.name} type='text' placeholder='Full name*' />
                    <FormInput2 name="USN" value={volunteerFormik.values.usn} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} touched={volunteerFormik.touched.usn} error={volunteerFormik.errors.usn} type='text' placeholder='USN*' />
                    <div className='mb-5 mt-10' >
                        <select name='department' className={`text-gray-500 w-full py-3 rounded-xl px-4 h-12 ${!!volunteerFormik.values.department && "uppercase"}`} value={volunteerFormik.values.department} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} >
                            <option value="" className={`text-gray-500 capitalize`} >Department</option>
                            {depts?.map(dept => (
                                <option key={dept} value={dept} className='uppercase' >{dept}</option>
                            ))}
                        </select>
                        {volunteerFormik.touched.department && <span className='first-letter:uppercase text-sm text-red-500 pl-1 mt-1' >{volunteerFormik.errors.department}</span>}
                    </div>
                    <div className='mb-5 mt-10' >
                        <select name='semester' className={`text-gray-500 w-full py-3 rounded-xl px-4 h-12 ${!!volunteerFormik.values.semester && "uppercase"}`} value={volunteerFormik.values.semester} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} >
                            <option value="" className={`text-gray-500 capitalize`} >Semester</option>
                            {sems?.map(sem => (
                                <option key={sem} value={sem} className='uppercase' >{sem}</option>
                            ))}
                        </select>
                        {volunteerFormik.touched.semester && <span className='first-letter:uppercase text-sm text-red-500 pl-1 mt-1' >{volunteerFormik.errors.semester}</span>}
                    </div>
                    <FormInput2 name="Section" value={volunteerFormik.values.section} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} touched={volunteerFormik.touched.section} error={volunteerFormik.errors.section} placeholder='Section*' />
                    <FormInput2 name="Email" value={volunteerFormik.values.email} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} touched={volunteerFormik.touched.email} error={volunteerFormik.errors.email} type='email' placeholder='Email*' />
                    <FormInput2 name="Phone" value={volunteerFormik.values.phone} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} touched={volunteerFormik.touched.phone} error={volunteerFormik.errors.phone} type='tel' placeholder='Phone*' />
                    <div className='mb-5 mt-10' >
                        <select name='role' className={`text-gray-500 w-full py-3 rounded-xl px-4 h-12 ${!!volunteerFormik.values.role && "uppercase"}`} value={volunteerFormik.values.role} onChange={volunteerFormik.handleChange} onBlur={volunteerFormik.handleBlur} >
                            <option value="" className={`text-gray-500 capitalize`} >What will you bring to the team?</option>
                            {roles?.map(role => (
                                <option key={role} value={role} className='uppercase' >{role}</option>
                            ))}
                        </select>
                        {volunteerFormik.touched.role && <span className='first-letter:uppercase text-sm text-red-500 pl-1 mt-1' >{volunteerFormik.errors.role}</span>}
                    </div>
                    <button type='submit' disabled={loading} className='bg-[#340E62] text-white py-2 px-4 w-full  mt-5 rounded-lg active:scale-95 duration-500' >Submit</button>
                </form>
            )}
        </div >
    )
}

export default VolunteerReg