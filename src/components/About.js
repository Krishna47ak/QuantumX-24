import { backDropText } from "@/utils/contants"

const About = () => {
    // const truncate = (str) => {
    //     return str.length > 10 ? str.substring(0, 7) + "..." : str;
    // }

    return (
        <div className='relative grid md:grid-cols-2 gap-x-16 text-white bg-[#831c84] p-7 md:p-10 lg:px-20 pb-20' >
            <div id="about" className='absolute -top-[9.5vh] left-0' />
            <div>
                <p className="text-3xl text-white text-center font-bold select-none mb-10" style={{ ...backDropText, fontSize: '2.5rem' }} >About Fest</p>
                <div className="text-justify" >
                    <p>
                        Welcome to QuantumX-24, where creativity is sparked by curiosity and innovation meets inspiration! This is the highly anticipated return and second edition of the official tech event of New Horizon College of Engineering, Bengaluru. Our annual tech fair was founded with the goal of providing a platform that honours technology&apos;s spirit and encourages curiosity. Today, it serves as a guide for innovators, enthusiasts, and students alike.
                    </p>
                </div>
            </div>
            <div className="mt-10 md:mt-0" >
                <p className="text-3xl text-white text-center font-bold select-none mb-10" style={{ ...backDropText, fontSize: '2.5rem' }} >About Theme</p>
                <div className="text-justify" >
                    <p>
                        Welcome to QuantumX-24, where creativity is sparked by curiosity and innovation meets inspiration! This is the highly anticipated return and second edition of the official tech event of New Horizon College of Engineering, Bengaluru. Our annual tech fair was founded with the goal of providing a platform that honours technology&apos;s spirit and encourages curiosity. Today, it serves as a guide for innovators, enthusiasts, and students alike.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About