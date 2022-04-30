// Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Login } from "./Components/Page/Login/Login";
import { Home } from "./Components/Page/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
