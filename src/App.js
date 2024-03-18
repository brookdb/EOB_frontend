import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

//style
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./context/ThemeContext";

//routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

//routes
import PostList from "./routes/PostList";
import PostDetails from "./routes/PostDetails";
import About from "./routes/About";
import Authors from "./routes/Authors";

export default function App() {
  const [isLanding, setIsLandingPage] = useState(null);
  /*/Lenis Scrolling
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
    //console.log(e)
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
*/
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Router>
          <PageWrapper setIsLandingPage={setIsLandingPage}>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/authors" element={<Authors />} />
              <Route exact path="/posts" element={<PostList />} />
              <Route exact path="/posts/:postSlug" element={<PostDetails />} />
            </Routes>
          </PageWrapper>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
