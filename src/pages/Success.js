import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const Success = () => {
  const { t } = useLanguage();
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) {
      setStatus('error');
      return;
    }

    let cancelled = false;
    fetch(`/.netlify/functions/verify-session?sessionId=${encodeURIComponent(sessionId)}`)
      .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(data => {
        if (cancelled) return;
        if (data.status === 'paid') {
          setStatus('success');
          clearCart();
        } else {
          setStatus('pending');
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [searchParams, clearCart]);

  return (
    <section className="success-page">
      <div className="success-container">
        {status === 'loading' && (
          <div className="success-loading">
            <div className="spinner"></div>
            <p>{t('Verifying your order...', '注文を確認中...')}</p>
          </div>
        )}

        {status === 'success' && (
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h1>{t('Thank You!', 'ありがとうございます！')}</h1>
            <p className="success-message">
              {t('Your order has been confirmed and will be shipped soon.', 'ご注文が確認されました。まもなく発送されます。')}
            </p>
            <div className="success-actions">
              <Link to="/shop" className="success-btn primary">
                {t('Continue Shopping', 'ショッピングを続ける')}
              </Link>
              <Link to="/" className="success-btn secondary">
                {t('Back to Home', 'ホームに戻る')}
              </Link>
            </div>
          </div>
        )}

        {status === 'pending' && (
          <div className="success-content">
            <div className="success-icon pending">⏳</div>
            <h1>{t('Payment Processing', '支払い処理中')}</h1>
            <p className="success-message">
              {t('Your payment is being processed. You will receive a confirmation email shortly.', '支払いを処理中です。まもなく確認メールをお送りします。')}
            </p>
            <Link to="/" className="success-btn secondary">
              {t('Back to Home', 'ホームに戻る')}
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="success-content">
            <div className="success-icon error">✕</div>
            <h1>{t('Something went wrong', 'エラーが発生しました')}</h1>
            <p className="success-message">
              {t('We couldn\'t verify your order. Please contact support if you were charged.', '注文を確認できませんでした。料金が請求された場合はサポートにお問い合わせください。')}
            </p>
            <div className="success-actions">
              <a href="mailto:jojister5@gmail.com" className="success-btn primary">
                {t('Contact Support', 'サポートに連絡')}
              </a>
              <Link to="/shop" className="success-btn secondary">
                {t('Back to Shop', 'ショップに戻る')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Success;