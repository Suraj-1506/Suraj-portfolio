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
    <BrowserRouter>
    <Navbar/>
    <Themes/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Suraj-portfolio" element={<Home />} />
          <Route path="/Suraj-portfolio/about" element={<About />} />
          <Route path="/Suraj-portfolio/portfolio" element={<Portfolio />} />
          <Route path="/Suraj-portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
