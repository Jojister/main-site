import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav>
      <div className="nav-links">
        {NAV_ITEMS.map(item => (
          <Link key={item.to} to={item.to}>
            {t(item.en, item.jp)}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <CartIcon />
        <button onClick={toggleLanguage}>{t('日本語', 'English')}</button>
      </div>
    </nav>
  );
};

export default Nav;
