import React from "react";
import { Link } from "react-router-dom";
import "./Navigationbar.css";
import Menubutton from "../Menubutton/Menubutton";
import Footer from "../Footer/Footer";

function Navigationbar() {
  return (
    <div>
      
      <div className="navbar">
        <Link className="nav1" to={"/"}>
          Home
        </Link>

        <Link className="nav1" to={"/Aboutus"}>
          About us
        </Link>
        <Link className="nav1" to={"/ContactMe"}> Contact Me</Link>
        <Link className="nav1" to={"/Projects"}>Projects</Link>
      </div>
      <div className="g1">
        
        <Footer />
      </div>
    </div>
  );
}

export default Navigationbar;
