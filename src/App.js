import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header/header';
import { Home } from './components/Home/home';
import { About } from './components/About/about';
import { Contact } from './components/Contact/contact';
import { Resume } from './components/Resume/resume'
import { Footer } from './components/Footer/footer';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path='/portfolio-webapp/' exact element={ <Home /> } />
          <Route path='/portfolio-webapp/about' element={ <About /> } />
          <Route path='/portfolio-webapp/contact' element={ <Contact /> } />
          <Route path='/portfolio-webapp/resume' element={ <Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
