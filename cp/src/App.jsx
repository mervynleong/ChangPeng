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
      <div className="container">
        <h1>KERONIAO</h1>
      </div>
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
