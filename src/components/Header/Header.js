import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs className="sticky">
      <NavItem>
        <NavLink href="#" active>
          NetKdrt
        </NavLink>
      </NavItem>
      <NavItem>
      <Link to="/Filmler" className="nav-link" activeClassName="active">
          Filmler
        </Link>
      </NavItem>
      <NavItem>
      <Link to="/Diziler" className="nav-link" activeClassName="active">
          Diziler
        </Link>
      </NavItem>
      <NavItem>
      <Link to="/Listem" className="nav-link" activeClassName="active">
          Listem
        </Link>
      </NavItem>{" "}
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Profil
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Hesabım</DropdownItem>
          <DropdownItem>Kullanıcılar</DropdownItem>
          <DropdownItem>Profil ayarları</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Hesabı Sil</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
}

export default Example;
