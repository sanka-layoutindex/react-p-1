import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.png";
import Button1 from "../common/Button1";

function HeaderSection() {
  return (
    <>
      <div className="paddingGlobal">
        <div className="containerLarge">
          <div className="header">
          <Navbar expand="lg" className="">
              <Navbar.Brand href="#home">
                <img src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Product</Nav.Link>
                  <Nav.Link href="#link">Pricing</Nav.Link>
                  <Nav.Link href="#link">About Us</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
                <Button1 btnname="Free trial" link="#"/>
              </Navbar.Collapse>
          </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSection;
