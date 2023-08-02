import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../MobileProvider';

function GameJam() {
  const isMobile = useMobile();
  const displayType = isMobile ? 'App-mobile' : 'App-main';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <body>
      {/* Navbar */}
      <nav className={'navbar'} style={{ background: 'transparent' }}>

        {!isMobile ? (
          <div className="nav-links-container">
            <Link className='nav-button' to="/">Home</Link>
          </div>
        ) : (
          <div className="nav-links-container" style={{ transform: 'scale(0.8)' }}>
            <Link className='nav-button' to="/" style={{ marginRight: -30 }}>Home</Link>
          </div>
        )}
      </nav>
      <div className='App'>
        <header className={displayType}>
          <h2 className='Subtitle' style={{ marginTop: '2em' }}>Drawn to Reality</h2>
          <p className='Body-text'>
            Escape to an artist's fantasy world where you play as Seiden, a scaredy cat who wants to overcome their fears with the help of their best friend, Fuki. Face your anxieties head on by playing through 6 different levels, or drawings in this platforming adventure. The game based on the theme "It is not real."
          </p>
          <p className='Body-text'>
            Made in just under a week with a team of six for the Brackey's Game Jam, Drawn to Reality is a testament to the power of adaptability and teamwork in a high-stress environment. Out of the four programmers of the team, only one of them had had Unity experience prior to the Game Jam. I was among the three that did not. 
            The drive to finish the project and create a product to be proud of pushed me to learn the game engine within the timeframe, allowing us to deliver a game that we were happy with, given that it was the first game for most of the team. Although the team was unable to finish the project in time, it provided for a great learning experience and a fun time that fueled our passion for the industry.
          </p>
        </header>
        {!isMobile && (
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