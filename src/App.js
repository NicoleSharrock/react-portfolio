import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro'
import About from './components/About';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
// import Aos from 'aos';




function App() {

  // useEffect(() => {
  //   Aos.init(
  //     { duration: 1000, once: true });
  // }, []);

  return (
    <>
      <Nav />
      <Intro />
      {/* <div
        data-aos="fade-up"
        data-aos-offset="360">
      </div> */}
      <br />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
