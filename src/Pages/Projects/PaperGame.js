import '../../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../../Utilities/MobileProvider';

function PaperGame() {
  const [showScroll, setShowScroll] = useState(false)
  const isMobile = useMobile();
  const displayType = isMobile ? 'App-mobile' : 'App-main';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 100) {
        setShowScroll(true)
      } else if (showScroll && window.scrollY <= 100) {
        setShowScroll(false)
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop); // Clean up event listener on component unmount
  }, [showScroll]);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <body>
      {/* Navbar */}
      <nav className={'navbar'} style={{ background: 'transparent' }}>

        {!isMobile ? (
          <nav className={`navbar ${showScroll ? "show" : ''}`}>
            <div className="nav-links-container">
              <Link className='nav-button' to="/">Home</Link>
            </div>
          </nav>
        ) : (
          <div className="nav-links-container" style={{ transform: 'scale(0.8)' }}>
            <Link className='nav-button' to="/" style={{ marginRight: -30 }}>Home</Link>
          </div>
        )}
      </nav>
      {/* Scroll to top button */}
      {!isMobile && (
        <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={() => { scrollToSection('title'); setShowScroll(false) }} disabled={!showScroll}>
          <span className="material-symbols-outlined">
            keyboard_double_arrow_up
          </span>
        </button>
      )}

      <div className='App'>
        <header className={displayType} id='title' >
          {/* About */}
          <h2 className='Subtitle' style={{ marginTop: '2em', fontSize: '2.5em' }}>Paper Game (WIP)</h2>
          <p className='Body-text'>
            A prototype for a First Person Shooter with a pencil-on-paper artstyle. Defeat your enemies with both the mighty pen and sword (or hot lead).
          </p>
          <p className='Body-text'>
            This passion project was made using Unreal Engine and was initially meant to serve as a thorough introduction for me to explore everything that Unreal Engine has to offer.
            As someone who is not artistically inclined, I figured that an art style reminiscent of that of a bored middle schooler doodling on their math homework would be both doable and unique.
            However to make a 2D art style look good in a 3D environment, I had to make post processing that is tailored to this project.
          </p>
          {/* Graphics */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>Graphics</h2>
          <p className='Body-text'>
            The idea behind the style of the game was to have the 3D environment look like it was hand-drawn like the 2D Doom-like sprites (which represent enemies, items, etc.) that populate it.
            To achieve this, I made a post processing material blueprint that got the outline of the environment by taking the scene depth and normal information, offsetting it in each direction, then subtracting the offsets from it.
            What this does is cancel out any similarities, meaning that geometry that has similar depth as the camera will be occluded, and parts of the geometry that are facing in similarly will also be cancelled, leaving only the outlines.
            This {' '}
             <a href="https://www.youtube.com/watch?v=Wpsqfpxb55Y&t=1465s" target="_blank" rel="noopener noreferrer">video</a>
             {' '}helped me refine my outline material.
          </p>
          <p className='Body-text'>
            I am not exaggerating much when I say that my drawing skills are on par with a pre-schooler. So in order to match the sprites that I scan and import after hand drawing them on paper, I added a slight displacement 
            on the outlines using a noise texture and world position (see {' '}
            <a href="https://www.youtube.com/watch?v=pJ42ylVyDpc&pp=ygUcdW5yZWFsIGVuZ2luZSBvdXRsaW5lIHNoYWRlcg%3D%3D" target="_blank" rel="noopener noreferrer">this video</a>
            ), replicating the imperfections seen in the drawings that I have made for the sprites. I linearly interpolate a different noise texture with the outline to give it the coarse texture that 
            a slightly unsharpened pencil would have.
          </p>
          <div className={`video-container ${isMobile ? 'video-container-mobile' : ''}`}>
            <img className='video' src='/Media/PaperGame/papergame.png' alt="PaperGame"/>
            <p className='Caption'>Demo environment rendered to look like the hand-drawn sprites.</p>
          </div>
          {/* Gameplay */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>"The Pen is Mightier than the Sword..."</h2>
          <p className='Body-text'>
            While the gameplay so far may be inspired by old school shooter games like classic Doom, the main mechanic for the game will be the drawing system. 
            Players will be able to draw symbols after entering Draw Mode; each symbol corresponds to a different action, such as reloading ammo for a certain weapon, healing, opening a door, etc. 
          </p>
          <p className='Body-text'>
            In order to read and process what the player draws, there is an algorithm called {' '}
            <a href="https://depts.washington.edu/acelab/proj/dollar/index.html" target="_blank" rel="noopener noreferrer">$1 Unistroke Recognizer</a>
            , which is a cheap and relatively straightforward way of detecting drawn shapes. However, all of the points of the shapes have to be connected for it to work. 
            For now, I am using a {' '}
            <a href="https://www.unrealengine.com/marketplace/en-US/product/similarityrecognition" target="_blank" rel="noopener noreferrer">marketplace asset</a>
            {' '} for prototyping purposes since the way I have currently implemented the algorithm is not demo-ready. The plan is to iterate on my implementation until I have a version that works with less errors than any external assets.
          </p>
        </header>
        <header className="App-main">

        </header>
      </div>
    </body>
  );
}


export default PaperGame;