import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PrivacyScreen from "./PrivacyScreen";
import { useLocation } from "react-router-dom";

const PageWrapper = ({ children, setIsLandingPage }) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/") {
      setIsLandingPage(true);
    } else {
      setIsLandingPage(false);
    }
  }, [setIsLandingPage, location]);
  return (
    <AnimatePresence mode="wait">
      <PrivacyScreen key={location.pathname} />
      {children}
    </AnimatePresence>
  );
};

export default PageWrapper;
