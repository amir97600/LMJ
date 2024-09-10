import "../styles/App.css";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [category, updateCategory] = useState("all");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header />
      <div className="flex-container">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          category={category}
          updateCategory={updateCategory}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
