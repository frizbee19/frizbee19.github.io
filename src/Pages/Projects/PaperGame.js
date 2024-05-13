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
          </p>
          <p className='Body-text'>
            I am not exaggerating much when I say that my drawing skills are on par with a pre-schooler. So in order to match the sprites that I scan and import after hand drawing them on paper, I added a slight displacement 
            on the outlines using a noise texture and world position, replicating the imperfections seen in the drawings that I have made for the sprites. I multiply a different noise texture by the outline to give it the coarse texture that 
            a slightly unsharpened pencil would have.
          </p>
          <div className={`video-container ${isMobile ? 'video-container-mobile' : ''}`}>
            <video className='video' controls src='/Media/DrawnToReality/DrawnToRealityDialogue.mp4' />
            <p className='Caption'>Dialogue audio, talking animation, different emotes and skipping dialogue.</p>
          </div>
          {/* Gameplay */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>"The Pen is Mightier than the Sword..."</h2>
          <p className='Body-text'>
            What would a platforming game be without platforms? The platforms were pretty straightforward to code: they are just one way colliders that can optionally move back and forth between two points. The code does get slightly complicate when the platforms are moving, as the player needs to be able to move with the platform.
            I took the naive approach of making the player a child of the platform object when the player is on top of the platform, and then unparenting the player when the player is no longer on top of the platform.
          </p>
          <div className={`video-container ${isMobile ? 'video-container-mobile' : ''}`}>
            <video className='video' autoPlay loop muted disablePictureInPicture src='/Media/DrawnToReality/DrawnToRealityCloudsMuted.mp4' />
            <p className='Caption'>A cloud platform taking a player upwards.</p>
          </div>
          <p className='Body-text'>
            This approach did its job for the project, but in hindsight, it probably would have been better to use a different approach for this method messes with the hierarchy of the scene without proper consideration.
            One possible approach could have been to add the platform's velocity to the player's velocity when the player is on top of the platform, so that the player moves with the platform without messing with the hierarchy of the scene. This could also add a momentum aspect to the platforming, which could be interesting.
          </p>
          {/* Birds */}
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>"Is it a bird?!"</h2>
          <p className='Body-text'>
            Speaking of momentum, let's talk about birds (they are relevant to each other, trust me). There are two main types of birds in the game: platforming birds (black/blue) and hostile birds (red).
            In order to spice up the platforming in this game, I programmed the platforming birds to move in a sine wave pattern, so that the player has to time their jumps in order to land on the birds. A dev can then set their speed and amplitude in the Unity Editor to create different patterns for the birds to move in.
            Additionally, it would not make too much sense for an adult human to be able to stand on the bird, so I gave physics to the birds so that they are weighed down whenever the player is standing on it. This adds an extra layer of challenge to the platforming, as the player has to consider the effects of their weight on the bird's momentum to time their jumps correctly.
          </p>
          <div className={`video-container ${isMobile ? 'video-container-mobile' : ''}`}>
            <video className='video' autoPlay loop muted disablePictureInPicture src='/Media/DrawnToReality/DrawnToRealityBirdsMuted.mp4' />
            <p className='Caption'>Platforming birds and hostile birds in action!</p>
          </div>
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
        </header>
        <header className="App-main">

        </header>
      </div>
    </body>
  );
}


export default PaperGame;