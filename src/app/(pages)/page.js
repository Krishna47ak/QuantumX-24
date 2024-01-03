import About from "@/components/About";
import CountdownTimer from "@/components/CountdownTimer";
import FAQ from "@/components/FAQ";
import HomeEvents from "@/components/HomeEvents";
import Landing from "@/components/Landing";

const Home = () => {
  return (
    <div className="bg-black min-h-screen bg-center overflow-hidden">
      <Landing />
      <CountdownTimer />
      <About />
      <HomeEvents />
      <FAQ />
    </div>
  );
};

export default Home;
