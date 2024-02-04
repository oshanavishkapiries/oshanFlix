import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import "./style.css";

const MainSider = () => {
  return (
    <>
      <div className="main-sider">
        <img
          className="backdrop"
          src="https://image.tmdb.org/t/p/original/u1rDHV98zbwG8NiWErF5yjOLN8T.jpg"
          alt="backdrop"
          loading="lazy"
        />
        <div className="info">
          <div className="details">
            <h1>
              Your Ultimate destination for top qulity Tv Shows , Movies and
              more ...
            </h1>
            <p>
              This service is personal project made for fun and entertainment so
              do not send DMCA restriction and other stupid things .
            </p>
            <Link to="/list">
              <button
                className="py-3 bg-flix-orange mt-4 rounded-md font-semibold 
              text-sm w-full md:w-40 flex flex-row justify-center items-center hover:bg-flix-orange-tint-01"
              >
                Watch Now&nbsp;
                <IoMdArrowDropright />
              </button>
            </Link>
          </div>
          <div className="logo">
            <img
              src="https://image.tmdb.org/t/p/original/nWmG5I47DyMaw1kdNDwEPpvHqyN.png"
              alt="logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSider;
