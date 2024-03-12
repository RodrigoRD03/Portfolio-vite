import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Navbar } from "./components";
import { Home, About, Skills, Proyects } from "./containers";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="App">
      {isLoading ? (
          <div></div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Proyects />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
