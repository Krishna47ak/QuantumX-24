import { backDropText } from "@/utils/contants"

const About = () => {
    // const truncate = (str) => {
    //     return str.length > 10 ? str.substring(0, 7) + "..." : str;
    // }

    return (
        <div className='relative text-white bg-gradient-to-r from-slate-900 rounded-t-3xl p-7 md:p-10 lg:px-20 pb-20' >
            <div id="about" className='absolute -top-[9.5vh] left-0' />
            <p className="text-3xl text-white text-center font-bold select-none mb-10" style={{ ...backDropText, fontSize: '2.5rem' }} >About</p>
            <div className="text-justify" >
                <p>
                    Welcome to QuantumX-24, where creativity is sparked by curiosity and innovation meets inspiration! This is the highly anticipated return and second edition of the official tech event of New Horizon College of Engineering, Bengaluru. Our annual tech fair was founded with the goal of providing a platform that honours technology&apos;s spirit and encourages curiosity. Today, it serves as a guide for innovators, enthusiasts, and students alike.
                </p>
                <br />
                <p className="hidden md:block" >
                    At QuantumX, we think that technology has the ability to change the world and influence its course. Our festival serves as a hub for networking, knowledge exchange, and hands-on experiences that extend beyond academia&apos;s traditional boundaries. It&apos;s a place where ideas are born, prototypes are created, and lifelong connections are forged. Join us in this unique experience as we make the quantum leap into the future!
                </p>
            </div>

        </div>
    )
}

export default About