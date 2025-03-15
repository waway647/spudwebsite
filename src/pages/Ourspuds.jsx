import React from 'react';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import Products from '../components/Products';

function Ourspuds({ isCartOpen, toggleCart, cartItems, setCartItems, addToCart, products }) {
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
      <Products addToCart={addToCart} products={products} /> {/* Pass products to Products */}
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

export default Ourspuds;