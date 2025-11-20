import React, { useEffect } from "react";
import MainRoutes from "./router/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import FullScreenNav from "./components/Navbar/FullScreenNav";


const App = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <div className="min-h-screen">
        <Navbar />
        <FullScreenNav />
        <MainRoutes />
    </div>
  );
};

export default App;
