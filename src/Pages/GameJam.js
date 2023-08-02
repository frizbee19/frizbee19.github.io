import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../MobileProvider';

function GameJam() {
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
              <button className='nav-links' onClick={() => { scrollToSection('playgame'); }}>Play Now</button>
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
          <h2 className='Subtitle' style={{ marginTop: '2em', fontSize: '2.5em' }}>Drawn to Reality</h2>
          <p className='Body-text'>
            Escape to an artist's fantasy world where you play as Seiden, a scaredy cat who wants to overcome their fears with the help of their best friend, Fuki. Face your anxieties head on by playing through 6 different levels, or drawings in this platforming adventure. The game based on the theme "It is not real."
          </p>
          <p className='Body-text'>
            Made in just under a week with a team of six for the Brackey's Game Jam, Drawn to Reality is a testament to the power of adaptability and teamwork in a high-stress environment. Out of the four programmers of the team, only one of them had had Unity experience prior to the Game Jam. I was among the three that did not.
            The drive to finish the project and create a product to be proud of pushed me to learn the game engine within the timeframe, allowing us to deliver a game that we were happy with, given that it was the first game for most of the team. Although the team was unable to finish the project in time, it provided for a great learning experience and a fun time that fueled our passion for the industry.
          </p>
          {/* Dialogue */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>Dialogue</h2>
          <p className='Body-text'>
            One of the core components of the game that I worked on is the dialogue system that is present throughout the game. The dialogue system is like those found in old school RPGs, where the text prints out letter by letter at a certain pace, or if input is received from the player, it will instantly print all of the characters for that part of the dialogue.
            The dialogue boxes show the faces and reactions of the current speaker, and play a talking animation as the letters are getting printed. Additionally, a sound effect gets played at a random pitch within a range for each letter that gets printed.
          </p>
          <p className='Body-text'>
            I designed the system to be modular and easy to use, allowing for the team to easily add dialogue to the game. Once the script is added to a textbox game object, developer can manually add pages of dialogue, or if the text does not fit on one page, the system will automatically split the text into multiple pages.
            A character's face and reaction can be set for each page, and the system will automatically play the talking animation and sound effect for each letter. The context can also be set for each dialogue, so dialogue from a character in the real world would have a different aesthetic compared to dialogue in a level.
          </p>
          {/* Platforms */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>Platforms</h2>
          <p className='Body-text'>
            What would a platforming game be without platforms? The platforms were pretty straightforward to code: they are just one way colliders that can optionally move back and forth between two points. The code does get slightly complicate when the platforms are moving, as the player needs to be able to move with the platform. 
            I took the naive approach of making the player a child of the platform object when the player is on top of the platform, and then unparenting the player when the player is no longer on top of the platform.
          </p>
          <p className='Body-text'>
            This approach did its job for the project, but in hindsight, it probably would have been better to use a different approach for this method messes with the hierarchy of the scene without proper consideration.
            One possible approach could have been to add the platform's velocity to the player's velocity when the player is on top of the platform, so that the player moves with the platform without messing with the hierarchy of the scene. This could also add a momentum aspect to the platforming, which could be interesting.
          </p>
          {/* Birds */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>Birds</h2>
          <p className='Body-text'>
            Speaking of momentum, let's talk about birds (they are relevant to each other, trust me). There are two main types of birds in the game: platforming birds (black/blue) and hostile birds (red).
            In order to spice up the platforming in this game, I programmed the platforming birds to move in a sine wave pattern, so that the player has to time their jumps in order to land on the birds. A dev can then set their speed and amplitude in the Unity Editor to create different patterns for the birds to move in. 
            Additionally, it would not make too much sense for an adult human to be able to stand on the bird, so I gave physics to the birds so that they are weighed down whenever the player is standing on it. This adds an extra layer of challenge to the platforming, as the player has to consider the effects of their weight on the bird's momentum to time their jumps correctly. 
          </p>
          <p className='Body-text'>
            This, however, caused unintended side effects, such as the player slowly sliding off the bird as the bird moves. Unfortunately, I did not have enough time to diagnose this issue. Regarding momentum, the player is programmed so that whenever they jump, their vertical velocity gets added to rather than set. So when the player jumps while the bird is moving upwards, the player will jump higher than normal, 
            and vice versa, since the jump velocity is added to the velocity given to the player by the bird. This, once again, was unintended, especially since the regular platforms do not have this effect, but I decided to keep it because at the time, I thought it was a cool feature. In hindsight, I realize it was not the best or most consistent design choice, but it is what it is.
          </p>
          <p className='Body-text'>
            The hostile birds are pretty straightforward: they move in a straight line and deal damage to the player if they touch the player. Instead of going straight to the player, the hostile birds move towards where they detected the player, so that the player can dodge the birds if they are quick enough.
          </p>
          {/* Levels */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>Levels</h2>
          <p className='Body-text'>
            Combining the components that I have worked on with the assets that my peers have created, I was able to work on two of the six levels for the game: the clouds level and the birds level. The clouds level is the first level of the game, and it is meant to be a tutorial level that introduces the player to the core mechanics of the game. 
            The birds level is one of the later levels of the game, and it is meant to be a challenging level that tests the player's mastery of the mechanics.  
          </p>
          <p className='Body-text'>
            As the introductory stage of the game, I had to make sure that the clouds level was easy and straightforward to play, while also teaching the player about the core mechanics one by one. The level uses clouds as the main platforms of the level. The level starts off with stationary clouds, and then introduces moving clouds, and then teases birds, which will be the main platforming element of a future level.
          </p>
          <p className='Body-text'>
            In my opinion, the birds level is the hardest level in the game, and also my favorite level in the game (I may or may not be biased here). I am the most proud of this level because I was able to create a level that is challenging in way that is different from the other levels in the game while still maintaining the core platforming mechanics.
            As the level theme suggests, the level is filled with birds. As one could guess, the level makes heavy use of the bird platforms and introduces the bird enemies. As discussed previously, some of the quirks with the bird platforms may cause some frustration for the player, but once the player gets a feel for the level, 
            it becomes entertaining as the player has to use everything that they have learned in previous to navigate through an unforgiving environment.
          </p>
          {/* Lessons Learned */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>Lessons Learned</h2>
          <p className='Body-text'>
            Prior to this game jam, I had never worked on a game before, so I learned a lot about game development in general. I learned about the importance of planning and communication in a team setting, and I learned about the importance of time management and prioritization in a time constrained environment. 
            I have long since learned more about the Unity Engine and software design philosophies in general, so in hindsight, I would have done a lot of things differently. However, I am still proud of what I was able to accomplish in the time that I had, and I am grateful for the opportunity to work with my peers on this project.
          </p>
          <p className='Body-text'>
            You can play the game right now below (Note: The game is only playable on desktop). Keep in mind that there are still plenty of bugs and issues with the game since we did not have enough time to thoroughly test and debug the game, but I hope you enjoy it nonetheless!
          </p>
        </header>
        {!isMobile && (
          <>
            <div id='playgame' style={{ justifyContent: 'center', display: 'flex' }}>
              <div style={{
                position: 'relative',
                width: '960px',
                height: '590px',
                overflow: 'hidden'
              }}>
                <iframe src="https://itch.io/embed-upload/8432359?color=333333" title="Drawn to Reality Game" allowfullscreen="" width="1280" height="740" frameborder="0" style={{
                  border: 'none',
                  position: 'relative',
                  top: '0px', // Adjust these values to hide the unwanted elements
                  left: '0px',
                  width: '960px',
                  height: '640px'
                }} />
              </div>
            </div>
            <header className='App-main' style={{marginTop: '-4em', marginHorizontal: '6em'}}>
              <p className='Caption'>*Note: The master volume is set to be mute every time you enter the main menu so that the audio does not play as soon as this page is loaded. Additionally, some changes were made to the game to make it more web-friendly.</p>
            </header>
          </>
        )}
        <header className="App-main">

        </header>
      </div>
    </body>
  );
}


export default GameJam;