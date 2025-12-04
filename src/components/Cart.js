import React, { useState } from 'react';
import { useCart } from '../scripts/CartContext';
import { useLanguage } from '../context/LanguageProvider';

const Cart = () => {
  const { language } = useLanguage();
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
            title: item.title,
            size: item.size,
            price: item.price,
            quantity: item.quantity,
            image: item.image, // Note: needs to be absolute URL in production
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
      alert(language === 'english' 
        ? 'Error processing checkout. Please try again.' 
        : 'チェックアウトエラー。もう一度お試しください。'
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
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>{language === 'english' ? 'Your Cart' : 'カート'}</h2>
          <button 
            className="cart-close"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>{language === 'english' ? 'Your cart is empty' : 'カートは空です'}</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.cartItemId} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{language === 'english' ? item.title : item.titleJp}</h4>
                    <p className="cart-item-size">{item.size}</p>
                    <p className="cart-item-price">${item.price}</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.cartItemId)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>{language === 'english' ? 'Total' : '合計'}</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                className="cart-checkout-btn" 
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading 
                  ? (language === 'english' ? 'Processing...' : '処理中...') 
                  : (language === 'english' ? 'Checkout' : 'チェックアウト')
                }
              </button>
              <button className="cart-clear-btn" onClick={clearCart}>
                {language === 'english' ? 'Clear Cart' : 'カートを空にする'}
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
    <button className="cart-icon-btn" onClick={toggleCart} aria-label="Open cart">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </button>
  );
};

export default Cart;