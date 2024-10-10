import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./components/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Vans from "./pages/vans/Vans.jsx";
import VansDetail from "./pages/vans/VansDetail.jsx";

import HostLayout from "./pages/host/HostLayout.jsx";
import Dashboard from "./pages/host/Dashboard.jsx";
import Income from "./pages/host/Income.jsx";
import Reviews from "./pages/host/Reviews.jsx";
import HostVans from "./pages/host/HostVans.jsx";

import HostVansDetail from "./pages/host/van/HostVansDetail.jsx";
import HostVanInfo from "./pages/host/van/HostVanInfo.jsx";
import HostVanPricing from "./pages/host/van/HostVanPricing.jsx";
import HostVanPhotos from "./pages/host/van/HostVanPhotos.jsx";

import "../server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:vanId" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:vanId" element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
