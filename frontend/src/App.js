import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelpCenter from "./pages/HelpCenter";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
};

export default App;
