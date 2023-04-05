import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Guests from "./components/pages/guests/Guests";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/guests">Guestes</Link>
          </div>
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
