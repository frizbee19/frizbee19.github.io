import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useMobile } from '../MobileProvider';

const Contact = () => {
  const isMobile = useMobile();
  const displayType = isMobile ? 'App-mobile' : 'App-main';

  // useEffect(() => {
  //   if (isMobileDevice()) {
  //     setIsMobile(true);
  //   }
  // }, []);


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
        <title>
          Contact Me!
        </title>
        <header className={displayType}>
          <h1 className='Subtitle' style={{ marginTop: '2em' }}>Contact Me</h1>
          <div className='Contact-line'>
            <span className="material-symbols-rounded" style={{ fontSize: 36 }}>
              mail
            </span>
            <a href="mailto:frizbee19@gmail.com">frizbee19@gmail.com</a>
          </div>
          {/* <div className='Contact-line'>
            <span class="material-symbols-rounded" style={{ fontSize: 36 }}>
              call
            </span>
            {isMobile ? (
              <a href="tel:1234567890">1234567890</a>
            ) : (
              <p>1234567890</p>
            )}
          </div> */}
          <div className='Contact-line'>
            <span className="material-symbols-rounded" style={{ fontSize: 36 }}>
              contact_page
            </span>
            <a href="https://www.linkedin.com/in/rizvee-ayub/">LinkedIn</a>
          </div>
          <div className='Contact-line'>
            <span className="material-symbols-rounded" style={{ fontSize: 36 }}>
              code
            </span>
            <a href="https://github.com/frizbee19">GitHub</a>
          </div>

        </header>
      </div>
    </body>
  );
}

export default Contact;