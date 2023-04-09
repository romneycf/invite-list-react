import "./App.css";
import { Link, Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./shared/components/pages/Home";
import Guests from "./shared/components/pages/guests/Guests";
import { useState } from "react";

import { Router } from "./routes";
import { AuthProvider } from "./modules/auth";
import { useAuth } from "./modules/auth/hooks/useAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </div>
  );
}

export default App;
