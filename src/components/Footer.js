import React from 'react';
import { useLanguage } from '../context/LanguageProvider';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} Joji Araki. {language === 'english' ? 'All rights reserved.' : '全著作権所有。'}
      </p>
    </footer>
  );
};

export default Footer;