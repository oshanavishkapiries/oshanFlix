/* eslint-disable react/prop-types */
import "./WatchSider.css";
import { IoMdStar } from "react-icons/io";

const WatchSider = ({ data }) => {
  return (
    <>
      <div className="watch-sider">
        <div className="watch-backdrop">
          <img src={data[0].backdrop_url} alt="backdrop" loading="lazy" />
          <div className="watch-overlay">
            <div className="watch-overlay-left"></div>
            <div className="watch-overlay-right">
              <div className="watch-overlay-info">
                <h1>{data[0].title}</h1>
                <div className="watch-overlay-info-panel">
                  <span className="flex flex-row items-center gap-[3px]">
                    <IoMdStar />
                    {data[0].rating}
                  </span>
                  <span>{data[0].release_date.slice(0, 4)}</span>
                  <span>{data[0].type}</span>
                </div>
                <div className="watch-overlay-info-genres">
                  {data[0].genre.map((genre, index) => (
                    <span key={index}>{genre}</span>
                  ))}
                </div>
                <div className="mt-2">
                  <p>{data[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchSider;
