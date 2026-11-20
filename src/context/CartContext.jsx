import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'jojister-cart';

const CartContext = createContext(null);

const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Keep the cart across refreshes and the round trip to Stripe Checkout.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Storage can be unavailable (private mode); the cart still works in memory.
    }
  }, [cartItems]);

  const addToCart = useCallback((product, selectedSize) => {
    const cartItemId = `${product.id}-${selectedSize.size}`;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.cartItemId === cartItemId);
      if (existingItem) {
        return prevItems.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevItems,
        {
          cartItemId,
          id: product.id,
          title: product.title,
          titleJp: product.titleJp,
          image: product.image,
          size: selectedSize.size,
          price: selectedSize.price,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback(cartItemId => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  }, []);

  const updateQuantity = useCallback((cartItemId, newQuantity) => {
    setCartItems(prevItems =>
      newQuantity < 1
        ? prevItems.filter(item => item.cartItemId !== cartItemId)
        : prevItems.map(item =>
            item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
          )
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);
  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);

  const value = useMemo(() => {
    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return {
      cartItems,
      cartTotal,
      cartCount,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      setIsCartOpen,
    };
  }, [cartItems, isCartOpen, addToCart, removeFromCart, updateQuantity, clearCart, toggleCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
