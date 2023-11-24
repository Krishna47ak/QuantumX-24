"use client"
import Image from "next/image"
import { motion } from 'framer-motion'
import { backDropText } from "@/utils/contants"


const Navbar = () => {
    return (
        <div>
            <div className="flex shadow-inner shadow-cyan-500/50 justify-between items-center h-[9vh] px-7 bg-slate-900 select-none" style={{ "opacity": "0.8" }} >
                <button className="inline lg:hidden" style={{ "color": "white" }}>
                    <Image src="/menu.svg" width={30} height={30} alt="menu" style={{ "filter": "invert(100%)" }} />
                </button>
                <ul className="hidden lg:flex justify-center items-center lg:space-x-10 xl:space-x-16 2xl:space-x-20" >
                    <li >
                        <button className="hover:scale-105" style={backDropText}>HOME</button>
                    </li>
                    <li>
                        <button className="hover:scale-105" style={backDropText}>EVENTS</button>
                    </li>
                    <li>
                        <button className="hover:scale-105" style={backDropText}>ABOUT</button>
                    </li>
                    <li>
                        <button className="hover:scale-105" style={backDropText}>CONTACT</button>
                    </li>

                </ul>
                <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="mx-auto lg:mx-2"
                >
                    <Image src="/logo.png" width={60} height={60} alt="logo" style={{ "paddingRight": "1%", "filter": "drop-shadow(0 0 0.05rem white)" }} />
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