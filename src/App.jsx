import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurSpuds from './pages/Ourspuds';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrderSuccess from './pages/OrderSuccess';
import Aboutus from './pages/Aboutus';
import Spud from './assets/spud.png'; // Import the image

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prevItems, product];
    });
  };

  const onQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const onRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Define products here
  const products = [
    { id: 1, name: "BEANS SPUD", price: 100, image: Spud, description: "Sink your teeth into the savory delight of our Chicken Spud, where tender, juicy chicken meets perfectly crispy potatoes. Infused with a blend of herbs and spices, this flavor-packed treat offers a satisfying crunch and a taste that keeps you coming back for more!" },
    { id: 2, name: "TUNA MAYO SPUD", price: 100, image: Spud, description: "Savor the hearty richness of our Beef Spud, a bold fusion of succulent beef and golden potatoes. Seasoned with robust flavors, this mouthwatering creation delivers a comforting, meaty bite that’s perfect for any meal or snack time craving." },
    { id: 3, name: "BACON SPUD", price: 100, image: Spud, description: "Indulge in the smoky, irresistible allure of our Bacon Spud, where crispy bacon pairs flawlessly with crunchy potatoes. This decadent treat is seasoned just right, offering a burst of savory goodness that’s hard to resist—pure bliss in every bite!" },
  ];

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <Routes>
        <Route 
          path="/spudwebsite/" 
          element={
            <Home 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
              products={products} // Pass products to Home
            />
          } 
        />
        <Route 
          path="/spudwebsite/our-spuds" 
          element={
            <OurSpuds 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
              addToCart={addToCart}
              products={products} // Pass products to OurSpuds
            />
          } 
        />
        <Route 
          path="/spudwebsite/checkout" 
          element={
            <Checkout 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          } 
        />
        <Route 
          path="/spudwebsite/login" 
          element={
            <Login 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          } 
        />
        <Route 
          path="/spudwebsite/signup" 
          element={
            <Signup 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          } 
        />
        <Route 
          path="/spudwebsite/ordersuccess" 
          element={
            <OrderSuccess 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          } 
        />
        <Route 
          path="/spudwebsite/aboutus" 
          element={
            <Aboutus 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;