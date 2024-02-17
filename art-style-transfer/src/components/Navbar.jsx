import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "./styles/navbar.css";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const switchView = () => {
    setMobileView(!mobileView);
  };

  const [navbarTop, setNavbarTop] = useState("0");

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = function() {
      let currentScrollPos = window.scrollY;
      setNavbarTop(prevScrollpos > currentScrollPos ? "0" : "-120px");
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <>
      <div class="navbar" style={{ top: navbarTop }}>
        <div className="navbar-not-mobile">
          <div className="nav-links">
            <ul>
              <li>
                <Link to="home" smooth={true} offset={-70} duration={500}>
                  KerasResume
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-mobile">
          <div className="nav-mob-head">
            <FaBars className="navbar-icon" onClick={switchView} />
          </div>
          {mobileView && (
            <div className="mobile-links">
              <ul>
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={switchView}
                  >
                    KerasResume
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;