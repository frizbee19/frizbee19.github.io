import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  function isMobileDevice() {
    console.log(navigator.userAgent);
    return /Android|iPhone|BlackBerry/i.test(navigator.userAgent);
  }


  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    }
  }, []);


  return (
    <body>
      <div className='App'>
        <title>
          Contact Me!
        </title>
        <nav className={'navbar'} style={{ background: 'transparent' }}>
          <div className="nav-links-container">
            <Link className='nav-button' to="/">Home</Link>
          </div>
        </nav>
        <header className="App-main">
          <h1 className='Subtitle'>Contact Me</h1>
          <div className='Contact-line'>
            <span class="material-symbols-rounded" style={{ fontSize: 36 }}>
              mail
            </span>
            <a href="mailto:frizbee19@gmail.com">frizbee19@gmail.com</a>
          </div>
          {/* <div className='Contact-line'>
            <span class="material-symbols-rounded" style={{ fontSize: 36 }}>
              call
            </span>
            {isMobile ? (
              <a href="tel:">(214) 277-2964</a>
            ) : (
              <p></p>
            )}
          </div> */}
          <div className='Contact-line'>
            <span class="material-symbols-rounded" style={{ fontSize: 36 }}>
              contact_page
            </span>
            <a href="https://www.linkedin.com/in/rizvee-ayub/">LinkedIn</a>
          </div>
          <div className='Contact-line'>
            <span class="material-symbols-rounded" style={{ fontSize: 36 }}>
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