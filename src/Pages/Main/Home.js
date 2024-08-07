import '../../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../../Utilities/MobileProvider';


function Home() {
  const [showScroll, setShowScroll] = useState(false)

  const isMobile = useMobile();
  const displayType = isMobile ? 'App-mobile' : 'App-main';

  // Check if mobile
  // useEffect(() => {
  //   console.log(navigator.userAgent);
  //   setIsMobile(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) ||
  //     navigator.userAgent.match(/iPhone/i) || /* check screen ratio for mobile*/ window.innerWidth < window.innerHeight);
  //   console.log(isMobile);
  //   if (isMobile) {
  //     setDisplayType('App-mobile');
  //   }
  // }, []);

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

      {!isMobile ? (
        <nav className={`navbar ${showScroll ? "show" : ''}`}>
          <div className="nav-links-container">
            <button className='nav-links' onClick={() => { scrollToSection('about'); }}>About</button>
            <button className='nav-links' onClick={() => { scrollToSection('projects'); }}>Projects</button>
            <Link className='nav-button' to="/contact">Contact Me</Link>
          </div>
        </nav>
      ) : (
        <nav className={`navbar ${showScroll ? "show" : ''}`}>
          <div className="nav-links-container" style={{ transform: 'scale(0.8)' }}>
            <Link className='nav-button' to="/contact" style={{ marginRight: -30 }}>Contact Me</Link>
          </div>
        </nav>
      )}
      <div className="App">
        <title>
          Welcome to Rizvee's Page!
        </title>

        {/* Scroll to top button */}
        {!isMobile && (
          <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={() => { scrollToSection('introduction'); setShowScroll(false) }} disabled={!showScroll}>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_up
            </span>
          </button>
        )}

        {/* Introduction */}
        <div id="introduction">
          <header className={displayType}>
            <h1 className="big-header">
              Hello.
            </h1>
            <h2 className='Subtitle'>
              My name is Rizvee.
            </h2>
            <p className="Body-text" style={{marginBottom: '-4em'}}>
              Welcome to my website. Let me walk you through everything you need to know about me. It all started when I was born...
            </p>
          </header>
        </div>

        {/* About */}
        <div id="about">
          <header className={displayType} style={{ marginBottom: '-2.5em' }}>
            <h2 className='Subtitle'>
              About Me
            </h2>
            <div style={{ flexDirection: !isMobile ? 'row' : 'column', marginBottom: '1.45em', display: 'flex' }}>
              <div style={{ flexDirection: 'column', flex: !isMobile ? 4 : '0 1 auto', marginRight: !isMobile? '3em' : '0em' }}>
                <p className="Body-text">
                  With a foundation rooted in a B.S. degree in Computer Science from UT Dallas and enriched by diverse professional experiences, my journey in software development has been multifaceted.
                </p>
                <p className="Body-text">
                  In my role as a Software Engineer at VibeStir, I spearheaded mobile app development using Node.js and React Native, designed core app interfaces with Figma, and drove Agile methodologies. During my Software Engineer Internship at Cvent, I contributed to backend development by designing and deploying vital API endpoints using Java and Docker.
                </p>
                <p className="Body-text">
                  Parallel to my professional path, I've been involved in noteworthy projects like the 'Capital One: Vulnerability Warriors' and the 'Drawn to Reality' Game Jam. As an Instructor at iCode, I also had the privilege of teaching programming fundamentals to K-12 students.
                </p>
                <p className="Body-text">
                  I'm proficient in languages like Java, C/C++, C#, Python, and Node.js. I have experience with Linux/UNIX systems, React Native, Unity, Unreal Engine, SQL/PostgreSQL, OpenGL, and Git. I also comfortably navigate Agile/Scrum methodologies.
                </p>
              </div>
              <div style={{ flex: !isMobile ? 1.4 : '0 1 auto' }}>
                <img src="/Media/RizveePortrait.jpg" alt="Rizvee" style={{ width: '100%', height: 'auto', borderRadius: 13, marginTop: '7.5%', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} />
              </div>
            </div>
            <h2 className='Subtitle'>
              Mission
            </h2>
            <div style={{ flexDirection: 'column' }}>
              <p className="Body-text">
                Striding the line between systematic precision and creative flair, I try to bring a unique approach to the world of tech. I find solace in the calculated structure of code while I navigate the ever-evolving landscape of technological innovation.
              </p>
              <p className="Body-text">
                Outside my professional life, I've taken a dive into the field of game design. It's more than just a hobby to me. It's the catalyst for me to explore my innate curiosity, and my passion to expand the boundaries of my knowledge.
              </p>
              <p className="Body-text">
                Every line of code I write, every problem I solve, is driven by one mission: to use technology as a powerful tool to forge connections with others. I seek not only to adapt to the fast-paced world of tech but also to influence its trajectory, one program at a time.
              </p>
            </div>
          </header>
        </div>

        {/* Projects */}
        <div id="projects">
          <header className={displayType}>
            <h1 className='Subtitle-dark' style={{ paddingRight: '0.5em' }}>
              Hi. Do you like games? I like games. Let's talk about some of my game projects.
            </h1>
          </header>
          {/* PaperGame */}
          {!isMobile ? (
            <div className="video-background">
              <video className="video-banner" autoPlay loop muted disablePictureInPicture src="/Media/PaperGame/papergamepreview.mp4">
                {/* <source src="/Media/rickroll.mp4" type="video/mp4"/> */}
              </video>
              <div className="blur-overlay blur-overlay-right">
                <div className="blur-overlay-content blur-overlay-content-right">
                  <h2 className='Subtitle-project'>
                    Paper Game (WIP)
                  </h2>
                  <p className='Body-text truncate-text' style={{ lineHeight: '1.55em' }}>A prototype for a First Person Shooter with a pencil-on-paper artstyle. Defeat your enemies with both the mighty pen and sword (or hot lead).</p>
                  <Link className='blur-overlay-button' to="/papergame">Learn More</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="blur-img-background">
              <div>
                <img src='/Media/PaperGame/papergame.png' alt='Drawn to Reality' className='blur-img' />
              </div>
              <div className="blur-img-content">
                <h2 className='Subtitle-project'>
                  Paper Game (WIP)
                </h2>
                <p className='Body-text' style={{ lineHeight: '1.55em' }}>A prototype for a First Person Shooter with a pencil-on-paper artstyle. Defeat your enemies with both the mighty pen and sword (or hot lead).</p>
                <Link className='blur-overlay-button blur-img-button' to="/papergame">Learn More</Link>
              </div>
            </div>
          )}
          <header className={displayType}>
          </header>
          {/* Drawn to Reality */}
          {!isMobile ? (
            <div className="video-background">
              <video className="video-banner" autoPlay loop muted disablePictureInPicture src='/Media/DrawnToReality/DrawnToRealityCompMute.mp4'>
                {/* <source src="../Media/rickroll.mp4" type="video/mp4"/> */}
              </video>
              <div className="blur-overlay">
                <div className="blur-overlay-content">
                  <h2 className='Subtitle-project'>
                    Drawn to Reality
                  </h2>
                  <p className='Body-text truncate-text' style={{ lineHeight: '1.55em' }}>Escape to an artist's fantasy world where you play as Seiden, a scaredy cat who wants to overcome their fears with the help of their best friend, Fuki. Face your anxieties head on by playing through 6 different levels, or drawings in this platforming adventure.</p>
                  <Link className='blur-overlay-button' to="/drawntoreality">Learn More</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="blur-img-background">
              <div>
                <img src='/Media/DrawnToReality/DrawnToRealityMobilePreview.png' alt='Drawn to Reality' className='blur-img' />
              </div>
              <div className="blur-img-content">
                <h2 className='Subtitle-project'>
                  Drawn to Reality
                </h2>
                <p className='Body-text' style={{ lineHeight: '1.55em' }}>Escape to an artist's fantasy world where you play as Seiden, a scaredy cat who wants to overcome their fears with the help of their best friend, Fuki. Face your anxieties head on by playing through 6 different levels, or drawings in this platforming adventure.</p>
                <Link className='blur-overlay-button blur-img-button' to="/drawntoreality">Learn More</Link>
              </div>
            </div>
          )}
          <header className={displayType}>
          </header>
          {/* Ragdoll Project */}
          {!isMobile ? (
            <div className="video-background">
              <video className="video-banner" autoPlay loop muted disablePictureInPicture src='/Media/RagdollProject/RagdollProjectCompMute.mp4'>
                {/* <source src="../Media/rickroll.mp4" type="video/mp4"/> */}
              </video>
              <div className="blur-overlay blur-overlay-right">
                <div className="blur-overlay-content blur-overlay-content-right">
                  <h2 className='Subtitle-project'>
                    Ragdoll Animation Test
                  </h2>
                  <p className='Body-text truncate-text' style={{ lineHeight: '1.55em' }}>A grim, experimental project that combines animations and physics to create realistic and reactive animations for a player model falling and dying. This test Unity project serves as a way to establish foundational knowledge for future game development endeavors.</p>
                  <Link className='blur-overlay-button'>Coming Soon</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="blur-img-background">
              <div>
                <img src='/Media/RagdollProject/RagdollProjectMobilePreview.png' alt='Ragdoll Project' className='blur-img'  />
              </div>
              <div className="blur-img-content">
                <h2 className='Subtitle-project'>
                  Ragdoll Animation Test
                </h2>
                <p className='Body-text Body-text-light' style={{ lineHeight: '1.55em' }}>A grim, experimental project that combines animations and physics to create realistic and reactive animations for a player model falling and dying. This test Unity project serves as a way to establish foundational knowledge for future game development endeavors.</p>
                <Link className='blur-overlay-button'>Coming Soon</Link>
              </div>
            </div>
          )}
          <header className={displayType}>
            <h1 className='Subtitle' style={{textAlign: 'center'}}>More Coming Soon...</h1>
          </header>
        </div>
      </div>
    </body>
  );
}

export default Home;
