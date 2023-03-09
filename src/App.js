import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import { Header } from './components/Header/header';
import { Home } from './components/Home/home'
import { Contact } from './components/Contact/contact'
import { Footer } from './components/Footer/footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
