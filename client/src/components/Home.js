import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbarr from './Navbarr';
import About from './AboutAgency';
import Services from './services';
import Contact from './Contact';
import Banner from './Banner';
import { getservice } from '../JS/serviceSlice';
import { useDispatch } from 'react-redux';

function Home({ping, setping}) {
  const dispatch = useDispatch();
  const bannerStyle = {
    textAlign: 'center',
    color: '#333',
    position: 'relative',
    height: '100vh',
  };

  const imageStyle = {
    backgroundImage: 'url("https://html.tonatheme.com/2025/marketex/assets/images/banner/banner__image_1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    filter: 'opacity(70%)',
  }
  const textStyle = {
    position: 'absolute',
    top: '20%',
    left: '20%',
    color: 'white',
    // transform: '(-50%, -50%)',
    color: '#494747ff',
  }

  const headingStyle = {
    fontSize: '3.5em',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const paragraph2Style = {
    fontSize: '1.2em',
  }

  useEffect(() => {
      dispatch(getservice())
    }, []);
  return (
    <>
    {/* <div style={bannerStyle}>
      <div style={imageStyle}></div>
      <div className='text_banner' style={textStyle}>
        <h1 className='title_banner' style={headingStyle}>Welcome to <span style={{color: 'red'}}>R</span>AGENCY ! </h1>
        <p className='parag_banner' style={paragraphStyle}>Where Your Brand Meets Strategy!</p>
        <p className='slogan_banner' style={paragraph2Style}>From strategy to content, from design to results, we bring ideas to life.</p>
      </div>
    </div> */}
    <Banner />
    <About />
    <Services ping={ping} setping={setping} />
    <Contact />
    </>
  );
}

export default Home;