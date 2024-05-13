import '../../App.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../../Utilities/MobileProvider';

function RagdollProject() {
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
          <h2 className='Subtitle' style={{ marginTop: '2em', fontSize: '2.5em' }}>Ragdoll Project</h2>
          <p className='Body-text'>
            A grim, experimental project that combines animations and physics to create realistic and reactive animations for a player model falling and dying. This test Unity project serves as a way to establish foundational knowledge for future game development endeavors.
          </p>
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>The Marriage of Physics and Animation</h2>
          <p className='Body-text'>
            
          </p>
          <h2 className='Subtitle' style={{ marginTop: '1em' }}>"Look on the Bright Side..."</h2>
          <p className='Body-text'>

          </p>
        </header>
      </div>

    </body>
  );
}

export default RagdollProject;
