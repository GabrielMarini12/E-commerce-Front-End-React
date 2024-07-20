import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistoryPage/PurchaseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  const addToCart = (productId) => {
    console.log("estado atualizou");
    setCartItems({
      ...cartItems,
      [productId]: (cartItems[productId] ?? 0) + 1,
    });
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, toggleCartOpen, cartItems, addToCart }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" elemtn={<PurchaseHistory />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
