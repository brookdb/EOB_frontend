import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

//styles
import { useTheme } from "../context/ThemeContext";

const Header = ({ isLanding }) => {
  const theme = useTheme();
  console.log(isLanding);
  const style = {
    container: {
      background: theme.color.foreground,
      display: "flex",
    },
    brand: {
      color: theme.color.background,
      fontSize: theme.font.fontSize.title,
      fontFamily: theme.font.fontFamily.header,
    },
    nav: {
      marginLeft: "333px",
    },
    link: {
      color: theme.color.background,
      fontSize: theme.font.fontSize.subheader,
      fontFamily: theme.font.fontFamily.header,
      padding: "0.5rem 1rem",
    },
  };

  return (
    <Navbar expand="lg" sticky="top" style={style.container}>
      <Container>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ listStyle: "none" }}
        >
          <Navbar.Brand style={style.brand} href="/">
            Encanto Oculto
          </Navbar.Brand>
        </motion.li>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={style.nav}>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Nav.Link style={style.link} href="/posts">
                POSTS
              </Nav.Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Nav.Link style={style.link} href="/authors">
                AUTHORS
              </Nav.Link>
            </motion.li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
