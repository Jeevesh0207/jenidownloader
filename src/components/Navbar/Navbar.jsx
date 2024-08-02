import React, { useEffect, useState } from "react";
import "./StyleNavbar.css";
import {
  MenuBarSvg,
  HomeSvg,
  UserSvg,
  ContactSvg,
  DownloadSvg,
  CrossSvg,
  YoutubeSvg,
} from "../../Svg";

function Navbar() {
  // const [isMenuOpen, setisMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setisMenuOpen(!isMenuOpen);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     const menu = document.getElementsByClassName("menu")[0];
  //     if (window.innerWidth >= 900) {
  //       menu.style.display = "flex";
  //     } else {
  //       menu.style.display = isMenuOpen ? "flex" : "none";
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Initial check
  //   handleResize();

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [isMenuOpen]);

  return (
    <div className="Navbar">
      <div className="logo">
        <YoutubeSvg fill={"#00CED1"} width={50} height={45} />
        <h1>4K TubeSaver</h1>
      </div>
      {/* <ul className="menu">
        <a href="/">
          <li>
            <HomeSvg fill={"#fff"} /> Home
          </li>
        </a>
        <a href="/">
        <li>
          <UserSvg fill={"#fff"} /> About
        </li>
        </a>
        <a href="/">
        <li>
          <ContactSvg fill={"#fff"} width={22} height={22} /> Contact
        </li>
        </a>
        <a href="/download">
        <li>
          <DownloadSvg fill={"#fff"} /> Download
        </li>
        </a>
      </ul>
      <div className="menu_bar" onClick={toggleMenu}>
        {isMenuOpen ? <CrossSvg fill={"#fff"} /> : <MenuBarSvg fill={"#fff"} />}
      </div> */}
    </div>
  );
}

export default Navbar;
