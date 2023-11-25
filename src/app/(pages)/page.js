import Events from '@/components/Events'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'

const Home = () => {

    return (
        <div className="bg-[url('/BG6.gif')] min-h-screen bg-center overflow-hidden" >
            <Navbar />
            <Landing />
            <Events />
        </div>
    )
}

export default Home