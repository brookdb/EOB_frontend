import React from "react";
import { Container } from "react-bootstrap";
//styles
import { useTheme } from "../context/ThemeContext";

//data
function Banner({ title }) {
  // You can change this to your preferred image URL or gradient
  const backgroundImage =
    "url(https://encantoocultoblog.brookdaba.repl.co/media/main/img/bnk_banner.png)";
  const theme = useTheme();
  const bannerStyle = {
    width: "100%",
    height: "25vh", // 25% of the viewport height
    background: backgroundImage,
    backgroundSize: "cover", // to make sure the image covers the entire banner
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.color.cream,
    fontFamily: theme.font.fontFamily.title,
    fontSize: theme.font.fontFamily.hero,
    background: "linear-gradient(-70deg, #F1C70C, #233769)",
    animation: "gradient 15s ease infinite",
    backgroundSize: "200% 200%",
  };
  const heroText = {
    fontSize: "calc(1.375rem + 10vw)",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <Container>
        <h1 style={heroText}>{title}</h1>
      </Container>
    </div>
  );
}

export default Banner;
