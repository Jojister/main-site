import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageProvider';
import { CartIcon } from './Cart';

const Nav = () => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="nav-links">
        {isHomePage ? (
          <>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              {language === 'english' ? 'Home' : 'ホーム'}
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              {language === 'english' ? 'About' : 'アバウト'}
            </a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
              {language === 'english' ? 'Projects' : 'プロジェクト'}
            </a>
            <Link to="/portfolio">
              {language === 'english' ? 'Portfolio' : 'ポートフォリオ'}
            </Link>
            <Link to="/shop">
              {language === 'english' ? 'Shop' : 'ショップ'}
            </Link>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              {language === 'english' ? 'Contact' : 'コンタクト'}
            </a>
          </>
        ) : (
          <>
            <Link to="/">
              {language === 'english' ? 'Home' : 'ホーム'}
            </Link>
            <Link to="/#about">
              {language === 'english' ? 'About' : 'アバウト'}
            </Link>
            <Link to="/#projects">
              {language === 'english' ? 'Projects' : 'プロジェクト'}
            </Link>
            <Link to="/portfolio">
              {language === 'english' ? 'Portfolio' : 'ポートフォリオ'}
            </Link>
            <Link to="/shop">
              {language === 'english' ? 'Shop' : 'ショップ'}
            </Link>
            <Link to="/#contact">
              {language === 'english' ? 'Contact' : 'コンタクト'}
            </Link>
          </>
        )}
      </div>
      
      <div className="nav-actions">
        <CartIcon />
        <button onClick={toggleLanguage}>
          {language === 'english' ? '日本語' : 'English'}
        </button>
      </div>
    </nav>
  );
};

export default Nav;