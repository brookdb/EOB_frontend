import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

//styles
import { useTheme } from "../context/ThemeContext";

//components
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const theme = useTheme();
  const style = {
    container: {
      background: theme.color.accent,
      height: "250px",
      padding: "25px 0",
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
    },
    text: {
      color: theme.color.cream,
      fontFamily: theme.font.fontFamily.paragraph,
    },
    brand: {
      color: theme.color.cream,
      fontSize: theme.font.fontSize.title,
      fontFamily: theme.font.fontFamily.header,
    },
    link: {
      color: theme.color.foreground,
    },
    row: {
      display: "flex",
      justifyContent: "space-around",
      width: "200px",
      margin: "0 auto",
      padding: "0.6rem 0",
    },
  };
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Container style={style.container}>
        <div>
          <h1 style={style.brand}>Encanto Oculto</h1>
          <p style={style.text}>
            <a style={style.link} href="#">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a style={style.link} href="#">
              Terms & conditions
            </a>
          </p>
        </div>
        <div className="social-links" style={style.row}>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a style={style.link} href="https://twitter.com">
              <FaTwitter />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a style={style.link} href="https://instagram.com">
              <FaInstagram />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a style={style.link} href="https://tictok.com">
              <FaTiktok />
            </a>
          </motion.li>
        </div>
        <div>
          <p style={style.text}>Encanto Oculto &copy; 2023</p>
        </div>
      </Container>
    </motion.div>
  );
};
export default Footer;
