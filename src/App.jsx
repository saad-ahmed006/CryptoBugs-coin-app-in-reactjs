import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Crypto from "./pages/Crypto/Crypto";
import Trending from "./pages/Trending/Trending";
import Saved from "./pages/Saved/Saved";
import CoinDetail from "./component/CoinDetail/CoinDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<Crypto />} />
          <Route path="/:id" element={<CoinDetail />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/trending/:id" element={<CoinDetail />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/saved/:id" element={<CoinDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
