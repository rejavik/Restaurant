import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "../css/Navigation.css";
import images from "../constants/images";

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="Nav_container">
      <div className="Nav_logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="Nav_item">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="Nav_Login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          {" "}
          Book Table
        </a>
      </div>
      <div className="Nav_container-smallscreen" style={{opacity:'0.95'}}>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="Nav_container-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="Nav_item-smallscreen">
              <li className="item">
                <a href="#home">Home</a>
              </li>
              <li className="item">
                <a href="#about">About</a>
              </li>
              <li className="item">
                <a href="#menu">Menu</a>
              </li>
              <li className="item">
                <a href="#awards">Awards</a>
              </li>
              <li className="item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
