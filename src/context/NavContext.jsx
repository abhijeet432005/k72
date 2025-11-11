import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext(null);
export const NavColorContext = createContext(null)

const NavProvider = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);
  const [NavColor, setNavColor] = useState('white');

  const location = useLocation()

  useEffect(() => {
    if(location.pathname == '/projects') setNavColor('black')
    // if(location.pathname == '/projects' || location.pathname ==  "/agence") setNavColor('black')
      else setNavColor('white')
  }, [location.pathname])
  return (
    <NavContext.Provider value={[navOpen, setnavOpen]}>
      <NavColorContext.Provider value={[NavColor, setNavColor]}>
        {children}
      </NavColorContext.Provider>
    </NavContext.Provider>
  );
};

export default NavProvider;