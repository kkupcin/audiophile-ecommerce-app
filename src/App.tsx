import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
