import React, { useEffect } from "react";
import MainRoutes from "./router/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import FullScreenNav from "./components/Navbar/FullScreenNav";
import ReactLenis from "lenis/react";


const App = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <div className="relative w-full min-h-screen">
        <Navbar />
        <FullScreenNav />
        <MainRoutes />
    </div>
  );
};

export default App;
