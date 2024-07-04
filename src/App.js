import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Details from "./Components/Details/Details";
import Skils from "./Components/Skils/Skils";
import Contact from "./Components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import Footer from "./Components/Footer/Footer";
function App() {
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.scrollY >= 600) {
        ref.current.classList.add("active");
      } else {
        ref.current.classList.remove("active");
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Portfolio />
              <Skils />
              <Contact />
            </>
          }
        />
        <Route path="/details/:projectId" element={<Details />} />
      </Routes>
      <Footer />
      <button
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="btn-scroller"
        ref={ref}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default App;
