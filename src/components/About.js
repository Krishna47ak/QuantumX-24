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
                    Welcome to QuantumX-24, where inspiration meets innovation and curiosity ignites creativity! This is the much awaited return and second iteration of New Horizon College of Engineering, Bengaluru's official tech event. The purpose behind founding our annual tech expo was to offer a forum that celebrates the spirit of technology and fosters curiosity. It now acts as a manual for students, enthusiasts, and inventors alike.
                </p>
                <br />
                <p className="hidden md:block" >
                    At QuantumX, we believe that technology has the power to alter and shape the course of the planet. Our event acts as a center for information sharing, networking, and practical experiences that go beyond the conventional confines of academics. It's a location where concepts emerge, prototypes are made, and enduring relationships are established. Come along for the ride as we take a quantum leap into the future!
                </p>
            </div>

        </div>
    )
}

export default About