import { useEffect, useState } from "react";
import "./Home.css";
import img1 from "./profile/1.jpg";
import img2 from "./profile/2.jpg";
import img3 from "./profile/3.jpg";
import img4 from "./profile/4.jpg";
import img5 from "./profile/5.jpg";
import img6 from "./profile/6.jpg";
import img7 from "./profile/7.jpg";
import img8 from "./profile/8.jpg";
import img9 from "./profile/9.jpg";
import img10 from "./profile/10.jpg";
import img11 from "./profile/11.jpg";
import img12 from "./profile/12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Home() {
  const [writer, setWriter] = useState("");
  const [img, setImg] = useState(img1);
  useEffect(() => {
    const sleep = (ms) => {
      return new Promise((res) => setTimeout(res, ms));
    };
    const sleepTime = 100;
    let currentIndex = 0;
    const text = ["Front End Developer", "UI Developer", "UX Desinger"];
    const writerHandeler = async () => {
      while (true) {
        let wordIndex = text[currentIndex];
        for (let i = 0; i < wordIndex.length; i++) {
          setWriter(wordIndex.substring(0, i + 1));
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);
        for (let i = wordIndex.length; i > 0; i--) {
          setWriter(wordIndex.substring(0, i - 1));
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);
        if (currentIndex === text.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
      }
    };
    writerHandeler();
    let imgIndex = 0;
    let imgbox = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
    ];
    setInterval(() => {
      imgIndex++;
      setImg(imgbox[imgIndex]);
      if (imgIndex === imgbox.length - 1) {
        imgIndex = 0;
      }
    }, 4000);
  }, []);
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <h2>Hi I'm Mahmoud Mkhemar</h2>
          <h3>
            <span className="text-content">{writer}</span>
            <span className="writer">|</span>
          </h3>
          <p>
            My Name Is Mahmoud Mkhemar. I Work As A Front-End Developer. I Have
            Many Skills In The Field Of Web Development. You Can Browse My
            Previous Work
          </p>
        </div>
        <div className="rot-imges">
          <div className="rot"></div>

          <div
            style={{ backgroundImage: `url(${img})` }}
            className="home-imges"
          ></div>
        </div>
        <div className="linkes">
          <div className="btn">
            <a href="#portfolio">Show my project</a>
          </div>
          <a href="https://www.facebook.com/profile.php?id=100021987258084&mibexitd=ZbWKwL">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/mahmoudmkhemarmohammed">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
