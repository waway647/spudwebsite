import React from 'react';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import CheckoutForm from '../components/CheckoutForm';

function Checkout({ isCartOpen, toggleCart, cartItems }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {/* Pass cartItems and optionally handleQuantityChange to CheckoutForm */}
      <CheckoutForm cartItems={cartItems} />
      <Footer />

      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart}></div>
          <Cart
            isOpen={isCartOpen}
            toggleCart={toggleCart}
            cartItems={cartItems}
            subtotal={subtotal}
          />
        </>
      )}
    </div>
  );
}

export default Checkout;