import React,{useRef} from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './Home.css';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import { Link, animateScroll as scroll } from "react-scroll";
import Photography from './Photography';
// import vid from './boyup.mp4'
import hvdo from './hvido.mp4'
import useFirestore from '../hooks/useFirestore';
//<h2 style={{color:'white',opacity:'100%'}}>AVINASH SUBRAYAN</h2>
const Home = () => 
{
  const { docs } = useFirestore('hero');
  const aboutSection = useRef(true);
  const gotoaboutSection = () => window.scrollTo({ top:aboutSection.current.offsetTop,behavior:"smooth"});

    return(
        <div >
    <div className='hero-container'>
      {/* <h1 style={{opacity:'100%',zIndex:"1000"}}>PORTFOLIO</h1> */}
      <div id = "circle" style={{zIndex:"1000"}}></div>
      <video id='veleDa' autoPlay muted loop >
                  <source src={hvdo} type="video/mp4" />
                </video>
      <div className='hero-btns' style={{zIndex:"1000"}}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={gotoaboutSection}
          style={{zIndex:"1000"}}
        >
          EXPLORE
        </Button>
      </div>
      </div>

      <div ref={aboutSection}>
        <About />
      </div>
      <div >
        <Photography/>
      </div>
        <Footer/>

    </div>
    );
};

export default Home;