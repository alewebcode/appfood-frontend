import React from 'react';

import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';
import { CartProvider } from './contexts/cart';

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
