import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageProvider';
import { CartProvider } from './scripts/CartContext';

// Components
import Nav from './components/Nav';
import Cart from './components/Cart';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Success from './pages/Success';
import Footer from './components/Footer';

// Styles
import './style/App.css';

// Main Page Component (combines Home, About, Projects, Contact)
const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Nav />
            <Cart />
            
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/success" element={<Success />} />
            </Routes>
            
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;