import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import TypingEffect from "./components/TypingEffect/TypingEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ProductDetails from "./Pages/ProductDetails";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AboutUs from "./Pages/AboutUs";
import SignUp from "./components/SignUp/Signup";

function App() {
  const mode = useSelector((state: RootState) => state.theme);

  return (
    <>
      <div className={mode ? "dark-theme" : "white-theme"}>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
