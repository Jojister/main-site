import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} Joji Araki. {t('All rights reserved.', '全著作権所有。')}
      </p>
    </footer>
  );
};

export default Footer;