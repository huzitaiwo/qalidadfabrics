import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// styles
import "./App.css";

// pages && components
import Collection from "./pages/collection/Collection";
import Navbar from "./components/navbar/Navbar";
import Account from "./pages/account/Account";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

function App() {
  // states
  const [Menu, setMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const location = useLocation();

  return (
    <div className="App">
      <Navbar Menu={Menu} setMenu={setMenu} screenWidth={screenWidth} />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/me" element={<Account />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
