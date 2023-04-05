import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Guests from "./components/pages/guests/Guests";
import { useState } from "react";
import Login from "./components/pages/login/Login";

function App() {
  const [token, setToken] = useState();

  if (token) {
    return (
      <div className="App">
        <Login setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/guests">Guestes</Link>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/guests" element={<Guests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
