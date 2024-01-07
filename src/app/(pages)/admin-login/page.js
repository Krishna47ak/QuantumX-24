"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/Spinner';


const AdminLogin = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const body = JSON.stringify({ username, password })
        try {
            const res = await fetch(`${process.env.DOMAIN}/api/login`, {
                credentials: "include",
                method: "POST",
                body,
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json()
            if (data?.success) {
                router.replace("/admin-qx")
            } else {
                router.replace("/admin-login")
            }
        } catch (err) {
            console.error(err);
            router.replace("/admin-login")
        }
    }


    return loading ? <Spinner /> : (
        <section className="bg-black flex flex-col p-5 items-center justify-center min-h-screen">
            <p className="text-white text-5xl font-semibold my-3">
                Login
            </p>
            <form className='flex flex-col gap-6 mt-5 md:w-[50vw] border border-[#C0C0C0] bg-gray-300 shadow-xl rounded-xl p-8 md:px-20' onSubmit={onSubmit} >
                <input name='username' value={username} onChange={onChange} type="text" placeholder='Username' className='pr-5 pl-5 py-3 rounded-2xl text-black' required />
                <input name='password' value={password} onChange={onChange} type="password" placeholder='Password' className='pr-5 pl-5 py-3 rounded-2xl text-black' required minLength={8} />
                <button type='submit' className='bg-[#340E62] text-white py-2 mt-5 rounded-lg active:scale-95 duration-500' >Submit</button>
            </form>
        </section>
    )
}

export default AdminLogin
