import Dropdown from "./Dropdown"


const FAQ = () => {

    return (
        <div id="faq" className='px-10 py-5 md:p-10 bg-black' >
            <p className="font-bold text-2xl md:text-3xl text-yellow-300 text-center" >FREQUENTLY ASKED QUESTIONS</p>
            <div className='md:px-28 py-10 md:mt-10 duration-500' >
                <Dropdown ques="What is QuantumX-24 all about?" ans="QuantumX-24 is an annual technology festival that brings together enthusiasts, innovators, and tech experts to celebrate and explore the latest advancements in technology. It features a diverse range of events, workshops, and competitions." />
                <Dropdown ques="When and where is QuantumX-24 happening?" ans="QuantumX-24 is scheduled to take place on the 23rd, 24th and the 25th of January, 2024 at New Horizon College of Engineering, Bengaluru. Check our official website [site] for the most up-to-date information on timings and location." />
                <Dropdown ques="How can I register for QuantumX-24?" ans="Registration details can be found on our official website. Follow the registration link and fill in the required information to secure your spot." />
                <Dropdown ques="Is there a registration fee?" ans="The registration fee varies based on the event you choose. Please refer to the brochure or our website for detailed information on pricing." />
                <Dropdown ques="What events and activities can I expect at QuantumX-24?" ans="QuantumX-24 offers a diverse range of events, including tech talks, workshops, hackathons, coding competitions, robotics challenges, and more. Check our schedule on the website for a comprehensive list of activities." />
                <Dropdown ques=" Can I participate as an individual, or do I need a team?" ans="Both individual and team participation options are available for different events. Check the specific event details on our website to know the requirements for each competition or workshop." />
                <Dropdown ques="Are there any age restrictions for participants?" ans="Will be answered soon......." />
                <Dropdown ques="How can I become a sponsor or exhibitor at QuantumX-24?" ans="If you're interested in sponsoring or exhibiting at QuantumX-24, please contact our sponsorship team at [email id] for more information on available opportunities." />
                <Dropdown ques="Is there accommodation provided for out-of-town participants?" ans="Will be answered soon......." />
                <Dropdown ques="How can I stay updated on the latest news and announcements about QuantumX-24?" ans="Follow us on social media platforms such as Twitter, Facebook, and Instagram. You can also check our website for regular updates." />
            </div>
        </div>
    )
}

export default FAQ