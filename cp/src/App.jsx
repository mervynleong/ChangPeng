import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Other from "./components/Other";

function App() {
  return (
    <>
      <>
        <NavBar />
        <Routes>
          <Route path="/other" element={<Other />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
}

export default App;
