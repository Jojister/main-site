import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';

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
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

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
          <ScrollToHash />
          <div className="App">
            <Nav />
            <Cart />
            
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;