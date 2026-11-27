import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CartIcon } from './Cart';

const NAV_ITEMS = [
  { to: '/#home', en: 'Home', jp: 'ホーム' },
  { to: '/#about', en: 'About', jp: 'アバウト' },
  { to: '/#projects', en: 'Projects', jp: 'プロジェクト' },
  { to: '/portfolio', en: 'Portfolio', jp: 'ポートフォリオ' },
  { to: '/shop', en: 'Shop', jp: 'ショップ' },
  { to: '/#contact', en: 'Contact', jp: 'コンタクト' },
];

const Nav = () => {
  const { t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close the phone menu whenever the route or section changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = event => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav aria-label={t('Main', 'メイン')}>
      <button
        type="button"
        className="nav-menu-btn"
        aria-expanded={isMenuOpen}
        aria-controls="nav-links"
        onClick={() => setIsMenuOpen(open => !open)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {isMenuOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
        <span>{t('Menu', 'メニュー')}</span>
      </button>

      <div id="nav-links" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <Link key={item.to} to={item.to} onClick={() => setIsMenuOpen(false)}>
            {t(item.en, item.jp)}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <CartIcon />
        <button type="button" className="lang-btn" onClick={toggleLanguage}>
          {t('日本語', 'English')}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
