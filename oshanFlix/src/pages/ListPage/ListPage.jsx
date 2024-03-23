import { useEffect, useState } from "react";
import { MainCard, Navbar, ListSider } from "../../components";
import axios from "axios";
import Loader from "../../components/Sub/Loader";
import "./style.css";

const ListPage = () => {
  const server_url = import.meta.env.VITE_APP_SERVER_URL;
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(server_url + "/api/v1/").then((res) => setData(res.data));
  }, [server_url]);

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
          <>
            <ListSider data={data} />
            <div className="main-card-container fade-in mt-[-80px]">
              {data.map((item) => (
                <MainCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default ListPage;
