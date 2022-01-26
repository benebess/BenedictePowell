
import React from "react";
import  { 
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Div } from './styled-components/app';




function App() {
  return (
    <Div>
      {/* <Div style={{ 
      backgroundImage: `url(${background})` }}> */}
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        <Footer />
      </Router>
    </Div>
  );
}


export default App;
