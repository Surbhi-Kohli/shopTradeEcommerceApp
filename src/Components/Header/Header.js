import React from 'react';
import {Navbar,Nav} from "react-bootstrap"
import {Consumer} from "../../Context";
import brandImage from "../../assets/favicon.png";
import searchIcon from "../../assets/Search.png";
import profileIcon from "../../assets/profile.png";
import cartImage from "../../assets/Cart.png"; 

function Header(){

    return( 
        <Consumer>
          {(consumer)=>
 <Navbar bg="light" expand="lg" className="bg-light justify-content-between">
 <Navbar.Brand href="#"> <img
 alt=""
 src={brandImage}
 width="30"
 height="30"
 className="d-inline-block align-top"
/></Navbar.Brand>
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
 Search: <img
 alt=""
 src={searchIcon}
 width="25"
 height="25"
 className="d-inline-block align-top"
 />
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
 style={(consumer.cart.length>0) ? {backgroundColor:"#b8d5cd"} : {}}
 className="d-inline-block align-top"
 onClick={consumer.toggleCartShow}
/>
<sup>{consumer.cart.length>0?consumer.cart.length:""}</sup>
</Nav.Item>
</Navbar>}
</Consumer>);
}
export default Header;