import About from '@/components/About'
import FAQ from '@/components/FAQ'
import HomeEvents from '@/components/HomeEvents'
import Landing from '@/components/Landing'

const Home = () => {

    return (
        <div className="bg-[url('/BG.gif')] min-h-screen bg-center overflow-hidden" >
            <Landing />
            <About />
            <HomeEvents />
            <FAQ />
        </div>
    )
}

export default Home