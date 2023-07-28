import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const [showScroll, setShowScroll] = useState(false)



  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop); // Clean up event listener on component unmount
  }, [showScroll]);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 100) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 100) {
      setShowScroll(false)
    }
  };


  return (
    <body>
      {/* Navbar */}
      <nav className={`navbar ${showScroll ? "show" : ''}`}>
        <div className="nav-links-container">
          <button className='nav-links' onClick={() => { scrollToSection('about'); }}>About</button>
          <button className='nav-links' onClick={() => { scrollToSection('projects'); }}>Projects</button>
          <Link className='nav-button' to="/contact">Contact Me</Link>
        </div>
      </nav>
      <div className="App">
        <title>
          Welcome to Rizvee's Page!
        </title>


        <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={() => { scrollToSection('introduction'); setShowScroll(false) }} disabled={!showScroll}>
          <span className="material-symbols-outlined">
            keyboard_double_arrow_up
          </span>
        </button>

        {/* Introduction */}
        <div id="introduction">
          <header className="App-main">
            <h1 className="Welcome">
              Hello.
            </h1>
            <h2 className='Subtitle'>
              My name is Rizvee.
            </h2>
            <p className="Body-text">
              Welcome to my website. Let me walk you through everything you need to know about me. It all started when I was born...
            </p>
            <a
              className="button button-inline"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </header>
        </div>

        {/* About */}
        <div id="about">
          <header className="App-main" style={{ marginBottom: '-2.5em' }}>
            <h2 className='Subtitle'>
              About Me
            </h2>
            <div style={{ flexDirection: 'column', marginBottom: '1.45em' }}>
              <p className="Body-text">
                With a foundation rooted in a B.S. degree in Computer Science from UT Dallas and enriched by diverse professional experiences, my journey in software development has been multifaceted.
              </p>
              <p className="Body-text">
                In my role as a Software Engineer at VibeStir, I spearheaded mobile app development using Node.js and React Native, designed core app interfaces with Figma, and drove Agile methodologies. During my Software Engineer Internship at Cvent, I contributed to backend development by designing and deploying vital API endpoints using Java and Docker.
              </p>
              <p className="Body-text">
                Parallel to my professional path, I've been involved in noteworthy projects like the 'Capital One: Vulnerability Warriors' and the 'Drawn to Reality Game Jam'. As an Instructor at iCode, I also had the privilege of teaching programming fundamentals to K-12 students.
              </p>
              <p className="Body-text">
                Technically, I'm proficient in languages like Java, C/C++, C#, Python, and Node.js. I have experience with Linux/UNIX systems, React Native, Unity, SQL/PostgreSQL, OpenGL, and Git. I also comfortably navigate Agile/Scrum methodologies.
              </p>
            </div>
            <h2 className='Subtitle'>
              Mission
            </h2>
            <div style={{ flexDirection: 'column' }}>
              <p className="Body-text">
                Striding the line between systematic precision and creative flair, I bring a unique approach to the world of tech. With extensive experience in professional programming, I find solace in the calculated structure of code while I navigate the ever-evolving landscape of technological innovation.
              </p>
              <p className="Body-text">
                Outside my professional life, I've taken a dive into the largely uncharted field of game design. It's more than just a hobby to me. It's the catalyst for me to explore my innate curiosity, and my passion to expand the boundaries of my knowledge.
              </p>
              <p className="Body-text">
                Every line of code I write, every problem I solve, is driven by one mission: to use technology as a powerful tool to forge connections, illuminate insights, and drive change. Balancing creativity with logic, I seek not only to adapt to the fast-paced world of tech but also to influence its trajectory, one program at a time.
              </p>
            </div>
          </header>
        </div>

        {/* Projects */}
        <div id="projects">
          <header className="App-main">
            <h2 className='Subtitle' style={{ paddingRight: '0.5em' }}>
              Hi. Do you like games? I like games. Let's talk about some of my game projects.
            </h2>
            <Link className='button button-inline' to="/drawntoreality">Drawn to Reality</Link>
          </header>
          <div class="video-background">
            <video class="video" autoPlay loop muted disablePictureInPicture src='/Media/rickroll.mp4'>
              {/* <source src="../Media/rickroll.mp4" type="video/mp4"/> */}
            </video>
            <div className="blur-overlay">
              <div className="blur-overlay-content">
                <p>Your text goes here alsjdfhlasdfhasljdfhasjld laksdfhjaslkdhfjkashdf aslkdfjaslkjdhfasjlkdf askdlja akldjfhalskdfh asdkjlfhasdkjlfh</p>
              </div>
            </div>
          </div>
          <header className="App-main">
          </header>
        </div>
      </div>
    </body>
  );
}

export default Home;
