import React from "react";
import { Container } from "react-bootstrap";
//styles
import { useTheme } from "../context/ThemeContext";

//data
function Error({ message }) {
  const theme = useTheme();
  const style = {
    container: {
      margin: "100px 10px",
      padding: "45px 5px",
      background: theme.color.accent,
      borderRadius: "8px",
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    message: {
      fontFamily: theme.font.fontFamily.title,
      fontSize: theme.font.fontSize.title,
      color: theme.color.cream,
    },
  };
  const heroText = {
    fontSize: "calc(1.375rem + 10vw)",
  };

  return (
    <div style={style.container}>
      <h1 style={style.message}>
        {message
          ? message
          : "we ran into an issue attempting to fetch your page"}
      </h1>
    </div>
  );
}

export default Error;
