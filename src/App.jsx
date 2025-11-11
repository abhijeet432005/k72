import React from "react";
import MainRoutes from "./router/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import FullScreenNav from "./components/Navbar/FullScreenNav";


const App = () => {

  return (
    
    <div className="">
      <Navbar />
      <FullScreenNav />
      <MainRoutes />
    </div>
  );
};

export default App;
