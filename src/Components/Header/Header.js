import logo from "./logo.jpg";
import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [nav, setNav] = useState(false);
  const navList = () => {
    setNav(!nav);
  };
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Backspace" || "Escape") {
        setNav(false);
      }
    });
    document.querySelectorAll("header .container ul li").forEach((sec) => {
      sec.addEventListener("click", function () {
        setTimeout(() => {
          document
            .querySelector(this.dataset.section)
            .scrollIntoView({ behavior: "smooth" });
        }, 200);
      });
    });
  }, []);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className={nav ? "open" : ""}>
            <li className="active" data-section=".home">
              <Link to="/portfolio">Home</Link>
            </li>
            <li data-section=".services">
              <Link to="/portfolio">Services</Link>
            </li>
            <li data-section=".portfolio">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li data-section=".skils">
              <Link to="/portfolio">Skils</Link>
            </li>
            <li data-section=".contact">
              <Link to="/portfolio">Contact</Link>
            </li>
          </ul>
          <div className="list" onClick={navList}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon
              onClick={navList}
              style={nav ? { display: "block" } : { display: "none" }}
              icon={faXmarkCircle}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
