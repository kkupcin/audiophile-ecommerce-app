import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import CheckoutPage from "./components/CheckoutPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuOpenHandler = (isMenuOpen: boolean) => {
    setMenuIsOpen(isMenuOpen);
  };

  return (
    <div className="App">
      <Header isMenuOpen={menuOpenHandler} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/headphones" element={<CategoryPage />} />
        <Route path="/category/headphones/1" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
