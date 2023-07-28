import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

const Contact = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // function isMobileDevice() {
  //   console.log(navigator.userAgent);
  //   return /Android|iPhone|BlackBerry/i.test(navigator.userAgent);
  // }


  // useEffect(() => {
  //   if (isMobileDevice()) {
  //     setIsMobile(true);
  //   }
  // }, []);


  return (
    <body>
      <nav className={'navbar'} style={{ background: 'transparent' }}>
        <div className="nav-links-container">
          <Link className='nav-button' to="/">Home</Link>
        </div>
      </nav>
      <div className='App'>
        <title>
          Contact Me!
        </title>
        <header className="App-main">
          <h1 className='Subtitle' style={{ marginTop: '2em' }}>Contact Me</h1>
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
              <a href="tel:1234567890">1234567890</a>
            ) : (
              <p>1234567890</p>
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