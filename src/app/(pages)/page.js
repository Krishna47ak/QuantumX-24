import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'

const Home = () => {
    return (
        <div className="bg-black min-h-screen bg-center bg-cover" >
            <Navbar />
            <Landing />
            <div className="bg-slate-950 text-center h-screen" >
                <p className="text-3xl text-white font-bold" >Events</p>
            </div>
        </div>
    )
}

export default Home