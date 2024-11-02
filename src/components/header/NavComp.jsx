import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavComp = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);
  const phoneMenuRef = useRef(null); 

  const toggleMenu = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const openPhoneMenu = (event) => {
    event.stopPropagation(); // AI Assistance (For some reason, the class was adding and removing it at the same time, so it fixed it for me.)
    setIsMenuActive(true);
    console.log("Menu geopend:", true);
  };

  const closePhoneMenu = () => {
    setIsMenuActive(false);
    console.log("Menu gesloten:", false);
  };

  useEffect(() => {
    const clickOutside = (event) => {
      // AI Assistance (For some reason, the class was adding and removing it at the same time, so it fixed it for me.)
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(event.target) && isMenuActive) {
        closePhoneMenu();
      }
    };

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [isMenuActive]);

  return (
    <>
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
                <li><Link className="uppercase" style={{ "--x": ".0s" }} to="/katten">katten</Link></li>
                <li><Link className="uppercase" style={{ "--x": ".1s" }} to="/honden">honden</Link></li>
                <li><Link className="uppercase" style={{ "--x": ".2s" }} to="/vogels">vogels</Link></li>
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
                <i className={`fa-solid fa-arrow-down ${activeMenu === 2 ? "turnActive" : ""}`}></i>
              </button>
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
            </li>
          </ul>
        </section>
      </nav>

      <nav className="navBarPhone c_flex">
        <a href="/">
          <i className="fa fa-solid fa-paw"></i> Pawpal
        </a>
        <button
          type="button"
          className="menuButton"
          onClick={openPhoneMenu}
        >
          <i className="fa fa-solid fa-bars"></i>
        </button>
        <ul className={`phone-bar ${isMenuActive ? "reveal" : ""}`} ref={phoneMenuRef}>
          <div className="close-container c_flex">
            <h2><i className="fa fa-solid fa-paw"></i> Menu</h2>
            <button onClick={closePhoneMenu}>
              <i className="fa fa-solid fa-x"></i>
            </button>
          </div>
          <li><Link onClick={closePhoneMenu} to="/katten">Katten</Link></li>
          <li><Link onClick={closePhoneMenu} to="/honden">Honden</Link></li>
          <li><Link onClick={closePhoneMenu} to="/vogels">Vogels</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default NavComp;
