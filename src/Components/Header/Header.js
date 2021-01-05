import React, { useState,useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Consumer } from "../../Context";
import brandImage from "../../assets/favicon.png";
import searchIcon from "../../assets/Search.png";
import profileIcon from "../../assets/profile.png";
import cartImage from "../../assets/Cart.png";
import "./Header.css";
function Header() {
  console.log("render");
  const [search, setSearch] = useState("");
  // function showSearch(e,delay)
  // {
  //   console.log(e.target.value);
  //   setSearch(e.target.value);
  //  console.log("hello")
  //  debounce(expandSearch,e,delay)();
  //  ;
  // }
  // let deb,showSearch;
  // useEffect(()=>{
  //    deb=function(fn) {
  //     let interval; 
  //     console.log("interval in deb is "+interval);
  //     return function() {
  //       console.log(interval + "is the interval");
  //       clearTimeout(interval);
  //       let context = this;
  //       console.log("this is " + this);
  //       let args = arguments;
  //       console.log(arguments);
  //       setSearch(arguments[0]);
  //       interval = setTimeout(() => {
  //         fn.apply(context, arguments);
  //       },arguments[1]);
  //     };
  //   }
  // }
  //    showSearch = deb(expandSearch);
  // },[])
  function expandSearch(arg1, arg2) {
    console.log("in expand search");
  }

  return (
    <Consumer>
      {consumer => (
        <Navbar
          bg="light"
          expand="lg"
          className="bg-light justify-content-between header"
        >
          <Navbar.Brand href="#">
            {" "}
            <img
              alt=""
              src={brandImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Shop</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Our Stores</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item className="icons">
            {/* <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => showSearch(e.target.value, 4000)}
            /> */}

            <img
              alt=""
              src={profileIcon}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />
            <img
              alt=""
              src={cartImage}
              width="25"
              height="25"
              style={
                consumer.cart.length > 0 ? { backgroundColor: "#b8d5cd" } : {}
              }
              className="d-inline-block align-top"
              onClick={consumer.toggleCartShow}
            />
            <sup>{consumer.cart.length > 0 ? consumer.cart.length : ""}</sup>
          </Nav.Item>
        </Navbar>
      )}
    </Consumer>
  );
}
export default Header;
