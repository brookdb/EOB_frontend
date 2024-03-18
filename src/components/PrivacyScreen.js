import { motion, useIsPresent } from "framer-motion";

//styles
import { useTheme } from "../context/ThemeContext";

const PrivacyScreen = () => {
  const theme = useTheme();
  const isPresent = useIsPresent();

  const style = {
    background: theme.color.foreground,
    width: "100%",
    height: "100vh",
    position: "absolute",
    zIndex: 1000,
    originX: isPresent ? 0 : 1,
  };

  const transitionEffect = {
    hidden: {
      x: "-100%",
      opacity: 1,
    },
    show: {
      x: "100%",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.7, ease: "circOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
      variants={transitionEffect}
      style={style}
    />
  );
};

export default PrivacyScreen;
