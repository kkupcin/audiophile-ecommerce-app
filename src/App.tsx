import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuOpenHandler = (menuIsOpen: boolean) => {
    setMenuIsOpen(menuIsOpen);
  };

  useEffect(() => {
    if (menuIsOpen) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else if (!menuIsOpen) {
      document.querySelector("body")!.style.overflow = "auto";
    }
  }, [menuIsOpen]);

  return (
    <div className="App">
      <Header isMenuOpen={menuOpenHandler} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
