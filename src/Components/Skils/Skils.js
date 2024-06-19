import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skils.css";
import { useEffect, useState, useRef } from "react";
import {
  faBootstrap,
  faCss3,
  faFacebook,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
function Skils() {
  const [skils, setSkils] = useState({
    html: 0,
    css: 0,
    js: 0,
    bootstrap: 0,
    taliwind: 0,
    sass: 0,
    react: 0,
  });
  const myRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (myRef.current != null) {
        if (window.scrollY >= myRef.current.offsetTop) {
          setSkils({
            html: 90,
            css: 85,
            js: 80,
            bootstrap: 85,
            taliwind: 90,
            sass: 85,
            react: 75,
          });
        } else {
          setSkils({
            html: 0,
            css: 0,
            js: 0,
            bootstrap: 0,
            taliwind: 0,
            sass: 0,
            react: 0,
          });
        }
      }
    });
  }, []);
  return (
    <div className="skils" ref={myRef}>
      <div className="container">
        <div className="special-headinges">
          <h2>Skils</h2>
        </div>
        <div className="img">
          <div className="img-box">
            <div className="img-content">
              <img src={require("../Home/profile/6.jpg")} alt="profile" />
            </div>
          </div>
        </div>
        <div className="skils-box">
          <div>
            <FontAwesomeIcon icon={faHtml5} style={{ color: "orangered" }} />
            <span className="bar">
              <span
                data-width={`${skils.html}%`}
                style={{ width: `${skils.html}%` }}
              ></span>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCss3} style={{ color: "#0066ff" }} />
            <span className="bar">
              <span
                data-width={`${skils.css}%`}
                style={{ width: `${skils.css}%` }}
              ></span>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faJs} style={{ color: "yellow" }} />
            <span className="bar">
              <span
                data-width={`${skils.js}%`}
                style={{ width: `${skils.js}%` }}
              ></span>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBootstrap} style={{ color: "#0d6efd" }} />
            <span className="bar">
              <span
                data-width={`${skils.bootstrap}%`}
                style={{ width: `${skils.bootstrap}%` }}
              ></span>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCode} style={{ color: "#FFF" }} />
            <span className="bar">
              <span
                data-width={`${skils.taliwind}%`}
                style={{ width: `${skils.taliwind}%` }}
              ></span>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faSass} style={{ color: "#ff009d" }} />
            <span className="bar">
              <span
                data-width={`${skils.sass}%`}
                style={{ width: `${skils.sass}%` }}
              ></span>
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faReact} style={{ color: "#2caeff" }} />
            <span className="bar">
              <span
                data-width={`${skils.react}%`}
                style={{ width: `${skils.react}%` }}
              ></span>
            </span>
          </div>
        </div>
        <div className="about-contact">
          <div className="about">
            <h2>About Me</h2>
            <h3>
              I'M: <span>Mahmoud Mkhemar</span>
            </h3>
            <h3>
              <span>Front End Developer</span>
            </h3>
            <h3>
              My Age: <span>21</span>
            </h3>
            <h3>
              Place Of Birth: <span>Elmonofeya</span>
            </h3>
          </div>
          <div className="social">
            <h2>Social Media</h2>
            <div className="icon">
              <h3>Facebook</h3>
              <a href="https://www.facebook.com/profile.php?id=100021987258084&mibexitd=ZbWKwL">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="icon">
              <h3>linkedin</h3>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="icon">
              <h3>instagram</h3>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="icon">
              <h3>whatsapp</h3>
              <a href="https://api.whatsapp.com/send/?phone=201151920359&text&type=phone_number&app_absent=0">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skils;
