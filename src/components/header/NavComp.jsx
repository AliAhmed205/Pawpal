import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavComp = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menuIndex) => {
    if (activeMenu === menuIndex) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuIndex);
    }
  };

  useEffect(() => {
    const clickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <nav className="navBar">
      <section className="container a_flex padding" ref={menuRef}>
        <a href="/">
          <i className="fa-solid fa-paw"></i> PawPal
        </a>

        <ul className="menu-bar f_flex ">
          <li>
            <button
              className="uppercase"
              onClick={() => toggleMenu(1)}
              aria-haspopup="true"
              aria-expanded={activeMenu === 1}
            >
              Zoek een dier
            </button>
            <ul className={`sub-menu ${activeMenu === 1 ? "active" : ""}`}>
              <li>
                <Link className="uppercase" style={{ '--x': '.0s' }} to="/katten">Katten</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.1s' }} to="/honden">Honden</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.2s' }} to="/vogels">Vogels</Link>
              </li>
            </ul>
          </li>

          <li>
            <button
              className="uppercase"
              onClick={() => toggleMenu(2)}
              aria-haspopup="true"
              aria-expanded={activeMenu === 2}
            >
              Adoptie
            </button>
            <ul className={`sub-menu ${activeMenu === 2 ? "active" : ""}`}>
              <li>
                <Link className="uppercase" style={{ '--x': '0s' }} to="/katten">Katten</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.1s' }} to="/honden">Honden</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.2s' }} to="/vogels">Vogels</Link>
              </li>
            </ul>
          </li>

          <li>
            <button
              className="uppercase"
              onClick={() => toggleMenu(3)}
              aria-haspopup="true"
              aria-expanded={activeMenu === 3}
            >
              Appel
            </button>
            <ul className={`sub-menu ${activeMenu === 3 ? "active" : ""}`}>
              <li>
                <Link className="uppercase" style={{ '--x': '0s' }} to="/katten">Katten</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.1s' }} to="/honden">Honden</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.2s' }} to="/vogels">Vogels</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavComp;
