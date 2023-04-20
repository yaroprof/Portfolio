import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./styles/main.css"

import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from "./pages/Projects";
import Project from "./pages/Project-page"
import Contacts from "./pages/Contacts";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project /> } />
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
