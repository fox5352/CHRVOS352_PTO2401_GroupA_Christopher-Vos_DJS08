import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VansDetail from "./pages/VansDetail.jsx";

import "../server.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:vanId" element={<VansDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
