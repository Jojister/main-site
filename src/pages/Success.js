import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageProvider';
import { useCart } from '../scripts/CartContext';

const Success = () => {
  const { language } = useLanguage();
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    
    if (sessionId) {
      // Verify the session
      fetch(`${process.env.REACT_APP_API_URL}/api/verify-session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'paid') {
            setStatus('success');
            setEmail(data.customerEmail || '');
            clearCart(); // Clear the cart after successful payment
          } else {
            setStatus('pending');
          }
        })
        .catch(() => {
          setStatus('error');
        });
    } else {
      setStatus('error');
    }
  }, [searchParams, clearCart]);

  return (
    <section className="success-page">
      <div className="success-container">
        {status === 'loading' && (
          <div className="success-loading">
            <div className="spinner"></div>
            <p>{language === 'english' ? 'Verifying your order...' : '注文を確認中...'}</p>
          </div>
        )}

        {status === 'success' && (
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h1>{language === 'english' ? 'Thank You!' : 'ありがとうございます！'}</h1>
            <p className="success-message">
              {language === 'english' 
                ? 'Your order has been confirmed and will be shipped soon.' 
                : 'ご注文が確認されました。まもなく発送されます。'}
            </p>
            {email && (
              <p className="success-email">
                {language === 'english' 
                  ? `A confirmation email has been sent to ${email}` 
                  : `確認メールを${email}に送信しました`}
              </p>
            )}
            <div className="success-actions">
              <Link to="/shop" className="success-btn primary">
                {language === 'english' ? 'Continue Shopping' : 'ショッピングを続ける'}
              </Link>
              <Link to="/" className="success-btn secondary">
                {language === 'english' ? 'Back to Home' : 'ホームに戻る'}
              </Link>
            </div>
          </div>
        )}

        {status === 'pending' && (
          <div className="success-content">
            <div className="success-icon pending">⏳</div>
            <h1>{language === 'english' ? 'Payment Processing' : '支払い処理中'}</h1>
            <p className="success-message">
              {language === 'english' 
                ? 'Your payment is being processed. You will receive a confirmation email shortly.' 
                : '支払いを処理中です。まもなく確認メールをお送りします。'}
            </p>
            <Link to="/" className="success-btn secondary">
              {language === 'english' ? 'Back to Home' : 'ホームに戻る'}
            </Link>
          </div>
        )}

        {status === 'error' && (
          <div className="success-content">
            <div className="success-icon error">✕</div>
            <h1>{language === 'english' ? 'Something went wrong' : 'エラーが発生しました'}</h1>
            <p className="success-message">
              {language === 'english' 
                ? 'We couldn\'t verify your order. Please contact support if you were charged.' 
                : '注文を確認できませんでした。料金が請求された場合はサポートにお問い合わせください。'}
            </p>
            <div className="success-actions">
              <a href="mailto:jojister5@gmail.com" className="success-btn primary">
                {language === 'english' ? 'Contact Support' : 'サポートに連絡'}
              </a>
              <Link to="/shop" className="success-btn secondary">
                {language === 'english' ? 'Back to Shop' : 'ショップに戻る'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Success;