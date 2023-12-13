import Image from "next/image"

const About = () => {
    // const truncate = (str) => {
    //     return str.length > 10 ? str.substring(0, 7) + "..." : str;
    // }

    return (
        <div className='relative grid md:grid-cols-2 gap-x-16 text-white bg-[#831c84] p-7 md:p-10 lg:px-20 pb-20' >
            <div id="about" className='absolute -top-[9.5vh] left-0' />
            <div>
                <Image className="mx-auto mb-10 scale-75 md:scale-100" src="/about-us-heading.png" width={260} height={260} alt="about us" />
                <div className="text-justify" >
                    <p>
                        Welcome to QuantumX-24, where creativity is sparked by curiosity and innovation meets inspiration! This is the highly anticipated return and second edition of the official tech event of New Horizon College of Engineering, Bengaluru. Our annual tech fair was founded with the goal of providing a platform that honours technology&apos;s spirit and encourages curiosity. Today, it serves as a guide for innovators, enthusiasts, and students alike.
                    </p>
                </div>
            </div>
            <div className="mt-10 md:mt-0" >
            <Image className="mx-auto mb-10 scale-75 md:scale-100" src="/about-theme-heading.png" width={380} height={380} alt="about us" />
                <div className="text-justify" >
                    <p>
                        Take a dive into the electrifying world of QuantumX-24 : A Cyberpunk Utopia! Step into a realm where the future is now, where dazzling technology and visionary innovation converge with the captivating allure of cyberpunk aesthetics. In this futuristic haven of creativity and imagination, we invite you to explore a world that is both utopian and cyberpunk, a dazzling fusion of dreams and realities.                    </p>
                </div>
            </div>

        </div>
    )
}

export default About