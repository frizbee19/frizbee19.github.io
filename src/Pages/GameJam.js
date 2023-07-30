import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../MobileProvider';

function GameJam() {
  const isMobile = useMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <body>
      {/* Navbar */}
      <nav className={'navbar'} style={{ background: 'transparent' }}>
        <div className="nav-links-container">
          <Link className='nav-button' to="/">Home</Link>
        </div>
      </nav>
      <div className='App'>
        <header className="App-main">
          <h2 className='Subtitle' style={{ marginTop: '2em' }}>Drawn to Reality</h2>
        </header>
        {isMobile && (
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div style={{
              position: 'relative',
              width: '960px',
              height: '590px',
              overflow: 'hidden'
            }}>
              <iframe src="https://itch.io/embed-upload/8401986?color=333333" allowfullscreen="" width="1280" height="740" frameborder="0" style={{
                border: 'none',
                position: 'relative',
                top: '0px', // Adjust these values to hide the unwanted elements
                left: '0px',
                width: '960px',
                height: '640px'
              }} />
            </div>
          </div>
        )}
        <header className="App-main">

        </header>
      </div>
    </body>
  );
}


export default GameJam;