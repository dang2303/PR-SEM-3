import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Header, Footer } from "../Components/Layout/index";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import artCard from "../Components/Page/ArtWork/ArtCard";
function App() {
  return (
    <>
      <Header />
      <main className="pb-5" style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<></>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
