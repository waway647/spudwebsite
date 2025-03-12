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

function App() {
  // Move cart state to App component
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Spud Potato Original Flavor', price: 1000, quantity: 2, image: 'path/to/image' },
    { id: 2, name: 'Spud Potato Spicy Flavor', price: 1000, quantity: 1, image: 'path/to/image' },
  ]);

  // Cart toggle function
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Navbar toggleCart={toggleCart} />
      <Routes>
        <Route 
          path="/spudwebsite" 
          element={
            <Home 
              isCartOpen={isCartOpen}
              toggleCart={toggleCart}
              cartItems={cartItems}
              setCartItems={setCartItems}
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
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;