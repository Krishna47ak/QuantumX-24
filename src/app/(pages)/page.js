import Events from '@/components/Events'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'

const Home = () => {

    return (
        <div className="bg-black min-h-screen bg-center bg-cover" >
            <Navbar />
            <Landing />
            <Events />
        </div>
    )
}

export default Home