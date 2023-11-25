"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { backDropText } from "@/utils/contants"


const Navbar = () => {
    const [sideBarClicked, setSidebarClicked] = useState(false)

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            setSidebarClicked(false);
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div>
            <div className="flex fixed z-50 shadow-inner shadow-cyan-500/50 justify-between items-center h-[9vh] w-full px-7 bg-slate-900 bg-opacity-80 backdrop-blur-xl select-none overflow-hidden"  >
                <div onClick={() => setSidebarClicked(true)} className="inline lg:hidden active:scale-95" >
                    <Image src="/menu.svg" width={30} height={30} alt="menu" style={{ "filter": "invert(100%)" }} />
                </div>
                <div ref={menuRef} className={`fixed lg:hidden top-0 ${sideBarClicked ? 'left-0' : '-left-3/4'} duration-500 bg-black w-3/5 h-screen p-5 pt-14 z-50`} >
                    <div onClick={() => setSidebarClicked(false)} className='absolute top-4 left-5' >
                        <Image className="cardDropshadow" src="/close.svg" width={20} height={20} alt="close" />
                    </div>
                    <Link href="#home" >
                        <p className='navBtn cardDropshadow' >HOME</p>
                    </Link>
                    <Link href="#events" >
                        <p className='navBtn cardDropshadow' >EVENTS</p>
                    </Link>
                    <Link href="/about" >
                        <p className='navBtn cardDropshadow' >ABOUT</p>
                    </Link>
                    <Link href="/contact" >
                        <p className='navBtn cardDropshadow' >CONTACT</p>
                    </Link>
                    <Link href="/contact" >
                        <p className='navBtn cardDropshadow' >SPONSORS</p>
                    </Link>
                    <Link href="/contact" >
                        <p className='navBtn cardDropshadow' >GALLERY</p>
                    </Link>
                    <Link href="/contact" >
                        <p className='navBtn cardDropshadow' >BOOKING</p>
                    </Link>
                </div>
                <ul className="hidden lg:flex justify-center items-center lg:space-x-10 xl:space-x-16 2xl:space-x-20" >
                    <Link href="#home" >
                        <button className="hover:scale-105" style={backDropText}>HOME</button>
                    </Link>
                    <Link href="#events" >
                        <button className="hover:scale-105" style={backDropText}>EVENTS</button>
                    </Link>
                    <Link href="#about" >
                        <button className="hover:scale-105" style={backDropText}>ABOUT</button>
                    </Link>
                    <Link href="#contact" >
                        <button className="hover:scale-105" style={backDropText}>CONTACT</button>
                    </Link>

                </ul>
                <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="mx-auto lg:mx-2"
                >
                    <Image src="/logo-white.png" width={60} height={60} alt="logo" style={{ "paddingRight": "1%", "filter": "drop-shadow(0 0 0.05rem white)" }} />
                </motion.div>

                <ul className="hidden lg:flex justify-center items-center lg:space-x-10 xl:space-x-16 2xl:space-x-20" >
                    <li >
                        <button className="hover:scale-105" style={backDropText}>SPONSORS</button>
                    </li>
                    <li>
                        <button className="hover:scale-105" style={backDropText}>FAQ</button>
                    </li>
                    <li>
                        <button className="hover:scale-105" style={backDropText}>GALLERY</button>
                    </li>
                    <li>
                        <button className="hover:scale-105" style={backDropText}>BOOKING</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar