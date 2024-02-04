/* eslint-disable react/prop-types */
import "./style.css";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";


const MainCard = (props) => {
  return (
    <>
      <div className="main-card">
        <Link to={`/watch/${props.item.type}/${props.item.id}`}>
          <div className="card-poster">
            <img src={props.item.poster_url} alt="poster" loading="lazy" />
            <div className="card-poster-overlay">
              <img src="/img/icon.png" alt="play" loading="lazy" />
            </div>
          </div>
        </Link>
        <div className="card-info">
          <h1 className="info-title">{props.item.title}</h1>
          <p className="info-rating"><IoMdStar />{props.item.rating}</p>
        </div>
      </div>
    </>
  );
};

export default MainCard;
