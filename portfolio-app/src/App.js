import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/main.css"

import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
