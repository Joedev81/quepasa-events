import React from "react";
import logo from "../assets/logo/quelogo.jpeg";

function Navbar(){
    return(
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 10%",
            background: "black",
            borderBottom: "1px solid #222"
        }}>

       {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          width="10"
          height="10"
          style={{
            borderRadius: "50%",
            border: "2px solid red",
            background: "white"
          }}
        />

        <h2 style={{ color: "red", margin: 0, fontSize: "40px" }}>
          TEST NAVBAR
        </h2>
      </div>

        <div>
            <a href="#services" style={{margin:"20px",color:"white"}}>Services</a>
            <a href="#gallery" style={{margine:"20px",color:"white"}}>Gallery</a>
            <a href="#contact" style={{margine:"20px",color:"white"}}>Contact</a>
        </div>

        </nav>
    )
}

export default Navbar;