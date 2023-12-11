import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";

//function

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
          element={
            <div className="home-dr">
              <Navbar />
              <Home />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
