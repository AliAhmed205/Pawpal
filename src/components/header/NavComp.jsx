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

    document.addEventListener("click", clickOutside);
    
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <nav className="navBar">
      <section className="a_flex padding" ref={menuRef}>
        <a href="/">
          <i className="fa-solid fa-paw"></i> PawPal
        </a>
          <h2>Zes voeten zijn beter dan twee</h2>
        <ul className="menu-bar a_flex gap-1">
          <li>
            <button
              className="uppercase"
              onClick={() => toggleMenu(1)}
              aria-haspopup="true"
              aria-expanded={activeMenu === 1}
            >
              zoek een dier
              <i className={`fa-solid fa-arrow-down ${activeMenu === 1 ? "turnActive" : ""}`}></i>
            </button>
            <ul className={`sub-menu ${activeMenu === 1 ? "active" : ""}`}>
              <li>
                <Link className="uppercase" style={{ '--x': '.0s' }} to="/katten">katten</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.1s' }} to="/honden">honden</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.2s' }} to="/vogels">vogels</Link>
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
              over ons
              <i className={`fa-solid fa-arrow-down ${activeMenu === 2 ? "turnActive" : "" }`}></i>
            </button>
            <ul className={`sub-menu ${activeMenu === 2 ? "active" : ""}`}>
              <li>
                <Link className="uppercase" style={{ '--x': '0s' }} to="/katten">katten</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.1s' }} to="/honden">honden</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.2s' }} to="/vogels">vogels</Link>
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
              tips
              <i className={`fa-solid fa-arrow-down ${activeMenu === 3 ? "turnActive" : ""}`}></i>
            </button>
            <ul className={`sub-menu ${activeMenu === 3 ? "active" : ""}`}>
              <li>
                <Link className="uppercase" style={{ '--x': '0s' }} to="/katten">katten</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.1s' }} to="/honden">honden</Link>
              </li>
              <li>
                <Link className="uppercase" style={{ '--x': '.2s' }} to="/vogels">vogels</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavComp;