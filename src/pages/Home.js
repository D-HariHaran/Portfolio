import React, { useRef } from 'react';
import '../App.css';
import { Button } from '../components/Button';
import './Home.css';
import About from './About';
import Services from './Services';
import Footer from './Footer';


const Home = () => {

  const aboutSection = useRef(true);


  const gotoaboutSection = () => window.scrollTo({ top: aboutSection.current.offsetTop, behavior: "smooth" });



  return (
    <div>
      <div className='hero-container'>
        <h1 style={{ opacity: '100%' }}>AVINASH</h1>
        <h2 style={{ color: 'white', opacity: '100%' }}>PORTFOLIO</h2>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={gotoaboutSection}
          >
            GET STARTED
        </Button>
        </div>
        <div className="banner_fadeBottom" />

      </div>

      <div ref={aboutSection}>

        <About />
      </div>

      <Services />

      <Footer />

    </div>
  );
};

export default Home;