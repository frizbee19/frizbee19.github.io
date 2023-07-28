import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import GameJam from './Pages/GameJam';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/drawntoreality" element={<GameJam />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
