import React, { useEffect, useState, useMemo } from "react";
import "./App.scss";
import { Intro } from "./containers/intro/Intro";
import { Header } from "./containers/header/Header";
import { About } from "./containers/sections/About";
import { Projects } from "./containers/sections/Projects";
import { Footer } from "./containers/footer/Footer";

function App() {
  //may consider outsourcing this to a Context hook.
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [scrollIndices, setScrollIndices] = useState([0]);
  const scrollAnimationListener = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = (e) => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    window.addEventListener("scroll", scrollAnimationListener);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", scrollAnimationListener);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerHeight = 50;
  const scrollToElement = (top) => {
    setTimeout(() => {
      window.scrollTo({
        top: top + window.scrollY - headerHeight,
        behavior: "smooth",
      });
    }, 20);
  };

  const updateScrollIndices = (el, i) => {
    if (el) {
      let temp = scrollIndices;
      temp[i] = el.getBoundingClientRect().top;
      setScrollIndices(temp);
    }
  };

  return (
    <div className="">
      <Header
        windowSize={windowSize}
        sections={scrollIndices}
        scrollTo={scrollToElement}
        scrollY={scrollY}
      />
      <Intro
        ref={(el) => updateScrollIndices(el, 0)}
        scrollToNext={() => scrollToElement(scrollIndices[1])}
        scrollY={scrollY}
      />
      <About
        ref={(el) => updateScrollIndices(el, 1)}
        scrollToNext={() => scrollToElement(scrollIndices[2])}
        visible={scrollY > scrollIndices[1]}
        scrollY={scrollY}
      />
      <Projects
        ref={(el) => updateScrollIndices(el, 2)}
        visible={scrollY > scrollIndices[2]}
      />
      <Footer />
    </div>
  );
}

export default App;
