import React from "react";
import Navbar from "./components/Navigation";
import "./App.css";
import Header from "./container/Header";
import AboutUs from "./container/AboutUs";
import SpecialMenu from "./container/SpecialMenu";
import Chef from "./container/Chef";
import Intro from "./container/Intro";
import Laurels from "./container/Laurels";
import Gallery from "./container/Gallery";
import Findus from "./container/Findus";
import Footer from "./container/Footer";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus />
    <Footer />
  </div>
);

export default App;
