import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";
import "./Navbar.css";
import { MenuItems } from "./Home/MenuItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const CollapsibleExample = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    // <Navbar
    //   sticky="top"
    //   collapseOnSelect
    //   expand="lg"
    //   variant="#000"
    //   className={styles.bacckgroundss}
    // >
    //   <Container>
    //     <Navbar.Brand href="/" className="">
    //       Mkumari
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse
    //       id="responsive-navbar-nav"
    //       className="justify-content-end"
    //     >
    //       <Nav>
    //         <Nav.Link as={Link} to={"/"}>
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to={"about"}>
    //           About
    //         </Nav.Link>

    //         <Nav.Link eventKey={2} as={Link} to={"contact"}>
    //           Contact
    //         </Nav.Link>
    //         <Nav.Link eventKey={2} as={Link} to={"contact"}>
    //           Contact
    //         </Nav.Link>
    //         <Nav.Link eventKey={2} as={Link} to={"contact"}>
    //           Contact
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // <nav className="NavbarItems">
    //   <h1 className="navbar-logo">Trippy</h1>

    //   <div className="menu-icons-hamburger">
    //     <span className="" onClick={handleShowNavbar}>
    //       <GiHamburgerMenu />
    //     </span>
    //   </div>

    //   <ul className="nav-menu">
    //     {MenuItems.map((item, index) => {
    //       return (
    //         <li key={index}>
    //           <a className={item.cName} href={item.url}>
    //             {item.title}
    //           </a>
    //         </li>
    //       );
    //     })}
    //     <button>Sign Up</button>
    //   </ul>
    // </nav>
    <>Hello</>
  );
};

export default CollapsibleExample;
