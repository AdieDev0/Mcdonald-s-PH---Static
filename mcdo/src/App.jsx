import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const App = () => { 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/footer" component={Footer} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
