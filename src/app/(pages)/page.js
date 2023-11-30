import About from '@/components/About'
import HomeEvents from '@/components/HomeEvents'
import Landing from '@/components/Landing'

const Home = () => {

    return (
        <div className="bg-[url('/BG6.gif')] min-h-screen bg-center overflow-hidden" >
            <Landing />
            <About />
            <HomeEvents />
        </div>
    )
}

export default Home