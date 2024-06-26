import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Footer from './components/Footer';
import SinglePerson from './pages/SinglePerson';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Hero />}></Route>
          <Route path="/:person" element={<SinglePerson />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
