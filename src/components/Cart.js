import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import imageMap from '../utils/imageMap';
import useDialog from '../hooks/useDialog';

const Cart = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    setIsCartOpen
  } = useCart();

  const dialogRef = useDialog(isCartOpen, () => setIsCartOpen(false));

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            id: item.id,
            size: item.size,
            quantity: item.quantity,
          })),
        }),
      });

      const { url, error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert(t('Error processing checkout. Please try again.', 'チェックアウトエラー。もう一度お試しください。')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'active' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Sidebar */}
      <div
        ref={dialogRef}
        className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        tabIndex={-1}
      >
        <div className="cart-header">
          <h2 id="cart-title">{t('Your Cart', 'カート')}</h2>
          <button
            type="button"
            className="cart-close"
            onClick={() => setIsCartOpen(false)}
            aria-label={t('Close cart', 'カートを閉じる')}
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>{t('Your cart is empty', 'カートは空です')}</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.cartItemId} className="cart-item">
                  <img src={imageMap[item.image]} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{t(item.title, item.titleJp)}</h4>
                    <p className="cart-item-size">{item.size}</p>
                    <p className="cart-item-price">${item.price}</p>
                    <div className="cart-item-quantity">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        aria-label={t(`Decrease quantity of ${item.title}`, `${item.titleJp}の数量を減らす`)}
                      >
                        −
                      </button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        aria-label={t(`Increase quantity of ${item.title}`, `${item.titleJp}の数量を増やす`)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove"
                    type="button"
                    onClick={() => removeFromCart(item.cartItemId)}
                    aria-label={t(`Remove ${item.title}`, `${item.titleJp}を削除`)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>{t('Total', '合計')}</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                className="cart-checkout-btn" 
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading 
                  ? (t('Processing...', '処理中...')) 
                  : (t('Checkout', 'チェックアウト'))
                }
              </button>
              <button className="cart-clear-btn" onClick={clearCart}>
                {t('Clear Cart', 'カートを空にする')}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

// Cart Icon Button Component
export const CartIcon = () => {
  const { cartCount, toggleCart } = useCart();
  
  return (
    <button
      type="button"
      className="cart-icon-btn"
      onClick={toggleCart}
      aria-label={cartCount > 0 ? `Open cart, ${cartCount} items` : 'Open cart'}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </button>
  );
};

export default Cart;