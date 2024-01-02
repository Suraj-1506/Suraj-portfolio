import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Themes from './components/Themes';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter basename="/Suraj-portfolio">
    <Navbar/>
    <Themes/>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Suraj-portfolio" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
