import React from "react";
import { BrowserRouter as Routes, Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <Routes>
      <Navbar />
      <Router>
        <Route path="/footer" component={Footer} />
      </Router>
      <Footer />
    </Routes>
  );
};

export default App;
