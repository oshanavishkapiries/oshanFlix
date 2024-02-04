import "./style.css";
import { EpisodeCard, Navbar } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import axios from "axios";
import Loader from "../../components/Sub/Loader";
import HorizontalSider from "../../components/Sub/EpisodeHorizontal";
import WatchSider from "../../components/Sub/WatchSider/WatchSider";

const WatchPage = () => {
  const { id, type } = useParams();
  const server_url = import.meta.env.VITE_APP_SERVER_URL;
  const [data, setData] = useState([]);
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(server_url + `/api/v1/${type}/${id}`)
      .then((res) => setData(res.data));
  }, [server_url, id, type]);

  return (
    <>
      <Navbar />
      <main>
        {data.length == 0 && (
          <div className="w-full min-h-screen flex items-center justify-center">
            <Loader />
          </div>
        )}
        {data.length > 0 && (
          <div className="watch-main">
            <WatchSider data={data} />
            <div className="episode-container">
              <div className="watch-episodes">
                <div className="episode-topic">
                  <h1 className="text-3xl font-rocg my-2 flex items-center">
                    Episodes
                    <span className="text-flix-orange">
                      <MdOutlineDoubleArrow />
                    </span>
                  </h1>
                  <div className="flex items-center">
                    <select
                      id="seasonDropdown"
                      onChange={(e) =>
                        setSelectedSeasonIndex(parseInt(e.target.value, 10))
                      }
                      value={selectedSeasonIndex}
                    >
                      {data[0].seasons.map((season, index) => (
                        <option key={index} value={index}>
                          {`Season ${index + 1}`}
                        </option>
                      ))}
                    </select>
                    <span className="text-flix-orange">
                      <TiArrowSortedDown />
                    </span>
                  </div>
                </div>
                <HorizontalSider>
                  {data[0].seasons[selectedSeasonIndex].episodes.map(
                    (episode, index) => (
                      <EpisodeCard
                        key={index}
                        data={{ ...episode, selectedSeasonIndex }}
                        type={data[0].type}
                        id={data[0].id}
                      />
                    )
                  )}
                </HorizontalSider>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default WatchPage;
