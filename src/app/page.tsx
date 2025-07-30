
import Academics from "./components/Academics";
import Activities from "./components/Activities";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import QuotesSlider from "./components/QuotesSlider";


export default function Home() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Intro/>
      <Message/>
      <Academics/> 
      <Facilities/>
      <Activities/>
      <QuotesSlider/>
      <Footer/> 
    </main>
  );
}
