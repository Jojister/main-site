import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="not-found-page">
      <h1 className="section-title">{t('Page not found', 'ページが見つかりません')}</h1>
      <p>
        {t(
          "This link doesn't go anywhere. It may have moved, or there may be a typo in the address.",
          'このリンク先は存在しません。移動したか、アドレスに誤りがある可能性があります。'
        )}
      </p>
      <div className="not-found-actions">
        <Link to="/" className="cta-btn primary">
          {t('Back to home', 'ホームに戻る')}
        </Link>
        <Link to="/shop" className="cta-btn secondary">
          {t('Visit the shop', 'ショップへ')}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
