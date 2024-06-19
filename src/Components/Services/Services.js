import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.css";
import { faPalette, faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { faReact, faSketch } from "@fortawesome/free-brands-svg-icons";
function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="special-headinges">
          <h2>Services</h2>
        </div>
        <div className="content">
          <div className="col">
            <FontAwesomeIcon icon={faPenRuler} />
            <h2>Web Development</h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Doloremque, Beatae?
            </p>
            <a href="#portfolio">my project</a>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faPalette} />
            <h2>UI Developer</h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Doloremque, Beatae?
            </p>
            <a href="#portfolio">my project</a>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faSketch} />
            <h2>UX Desinger</h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Doloremque, Beatae?
            </p>
            <a href="#portfolio">my project</a>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faReact} />
            <h2>React Developer</h2>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
              Doloremque, Beatae?
            </p>
            <a href="#portfolio">my project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
