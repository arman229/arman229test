"use client";
import React, { useState } from "react";
import HeroSection from "@/views/heropage";

import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { GiCandleFlame } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
 
import { FaReact, FaBriefcase } from "react-icons/fa";

// import logoarman from '/images/myimages/armanlogo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  library.add(faCircleXmark, faBars);
 
  return (
    <div className="header-section" id="header">
      <div className="container">
        <div className="navbar">
          <nav>
            <Link href="/" className= " flex text-[#16f2b3] text-3xl font-bold gap-2" 
              style={{ fontSize: "1.9rem", cursor: "pointer" }}
            >
              <GiCandleFlame />
         
            <h1 style={{ fontWeight: "600", fontSize: "1.2rem" }}>Portfolio</h1>
                       </Link>
                       
            <ul className={menuOpen ? "active" : ""}>
              
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#services">Skills</Link>
              </li>
              <li>
                <Link href="#portfolio">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <FontAwesomeIcon icon={faCircleXmark} onClick={toggleMenu} />
            </ul>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          </nav>
        </div>
        <HeroSection/>
      </div>{" "}
    </div>
  );
}

export default Navbar;
