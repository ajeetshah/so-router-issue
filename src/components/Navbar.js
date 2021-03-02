import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "navlinks";

    if (navLinkOpen) {
      classes += " ' ' + active";
    }
    return classes;
  };
  return (
    <nav>
      <div className="logo">
        <h4>Delightartco</h4>
      </div>
      <ul className={renderClasses()}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/services">Services</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};

export default Navbar;
