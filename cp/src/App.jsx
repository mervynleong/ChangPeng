import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Other from "./components/Other";
import Profile from "./components/Profile";
import styles from "./css/Header.module.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="container"></div>
      <h1>Welcome to Leong Chang Peng's Website</h1>
      <h2>Please Click on any of the links above to check further</h2>

      <NavBar />
      <Routes>
        <Route path="/other" element={<Other />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
