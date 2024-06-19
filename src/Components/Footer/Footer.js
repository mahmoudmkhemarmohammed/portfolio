import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2>
          Made With Love By <span>Mahmoud Mkehmar</span>
        </h2>
        <ul>
          <li>
            <a href="https://api.whatsapp.com/send/?phone=201151920359&text&type=phone_number&app_absent=0">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100021987258084&mibexitd=ZbWKwL">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/mahmoudmkhemarmohammed">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;