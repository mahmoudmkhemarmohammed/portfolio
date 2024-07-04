import { useEffect } from "react";
import "./Portfolio.css";
import jsonData from "./db.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function Portfolio() {
  const handlerFilter = () => {
    document
      .querySelectorAll(".portfolio .container .filter ul li")
      .forEach((li) => {
        li.addEventListener("click", function () {
          document
            .querySelectorAll(".portfolio .container .filter ul li")
            .forEach((e) => {
              e.classList.remove("active");
            });
          this.classList.add("active");
          document
            .querySelectorAll(".portfolio .content .container .card")
            .forEach((dis) => dis.classList.remove("active"));
          document
            .querySelectorAll(this.dataset.filter)
            .forEach((act) => act.classList.add("active"));
        });
      });
  };
  useEffect(() => {
    handlerFilter();
    return () => {
      window.scroll({ top: 0 });
    };
  }, []);
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <div className="special-headinges">
          <h2>Portfolio</h2>
        </div>
        <div className="filter">
          <ul>
            <li className="active" data-filter=".all">
              All
            </li>
            <li data-filter=".html-Css">
              <FontAwesomeIcon icon={faHtml5} style={{ color: "orangered" }} />
              <FontAwesomeIcon icon={faCss3} style={{ color: "#0066ff" }} />
            </li>
            <li data-filter=".html-Css-js">
              <FontAwesomeIcon icon={faJs} style={{ color: "yellow" }} />
            </li>
            <li data-filter=".html-Css-js-api">
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ color: "orangered" }}
              />
            </li>
            <li data-filter=".react">
              <FontAwesomeIcon icon={faReact} style={{ color: "#2caeff" }} />
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="container">
            {jsonData.map((card) => (
              <div className={`all card ${card.language} active`} key={card.id}>
                <div className="img">
                  <img src={require(`${card.img}`)} alt={card.title} />
                </div>
                <div className="text">
                  <h3>{card.title}</h3>
                  <div className="btns">
                    <a href={card.link}>Open</a>
                    <Link to={`/details/${card.id}`}>Detalis</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
