"use client"
import Image from "next/image"
import { motion } from 'framer-motion'


const Navbar = () => {
    return (
        <div>
            <nav className="p-5 px-7" style={{ "backgroundColor": "black", "opacity": "0.8" }}>
                <div className="flex justify-between items-center" >
                    <button className="inline lg:hidden" style={{ "color": "white" }}>
                        <Image src="/menu.svg" width={30} height={30} alt="menu" style={{ "filter": "invert(100%)" }} />
                    </button>
                    <ul className="hidden lg:flex justify-center items-center lg:space-x-10 xl:space-x-16 2xl:space-x-20" >
                        <li >
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>HOME</button>
                        </li>
                        <li>
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>EVENTS</button>
                        </li>
                        <li>
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>ABOUT</button>
                        </li>
                        <li>
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>CONTACT</button>
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
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>SPONSORS</button>                        </li>
                        <li>
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>FAQ</button>                        </li>
                        <li>
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>GALLERY</button>                        </li>
                        <li>
                            <button className="hover:scale-105" style={{ "filter": "drop-shadow(0 0 0.3rem white)", "textDecoration": "none", "color": "white", "fontFamily": "'Source Code Pro', monospace", "fontSize": "1.3rem" }}>BOOKING</button>                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar