import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storagedCart = localStorage.getItem('@App:cart');

    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, []);

  const addCart = product => {
    setCart(old => ({
      ...old,
      [product.product_id]: product,
    }));

    const item = { ...cart, [product.product_id]: product };

    localStorage.setItem('@App:cart', JSON.stringify(item));

    toast.success('Produto adicionado a sacola');
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = productId => {
    setCart(old => {
      const newCart = {};

      Object.keys(old).forEach(id => {
        if (Number(id) !== Number(productId)) {
          newCart[id] = old[id];
        }
      });

      return newCart;
    });
  };

  const cartPopUp = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        cartPopUp,
        isCartOpen,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export { CartContext, CartProvider };
