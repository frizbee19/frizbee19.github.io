import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>
        Welcome to Rizvee's Page!
      </title>
      <header className="App-main">
        <h1 id="welcome">
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
  );
}

export default App;
