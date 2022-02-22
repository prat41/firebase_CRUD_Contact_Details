import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar color="info" light>
      <NavbarBrand className="text-white" tag={Link} to="/">
        FirebaseDB
      </NavbarBrand>
      <NavbarText className="text-white float-right">Contacts</NavbarText>
    </Navbar>
  );
};

export default Header;
