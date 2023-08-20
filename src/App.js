import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import Sell from "./pages/services";
import Team from "./pages/team";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import BuyToken from "./pages/buy-token";
import More from "./pages/cryptoland-more";
import PageNotFound from "./pages/404";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Sell />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/buy-token" element={<BuyToken />}></Route>
        <Route path="/cryptoland-more" element={<More />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
export default App;
