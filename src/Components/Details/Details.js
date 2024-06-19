import { useParams } from "react-router-dom";
import jsonData from "../Portfolio/db.json";
import "./Details.css";
function Details() {
  const params = useParams();
  return (
    <div className="details">
      <div className="container">
        <div className="video">
          <video
            controls
            src={require(`${jsonData[params.projectId].video}`)}
          ></video>
        </div>
        <div className="text">
          <h2>{jsonData[params.projectId].title}</h2>
          <h3>
            Language : <span>{jsonData[params.projectId].language}</span>
          </h3>
          <p>
            Description : <span>{jsonData[params.projectId].description}</span>
          </p>
          <a href={jsonData[params.projectId].link}>Open</a>
        </div>
        <div className="description">
          <p>
            Description : <span>{jsonData[params.projectId].description}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Details;
