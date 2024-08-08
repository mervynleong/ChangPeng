import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Other from "./components/Other";
import Profile from "./components/Profile";
import styles from "./css/Header.module.css";

function App() {
  return (
    <>
      <div className="container"></div>
      <h1>Welcome to Leong Chang Peng's Website</h1>
      <h2>Please Click on any of the links to check further</h2>

      <NavBar />
      <Routes>
        <Route path="/other" element={<Other />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
