/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Sub/Loader";

const Player = () => {
  const server_url = import.meta.env.VITE_APP_SERVER_URL;
  const { type, id, season, episode } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(server_url + `/api/v1/${type}/${id}`)
      .then((res) => setData(res.data));
  }, [server_url]);

  let p = {};
  if (data.length > 0) {
    p = data[0].seasons[season].episodes[episode];
  }

  return (
    <>
      <main>
        {data.length == 0 && (
          <div className="w-full min-h-screen flex items-center justify-center">
            <Loader />
          </div>
        )}
        {data.length > 0 && (
          <iframe
            src={`/directplayer.html?sd=${p.sd_video_url}&hd=${
              p.hd_video_url
            }&t=${data[0].title}-${`Season ` + (parseInt(season) + 1)}&img=${
              p.images
            }&epn=${p.episodeNumber}&sb=${p.sub_url}`}
            className="w-full min-h-screen flex items-center justify-center"
          ></iframe>
        )}
      </main>
    </>
  );
};

export default Player;
