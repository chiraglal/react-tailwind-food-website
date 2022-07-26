import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Category from "./components/Category";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Category />
    </div>
  );
};

export default App;
