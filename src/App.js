import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Main/Home';
import Contact from './Pages/Main/Contact';
import GameJam from './Pages/Projects/GameJam';
import RagdollProject from './Pages/Projects/RagdollProject';
import { MobileProvider } from './Utilities/MobileProvider';
import PaperGame from './Pages/Projects/PaperGame';

const App = () => {
  return (
    <MobileProvider>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/drawntoreality" element={<GameJam />} />
          <Route path="/papergame" element={<PaperGame />} />
          <Route path="/ragdollproject" element={<RagdollProject />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {/* <footer className="Footer"></footer> */}
    </MobileProvider>
  );
}

export default App;
