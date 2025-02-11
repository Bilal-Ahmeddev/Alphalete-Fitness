import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Ensure correct path
import SplashScreen from "./Components/SplashScreen";
import LearnMorePage from "./Pages/LearnMorePage";
import WorkoutSections from "./Pages/WorkoutSections";
import HomePage from "./Pages/HomePage";
// import Supplements from "./Pages/Supplements";
import JoinNow from "./Pages/JoinNow";
import Videos from "./Components/Videos";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "./contexts/cartContext"; 
import Supplements from "./Pages/Supplement";

const App = () => {
  return (
    <CartProvider> 
      <Router basename="/Alphalete-Fitness">
        <div className="bg-gray-900 min-h-screen text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/learnmore" element={<LearnMorePage />} />
            <Route path="/WorkoutSections" element={<WorkoutSections />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/JoinNow" element={<JoinNow />} />
            <Route path="/video/:videoId" element={<Videos />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
