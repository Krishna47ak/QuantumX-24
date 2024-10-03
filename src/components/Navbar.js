"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { backDropText } from "@/utils/contants"


const Navbar = () => {
    const [sideBarClicked, setSidebarClicked] = useState(false)

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    let menuRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;

            setScrolling(currentPosition > scrollTop);
            setScrollTop(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);


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
            <div className={`${scrolling ? '-translate-y-full' : 'translate-y-0'} duration-500 flex fixed z-50 shadow-inner shadow-cyan-500/50 justify-between items-center h-[9vh] w-full px-7 bg-slate-900 bg-opacity-80 backdrop-blur-md select-none overflow-hidden`}  >
                <div onClick={() => setSidebarClicked(true)} className="inline lg:hidden active:scale-95" >
                    <Image src="/menu.svg" width={30} height={30} alt="menu" style={{ "filter": "invert(100%)" }} />
                </div>

                <ul className="hidden lg:flex justify-center items-center lg:space-x-10 xl:space-x-16 2xl:space-x-20" >
                    <Link href="/" >
                        <button className="hover:scale-105 outline-none" style={backDropText}>HOME</button>
                    </Link>
                    <Link href="/events" >
                        <button className="hover:scale-105 outline-none" style={backDropText}>EVENTS</button>
                    </Link>
                    <Link href="/workshops">
                        <button className="hover:scale-105 outline-none" style={backDropText}>WORKSHOPS</button>
                    </Link>

                </ul>
                <div className="mx-auto pr-8 lg:pr-16" >
                    <Image src="/logo-white2.png" width={60} height={60} alt="logo" style={{ "filter": "drop-shadow(0 0 0.05rem white)" }} />
                </div>

                <ul className="hidden lg:flex justify-center items-center lg:space-x-10 xl:space-x-16 2xl:space-x-20" >
                    <Link href="/contact" >
                        <button className="hover:scale-105 outline-none" style={backDropText}>CONTACT</button>
                    </Link>
                    <Link href="/#about" >
                        <button className="hover:scale-105 outline-none" style={backDropText}>ABOUT</button>
                    </Link>
                    {/* <li>
                        <button className="hover:scale-105 outline-none" style={backDropText}>GALLERY</button>
                    </li> */}
                    {/* <Link href="/sponsors" >
                        <button className="hover:scale-105 outline-none" style={backDropText}>SPONSORS</button>
                    </Link> */}
                    <Link href="https://drive.google.com/file/d/1pf9GB7PsL7BinkBkJlpCZmvQeFY8MRF8/view" target="_blank">
                        <button className="hover:scale-105 outline-none" style={backDropText}>SCHEDULE</button>
                    </Link>

                </ul>
            </div>
            <div ref={menuRef} className={`fixed lg:hidden top-0 ${sideBarClicked ? 'left-0' : '-left-3/4'} duration-500 bg-black bg-[url('/sidebar-bg.png')] bg-center w-3/5 h-screen p-5 pt-14 z-50`} >
                <div onClick={() => setSidebarClicked(false)} className='absolute top-4 left-5' >
                    <Image className="cardDropshadow" src="/close.svg" width={20} height={20} alt="close" />
                </div>
                <Link href="/" >
                    <p className='navBtn cardDropshadow' >HOME</p>
                </Link>
                <Link href="/events" >
                    <p className='navBtn cardDropshadow' >EVENTS</p>
                </Link>
                <Link href="/workshops" >
                    <p className='navBtn cardDropshadow' >WORKSHOPS</p>
                </Link>
                {/* <Link href="/" >
                    <p className='navBtn cardDropshadow' >GALLERY</p>
                </Link> */}
                <Link href="/contact" >
                    <p className='navBtn cardDropshadow' >CONTACT</p>
                </Link>
                {/* <Link href="/" >
                    <p className='navBtn cardDropshadow' >SPONSORS</p>
                </Link> */}
                <Link href="/#about" >
                    <p className='navBtn cardDropshadow' >ABOUT</p>
                </Link>
                <Link href="https://drive.google.com/file/d/1pf9GB7PsL7BinkBkJlpCZmvQeFY8MRF8/view" target="_blank" >
                    <p className='navBtn cardDropshadow' >SCHEDULE</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar