import React from 'react';
import Footer from '../components/Footer';
import Cart from '../components/Cart'
import OurStory from '../components/OurStory';
import OurInfo from '../components/OurInfo';

function Aboutus({ isCartOpen, toggleCart, cartItems, setCartItems }) {
  // Remove local state here (keep only these calculations)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItems(cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <OurStory />
      <OurInfo />
      <Footer />

      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart}></div>
          <Cart
            isOpen={isCartOpen}
            toggleCart={toggleCart}
            cartItems={cartItems}
            subtotal={subtotal}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
        </>
      )}
    </div>
  );
}

export default Aboutus;