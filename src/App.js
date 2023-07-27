import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
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
    if (!showScroll && window.scrollY > 30) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 30) {
      setShowScroll(false)
    }
  };


  return (
    <body>
      <div className="App">
        <title>
          Welcome to Rizvee's Page!
        </title>
        <button className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={() => { scrollToSection('introduction'); setShowScroll(false) }}>
          <span class="material-symbols-outlined">
            keyboard_double_arrow_up
          </span>
        </button>
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
      </div>
    </body>
  );
}

export default App;
